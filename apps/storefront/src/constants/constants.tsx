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
import freshFruitCategory from "@/public/images/fresh-fruit.png";
import greenAppleProduct from "@/public/images/green-apple-product.png";

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
  name: "Green Apple",
  price: 20.99,
  discountedPrice: 14.99,
  currencySymbol: "$",
  currencyCode: "USD",
  image: <Image src={greenAppleProduct} alt="Green Apple" />,
  rating: 4,
  totalRatings: 25,
  tags: [
    { text: "50% Off", type: "danger" },
    { text: "Top Seller", type: "info" },
  ],
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
