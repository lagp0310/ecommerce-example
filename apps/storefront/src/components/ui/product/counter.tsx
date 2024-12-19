"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import {
  defaultCounterInitialValue,
  defaultCounterStep,
  defaultMaxCounterValue,
} from "@/constants/constants";
import { useCart } from "@/context/cart-context";
import type { TProduct } from "@/types/types";

type Props = React.HTMLProps<HTMLDivElement> & {
  lineItemId: string;
  product: TProduct;
  initialValue?: number;
  step?: number;
  maxValue?: number;
  countClassName?: string;
  minusChildren: React.ReactNode;
  moreChildren: React.ReactNode;
  minusClassName?: string;
  moreClassName?: string;
};

export function Counter({
  lineItemId,
  product,
  initialValue = defaultCounterInitialValue,
  step = defaultCounterStep,
  maxValue = defaultMaxCounterValue,
  countClassName,
  minusChildren,
  moreChildren,
  minusClassName,
  moreClassName,
  ...props
}: Props) {
  const { lineItems, handleUpdateQuantity, isLoading } = useCart();

  const [count, setCount] = React.useState(initialValue);
  React.useEffect(() => {
    if (!Array.isArray(lineItems) || lineItems.length === 0) {
      return;
    }

    const currentQuantity = lineItems?.find(
      ({ id }) => id === lineItemId
    )?.quantity;

    if (currentQuantity) {
      setCount(parseInt(currentQuantity));
    }
  }, [lineItemId, lineItems]);

  const handleUpdateCount = React.useCallback(
    async (count: number) => {
      try {
        if (count < 0) {
          throw new Error(`count cannot be less than zero, got ${count}`);
        }

        setCount(count);
        await handleUpdateQuantity(lineItemId, product, count);
      } catch (error) {
        console.error(error);
      }
    },
    [handleUpdateQuantity, lineItemId, product]
  );

  const isMinusButtonDisabled = React.useMemo(
    () => count <= 0 || isLoading,
    [count, isLoading]
  );
  const isMoreButtonDisabled = React.useMemo(
    () => count >= maxValue || isLoading,
    [count, isLoading, maxValue]
  );

  return (
    <div {...props}>
      <Button
        className={minusClassName}
        onClick={() => handleUpdateCount(count - step)}
        disabled={isMinusButtonDisabled}
      >
        {minusChildren}
      </Button>
      <span className={countClassName}>{count}</span>
      <Button
        className={moreClassName}
        onClick={() => handleUpdateCount(count + step)}
        disabled={isMoreButtonDisabled}
      >
        {moreChildren}
      </Button>
    </div>
  );
}
