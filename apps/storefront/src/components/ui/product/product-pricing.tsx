import { cn } from "@/lib/utils";
import React from "react";

export type Props = React.HTMLProps<HTMLDivElement> & {
  currencySymbol: string;
  quantity?: number;
  price: number;
  discountedPrice?: number | null;
  priceClasses?: string;
  discountedPriceClasses?: string;
  quantityClasses?: string;
  showFinalPriceOnly?: boolean;
};

export function ProductPricing({
  currencySymbol,
  quantity,
  price,
  discountedPrice,
  priceClasses,
  discountedPriceClasses,
  quantityClasses,
  showFinalPriceOnly = false,
  ...props
}: Props) {
  return (
    <div {...props}>
      {typeof quantity === "number" ? (
        <span
          className={cn(
            "hidden font-normal text-body-small text-gray-500",
            quantityClasses
          )}
        >{`${quantity} x`}</span>
      ) : null}
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
      {!discountedPrice || (!!discountedPrice && !showFinalPriceOnly) ? (
        <span
          className={cn(
            {
              "font-normal text-gray-400 line-through truncate line-clamp-1":
                discountedPrice,
              "font-medium text-gray-900 truncate line-clamp-1":
                !discountedPrice,
            },
            priceClasses
          )}
        >{`${currencySymbol}${price.toFixed(2)}`}</span>
      ) : null}
    </div>
  );
}
