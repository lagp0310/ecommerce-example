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
    <div className="flex flex-1 flex-row gap-x-1 items-center">
      <Link
        href={`/products/${id}`}
        className="flex flex-1 flex-row gap-x-1"
        onClick={toggleSidebar}
      >
        <CartProduct {...props} className="flex flex-1 flex-row gap-4">
          {image}
          <div className="flex flex-1 flex-col gap-1 justify-center">
            {name}
            <div className="flex flex-row gap-x-2 items-center text-body-small md:text-body-medium">
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
        <Button className="group p-2 rounded-full hover:bg-gray-100/50 border-none -mr-2">
          <TrashIcon className="h-4 w-4 text-gray-900 group-hover:text-danger" />
        </Button>
      </CartProductActions>
    </div>
  );
}
