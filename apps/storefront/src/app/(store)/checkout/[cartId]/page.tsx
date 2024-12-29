import {
  BasicCartProduct,
  type Props as CartProductProps,
} from "@/components/ui/cart/basic-cart-product";
import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import { SectionTitle } from "@/components/ui/common/section-title";
import type { Carts as CartResponse } from "@/gql/graphql";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { allLineItems } from "@/gql/queries/line-item/queries";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { queryGraphql } from "@/lib/server-query";
import { cn, getCartSummaryItems } from "@/lib/utils";
import type {
  BaseAccordionItem,
  CartSummaryField,
  GetCartSummaryResponse,
  LineItemWithProduct,
  PaymentMethodsResponse,
} from "@/types/types";
import React from "react";
import { CheckoutForm } from "@/components/ui/checkout/checkout-form";
import { AdditionalInfoForm } from "@/components/ui/checkout/additional-info-form";
import { Button } from "@/components/ui/common/button";
import {
  PaymentMethodForm,
  type Props as PaymentMethodFormProps,
} from "@/components/ui/checkout/payment-method-form";
import { allPaymentMethods } from "@/gql/queries/payment-method/queries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/common/accordion";

export default async function Checkout({
  params,
}: {
  params: Promise<{ cartId: string }>;
}) {
  const { cartId } = await params;

  // FIXME: The user should have permissions to get this cart.
  const [cart, lineItems, storePaymentMethods, cartSummary] = await Promise.all(
    [
      queryGraphql<CartResponse>(
        "cartsCollection",
        getCartQuery,
        {
          filter: { id: { eq: cartId } },
        },
        "no-cache"
      ),
      queryGraphql<LineItemWithProduct[]>(
        "lineItemsCollection",
        allLineItems,
        {
          filter: { cart: { eq: cartId } },
        },
        "no-cache"
      ),
      queryGraphql<PaymentMethodsResponse[]>(
        "paymentMethodsCollection",
        allPaymentMethods,
        {
          filter: {
            store: { eq: process.env.NEXT_PUBLIC_STORE_ID },
            is_active: { eq: true },
          },
        },
        "no-cache"
      ),
      callDatabaseFunction<GetCartSummaryResponse>("get_cart_summary_data", {
        cart_id: cartId,
      }),
    ]
  );

  const cartTotalSummary: CartSummaryField[] = getCartSummaryItems(
    cartSummary?.subtotal_result,
    cartSummary?.shipping_result,
    cartSummary?.taxes_result,
    cartSummary?.total_result
  );

  const hasLineItems = Array.isArray(lineItems) && lineItems.length > 0;

  const paymentMethodFormProps: PaymentMethodFormProps = {
    paymentMethods: storePaymentMethods ?? [],
  };

  const checkoutForms: BaseAccordionItem[] = [
    {
      name: "Billing Information",
      children: <CheckoutForm />,
      forceMount: true,
      // styles: {
      //   "--radix-collapsible-content-height": "401px",
      // },
    },
    {
      name: "Payment Information",
      children: <PaymentMethodForm {...paymentMethodFormProps} />,
      forceMount: true,
      // styles: {
      //   "--radix-collapsible-content-height": "37px",
      // },
    },
    {
      name: "Additional Information",
      children: <AdditionalInfoForm />,
      forceMount: true,
      // styles: {
      //   "--radix-collapsible-content-height": "145px",
      // },
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex w-full max-w-7xl flex-1 flex-col gap-y-8">
          <h5 className="text-left text-heading-5 font-semibold text-gray-900">
            Checkout
          </h5>
          <div className="flex flex-1 flex-col gap-6 lg:flex-row">
            <div className="w-full flex flex-1 basis-2/3 flex-col">
              {checkoutForms.map(
                (
                  { children, name, initiallyCollapsed, forceMount, styles },
                  index
                ) => (
                  <React.Fragment key={index}>
                    {/* TODO: Better option: Dynamic height for accordion containers. Fix dynamic height in filters accordions too. */}
                    <Accordion
                      key={index}
                      type="single"
                      collapsible
                      defaultValue={!initiallyCollapsed ? name : undefined}
                      className="group/checkout-forms border border-gray-100 rounded-ten p-6 my-4 first:mt-0 last:mb-0"
                    >
                      <AccordionItem
                        value={name}
                        className="group/accordion-item h-auto"
                      >
                        <AccordionTrigger
                          className="p-0"
                          actionClassName="hidden"
                        >
                          <h6 className="ml-1 text-left text-body-xxl font-semibold text-gray-900 align-middle">
                            {name}
                          </h6>
                        </AccordionTrigger>
                        <AccordionContent
                          forceMount={forceMount}
                          className={cn({
                            "mx-1 mt-5 group-data-[state=closed]/accordion-item:hidden transition-all group-data-[state=closed]/accordion-item:animate-accordion-down":
                              forceMount,
                          })}
                          style={forceMount ? styles : undefined}
                        >
                          {children}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </React.Fragment>
                )
              )}
            </div>
            <CartSummary
              className="flex w-full flex-1 basis-1/3"
              sectionTitle={
                <SectionTitle className="text-body-xl font-medium text-gray-900">
                  Order Summary
                </SectionTitle>
              }
            >
              {hasLineItems ? (
                <div>
                  {lineItems.map(({ products: product, id, ...lineItem }) => {
                    if (!product) {
                      return null;
                    }

                    const cartProductProps: CartProductProps = {
                      lineItem: {
                        id,
                        ...lineItem,
                      },
                      product,
                    };

                    return (
                      <div
                        key={id}
                        className="group/checkout-product flex flex-col"
                      >
                        <BasicCartProduct {...cartProductProps} />
                        <div className="mt-1 w-full border-t border-gray-100/50 group-last/checkout-product:hidden"></div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <span className="text-body-medium font-normal text-gray-900">
                  Your cart is currently empty.
                </span>
              )}
              <div className="flex flex-1 flex-col gap-y-2">
                {cartTotalSummary.map(
                  ({ currencySymbol, name, label, value }) => {
                    const parsedValue =
                      typeof value === "number"
                        ? value.toFixed(2).toString()
                        : value;
                    const valuePrefix =
                      typeof currencySymbol === "string"
                        ? currencySymbol
                        : null;

                    return (
                      <CartSummaryItem
                        key={name}
                        label={label}
                        value={`${valuePrefix ?? ""}${parsedValue}`}
                      />
                    );
                  }
                )}
              </div>
              <Button className="mt-3 py-3 flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white border border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                Place Order
              </Button>
            </CartSummary>
          </div>
        </div>
      </div>
    </div>
  );
}
