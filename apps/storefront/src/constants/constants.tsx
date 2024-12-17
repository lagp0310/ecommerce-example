import React from "react";
import type {
  Language,
  Currency,
  Category,
  Product,
  BaseSelectOption,
} from "@/types/types";
import { CurrencyDollarIcon, LanguageIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import Image from "next/image";
import freshFruitCategory from "@/public/images/fresh-fruit-category.png";
import greenAppleProduct from "@/public/images/green-apple-product.png";
import { HeadphonesIcon } from "@/components/ui/icons/headphones";
import { ShoppingBagCheckedIcon } from "@/components/ui/icons/shopping-bag-checked";
import { BoxIcon } from "@/components/ui/icons/box";
import { TruckIcon } from "@/components/ui/icons/truck";

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

export const offerEndDate = dayjs().add(6, "hours").toDate();

export const intervalMs = 1000;
export const secondsTransform = 60;
export const minutesTransform = 60 * 60;
export const daysTransform = minutesTransform * 24;

export const category: Category = {
  categoryId: "a55fef0a-230d-402f-b263-9fe44d226a9f",
  image: <Image src={freshFruitCategory} alt="Category Image" />,
  title: "Fresh Fruit",
  url: "/products",
  numberOfItems: 134,
};
export const product: Product = {
  id: "868b9f7f-620c-490c-9c8b-b45cccb4507f",
  slug: "ecobazar-green-apple-620c",
  name: "Green Apple",
  price: 20.99,
  discountedPrice: 14.99,
  currencies: {
    id: "5afb804d-d96a-4c59-8d01-259d256a2e22",
    currencySymbol: "$",
    currencyCode: "USD",
  },
  imageUrl: greenAppleProduct.src,
  rating: 4,
  totalRatings: 25,
  generalTags: [{ id: "1", tag: "Top Seller", type: "info" }],
  discountTags: [{ id: "2", tag: "50% Off", type: "danger" }],
  description:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
};

export const productsSortByOptions: BaseSelectOption[] = [
  {
    id: "39255263-b14d-4988-8d4e-a7aacad23aea",
    name: "Latest",
    value: "latest",
  },
  {
    id: "c892d873-ef89-4f07-8b7c-40f8fe3ae054",
    name: "Price (Low to High)",
    value: "price-low-to-high",
  },
  {
    id: "ab88f847-1932-4a68-905e-59f71e8117a0",
    name: "Price (High to Low)",
    value: "price-high-to-low",
  },
  {
    id: "01217011-0b06-4dff-8a56-0e707dc87365",
    name: "Rating (High to Low)",
    value: "rating-high-to-low",
  },
  {
    id: "6c32fb72-d62e-4c35-a9d0-2385ac3d6304",
    name: "Rating (Low to High)",
    value: "rating-low-to-high",
  },
];

export enum StoreHighlightIcon {
  TRUCK_ICON = "TruckIcon",
  HEADPHONES_ICON = "HeadphonesIcon",
  SHOPPING_BAG_CHECKED_ICON = "ShoppingBagCheckedIcon",
  BOX_ICON = "BoxIcon",
}

export const getStoreHighlightsIcon = (icon: StoreHighlightIcon) => {
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
};

export const maxProductRating = 5;

export const defaultMaxProductPrice = 99;

export const defaultProductsShowPerPage = 20;

export const maxPagesToShow = 5;
