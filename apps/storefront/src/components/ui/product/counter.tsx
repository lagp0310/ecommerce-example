"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import {
  defaultCounterInitialValue,
  defaultCounterStep,
  defaultMaxCounterValue,
} from "@/constants/constants";

type Props = React.HTMLProps<HTMLDivElement> & {
  initialValue?: number;
  step?: number;
  maxValue?: number;
  onCountUpdate: (count: number) => void;
  countClassName?: string;
  minusChildren: React.ReactNode;
  moreChildren: React.ReactNode;
  minusClassName?: string;
  moreClassName?: string;
};

export function Counter({
  initialValue = defaultCounterInitialValue,
  step = defaultCounterStep,
  maxValue = defaultMaxCounterValue,
  onCountUpdate,
  countClassName,
  minusChildren,
  moreChildren,
  minusClassName,
  moreClassName,
  ...props
}: Props) {
  const [count, setCount] = React.useState(initialValue);
  const handleUpdateCount = React.useCallback(
    (count: number) => {
      if (count < 0) {
        throw new Error(`count cannot be less than zero, got ${count}`);
      }

      setCount(count);
      onCountUpdate(count);
    },
    [onCountUpdate]
  );
  const isMinusButtonDisabled = React.useMemo(() => count <= 0, [count]);
  const isMoreButtonDisabled = React.useMemo(
    () => count >= maxValue,
    [count, maxValue]
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
