"use client";

import React from "react";
import type { TProduct } from "@/types/types";
import { CartProduct } from "./cart-product";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  CartProductActions,
  type Props as CartProductActionsProps,
} from "./cart-product-actions";
import { Button } from "@/components/ui/common/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ProductPricing } from "@/components/ui/product/product-pricing";
import Image from "next/image";
import { Line_Items } from "@/gql/graphql";
import { useCart } from "@/context/cart-context";
import { defaultCurrencySymbol } from "@/constants/constants";

type Props = React.HTMLProps<HTMLDivElement> & {
  actionsProps?: CartProductActionsProps;
  lineItem: Line_Items;
  product: TProduct;
  toggleSidebar: () => void;
};

export function BasicCartProduct({
  actionsProps,
  lineItem: { id: lineItemId, quantity },
  product: {
    slug,
    name,
    price,
    currencies,
    discounted_price: discountedPrice,
    image_url: imageUrl,
  },
  toggleSidebar,
  ...props
}: Props) {
  const { handleDeleteLineItem, isLoading } = useCart();
  const handleDeleteClick = React.useCallback(async () => {
    try {
      await handleDeleteLineItem(lineItemId);
    } catch (error) {
      console.error(error);
    }
  }, [handleDeleteLineItem, lineItemId]);

  return (
    <div className="flex flex-1 flex-row items-center gap-x-1">
      <Link
        href={`/products/${slug}`}
        className="flex flex-1 flex-row gap-x-1"
        onClick={toggleSidebar}
      >
        <CartProduct {...props} className="flex flex-1 flex-row gap-4">
          {typeof imageUrl === "string" ? (
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              className="h-auto w-20 max-w-20 rounded-[10px]"
            />
          ) : null}
          <div className="flex flex-1 flex-col justify-center gap-1">
            <span className="line-clamp-2">{`${name} (${quantity})`}</span>
            <ProductPricing
              className="flex flex-row items-center gap-x-2 text-body-small md:text-body-medium"
              price={price}
              discountedPrice={discountedPrice}
              currencySymbol={currencies?.symbol ?? defaultCurrencySymbol}
              discountedPriceClasses={cn({
                "font-medium text-gray-900 truncate line-clamp-1":
                  !discountedPrice,
              })}
              priceClasses={cn({
                "font-normal text-gray-400 line-through truncate line-clamp-1":
                  discountedPrice,
                "font-medium text-gray-900 truncate line-clamp-1":
                  !discountedPrice,
              })}
            />
          </div>
        </CartProduct>
      </Link>
      <CartProductActions {...actionsProps} className="flex flex-row gap-x-1">
        <Button
          className="group -mr-2 rounded-full border-none p-2 hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
          onClick={handleDeleteClick}
          disabled={isLoading}
        >
          <TrashIcon className="size-4 text-gray-900 group-hover:text-danger group-disabled:transition-none group-disabled:group-hover:text-gray-900 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
        </Button>
      </CartProductActions>
    </div>
  );
}
