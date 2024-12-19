import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  currencySymbol: string;
  price: number;
  discountedPrice?: number | null;
  priceClasses?: string;
  discountedPriceClasses?: string;
};

export function ProductPricing({
  currencySymbol,
  price,
  discountedPrice,
  priceClasses = "",
  discountedPriceClasses = "",
  ...props
}: Props) {
  return (
    <div {...props}>
      {!!discountedPrice ? (
        <span
          className={cn(
            {
              "font-medium text-gray-900 truncate line-clamp-1":
                !discountedPrice,
            },
            discountedPriceClasses
          )}
        >{`${currencySymbol}${discountedPrice.toFixed(2)}`}</span>
      ) : null}
      <span
        className={cn(
          {
            "font-normal text-gray-400 line-through truncate line-clamp-1":
              discountedPrice,
            "font-medium text-gray-900 truncate line-clamp-1": !discountedPrice,
          },
          priceClasses
        )}
      >{`${currencySymbol}${price.toFixed(2)}`}</span>
    </div>
  );
}
