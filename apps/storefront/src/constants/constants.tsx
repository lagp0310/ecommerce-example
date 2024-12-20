import React from "react";
import type {
  Language,
  Currency,
  BaseSelectOption,
  SortByDirection,
} from "@/types/types";
import { CurrencyDollarIcon, LanguageIcon } from "@heroicons/react/24/outline";

export const defaultAvatarImageWidth = 200;
export const defaultAvatarImageHeight = 200;

export const defaultVisibleSlides = 1;
export const defaultSlideWidth = 300;
export const defaultSlideHeight = 80;
export const defaultCarouselInterval = 5000;
export const testimonialsCarouselInterval = 10000;

export const defaultMobileMediaQuery = "(max-width: 640px)";

export const availableLanguages: Language[] = [
  {
    id: "0c0f36d0-b730-48ac-bad6-c7f958ad5c13",
    name: "English",
    shortName: "Eng",
    value: "en-US",
    icon: <LanguageIcon className="mr-1 size-4" />,
  },
];
export const {
  id: languageId,
  name: languageName,
  shortName: languageShortName,
  value: languageValue,
  icon: languageIcon,
} = availableLanguages.at(0)!;

export const availableCurrencies: Currency[] = [
  {
    id: "2f21e3cd-ce78-4970-a918-6a8e5a50c504",
    name: "USD",
    value: "USD",
    icon: <CurrencyDollarIcon className="mr-1 size-4" />,
  },
];
export const {
  id: currencyId,
  name: currencyName,
  shortName: currencyShortName,
  value: currencyValue,
  icon: currencyIcon,
} = availableCurrencies.at(0)!;

export const intervalMs = 1000;
export const secondsTransform = 60;
export const minutesTransform = 60 * 60;
export const daysTransform = minutesTransform * 24;

export const productsSortByOptions: BaseSelectOption[] = [
  {
    id: "5b0af388-bc3d-482d-ba61-fe67d5715298",
    name: "Store Order",
    value: "store-order",
    sortBy: "render_order",
    direction: "asc",
  },
  {
    id: "39255263-b14d-4988-8d4e-a7aacad23aea",
    name: "Most Recent",
    value: "latest",
    sortBy: "created_at",
    direction: "desc",
  },
  {
    id: "c892d873-ef89-4f07-8b7c-40f8fe3ae054",
    name: "Price (Low to High)",
    value: "price-low-to-high",
    sortBy: "price",
    direction: "asc",
  },
  {
    id: "ab88f847-1932-4a68-905e-59f71e8117a0",
    name: "Price (High to Low)",
    value: "price-high-to-low",
    sortBy: "price",
    direction: "desc",
  },
  {
    id: "01217011-0b06-4dff-8a56-0e707dc87365",
    name: "Rating (High to Low)",
    value: "rating-high-to-low",
    sortBy: "rating",
    direction: "desc",
  },
  {
    id: "6c32fb72-d62e-4c35-a9d0-2385ac3d6304",
    name: "Rating (Low to High)",
    value: "rating-low-to-high",
    sortBy: "rating",
    direction: "asc",
  },
];

export enum StoreHighlightIcon {
  TRUCK_ICON = "TruckIcon",
  HEADPHONES_ICON = "HeadphonesIcon",
  SHOPPING_BAG_CHECKED_ICON = "ShoppingBagCheckedIcon",
  BOX_ICON = "BoxIcon",
}

export const maxProductRating = 5;

export const defaultMaxProductPrice = 99;

export const defaultProductsShowPerPage = 20;

export const maxPagesToShow = 5;

export const defaultSortBy = "render_order";
export const defaultSortByDirection: SortByDirection = "asc";

export const defaultCounterStep = 1;
export const defaultCounterInitialValue = 1;
export const defaultMaxCounterValue = 99;

// FIXME: This should be refactored where used. We should get the available currencies from
// the store and select the default one from the DB.
export const defaultCurrencyId = "5afb804d-d96a-4c59-8d01-259d256a2e22";

export const localStorageCartIdItemName = "cart-id";

export const defaultCurrencySymbol = "$";
