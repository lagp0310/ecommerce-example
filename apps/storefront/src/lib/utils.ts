import {
  intervalMs,
  daysTransform,
  minutesTransform,
  secondsTransform,
} from "@/constants/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const padNumber = (value: number, maxLength = 2, fillString = "0") =>
  value.toString().padStart(maxLength, fillString);

export function parseRemainingTime(countDown: number) {
  const days = Math.floor(countDown / (intervalMs * daysTransform));
  const hours = Math.floor(
    (countDown % (intervalMs * daysTransform)) / (intervalMs * minutesTransform)
  );
  const minutes = Math.floor(
    (countDown % (intervalMs * minutesTransform)) /
      (intervalMs * secondsTransform)
  );
  const seconds = Math.floor(
    (countDown % (intervalMs * secondsTransform)) / 1000
  );

  return {
    days: padNumber(days),
    hours: padNumber(hours),
    minutes: padNumber(minutes),
    seconds: padNumber(seconds),
  };
}

export function parseProductTags(productsCollection?: object[]) {
  if (!productsCollection) return null;

  return productsCollection?.map(
    ({ product_tagsCollection, ...productRest }) => ({
      generalTags: product_tagsCollection?.edges
        ?.filter(({ node: { isGeneralTag } }) => isGeneralTag)
        .map(
          ({
            node: {
              id,
              tag,
              tagTypes: { type },
            },
          }) => ({ id, tag, type })
        ),
      discountTags: product_tagsCollection?.edges
        ?.filter(({ node: { isDiscountTag } }) => isDiscountTag)
        .map(
          ({
            node: {
              id,
              tag,
              tagTypes: { type },
            },
          }) => ({ id, tag, type })
        ),
      ...productRest,
    })
  );
}
