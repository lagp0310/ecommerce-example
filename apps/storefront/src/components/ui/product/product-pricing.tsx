import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  currencySymbol: string;
  price: number;
  discountedPrice?: number;
  // TODO: This is for testing purposes only. Delete when integrated with backend.
  // This is to display tags on the first product of the list to test the UI.
  // Search in the whole app.
  isFirstOnList?: boolean;
  priceClasses?: string;
  discountedPriceClasses?: string;
};

export function ProductPricing({
  currencySymbol,
  price,
  discountedPrice,
  isFirstOnList = false,
  priceClasses = "",
  discountedPriceClasses = "",
  ...props
}: Props) {
  return (
    <div {...props}>
      {!!discountedPrice && isFirstOnList ? (
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
              discountedPrice && isFirstOnList,
            "font-medium text-gray-900 truncate line-clamp-1": !discountedPrice,
          },
          priceClasses
        )}
      >{`${currencySymbol}${price.toFixed(2)}`}</span>
    </div>
  );
}
