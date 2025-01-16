import {
  BasicCartProduct,
  type Props as CartProductProps,
} from "@/components/ui/cart/basic-cart-product";
import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import { SectionTitle } from "@/components/ui/common/section-title";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { queryGraphql } from "@/lib/server-query";
import { cn, getCartSummaryItems, updateCartAddress } from "@/lib/utils";
import type {
  AddressTypesResponse,
  BaseAccordionItem,
  CartAddressResponse,
  CartResponse,
  CartSummaryField,
  CustomerResponse,
  FormCustomerAddressResponse,
  GetCartSummaryResponse,
  GetParsedOptionsResponse,
  PaymentMethodsResponse,
} from "@/types/types";
import React from "react";
import {
  CheckoutForm,
  type Props as CheckoutFormProps,
} from "@/components/ui/checkout/checkout-form";
import { AdditionalInfoForm } from "@/components/ui/checkout/additional-info-form";
import {
  PaymentMethodSelector,
  type Props as PaymentMethodSelectorProps,
} from "@/components/ui/checkout/payment-method-selector";
import { allPaymentMethods } from "@/gql/queries/payment-method/queries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/common/accordion";
import { availableStateIds } from "@/constants/constants";
import { allCustomerAddressTypes } from "@/gql/queries/customer-address-type/queries";
import { PlaceOrderButtonWrapper } from "@/components/ui/checkout/place-order-button-wrapper";
import { CashFormContextProvider } from "@/context/cash-form-context";
import { AdditionalInfoFormContextProvider } from "@/context/additional-info-form-context";
import {
  BillingAddressFormContextProvider,
  type Props as BillingAddressContextProps,
} from "@/context/billing-address-form-context";
import {
  ShippingAddressFormContextProvider,
  type Props as ShippingAddressContextProps,
} from "@/context/shipping-address-form-context";
import { DebitCardFormContextProvider } from "@/context/debit-card-form-context";
import { CreditCardFormContextProvider } from "@/context/credit-card-form-context";
import { WarnOnModifiedFormContextProvider } from "@/context/warn-on-modified-form-context";
import { getCustomer as getCustomerQuery } from "@/gql/queries/customer/queries";
import { getFormCustomerAddress } from "@/gql/queries/customer-address/queries";
import { AddressType } from "@/types/form/types";
import { allCartAddresses } from "@/gql/queries/cart-address/queries";

export default async function Checkout({
  params,
  searchParams,
}: {
  params: Promise<{ cartId: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { cartId } = await params;
  const {
    billingCountryId,
    shippingCountryId,
    billingAddressId,
    shippingAddressId,
  } = await searchParams;

  // FIXME: The user should have permissions to get this cart.
  // FIXME: The user should have permissions to get customer/customer addresses objects.
  // FIXME: Try to simplify this. Countries, Country States and Addresses are fetched twice.
  // Think of a way to avoid filtering or modifying objects or arrays in the frontend and get
  // the same output here.
  const [
    cart,
    storePaymentMethods,
    cartSummary,
    billingCountries,
    shippingCountries,
    billingCountryStates,
    shippingCountryStates,
    customerAddressTypes,
    customer,
    billingCustomerAddresses,
    shippingCustomerAddresses,
    billingAddress,
    shippingAddress,
    cartBillingAddress,
    cartShippingAddress,
  ] = await Promise.all([
    queryGraphql<CartResponse[]>(
      "cartsCollection",
      getCartQuery,
      {
        filter: { id: { eq: cartId } },
        lineItemsOrderBy: { created_at: "AscNullsLast" },
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
    callDatabaseFunction<GetParsedOptionsResponse>(
      "get_parsed_country_options"
    ),
    callDatabaseFunction<GetParsedOptionsResponse>(
      "get_parsed_country_options"
    ),
    !!billingCountryId
      ? callDatabaseFunction<GetParsedOptionsResponse>(
          "get_parsed_country_state_options_with_states",
          { country_id: billingCountryId, state_ids: availableStateIds }
        )
      : [],
    !!shippingCountryId
      ? callDatabaseFunction<GetParsedOptionsResponse>(
          "get_parsed_country_state_options_with_states",
          { country_id: shippingCountryId, state_ids: availableStateIds }
        )
      : [],
    queryGraphql<AddressTypesResponse[]>(
      "customerAddressTypesCollection",
      allCustomerAddressTypes,
      {},
      "no-cache"
    ),
    queryGraphql<CustomerResponse[]>(
      "customersCollection",
      getCustomerQuery,
      { filter: { id: { eq: "cc1293d9-9090-4cd5-b8bd-804777d7302a" } } },
      "no-cache"
    ),
    // FIXME: Dynamic ID for customer after login/sign up is ready.
    callDatabaseFunction<GetParsedOptionsResponse>(
      "get_parsed_customer_addresses_options",
      {
        customer_id: "cc1293d9-9090-4cd5-b8bd-804777d7302a",
        key_name_prefix: "billing",
      }
    ),
    // FIXME: Dynamic ID for customer after login/sign up is ready.
    callDatabaseFunction<GetParsedOptionsResponse>(
      "get_parsed_customer_addresses_options",
      {
        customer_id: "cc1293d9-9090-4cd5-b8bd-804777d7302a",
        key_name_prefix: "shipping",
      }
    ),
    !!billingAddressId
      ? queryGraphql<FormCustomerAddressResponse[]>(
          "customerAddressesCollection",
          getFormCustomerAddress,
          { filter: { id: { eq: billingAddressId } } },
          "no-cache"
        )
      : null,
    !!shippingAddressId
      ? queryGraphql<FormCustomerAddressResponse[]>(
          "customerAddressesCollection",
          getFormCustomerAddress,
          { filter: { id: { eq: shippingAddressId } } },
          "no-cache"
        )
      : null,
    !!billingAddressId
      ? queryGraphql<CartAddressResponse[]>(
          "cartAddressCollection",
          allCartAddresses,
          {
            filter: { cart: { eq: cartId }, address: { eq: billingAddressId } },
          },
          "no-cache"
        )
      : null,
    !!shippingAddressId
      ? queryGraphql<CartAddressResponse[]>(
          "cartAddressCollection",
          allCartAddresses,
          {
            filter: {
              cart: { eq: cartId },
              address: { eq: shippingAddressId },
            },
          },
          "no-cache"
        )
      : null,
  ]);

  if (billingAddress) {
    const billingAddressTypeId = customerAddressTypes?.find(
      ({ type }) => type.toLowerCase() === AddressType.BILLING.toLowerCase()
    )?.id;
    if (!!billingAddressId && !!billingAddressTypeId) {
      await updateCartAddress(
        cartId,
        billingAddressId,
        billingAddressTypeId,
        cartBillingAddress
      );
    }
  }
  if (shippingAddress) {
    const shippingAddressTypeId = customerAddressTypes?.find(
      ({ type }) => type.toLowerCase() === AddressType.SHIPPING.toLowerCase()
    )?.id;
    if (!!shippingAddressId && !!shippingAddressTypeId) {
      await updateCartAddress(
        cartId,
        shippingAddressId,
        shippingAddressTypeId,
        cartShippingAddress
      );
    }
  }

  const lineItems = cart
    ?.at(0)
    ?.lineItemsCollection?.edges?.map(({ node }) => node);
  const hasLineItems = Array.isArray(lineItems) && lineItems.length > 0;
  const cartTotalSummary: CartSummaryField[] = getCartSummaryItems(
    cartSummary?.subtotal_result,
    cartSummary?.shipping_result,
    cartSummary?.taxes_result,
    cartSummary?.total_result
  );

  const paymentMethodFormProps: PaymentMethodSelectorProps = {
    paymentMethods: storePaymentMethods ?? [],
  };
  const checkoutFormProps: CheckoutFormProps = {
    currentBillingAddressId: billingAddressId,
    billingCustomerAddresses: billingCustomerAddresses?.map(
      ({ additional_search_params, ...rest }) => ({
        additionalSearchParams: additional_search_params,
        ...rest,
      })
    ),
    currentShippingAddressId: shippingAddressId,
    shippingCustomerAddresses: shippingCustomerAddresses?.map(
      ({ additional_search_params, ...rest }) => ({
        additionalSearchParams: additional_search_params,
        ...rest,
      })
    ),
    billingCountries: billingCountries ?? [],
    shippingCountries: shippingCountries ?? [],
    billingCountryStates: billingCountryStates ?? [],
    shippingCountryStates: shippingCountryStates ?? [],
  };
  const checkoutForms: BaseAccordionItem[] = [
    {
      name: "Billing Information",
      children: <CheckoutForm {...checkoutFormProps} />,
      forceMount: true,
      // styles: {
      //   "--radix-collapsible-content-height": "401px",
      // },
    },
    {
      name: "Payment Information",
      children: <PaymentMethodSelector {...paymentMethodFormProps} />,
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

  const billingAddressContextProps: Omit<
    BillingAddressContextProps,
    "children"
  > = {
    addressTypeId:
      customerAddressTypes?.find(
        ({ type }) => type.toLowerCase() === AddressType.BILLING.toLowerCase()
      )?.id ?? "",
    currentValues: !!billingAddressId ? billingAddress?.at(0) : undefined,
  };
  const shippingAddressContextProps: Omit<
    ShippingAddressContextProps,
    "children"
  > = {
    addressTypeId:
      customerAddressTypes?.find(
        ({ type }) => type.toLowerCase() === AddressType.SHIPPING.toLowerCase()
      )?.id ?? "",
    currentValues: !!shippingAddressId ? shippingAddress?.at(0) : undefined,
  };

  return (
    <BillingAddressFormContextProvider {...billingAddressContextProps}>
      <ShippingAddressFormContextProvider {...shippingAddressContextProps}>
        <CashFormContextProvider>
          <DebitCardFormContextProvider>
            <CreditCardFormContextProvider>
              <AdditionalInfoFormContextProvider>
                <WarnOnModifiedFormContextProvider>
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
                                {
                                  children,
                                  name,
                                  initiallyCollapsed,
                                  forceMount,
                                  styles,
                                },
                                index
                              ) => (
                                <React.Fragment key={index}>
                                  {/* TODO: Better option: Dynamic height for accordion containers. Fix dynamic height in filters accordions too. */}
                                  <Accordion
                                    key={index}
                                    type="single"
                                    collapsible
                                    defaultValue={
                                      !initiallyCollapsed ? name : undefined
                                    }
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
                                {lineItems.map(
                                  ({ products: product, id, ...lineItem }) => {
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
                                        <BasicCartProduct
                                          {...cartProductProps}
                                        />
                                        <div className="mt-1 w-full border-t border-gray-100/50 group-last/checkout-product:hidden"></div>
                                      </div>
                                    );
                                  }
                                )}
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
                            <PlaceOrderButtonWrapper className="mt-3 py-3 flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white border border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                              Place Order
                            </PlaceOrderButtonWrapper>
                          </CartSummary>
                        </div>
                      </div>
                    </div>
                  </div>
                </WarnOnModifiedFormContextProvider>
              </AdditionalInfoFormContextProvider>
            </CreditCardFormContextProvider>
          </DebitCardFormContextProvider>
        </CashFormContextProvider>
      </ShippingAddressFormContextProvider>
    </BillingAddressFormContextProvider>
  );
}
