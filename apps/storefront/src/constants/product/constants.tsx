import { defaultMaxProductPrice } from "@/constants/constants";

export const categoriesToShow = 30;
export const productsToShow = 20;
export const pricingSliderProps = (
  maxProductsPrice: number,
  maxPrice?: number
) => ({
  thumbClassName:
    "outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
  defaultValue: [isNaN(maxPrice ?? NaN) ? maxProductsPrice : maxPrice],
  max:
    typeof maxProductsPrice === "number"
      ? maxProductsPrice
      : defaultMaxProductPrice,
});
