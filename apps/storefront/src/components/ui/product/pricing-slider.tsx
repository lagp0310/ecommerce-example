"use client";

import React from "react";
import { Slider } from "@/components/ui/common/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { defaultMaxProductPrice } from "@/constants/constants";
import { useSlider } from "@/context/slider-context";

type Props = React.ComponentProps<typeof Slider> & {
  currencySymbol?: string;
};

export function PricingSlider({
  min = 0,
  step = 1,
  max = defaultMaxProductPrice,
  currencySymbol = "$",
  ...props
}: Props) {
  const { value: price, setValue } = useSlider();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePriceParamUpdate = React.useCallback(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("maxPrice", price?.toString() ?? max.toString());

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, [max, pathname, price, router, searchParams]);

  React.useEffect(() => {
    // Small delay to avoid page requests every time the slider changes value
    // when the slider is dragged.
    const updateParamsTimeout = setTimeout(handlePriceParamUpdate, 500);

    return () => {
      clearTimeout(updateParamsTimeout);
    };
  }, [handlePriceParamUpdate, searchParams]);

  return (
    <React.Fragment>
      <Slider
        min={min}
        max={max}
        step={step}
        onValueChange={(value) => setValue(value?.at(0) ?? 0)}
        {...props}
      />
      <span className="text-body-small font-normal text-gray-700">
        Price:
        <span className="text-body-small font-medium text-gray-900">
          {` ${currencySymbol}0 - ${currencySymbol}${price}`}
        </span>
      </span>
    </React.Fragment>
  );
}
