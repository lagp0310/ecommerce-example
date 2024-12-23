import {
  defaultCarouselInterval,
  defaultSlideHeight,
  defaultSlideWidth,
} from "@/constants/constants";
import type {
  CarouselProviderCustomProps,
  CarouselRendererProps,
} from "@/types/types";

export const categoriesToShow = 30;
export const productsToShow = 20;

export const relatedProductsToShow = 10;
export const relatedProductsCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides: number) => ({
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 2,
  renderInDesktop: true,
  className:
    "w-full h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80 mb-16",
  mobileMediaQuery: "(max-width: 768px)",
  visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
  visibleSlidesMd: {
    mediaQuery: "(min-width: 641px) and (max-width: 768px)",
    visibleSlides: 3,
  },
  visibleSlidesLg: {
    mediaQuery: "(min-width: 769px) and (max-width: 1280px)",
    visibleSlides: 4,
  },
  visibleSlidesXl: {
    mediaQuery: "(min-width: 1281px)",
    visibleSlides: 5,
  },
});
export const relatedProductsCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  renderInDesktop: true,
  carouselSliderProps: {
    className:
      "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
    classNameTray:
      "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
  },
};

export const defaultCarouselProductSkeletons = 5;
export const productSkeletonFields = 4;

export const resetFiltersRemoveParams = [
  "categories",
  "maxPrice",
  "minRating",
  "tags",
];
