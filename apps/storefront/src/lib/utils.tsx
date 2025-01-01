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
  defaultMaxProductPrice,
  defaultCurrencySymbol,
} from "@/constants/constants";
import type { Line_Items as LineItem } from "@/gql/graphql";
import {
  PaymentMethodEnum,
  type CartSummaryField,
  type ProductsResponse,
  type TProduct,
} from "@/types/types";
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

export function removeParamFromURL(
  searchParams: URLSearchParams,
  paramName: string,
  paramValue?: string
) {
  const updatedSearchParams = new URLSearchParams(searchParams);
  updatedSearchParams.delete(paramName, paramValue);

  return updatedSearchParams.toString();
}

export function removeParamsFromURL(
  searchParams: URLSearchParams,
  paramNames: string[]
) {
  if (!Array.isArray(paramNames) || paramNames.length === 0) {
    throw new Error("paramNames must be an array and cannot be empty");
  }

  const updatedSearchParams = new URLSearchParams(searchParams);
  paramNames.forEach((paramName) => updatedSearchParams.delete(paramName));

  return updatedSearchParams.toString();
}

export function getPricingSliderProps(
  maxProductsPrice: number,
  maxPrice: number | null
) {
  return {
    thumbClassName:
      "outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
    defaultValue: [maxPrice ?? maxProductsPrice ?? defaultMaxProductPrice],
    max: maxProductsPrice,
  };
}

export function lineItemsQuantityCounter(previous: number, current: LineItem) {
  const currentQuantity = parseInt(current.quantity);

  if (!currentQuantity || isNaN(currentQuantity)) {
    throw new Error(
      `Number '${current.quantity}' could not be parsed to integer`
    );
  }

  return previous + currentQuantity;
}

export function getNonNullURLParams(
  currentParams: Record<string, string | undefined>
) {
  const nonNullSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(currentParams).filter(([_, value]) => !!value)
  ) as { [key: string]: string };
  const paginationSearchParams = new URLSearchParams(nonNullSearchParams);

  return paginationSearchParams;
}

export function getCartSummaryItems(
  subtotal = 0,
  shipping = 0,
  taxes = 0,
  total = 0,
  currencySymbol = defaultCurrencySymbol
): CartSummaryField[] {
  return [
    {
      name: "subtotal",
      label: "Subtotal",
      currencySymbol,
      value: subtotal,
    },
    {
      name: "shipping",
      label: "Shipping",
      currencySymbol,
      value: shipping,
    },
    {
      name: "taxes",
      label: "Taxes",
      currencySymbol,
      value: taxes,
    },
    {
      name: "total",
      label: "Total",
      currencySymbol,
      value: total,
    },
  ];
}

export function getPaymentMethodValue(value?: string) {
  if (!value) {
    return null;
  }

  switch (value) {
    case "Cash":
      return PaymentMethodEnum.CASH;
    case "Credit Card":
      return PaymentMethodEnum.CREDIT_CARD;
    case "Debit Card":
      return PaymentMethodEnum.DEBIT_CARD;
    default:
      throw new Error(`'${value}' payment method is not in enum`);
  }
}
