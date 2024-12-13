import React from "react";
import type { Product } from "@/types/types";
import { CartProduct } from "./cart-product";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  CartProductActions,
  type Props as CartProductActionsProps,
} from "./cart-product-actions";
import { Button } from "@/components/ui/common/button";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = React.HTMLProps<HTMLDivElement> & {
  actionsProps?: CartProductActionsProps;
  product: Product;
  toggleSidebar: () => void;
};

export function BasicCartProduct({
  actionsProps,
  product: { id, name, price, currencySymbol, discountedPrice, image },
  toggleSidebar,
  ...props
}: Props) {
  return (
    <div className="flex flex-1 flex-row items-center gap-x-1">
      <Link
        href={`/products/${id}`}
        className="flex flex-1 flex-row gap-x-1"
        onClick={toggleSidebar}
      >
        <CartProduct {...props} className="flex flex-1 flex-row gap-4">
          {image}
          <div className="flex flex-1 flex-col justify-center gap-1">
            {name}
            <div className="flex flex-row items-center gap-x-2 text-body-small md:text-body-medium">
              {!!discountedPrice ? (
                <span
                  className={cn({
                    "font-medium text-gray-900 truncate line-clamp-1":
                      !discountedPrice,
                  })}
                >{`${currencySymbol}${discountedPrice}`}</span>
              ) : null}
              <span
                className={cn({
                  "font-normal text-gray-400 line-through truncate line-clamp-1":
                    discountedPrice,
                  "font-medium text-gray-900 truncate line-clamp-1":
                    !discountedPrice,
                })}
              >{`${currencySymbol}${price}`}</span>
            </div>
          </div>
        </CartProduct>
      </Link>
      <CartProductActions {...actionsProps} className="flex flex-row gap-x-1">
        <Button className="group -mr-2 rounded-full border-none p-2 hover:bg-gray-100/50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
          <TrashIcon className="size-4 text-gray-900 group-hover:text-danger motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
        </Button>
      </CartProductActions>
    </div>
  );
}
