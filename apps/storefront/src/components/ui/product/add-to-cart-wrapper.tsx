"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import { Counter } from "@/components/ui/product/counter";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type { Product } from "@/types/types";
import { useCart } from "@/context/cart-context";
import isUUID from "validator/es/lib/isUUID";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { cn } from "@/lib/utils";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
} & {
  wrapperClassName?: string;
  product: Product;
};

export function AddToCartWrapper({
  wrapperClassName,
  children,
  product,
  ...buttonProps
}: Props) {
  const { cart, handleAddToCart } = useCart();

  const [lineItemId, setLineItemId] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!cart?.id || !product.id) {
      return;
    }

    callDatabaseFunction("get_line_item_id", {
      cart_id: cart?.id,
      product_id: product.id,
    })
      .then(({ line_item_id: lineItemId }) => {
        setLineItemId(lineItemId);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [cart?.id, product.id]);

  const [showCounter, setShowCounter] = React.useState(!!lineItemId);
  React.useEffect(() => {
    setShowCounter(!!lineItemId);
  }, [lineItemId]);
  const hasAllCounterProps = React.useMemo(
    () => showCounter && typeof lineItemId === "string" && isUUID(lineItemId),
    [showCounter, lineItemId]
  );

  return (
    <div
      className={cn(wrapperClassName, {
        "w-full": !lineItemId,
      })}
    >
      {!showCounter ? (
        <Button
          className="group flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
          onClick={() => handleAddToCart(product)}
          {...buttonProps}
        >
          {children}
        </Button>
      ) : null}
      {hasAllCounterProps ? (
        <Counter
          lineItemId={lineItemId}
          product={product}
          className="flex flex-row gap-3 items-center justify-center"
          countClassName="font-normal text-body-medium text-gray-900 w-full min-w-[12px] text-center"
          minusChildren={
            <MinusIcon className="h-4 w-4 text-gray-900 group-hover/minus-button:text-white group-disabled/minus-button:text-gray-900" />
          }
          moreChildren={
            <PlusIcon className="h-4 w-4 text-gray-900 group-hover/more-button:text-white group-disabled/more-button:text-gray-900" />
          }
          minusClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
          moreClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
        />
      ) : null}
    </div>
  );
}
