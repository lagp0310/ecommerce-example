import type { Language, Currency } from "@/types/types";
import { CurrencyDollarIcon, LanguageIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";

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
