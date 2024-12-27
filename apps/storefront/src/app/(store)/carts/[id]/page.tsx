import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import type { Carts as CartResponse } from "@/gql/graphql";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { allLineItems } from "@/gql/queries/line-item/queries";
import { queryGraphql } from "@/lib/server-query";
import type { LineItemWithProduct } from "@/types/types";
import React from "react";
import { CartTableWrapper } from "@/components/table/cart-table-wrapper";
import { BasicCartProduct } from "@/components/ui/cart/basic-cart-product";
import { DeleteProductButton } from "@/components/ui/cart/delete-product-button";
import { AddToCartWrapper } from "@/components/ui/product/add-to-cart-wrapper";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default async function Cart({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: cartId } = await params;
  // FIXME: The user should have permissions to get this cart.
  const [cart, lineItems] = await Promise.all([
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
        cache: "no-store",
      },
      "no-cache"
    ),
  ]);

  // TODO: Get summarized data from backend.
  // TODO: Type for this.
  const cartTotalSummary = [
    { name: "subtotal", label: "Subtotal", currencySymbol: "$", value: 84.0 },
    { name: "shipping", label: "Shipping", currencySymbol: "$", value: 0.0 },
    { name: "taxes", label: "Taxes", currencySymbol: "$", value: 6.0 },
    { name: "total", label: "Total", currencySymbol: "$", value: 90.0 },
  ];

  const hasLineItems = Array.isArray(lineItems) && lineItems.length > 0;
  const tableData = lineItems ?? [];

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex flex-1 flex-col w-full max-w-7xl gap-y-8">
          <h5 className="font-semibold text-heading-5 text-gray-900 text-left">
            My Shopping Cart
          </h5>
          <div className="flex flex-1 flex-col lg:flex-row gap-6">
            <div className="flex md:hidden flex-1 flex-col gap-y-2 border border-gray-100 rounded-ten p-6">
              {hasLineItems ? (
                <React.Fragment>
                  {lineItems.map(({ products, id, ...lineItem }) => (
                    <React.Fragment key={id}>
                      {!!products ? (
                        <div className="group/cart-product flex flex-col">
                          <BasicCartProduct
                            lineItem={{
                              id,
                              ...lineItem,
                            }}
                            product={products}
                            actions={
                              <React.Fragment>
                                <AddToCartWrapper
                                  counterWrapperClassName="flex"
                                  product={products}
                                  className="group flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:border-none disabled:opacity-50 disabled:transition-none disabled:hover:bg-primary disabled:hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                                  minusClassName="!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                                  moreClassName="!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
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
                            }
                          />
                          <div className="mt-1 w-full border-t border-gray-100/50 group-last/cart-product:hidden"></div>
                        </div>
                      ) : null}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ) : (
                <span className="text-body-medium font-normal text-gray-900">
                  Your cart is currently empty.
                </span>
              )}
            </div>
            <div className="hidden md:flex flex-1 flex-col w-full basis-2/3">
              <CartTableWrapper tableData={tableData} />
            </div>
            <CartSummary className="flex flex-1 basis-1/3 w-full">
              {cartTotalSummary.map(
                ({ currencySymbol, name, label, value }) => {
                  const parsedValue =
                    typeof value === "number"
                      ? value.toFixed(2).toString()
                      : value;
                  const valuePrefix =
                    typeof currencySymbol === "string" ? currencySymbol : null;

                  return (
                    <CartSummaryItem
                      key={name}
                      label={label}
                      value={`${valuePrefix ?? ""}${parsedValue}`}
                    />
                  );
                }
              )}
            </CartSummary>
          </div>
        </div>
      </div>
    </div>
  );
}
