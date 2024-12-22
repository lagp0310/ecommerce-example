"use client";

import React from "react";
import { useSlider } from "@/context/slider-context";
import {
  ResetFilterWrapper,
  type Props as ResetFilterProps,
} from "@/components/ui/product/reset-filter-wrapper";

export function PriceFilterResetWrapper({ ...props }: ResetFilterProps) {
  const { resetSliderValue } = useSlider();

  return <ResetFilterWrapper redirectCallback={resetSliderValue} {...props} />;
}
