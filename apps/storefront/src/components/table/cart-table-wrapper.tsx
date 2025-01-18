"use client";

import React from "react";
import {
  Table,
  type Props as AllTableProps,
  type TableProps,
} from "@/components/table/table";
import { type ColumnDef, createColumnHelper } from "@tanstack/react-table";
import type { CartTableColumns, LineItemWithProduct } from "@/types/types";
import Image from "next/image";
import { defaultCurrencySymbol } from "@/constants/constants";
import {
  AddToCartWrapper,
  type Props as AddToCartWrapperProps,
} from "@/components/ui/product/add-to-cart-wrapper";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { CartProductActions } from "@/components/ui/cart/cart-product-actions";
import { DeleteProductButton } from "@/components/ui/cart/delete-product-button";
import Link from "next/link";
import isURL from "validator/es/lib/isURL";
import { useCart } from "@/context/cart-context";

type Props = { tableData: LineItemWithProduct[] };

export function CartTableWrapper({ ...props }: Props) {
  const { getCartLineItemWeight } = useCart();

  const columnHelper = React.useMemo(
    () => createColumnHelper<CartTableColumns>(),
    []
  );
  const columns = React.useMemo(
    () => [
      columnHelper.accessor("product", {
        header: () => (
          <span className="flex flex-1 text-left text-body-small font-medium uppercase text-gray-500">
            Product
          </span>
        ),
        cell: ({ row }) => {
          const { name, imageUrl, slug } = row.original.products;
          const hasSlug = typeof slug === "string" && slug.length > 0;
          const productUrl = `/products/${slug}`;
          const hasValidUrl =
            hasSlug &&
            isURL(productUrl, { require_host: false, require_protocol: false });
          const productComponent = (
            <React.Fragment>
              {typeof imageUrl === "string" ? (
                <Image
                  src={imageUrl}
                  alt={name}
                  width={100}
                  height={100}
                  className="h-auto w-20 max-w-20 rounded-ten"
                />
              ) : null}
              <span className="text-body-medium font-normal text-gray-900">
                {name}
              </span>
            </React.Fragment>
          );

          return (
            <React.Fragment>
              {hasValidUrl ? (
                <Link
                  href={productUrl}
                  className="flex flex-1 flex-row items-center gap-3"
                >
                  {productComponent}
                </Link>
              ) : (
                <div className="flex flex-1 flex-row items-center gap-3">
                  {productComponent}
                </div>
              )}
            </React.Fragment>
          );
        },
      }),
      columnHelper.accessor("price", {
        header: () => (
          <span className="flex flex-1 text-left text-body-small font-medium uppercase text-gray-500">
            Price
          </span>
        ),
        cell: ({ row }) => {
          const { discountedPrice, price, currencies } = row.original.products;
          const finalPrice = discountedPrice ?? price;
          const currencyPrefix = currencies?.symbol ?? defaultCurrencySymbol;
          const prefixedPrice = `${currencyPrefix}${finalPrice.toFixed(2)}`;

          return (
            <span className="text-body-medium font-normal text-gray-900">
              {prefixedPrice}
            </span>
          );
        },
      }),
      columnHelper.accessor("quantity", {
        header: () => (
          <span className="flex flex-1 text-left text-body-small font-medium uppercase text-gray-500">
            Quantity
          </span>
        ),
        cell: ({ row }) => {
          const product = row.original.products;
          const addToCartWrapperProps: Partial<AddToCartWrapperProps> = {
            counterWrapperClassName: "flex gap-2 w-fit",
            className:
              "group flex size-8 flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:border-none disabled:opacity-50 disabled:transition-none disabled:hover:bg-primary disabled:hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
            minusClassName:
              "!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
            moreClassName:
              "!p-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
            refreshAfterUpdate: true,
            hideAddToCart: true,
          };
          const productWeight = product?.productWeight;
          const weightUnitObject =
            productWeight?.edges?.at(0)?.node?.weightUnit;
          const currentWeight = getCartLineItemWeight(product.id);
          const hasWeight = !!currentWeight && weightUnitObject;
          const weightText = hasWeight
            ? `${currentWeight}${weightUnitObject.unit}`
            : null;

          return (
            <React.Fragment>
              {hasWeight ? (
                <span className="text-body-medium font-normal text-gray-900">
                  {weightText}
                </span>
              ) : (
                <AddToCartWrapper {...addToCartWrapperProps} product={product}>
                  <ShoppingBagIcon className="size-4 text-gray-900 group-hover:text-white group-disabled:group-hover:text-gray-900" />
                </AddToCartWrapper>
              )}
            </React.Fragment>
          );
        },
      }),
      columnHelper.accessor("subtotal", {
        header: () => (
          <span className="flex flex-1 text-left text-body-small font-medium uppercase text-gray-500">
            Subtotal
          </span>
        ),
        cell: ({ row }) => {
          const quantity = row.original.quantity;
          const weight = row.original.weight;
          const priceBy = !!weight
            ? weight
            : !!quantity
              ? parseInt(quantity)
              : 1;
          const { discountedPrice, price, currencies } = row.original.products;
          const finalPrice = discountedPrice ?? price;
          const productSubtotal = (finalPrice * priceBy).toFixed(2);
          const currencyPrefix = currencies?.symbol ?? defaultCurrencySymbol;
          const prefixedSubtotal = `${currencyPrefix}${productSubtotal}`;

          return (
            <span className="text-body-medium font-normal text-gray-900">
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
                refreshAfterDelete
              />
            </CartProductActions>
          );
        },
      }),
    ],
    [columnHelper, getCartLineItemWeight]
  );

  const tableProps: TableProps = {
    className:
      "rounded-ten border border-gray-100 border-separate border-spacing-6 w-full",
  };
  const allTableProps: AllTableProps = {
    columns: columns as ColumnDef<unknown, unknown>[],
    tableProps,
    ...props,
  };

  return <Table {...allTableProps} />;
}
