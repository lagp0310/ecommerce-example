"use client";

import React from "react";
import { Slider } from "@/components/ui/common/slider";
import { updateSearchParam } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePriceParamUpdate = React.useCallback(() => {
    const price = value.at(0);

    if (!price || price === 0) {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete("maxPrice");
      return router.push(`${pathname}?${updatedSearchParams.toString()}`);
    }

    const updatedSearchParams = updateSearchParam(
      "maxPrice",
      searchParams,
      price.toString()
    );

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, [searchParams, value]);

  React.useEffect(() => {
    const updateParamsTimeout = setTimeout(handlePriceParamUpdate, 500);

    const currentSliderValue = value.at(0);
    const maxPriceSearchParam = parseInt(searchParams.get("maxPrice") ?? "0");
    if (currentSliderValue === maxPriceSearchParam) {
      clearTimeout(updateParamsTimeout);
    }

    return () => clearTimeout(updateParamsTimeout);
  }, [handlePriceParamUpdate, value]);

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
