import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { queryGraphql } from "@/lib/server-query";
import type {
  CartResponse,
  CartSummaryField,
  GetCartSummaryResponse,
} from "@/types/types";
import React from "react";
import { CartTableWrapper } from "@/components/table/cart-table-wrapper";
import {
  BasicCartProduct,
  type Props as CartProductProps,
} from "@/components/ui/cart/basic-cart-product";
import { DeleteProductButton } from "@/components/ui/cart/delete-product-button";
import {
  AddToCartWrapper,
  type Props as AddToCartWrapperProps,
} from "@/components/ui/product/add-to-cart-wrapper";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { getCartSummaryItems } from "@/lib/utils";
import Link from "next/link";
import isUUID from "validator/es/lib/isUUID";

export default async function Cart({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: cartId } = await params;

  // FIXME: The user should have permissions to get this cart.
  const [cart, cartSummary] = await Promise.all([
    queryGraphql<CartResponse[]>(
      "cartsCollection",
      getCartQuery,
      {
        filter: { id: { eq: cartId } },
      },
      "no-cache"
    ),
    callDatabaseFunction<GetCartSummaryResponse>("get_cart_summary_data", {
      cart_id: cartId,
    }),
  ]);
  const lineItems = cart
    ?.at(0)
    ?.lineItemsCollection?.edges?.map(({ node }) => node);
  const cartTotalSummary: CartSummaryField[] = getCartSummaryItems(
    cartSummary?.subtotal_result,
    cartSummary?.shipping_result,
    cartSummary?.taxes_result,
    cartSummary?.total_result
  );

  const hasLineItems = Array.isArray(lineItems) && lineItems.length > 0;
  const tableData = lineItems ?? [];

  const addToCartWrapperProps: Partial<AddToCartWrapperProps> = {
    counterWrapperClassName: "flex",
    className:
      "group flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:border-none disabled:opacity-50 disabled:transition-none disabled:hover:bg-primary disabled:hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    minusClassName:
      "!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    moreClassName:
      "!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    hideAddToCart: true,
  };

  const isCartIdValid = typeof cartId === "string" && isUUID(cartId);

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex w-full max-w-7xl flex-1 flex-col gap-y-8">
          <h5 className="text-left text-heading-5 font-semibold text-gray-900">
            My Shopping Cart
          </h5>
          <div className="flex flex-1 flex-col gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col gap-y-2 rounded-ten border border-gray-100 p-6 md:hidden">
              {hasLineItems ? (
                <React.Fragment>
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
                      actions: (
                        <React.Fragment>
                          <AddToCartWrapper
                            {...addToCartWrapperProps}
                            product={product}
                          >
                            Add to Cart
                            <ShoppingBagIcon className="size-5 group-hover:text-primary group-disabled:text-white" />
                          </AddToCartWrapper>
                          <DeleteProductButton
                            className="group -mr-2 rounded-full border-none p-2 hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                            lineItemId={id}
                            refreshAfterDelete
                          />
                        </React.Fragment>
                      ),
                    };

                    return (
                      <div
                        key={id}
                        className="group/cart-product flex flex-col"
                      >
                        <BasicCartProduct {...cartProductProps} />
                        <div className="mt-1 w-full border-t border-gray-100/50 group-last/cart-product:hidden"></div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ) : (
                <span className="text-body-medium font-normal text-gray-900">
                  Your cart is currently empty.
                </span>
              )}
            </div>
            <div className="hidden w-full flex-1 basis-2/3 flex-col md:flex">
              <CartTableWrapper tableData={tableData} />
            </div>
            <CartSummary className="flex w-full flex-1 basis-1/3">
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
              {isCartIdValid ? (
                <Link
                  href={`/checkout/${cartId}`}
                  className="mt-3 py-3 flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white border border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                  aria-disabled={!hasLineItems}
                >
                  Proceed to Checkout
                </Link>
              ) : null}
            </CartSummary>
          </div>
        </div>
      </div>
    </div>
  );
}
