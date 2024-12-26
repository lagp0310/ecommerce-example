import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import type { Carts as CartResponse } from "@/gql/graphql";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { allLineItems } from "@/gql/queries/line-item/queries";
import { queryGraphql } from "@/lib/server-query";
import type { LineItemWithProduct } from "@/types/types";
import React from "react";
import { CartTableWrapper } from "@/components/table/cart-table-wrapper";

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

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex flex-1 flex-col w-full max-w-7xl gap-y-8">
          <h5 className="font-semibold text-heading-5 text-gray-900 text-left">
            My Shopping Cart
          </h5>
          <div className="flex flex-1 flex-col lg:flex-row gap-6">
            <div className="flex flex-1 w-full basis-2/3">
              <CartTableWrapper defaultData={lineItems ?? []} />
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
