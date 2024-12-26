"use client";

import React from "react";
import {
  Table,
  Props as AllTableProps,
  type TableHeadProps,
  type TableProps,
} from "@/components/table/table";
import { createColumnHelper } from "@tanstack/react-table";
import type { CartTableColumns, LineItemWithProduct } from "@/types/types";
import Image from "next/image";
import { defaultCurrencySymbol } from "@/constants/constants";
import { AddToCartWrapper } from "../ui/product/add-to-cart-wrapper";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { CartProductActions } from "../ui/cart/cart-product-actions";
import { DeleteProductButton } from "../ui/cart/delete-product-button";

type Props = { defaultData: LineItemWithProduct[] };

// TODO: Empty records table.
export function CartTableWrapper({ ...props }: Props) {
  const columnHelper = React.useMemo(
    () => createColumnHelper<CartTableColumns>(),
    []
  );
  const columns = React.useMemo(
    () => [
      columnHelper.accessor("product", {
        header: () => (
          <span className="text-left uppercase font-medium text-body-small text-gray-500 flex flex-1">
            Product
          </span>
        ),
        cell: ({ row }) => {
          const { name, imageUrl } = row.original.products;

          return (
            <div className="flex flex-1 flex-row gap-3 items-center">
              {typeof imageUrl === "string" ? (
                <Image
                  src={imageUrl}
                  alt={name}
                  width={100}
                  height={100}
                  className="h-auto w-20 max-w-20 rounded-ten"
                />
              ) : null}
              <span className="font-normal text-body-medium text-gray-900">
                {name}
              </span>
            </div>
          );
        },
      }),
      columnHelper.accessor("price", {
        header: () => (
          <span className="text-left uppercase font-medium text-body-small text-gray-500 flex-1">
            Price
          </span>
        ),
        cell: ({ row }) => {
          const { discountedPrice, price, currencies } = row.original.products;
          const finalPrice = discountedPrice ?? price;
          const currencyPrefix = currencies?.symbol ?? defaultCurrencySymbol;
          const prefixedPrice = `${currencyPrefix}${finalPrice.toFixed(2)}`;

          return (
            <span className="font-normal text-body-medium text-gray-900">
              {prefixedPrice}
            </span>
          );
        },
      }),
      columnHelper.accessor("quantity", {
        header: () => (
          <span className="text-left uppercase font-medium text-body-small text-gray-500 flex flex-1">
            Quantity
          </span>
        ),
        cell: ({ row }) => {
          const product = row.original.products;

          return (
            <AddToCartWrapper
              product={product}
              className="group flex size-8 flex-row items-center justify-center rounded-full bg-gray-50 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:transition-none disabled:hover:bg-gray-50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              counterWrapperClassName="gap-2 w-fit"
              minusClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              moreClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            >
              <ShoppingBagIcon className="size-4 text-gray-900 group-hover:text-white group-disabled:group-hover:text-gray-900" />
            </AddToCartWrapper>
          );
        },
      }),
      // FIXME: This does not update on quantity updates. We have to do a refresh.
      columnHelper.accessor("subtotal", {
        header: () => (
          <span className="text-left uppercase font-medium text-body-small text-gray-500 flex-1">
            Subtotal
          </span>
        ),
        cell: ({ row }) => {
          const quantity = row.original.quantity;
          const { discountedPrice, price, currencies } = row.original.products;
          const finalPrice = discountedPrice ?? price;
          const productSubtotal = (finalPrice * parseInt(quantity)).toFixed(2);
          const currencyPrefix = currencies?.symbol ?? defaultCurrencySymbol;
          const prefixedSubtotal = `${currencyPrefix}${productSubtotal}`;

          return (
            <span className="font-normal text-body-medium text-gray-900">
              {prefixedSubtotal}
            </span>
          );
        },
      }),
      columnHelper.accessor("actions", {
        header: () => null,
        cell: ({ row }) => {
          const lineItemId = row.original.id;

          return (
            <CartProductActions className="flex flex-row gap-x-1">
              <DeleteProductButton
                className="group -mr-2 rounded-full border-none p-2 hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                lineItemId={lineItemId}
              />
            </CartProductActions>
          );
        },
      }),
    ],
    [columnHelper]
  );

  const tableProps: TableProps = {
    className:
      "rounded-ten border border-gray-100 border-separate border-spacing-6 w-full",
  };
  const tableHeadProps: TableHeadProps = {};
  const allTableProps: AllTableProps = {
    columns,
    tableProps,
    tableHeadProps,
    ...props,
  };

  return <Table {...allTableProps} />;
}
