import { ClientLink } from "@/components/navigation/client-link";
import { Banner } from "@/components/ui/banner/banner";
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
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import headerBigBanner from "@/public/images/header-big-banner.png";
import headerSecondBanner from "@/public/images/header-second-banner.png";
import headerThirdBanner from "@/public/images/header-third-banner.png";
import { BannerCountdownWrapper } from "@/components/ui/banner/banner-countdown-wrapper";
import firstOfferBanner from "@/public/images/first-offer-banner.png";
import secondOfferBanner from "@/public/images/second-offer-banner.png";
import thirdOfferBanner from "@/public/images/third-offer-banner.png";
import { defaultProductsSearchParams } from "@/constants/product/constants";

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

export const headerBanners = [
  <Banner key={0} className="relative rounded-ten md:col-span-2 md:row-span-2">
    <Image
      src={headerBigBanner}
      alt="Header Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
    />
    <div className="absolute left-0 top-0 size-full rounded-ten bg-gradient-to-br from-black/60 to-black/0"></div>
    <div className="absolute top-0 flex h-full flex-1 flex-col justify-center gap-y-2 px-6 md:gap-y-7 md:px-12">
      <h2 className="text-body-xxl font-semibold text-white md:text-heading-2">
        Fresh and Healthy Organic Food
      </h2>
      <div className="flex flex-col gap-y-2 border-l-2 border-primary pl-2">
        <span className="text-body-small font-medium text-white md:text-body-xl">
          Sale up to
          <span className="ml-2 rounded-[5px] bg-warning px-3 py-1 font-semibold uppercase">
            30% Off
          </span>
        </span>
        <span className="text-body-tiny font-normal text-white md:text-body-small">
          Free shipping on all your orders
        </span>
      </div>
      <ClientLink
        href={`/products?${defaultProductsSearchParams.toString()}`}
        className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Shop now
        <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
      </ClientLink>
    </div>
  </Banner>,
  <Banner key={1} className="relative col-span-1 rounded-ten">
    <div className="absolute left-0 top-0 size-full rounded-ten bg-gradient-to-r from-white/60 via-white/50 to-white/30"></div>
    <Image
      src={headerSecondBanner}
      alt="Second Header Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
    />
    <div className="absolute left-0 top-0 flex h-full flex-1 flex-col justify-center gap-y-6 px-8">
      <span className="text-body-small font-medium uppercase leading-[100%] text-gray-900">
        Summer Sale
      </span>
      <h5 className="text-heading-5 font-semibold uppercase text-gray-900">
        75% Off
      </h5>
      <span className="text-body-small font-normal text-gray-800">
        Only Fruits and Vegetables
      </span>
      <ClientLink
        href={`/products?${defaultProductsSearchParams.toString()}`}
        className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-primary px-5 py-3 text-body-small font-semibold leading-[120%] text-white hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Shop now
        <ArrowRightIcon className="size-4 text-white group-hover:text-primary" />
      </ClientLink>
    </div>
  </Banner>,
  <Banner key={2} className="relative col-span-1 rounded-ten">
    <Image
      src={headerThirdBanner}
      alt="Third Header Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[300px] w-full rounded-ten object-cover sm:h-[400px] lg:h-auto"
    />
    <div className="absolute left-0 top-0 size-full rounded-ten bg-green-gray-900/80"></div>
    <div className="absolute left-0 top-0 flex size-full flex-1 flex-col items-center justify-center gap-y-6 px-6 md:gap-y-8 md:px-12">
      <span className="text-center text-body-small font-medium uppercase leading-[100%] text-white">
        Best Deal
      </span>
      <h5 className="line-clamp-2 text-center text-body-xxl font-semibold text-white md:text-heading-5">
        Special Products of the Month
      </h5>
      <ClientLink
        href={`/products?${defaultProductsSearchParams.toString()}`}
        className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Shop now
        <ArrowRightIcon className="size-4 text-primary group-hover:text-primary" />
      </ClientLink>
    </div>
  </Banner>,
];
export const headerBannerCarouselProviderProps: CarouselProviderCustomProps = {
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides: headerBanners.length,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 1,
  className: "w-full h-[350px] sm:h-[450px]",
  mobileMediaQuery: "(max-width: 768px)",
};
export const headerBannerCarouselRendererProps: CarouselRendererProps = {
  carouselSliderProps: {
    className: "h-80 sm:h-[430px]",
    classNameTray: "h-64 sm:h-[430px]",
  },
  mobileMediaQuery: "(max-width: 768px)",
};
export const highlightCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides: number) => ({
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

export const offerBanners = [
  <Banner
    key={0}
    className="relative flex flex-1 flex-col items-center gap-y-4"
  >
    <Image
      src={firstOfferBanner}
      alt="Offer Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[500px] w-full rounded-ten object-cover lg:h-auto"
    />
    <div className="absolute left-0 top-10 flex h-[230px] w-full flex-1 flex-col items-center gap-y-4">
      <span className="text-body-small font-normal uppercase leading-[100%] text-white">
        Best Deals
      </span>
      <h3 className="text-center text-heading-4 font-semibold text-white md:text-heading-3">
        Sale of the Month
      </h3>
      <div className="flex flex-1 flex-row gap-x-2 pb-2">
        <div className="flex flex-1 flex-col gap-y-2">
          <BannerCountdownWrapper
            className="flex flex-1 flex-row gap-x-4"
            semicolonClasses="font-normal text-body-xxl leading-[120%] text-white/60"
            timeClasses="font-normal text-body-xxl text-white uppercase"
            timeUnitClasses="font-normal text-body-tiny leading-[100%] text-white uppercase"
          />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-row items-end">
        <ClientLink
          href={`${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now{" "}
          <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </div>
  </Banner>,
  <Banner
    key={1}
    className="relative flex flex-1 flex-col items-center gap-y-4"
  >
    <Image
      src={secondOfferBanner}
      alt="Offer Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[500px] w-full rounded-ten object-cover lg:h-auto"
    />
    <div className="absolute left-0 top-10 flex h-[230px] w-full flex-1 flex-col items-center gap-y-4">
      <span className="text-body-small font-normal uppercase leading-[100%] text-white">
        85% Fat Free
      </span>
      <h3 className="text-center text-heading-4 font-semibold text-white md:text-heading-3">
        Low-Fat Meat
      </h3>
      <span className="text-white">
        Starting at <span className="text-warning">$79.99</span>
      </span>
      <div className="flex h-full flex-1 flex-row items-end">
        <ClientLink
          href={`/products?${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now{" "}
          <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </div>
  </Banner>,
  <Banner
    key={2}
    className="relative flex flex-1 flex-col items-center gap-y-4"
  >
    <Image
      src={thirdOfferBanner}
      alt="Offer Banner"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      className="h-[500px] w-full rounded-ten object-cover lg:h-auto"
    />
    <div className="absolute left-0 top-10 flex h-[230px] w-full flex-1 flex-col items-center gap-y-4">
      <span className="text-body-small font-normal uppercase leading-[100%] text-gray-900">
        Summer Sale
      </span>
      <h3 className="text-center text-heading-4 font-semibold text-gray-900 md:text-heading-3">
        100% Fresh Fruit
      </h3>
      <span className="text-body-xl font-medium text-gray-900">
        Up to
        <span className="ml-2 rounded-[5px] bg-gray-900 px-3 py-1 font-semibold uppercase text-[#FCC900]">
          64% Off
        </span>
      </span>
      <div className="flex h-full flex-1 flex-row items-end">
        <ClientLink
          href={`/products?${defaultProductsSearchParams.toString()}`}
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now{" "}
          <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </div>
  </Banner>,
];
export const offerBannersCarouselProviderProps: CarouselProviderCustomProps = {
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides: offerBanners.length,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 1,
  className: "w-full h-[500px]",
  mobileMediaQuery: "(max-width: 1024px)",
};
export const offerBannersCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 1024px)",
  carouselSliderProps: {
    className: "h-[500px]",
    classNameTray: "h-[500px]",
  },
};
