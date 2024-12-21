"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import { Counter } from "@/components/ui/product/counter";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type { TProduct } from "@/types/types";
import { useCart } from "@/context/cart-context";
import isUUID from "validator/es/lib/isUUID";
import { cn } from "@/lib/utils";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
} & {
  wrapperClassName?: string;
  product: TProduct;
  counterWrapperClassName?: string;
  countClassName?: string;
  minusClassName?: string;
  moreClassName?: string;
};

export function AddToCartWrapper({
  wrapperClassName,
  children,
  product,
  counterWrapperClassName,
  countClassName,
  minusClassName,
  moreClassName,
  ...buttonProps
}: Props) {
  const { cart, lineItems, getCartLineItemId, handleAddToCart, isLoading } =
    useCart();

  const [wasGetLineItemIdSuccessful, setWasGetLineItemIdSuccessful] =
    React.useState(false);
  const [lineItemId, setLineItemId] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!cart?.id || !product.id) {
      setWasGetLineItemIdSuccessful(true);
      return;
    }

    const lineItemId = getCartLineItemId(product.id);
    setWasGetLineItemIdSuccessful(true);
    setLineItemId(lineItemId);
  }, [cart?.id, lineItems, getCartLineItemId, product.id]);

  const [showCounter, setShowCounter] = React.useState(
    !!lineItemId && wasGetLineItemIdSuccessful
  );
  React.useEffect(() => {
    setShowCounter(!!lineItemId);
  }, [lineItemId]);
  const hasAllCounterProps = React.useMemo(
    () => showCounter && typeof lineItemId === "string" && isUUID(lineItemId),
    [showCounter, lineItemId]
  );

  const isActionDisabled = React.useMemo(
    () => !wasGetLineItemIdSuccessful || isLoading,
    [isLoading, wasGetLineItemIdSuccessful]
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
          disabled={isActionDisabled}
          {...buttonProps}
        >
          {children}
        </Button>
      ) : null}
      {hasAllCounterProps ? (
        <Counter
          // @ts-expect-error: lineItemId is validated above
          lineItemId={lineItemId}
          product={product}
          className={cn(
            "flex flex-row gap-3 items-center justify-center",
            counterWrapperClassName
          )}
          countClassName={cn(
            "font-normal text-body-medium text-gray-900 w-full min-w-[12px] text-center",
            countClassName
          )}
          minusChildren={
            <MinusIcon className="size-4 text-gray-900 group-hover/minus-button:text-white group-disabled/minus-button:text-gray-900" />
          }
          moreChildren={
            <PlusIcon className="size-4 text-gray-900 group-hover/more-button:text-white group-disabled/more-button:text-gray-900" />
          }
          minusClassName={minusClassName}
          moreClassName={moreClassName}
          disabled={isActionDisabled}
        />
      ) : null}
    </div>
  );
}
