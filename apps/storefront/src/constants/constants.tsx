import type {
  Language,
  Currency,
  Category,
  Product,
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
    name: "English",
    shortName: "Eng",
    icon: <LanguageIcon className="h-4 w-4 mr-1" />,
  },
];
export const {
  name: languageName,
  shortName: languageShortName,
  icon: languageIcon,
} = availableLanguages.at(0)!;

export const availableCurrencies: Currency[] = [
  { name: "USD", icon: <CurrencyDollarIcon className="h-4 w-4 mr-1" /> },
];
export const {
  name: currencyName,
  shortName: currencyShortName,
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
