import { BoxIcon } from "@/components/ui/icons/box";
import { HeadphonesIcon } from "@/components/ui/icons/headphones";
import { ShoppingBagCheckedIcon } from "@/components/ui/icons/shopping-bag-checked";
import { TruckIcon } from "@/components/ui/icons/truck";
import {
  intervalMs,
  daysTransform,
  minutesTransform,
  secondsTransform,
  StoreHighlightIcon,
} from "@/constants/constants";
import type { ProductsResponse, TProduct } from "@/types/types";
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

export function parseProductTags(
  productsCollection?: ProductsResponse[] | null
) {
  if (!productsCollection) return [];

  return productsCollection.map(
    ({ productTagsCollection, ...productRest }) => ({
      generalTags: productTagsCollection?.edges
        ?.filter(({ node: { isGeneralTag } }) => isGeneralTag)
        .map(({ node: { id, tag, tagTypes } }) => ({
          id,
          tag,
          type: tagTypes?.type,
        })),
      discountTags: productTagsCollection?.edges
        ?.filter(({ node: { isDiscountTag } }) => isDiscountTag)
        .map(({ node: { id, tag, tagTypes } }) => ({
          id,
          tag,
          type: tagTypes?.type,
        })),
      ...productRest,
    })
  ) as TProduct[];
}

export function isRecordIdInSearchParamArray(
  recordId: string,
  paramValue?: string,
  separator = ","
) {
  if (!paramValue) {
    return false;
  }

  const paramValueArray = paramValue?.split(separator);

  if (!Array.isArray(paramValueArray)) {
    throw new Error(`paramValue should be a '${separator}' separated array`);
  }
  if (paramValueArray.length === 0) {
    return false;
  }

  return !!paramValueArray.find((value) => value === recordId);
}

export function updateSearchParam(
  paramName: string,
  searchParams: URLSearchParams,
  value: string
) {
  const newSearchParams = new URLSearchParams(searchParams);
  const param = newSearchParams?.get(paramName)?.split(",");
  const hasRecord = !!param?.find((recordValue) => recordValue === value);

  if (!param) {
    newSearchParams.set(paramName, value);
    return newSearchParams;
  }
  if (param.length === 1 && hasRecord) {
    newSearchParams.delete(paramName, value);
    return newSearchParams;
  }

  if (hasRecord) {
    const newValue = param
      ?.filter((recordValue) => recordValue !== value)
      ?.join(",");

    if (newValue) {
      newSearchParams.set(paramName, newValue);
    }
  } else {
    const newValue = param?.concat(value).join(",");

    if (newValue) {
      newSearchParams.set(paramName, newValue);
    }
  }

  return newSearchParams;
}

export function getStoreHighlightsIcon(icon: StoreHighlightIcon) {
  switch (icon) {
    case StoreHighlightIcon.TRUCK_ICON:
      return <TruckIcon className="size-10 text-primary" />;
    case StoreHighlightIcon.HEADPHONES_ICON:
      return <HeadphonesIcon className="size-10 text-primary" />;
    case StoreHighlightIcon.SHOPPING_BAG_CHECKED_ICON:
      return <ShoppingBagCheckedIcon className="size-10 text-primary" />;
    case StoreHighlightIcon.BOX_ICON:
      return <BoxIcon className="size-10 text-primary" />;
    default:
      return null;
  }
}
