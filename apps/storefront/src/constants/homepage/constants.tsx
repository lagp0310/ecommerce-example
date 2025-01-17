import { BookOffBrandIcon } from "@/components/ui/icons/brands/book-off-brand";
import { FoodCoUkBrandIcon } from "@/components/ui/icons/brands/food-co-uk-brand";
import { FoodNetworkBrandIcon } from "@/components/ui/icons/brands/food-network-brand";
import { GSeriesBrandIcon } from "@/components/ui/icons/brands/g-series-brand";
import { MangoBrandIcon } from "@/components/ui/icons/brands/mango-brand";
import { StepsBrandIcon } from "@/components/ui/icons/brands/steps-brand";
import type {
  CustomerTestimonial,
  CarouselProviderCustomProps,
  CarouselRendererProps,
} from "@/types/types";
import {
  defaultSlideHeight,
  defaultSlideWidth,
  defaultCarouselInterval,
} from "@/constants/constants";

export const storeHighlightsToShow = 4;
export const popularProductsToShow = 10;
export const hotDealsProductsToShow = 12;
export const featuredProductsToShow = 10;
export const categoriesToShow = 12;

export const customerTestimonial: CustomerTestimonial = {
  id: "f015e892-5c95-4a0e-957d-27acac18860d",
  text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  avatarUrl: "https://i.pravatar.cc/200?img=45",
  rating: 5,
  fullName: "Dianne Russell",
};

export const brandIcons = [
  <StepsBrandIcon
    key={0}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
  <MangoBrandIcon
    key={1}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
  <FoodNetworkBrandIcon
    key={2}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
  <FoodCoUkBrandIcon
    key={3}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
  <BookOffBrandIcon
    key={4}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
  <GSeriesBrandIcon
    key={5}
    className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
  />,
];

export const headerBannerCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides) => ({
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 1,
  className: "w-full h-[350px] sm:h-[450px]",
  mobileMediaQuery: "(max-width: 768px)",
});
export const headerBannerCarouselRendererProps: CarouselRendererProps = {
  carouselSliderProps: {
    className: "h-80 sm:h-[430px]",
    classNameTray: "h-64 sm:h-[430px]",
  },
  mobileMediaQuery: "(max-width: 768px)",
};
export const highlightCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides) => ({
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 1,
  className: "w-full h-20",
  mobileMediaQuery: "(max-width: 768px)",
});
export const highlightCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  carouselSliderProps: {
    className: "h-20",
    classNameTray: "h-20",
  },
};

export const categoriesCarouselProviderProps: CarouselProviderCustomProps = {
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides: 12,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 2,
  className: "w-full h-48 min-[400px]:h-52 min-[450px]:h-60",
  mobileMediaQuery: "(max-width: 768px)",
  visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
  visibleSlidesMd: {
    mediaQuery: "(min-width: 641px) and (max-width: 768px)",
    visibleSlides: 3,
  },
  visibleSlidesLg: {
    mediaQuery: "(min-width: 769px)",
    visibleSlides: 5,
  },
};
export const categoriesCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  carouselSliderProps: {
    className: "h-48 min-[400px]:h-52 min-[450px]:h-60",
    classNameTray: "h-48 min-[400px]:h-52 min-[450px]:h-60",
  },
};
export const popularProductsCarouselProviderProps: CarouselProviderCustomProps =
  {
    naturalSlideHeight: defaultSlideHeight,
    naturalSlideWidth: defaultSlideWidth,
    totalSlides: 10,
    interval: defaultCarouselInterval,
    isPlaying: true,
    infinite: true,
    visibleSlides: 2,
    className:
      "w-full h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
    mobileMediaQuery: "(max-width: 768px)",
    visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
    visibleSlidesMd: {
      mediaQuery: "(min-width: 641px) and (max-width: 768px)",
      visibleSlides: 3,
    },
    visibleSlidesLg: {
      mediaQuery: "(min-width: 769px)",
      visibleSlides: 5,
    },
  };
export const popularProductsCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  carouselSliderProps: {
    className: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
    classNameTray: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
  },
};
export const hotDealsCarouselProviderProps: CarouselProviderCustomProps = {
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides: 12,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 2,
  className:
    "w-full h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
  mobileMediaQuery: "(max-width: 768px)",
  visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
  visibleSlidesMd: {
    mediaQuery: "(min-width: 641px) and (max-width: 768px)",
    visibleSlides: 3,
  },
  visibleSlidesLg: {
    mediaQuery: "(min-width: 769px)",
    visibleSlides: 5,
  },
};
export const hotDealsCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  carouselSliderProps: {
    className: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
    classNameTray: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
  },
};
export const featuredProductsCarouselProviderProps: CarouselProviderCustomProps =
  {
    naturalSlideHeight: defaultSlideHeight,
    naturalSlideWidth: defaultSlideWidth,
    totalSlides: 10,
    interval: defaultCarouselInterval,
    isPlaying: true,
    infinite: true,
    visibleSlides: 2,
    className:
      "w-full h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
    mobileMediaQuery: "(max-width: 768px)",
    visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
    visibleSlidesMd: {
      mediaQuery: "(min-width: 641px) and (max-width: 768px)",
      visibleSlides: 3,
    },
    visibleSlidesLg: {
      mediaQuery: "(min-width: 769px)",
      visibleSlides: 5,
    },
  };
export const featuredProductsCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  carouselSliderProps: {
    className: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
    classNameTray: "h-60 min-[450px]:h-72 min-[580px]:h-[300px]",
  },
};
export const testimonialsCarouselProviderProps: CarouselProviderCustomProps = {
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides: 6,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 1 },
  visibleSlidesMd: {
    mediaQuery: "(min-width: 641px) and (max-width: 1024px)",
    visibleSlides: 2,
  },
  visibleSlidesLg: {
    mediaQuery: "(min-width: 1025px)",
    visibleSlides: 3,
  },
  className: "w-full max-w-7xl",
  renderInDesktop: true,
};
export const testimonialsCarouselRendererProps: CarouselRendererProps = {
  renderInDesktop: true,
  carouselSliderProps: {
    className:
      "h-72 min-[420px]:h-72 min-[430px]:h-64 min-[500px]:h-64 min-[520px]:h-60 sm:h-72 md:h-64 lg:h-72 min-[1150px]:h-64",
    classNameTray:
      "h-72 min-[420px]:h-72 min-[430px]:h-64 min-[500px]:h-64 min-[520px]:h-60 sm:h-72 md:h-64 lg:h-72 min-[1150px]:h-64",
  },
};
export const totalCustomerTestimonials = 6;

export const offerBannersCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides) => ({
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 1,
  className: "w-full h-[500px]",
  mobileMediaQuery: "(max-width: 1024px)",
});
export const offerBannersCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 1024px)",
  carouselSliderProps: {
    className: "h-[500px]",
    classNameTray: "h-[500px]",
  },
};
