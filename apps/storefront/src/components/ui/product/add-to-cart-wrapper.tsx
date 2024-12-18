"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import { Counter } from "@/components/ui/product/counter";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
} & { isProductInCart?: boolean; wrapperClassName?: string };

export function AddToCartWrapper({
  isProductInCart = false,
  wrapperClassName,
  children,
  ...buttonProps
}: Props) {
  const [showCounter, setShowCounter] = React.useState(isProductInCart);
  React.useEffect(() => {
    setShowCounter(isProductInCart);
  }, [isProductInCart]);

  // TODO: This could be in a custom hook for cart functionality.
  const handleAddToCart = React.useCallback(() => {}, []);
  const handleUpdateQuantity = React.useCallback((quantity: number) => {
    console.log(quantity);
  }, []);

  return (
    <div className={wrapperClassName}>
      {!showCounter ? (
        <Button
          className="group flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
          onClick={handleAddToCart}
          {...buttonProps}
        >
          {children}
        </Button>
      ) : null}
      {showCounter ? (
        <Counter
          className="flex flex-row gap-3 items-center justify-center"
          onCountUpdate={handleUpdateQuantity}
          countClassName="font-normal text-body-medium text-gray-900 w-full min-w-[12px] text-center"
          minusChildren={
            <MinusIcon className="h-4 w-4 text-gray-900 group-hover/minus-button:text-white group-disabled/minus-button:text-gray-900" />
          }
          moreChildren={
            <PlusIcon className="h-4 w-4 text-gray-900 group-hover/more-button:text-white group-disabled/more-button:text-gray-900" />
          }
          minusClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
          moreClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
        ></Counter>
      ) : null}
    </div>
  );
}
