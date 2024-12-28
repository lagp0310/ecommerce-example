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

  const sliderText = React.useMemo(
    () => ` ${currencySymbol}0 - ${currencySymbol}${price}`,
    [currencySymbol, price]
  );
  const sliderProps = React.useMemo(
    () => ({
      min,
      max,
      step,
      onValueChange: (value: number[]) => setValue(value?.at(0) ?? 0),
      ...props,
    }),
    [max, min, props, setValue, step]
  );

  return (
    <React.Fragment>
      <Slider {...sliderProps} />
      <span className="text-body-small font-normal text-gray-700">
        Price:
        <span className="text-body-small font-medium text-gray-900">
          {sliderText}
        </span>
      </span>
    </React.Fragment>
  );
}
