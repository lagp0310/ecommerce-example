"use client";

import React from "react";
import { Slider } from "@/components/ui/common/slider";

type Props = React.ComponentProps<typeof Slider> & {
  currencySymbol?: string;
};

export function PricingSlider({
  defaultValue = [0],
  min = 0,
  step = 1,
  currencySymbol = "$",
  ...props
}: Props) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <React.Fragment>
      <Slider
        min={min}
        step={step}
        defaultValue={defaultValue}
        onValueChange={setValue}
        {...props}
      />
      <span className="text-body-small font-normal text-gray-700">
        Price:
        <span className="text-body-small font-medium text-gray-900">
          {` ${currencySymbol}0 - ${currencySymbol}${value}`}
        </span>
      </span>
    </React.Fragment>
  );
}
