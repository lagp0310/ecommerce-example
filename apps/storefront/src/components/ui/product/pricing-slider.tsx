"use client";

import React from "react";
import { Slider } from "@/components/ui/slider";

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
      <span className="font-normal text-body-small text-gray-700">
        Price:
        <span className="font-medium text-body-small text-gray-900">
          {` ${currencySymbol}0 - ${currencySymbol}${value}`}
        </span>
      </span>
    </React.Fragment>
  );
}
