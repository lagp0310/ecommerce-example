import { Banner } from "@/components/ui/banner/banner";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import { CarouselRenderer } from "@/components/carousel/carousel-renderer";
import { CarouselProvider } from "@/components/carousel/carousel-provider";
import { DefaultDotGroup } from "@/components/carousel/default-dot-group";
import { DotsRenderer } from "@/components/carousel/dots-renderer";
import { SlideRenderer } from "@/components/carousel/slide-renderer";
import { CategoryCard } from "@/components/ui/category/category-card";
import { HomepageCustomerTestimonial } from "@/components/ui/customer/homepage-customer-testimonial";
import { BookOffBrandIcon } from "@/components/ui/icons/brands/book-off-brand";
import { BoxIcon } from "@/components/ui/icons/box";
import { FoodCoUkBrandIcon } from "@/components/ui/icons/brands/food-co-uk-brand";
import { FoodNetworkBrandIcon } from "@/components/ui/icons/brands/food-network-brand";
import { GSeriesBrandIcon } from "@/components/ui/icons/brands/g-series-brand";
import { HeadphonesIcon } from "@/components/ui/icons/headphones";
import { MangoBrandIcon } from "@/components/ui/icons/brands/mango-brand";
import { ShoppingBagCheckedIcon } from "@/components/ui/icons/shopping-bag-checked";
import { StepsBrandIcon } from "@/components/ui/icons/brands/steps-brand";
import { TruckIcon } from "@/components/ui/icons/truck";
import { Section } from "@/components/ui/common/section";
import { SectionContent } from "@/components/ui/common/section-content";
import { SectionTitle } from "@/components/ui/common/section-title";
import { StoreHighlight } from "@/components/ui/store/store-highlight";
import { StoreHighlights } from "@/components/ui/store/store-highlights";
import { SummarizedProductCard } from "@/components/ui/product/summarized-product-card";
import {
  category,
  defaultCarouselInterval,
  defaultSlideHeight,
  defaultSlideWidth,
  product,
} from "@/constants/constants";
import discountBanner from "@/public/images/discount-banner.png";
import firstOfferBanner from "@/public/images/first-offer-banner.png";
import headerBigBanner from "@/public/images/header-big-banner.png";
import headerSecondBanner from "@/public/images/header-second-banner.png";
import headerThirdBanner from "@/public/images/header-third-banner.png";
import secondOfferBanner from "@/public/images/second-offer-banner.png";
import thirdOfferBanner from "@/public/images/third-offer-banner.png";
import type {
  CarouselProviderCustomProps,
  CarouselRendererProps,
  CustomerTestimonial,
  StoreHighlight as TStoreHighlight,
} from "@/types/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonNextRenderer } from "@/components/carousel/button-next-renderer";
import { ButtonBackRenderer } from "@/components/carousel/button-back-renderer";
import { ClientLink } from "@/components/navigation/client-link";
import { BannerCountdownWrapper } from "@/components/ui/banner/banner-countdown-wrapper";

export default async function Home() {
  const storeHighlights: TStoreHighlight[] = [
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: "Free Shipping",
      description: "Free shipping on all your orders",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: <ShoppingBagCheckedIcon className="h-10 w-10 text-primary" />,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: <BoxIcon className="h-10 w-10 text-primary" />,
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];
  const customerTestimonial: CustomerTestimonial = {
    id: "f015e892-5c95-4a0e-957d-27acac18860d",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    avatarUrl: "https://i.pravatar.cc/200?img=45",
    rating: 5,
    fullName: "Dianne Russell",
  };
  const brandIcons = [
    <StepsBrandIcon
      key={0}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
    <MangoBrandIcon
      key={1}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
    <FoodNetworkBrandIcon
      key={2}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
    <FoodCoUkBrandIcon
      key={3}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
    <BookOffBrandIcon
      key={4}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
    <GSeriesBrandIcon
      key={5}
      className="h-10 w-full text-gray-200 hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
    />,
  ];

  const headerBanners = [
    <Banner
      key={0}
      className="relative md:row-span-2 md:col-span-2 rounded-[10px]"
    >
      <Image
        src={headerBigBanner}
        alt="Header Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[300px] sm:h-[400px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-0 left-0 bg-gradient-to-br from-black/60 to-black/0 h-full w-full rounded-[10px]"></div>
      <div className="absolute top-0 flex flex-1 flex-col gap-y-2 md:gap-y-7 h-full justify-center px-6 md:px-12">
        <h2 className="text-body-xxl md:text-heading-2 font-semibold text-white">
          Fresh and Healthy Organic Food
        </h2>
        <div className="flex flex-col border-l-2 border-primary gap-y-2 pl-2">
          <span className="text-body-small md:text-body-xl font-medium text-white">
            Sale up to
            <span className="bg-warning rounded-[5px] font-semibold px-3 py-1 ml-2 uppercase">
              30% Off
            </span>
          </span>
          <span className="text-body-tiny md:text-body-small font-normal text-white">
            Free shipping on all your orders
          </span>
        </div>
        <ClientLink
          href="/products"
          className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group hover:text-white hover:bg-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
        >
          Shop now
          <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </Banner>,
    <Banner key={1} className="relative col-span-1 rounded-[10px]">
      <div className="h-full absolute top-0 left-0 bg-gradient-to-r from-white/60 via-white/50 to-white/30 w-full rounded-[10px]"></div>
      <Image
        src={headerSecondBanner}
        alt="Second Header Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[300px] sm:h-[400px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-0 left-0 flex flex-1 flex-col gap-y-6 px-8 h-full justify-center">
        <span className="text-gray-900 font-medium text-body-small leading-[100%] uppercase">
          Summer Sale
        </span>
        <h5 className="text-heading-5 font-semibold text-gray-900 uppercase">
          75% Off
        </h5>
        <span className="text-body-small font-normal text-gray-800">
          Only Fruits and Vegetables
        </span>
        <ClientLink
          href="/products"
          className="flex flex-row gap-x-2 items-center text-white max-w-fit bg-primary group hover:bg-white hover:text-primary rounded-full px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
        >
          Shop now
          <ArrowRightIcon className="h-4 w-4 text-white group-hover:text-primary" />
        </ClientLink>
      </div>
    </Banner>,
    <Banner key={2} className="relative col-span-1 rounded-[10px]">
      <Image
        src={headerThirdBanner}
        alt="Third Header Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[300px] sm:h-[400px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-0 left-0 bg-green-gray-900/80 h-full w-full rounded-[10px]"></div>
      <div className="absolute top-0 left-0 flex flex-1 flex-col gap-y-6 md:gap-y-8 items-center px-6 md:px-12 h-full justify-center w-full">
        <span className="text-white font-medium text-body-small leading-[100%] uppercase text-center">
          Best Deal
        </span>
        <h5 className="text-white text-body-xxl md:text-heading-5 font-semibold text-center line-clamp-2">
          Special Products of the Month
        </h5>
        <ClientLink
          href="/products"
          className="flex flex-row gap-x-2 items-center text-primary max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] rounded-full group hover:bg-white hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
        >
          Shop now
          <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-primary" />
        </ClientLink>
      </div>
    </Banner>,
  ];
  const headerBannerCarouselProviderProps: CarouselProviderCustomProps = {
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
  const headerBannerCarouselRendererProps: CarouselRendererProps = {
    carouselSliderProps: {
      className: "h-80 sm:h-[430px]",
      classNameTray: "h-64 sm:h-[430px]",
    },
    mobileMediaQuery: "(max-width: 768px)",
  };
  const highlightCarouselProviderProps: CarouselProviderCustomProps = {
    naturalSlideHeight: defaultSlideHeight,
    naturalSlideWidth: defaultSlideWidth,
    totalSlides: storeHighlights.length,
    interval: defaultCarouselInterval,
    isPlaying: true,
    infinite: true,
    visibleSlides: 1,
    className: "w-full h-20",
    mobileMediaQuery: "(max-width: 768px)",
  };
  const highlightCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    carouselSliderProps: {
      className: "h-20",
      classNameTray: "h-20",
    },
  };
  const categoriesCarouselProviderProps: CarouselProviderCustomProps = {
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
  const categoriesCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    carouselSliderProps: {
      className: "h-48 min-[400px]:h-52 min-[450px]:h-60",
      classNameTray: "h-48 min-[400px]:h-52 min-[450px]:h-60",
    },
  };
  const popularProductsCarouselProviderProps: CarouselProviderCustomProps = {
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
  const popularProductsCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    carouselSliderProps: {
      className:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
      classNameTray:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
    },
  };
  const hotDealsCarouselProviderProps: CarouselProviderCustomProps = {
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
  const hotDealsCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    carouselSliderProps: {
      className:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
      classNameTray:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
    },
  };
  const featuredProductsCarouselProviderProps: CarouselProviderCustomProps = {
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
  const featuredProductsCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    carouselSliderProps: {
      className:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
      classNameTray:
        "h-60 min-[400px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px]",
    },
  };
  const testimonialsCarouselProviderProps: CarouselProviderCustomProps = {
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
  const testimonialsCarouselRendererProps: CarouselRendererProps = {
    renderInDesktop: true,
    carouselSliderProps: {
      className:
        "h-72 min-[420px]:h-72 min-[430px]:h-64 min-[500px]:h-64 min-[520px]:h-60 sm:h-72 md:h-64 lg:h-72 min-[1150px]:h-64",
      classNameTray:
        "h-72 min-[420px]:h-72 min-[430px]:h-64 min-[500px]:h-64 min-[520px]:h-60 sm:h-72 md:h-64 lg:h-72 min-[1150px]:h-64",
    },
  };

  const offerBanners = [
    <Banner
      key={0}
      className="relative flex flex-1 flex-col gap-y-4 items-center"
    >
      <Image
        src={firstOfferBanner}
        alt="Offer Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[500px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full h-[230px]">
        <span className="text-body-small font-normal leading-[100%] text-white uppercase">
          Best Deals
        </span>
        <h3 className="text-heading-4 md:text-heading-3 font-semibold text-white text-center">
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
        <div className="h-full flex flex-1 flex-row items-end">
          <ClientLink
            href="/products"
            className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group hover:text-white hover:bg-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
          >
            Shop now{" "}
            <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-white" />
          </ClientLink>
        </div>
      </div>
    </Banner>,
    <Banner
      key={1}
      className="relative flex flex-1 flex-col gap-y-4 items-center"
    >
      <Image
        src={secondOfferBanner}
        alt="Offer Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[500px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full h-[230px]">
        <span className="text-body-small font-normal leading-[100%] text-white uppercase">
          85% Fat Free
        </span>
        <h3 className="text-heading-4 md:text-heading-3 font-semibold text-white text-center">
          Low-Fat Meat
        </h3>
        <span className="text-white">
          Starting at <span className="text-warning">$79.99</span>
        </span>
        <div className="h-full flex flex-1 flex-row items-end">
          <ClientLink
            href="/products"
            className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group hover:text-white hover:bg-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
          >
            Shop now{" "}
            <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-white" />
          </ClientLink>
        </div>
      </div>
    </Banner>,
    <Banner
      key={2}
      className="relative flex flex-1 flex-col gap-y-4 items-center"
    >
      <Image
        src={thirdOfferBanner}
        alt="Offer Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[500px] lg:h-auto w-full rounded-[10px] object-cover"
      />
      <div className="absolute top-10 left-0 flex flex-1 flex-col gap-y-4 items-center w-full h-[230px]">
        <span className="text-body-small font-normal leading-[100%] text-gray-900 uppercase">
          Summer Sale
        </span>
        <h3 className="text-heading-4 md:text-heading-3 font-semibold text-gray-900 text-center">
          100% Fresh Fruit
        </h3>
        <span className="text-body-xl font-medium text-gray-900">
          Up to
          <span className="bg-gray-900 rounded-[5px] font-semibold px-3 py-1 ml-2 uppercase text-[#FCC900]">
            64% Off
          </span>
        </span>
        <div className="h-full flex flex-1 flex-row items-end">
          <ClientLink
            href="/products"
            className="flex flex-row gap-x-2 items-center text-primary rounded-full bg-white max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group hover:text-white hover:bg-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
          >
            Shop now{" "}
            <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-white" />
          </ClientLink>
        </div>
      </div>
    </Banner>,
  ];
  const offerBannersCarouselProviderProps: CarouselProviderCustomProps = {
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
  const offerBannersCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 1024px)",
    carouselSliderProps: {
      className: "h-[500px]",
      classNameTray: "h-[500px]",
    },
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-row justify-center items-center my-6 px-6 xl:px-0">
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 max-w-7xl w-full">
          {/* FIXME: While carousels are loaded (client component) the server sends a basic HTML version which is
          a column-based slides. We can improve this by using a loader (skeleton) while the component loads. */}
          <CarouselProvider {...headerBannerCarouselProviderProps}>
            <CarouselRenderer {...headerBannerCarouselRendererProps}>
              {headerBanners.map((bannerNode, index) => (
                <SlideRenderer
                  key={index}
                  index={index}
                  mobileMediaQuery="(max-width: 768px)"
                >
                  {bannerNode}
                </SlideRenderer>
              ))}
            </CarouselRenderer>
            <DotsRenderer mobileMediaQuery="(max-width: 768px)">
              <DefaultDotGroup
                disableActiveDots
                className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center"
              />
            </DotsRenderer>
          </CarouselProvider>
        </div>
      </div>
      <div className="flex flex-1 md:justify-center px-6 xl:px-0">
        <StoreHighlights className="relative flex flex-1 flex-col md:flex-row md:flex-wrap md:gap-y-6 lg:flex-nowrap rounded-lg p-6 md:p-10 shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] justify-center items-center lg:items-start max-w-7xl">
          <CarouselProvider {...highlightCarouselProviderProps}>
            <CarouselRenderer {...highlightCarouselRendererProps}>
              {storeHighlights.map(({ description, icon, title }, index) => (
                <SlideRenderer
                  key={index}
                  index={index}
                  className="!pb-16"
                  innerClassName="!h-16"
                  mobileMediaQuery="(max-width: 768px)"
                >
                  <StoreHighlight className="flex flex-1 flex-row gap-x-4 w-full justify-center md:basis-1/2">
                    {icon}
                    <div className="flex flex-1 flex-col gap-y-2">
                      <h3 className="text-body-medium font-semibold text-gray-900">
                        {title}
                      </h3>
                      <p className="text-body-small font-normal text-gray-400">
                        {description}
                      </p>
                    </div>
                  </StoreHighlight>
                </SlideRenderer>
              ))}
            </CarouselRenderer>
            <DotsRenderer mobileMediaQuery="(max-width: 768px)">
              <DefaultDotGroup
                disableActiveDots
                className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center"
              />
            </DotsRenderer>
          </CarouselProvider>
        </StoreHighlights>
      </div>
      <div className="flex flex-1 flex-col gap-y-[60px] mt-[60px] md:items-center">
        <Section className="flex flex-1 flex-col gap-y-8 px-6 xl:px-0 w-full items-center">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900">
                Popular Categories
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6 max-w-7xl w-full">
            <CarouselProvider {...categoriesCarouselProviderProps}>
              <CarouselRenderer {...categoriesCarouselRendererProps}>
                {Array.from({ length: 12 }).map((_value, index) => (
                  <SlideRenderer
                    key={index}
                    index={index}
                    innerClassName="px-1 mx-auto"
                    mobileMediaQuery="(max-width: 768px)"
                  >
                    <CategoryCard
                      url={`/products?categoryIds=${category?.categoryId}`}
                      className="flex flex-1 flex-col items-center justify-center gap-y-1.5 md:gap-y-4 bg-white border border-gray-100 rounded-[5px] pt-4 pb-6 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
                    >
                      {category?.image}
                      <span className="text-body-small md:text-body-large font-medium text-gray-900 text-center truncate whitespace-break-spaces">
                        {category.title}
                      </span>
                    </CategoryCard>
                  </SlideRenderer>
                ))}
              </CarouselRenderer>
              <DotsRenderer mobileMediaQuery="(max-width: 768px)">
                <DefaultDotGroup
                  disableActiveDots
                  className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 xl:px-0">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900">
                Popular Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="max-w-7xl w-full md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            <CarouselProvider {...popularProductsCarouselProviderProps}>
              <CarouselRenderer {...popularProductsCarouselRendererProps}>
                {Array.from({ length: 10 }).map((_value, index) => (
                  <SlideRenderer
                    key={index}
                    index={index}
                    innerClassName="px-1 mx-auto"
                    mobileMediaQuery="(max-width: 768px)"
                  >
                    <BasicProductCard
                      product={product}
                      isFirstOnList={index === 0}
                    />
                  </SlideRenderer>
                ))}
              </CarouselRenderer>
              <DotsRenderer mobileMediaQuery="(max-width: 768px)">
                <DefaultDotGroup
                  disableActiveDots
                  className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center mt-7"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <Section className="lg:flex lg:flex-1 lg:flex-col lg:gap-y-8 lg:items-center px-6 xl:px-0 mt-[60px] md:mt-0 w-full">
          <SectionContent className="max-w-7xl w-full lg:flex lg:flex-1 lg:flex-row lg:gap-x-6">
            <CarouselProvider {...offerBannersCarouselProviderProps}>
              <CarouselRenderer {...offerBannersCarouselRendererProps}>
                {offerBanners.map((bannerNode, index) => (
                  <SlideRenderer
                    key={index}
                    index={index}
                    innerClassName="px-1 mx-auto"
                    mobileMediaQuery="(max-width: 1024px)"
                  >
                    {bannerNode}
                  </SlideRenderer>
                ))}
              </CarouselRenderer>
              <DotsRenderer
                mobileMediaQuery="(max-width: 1024px)"
                className="block lg:hidden"
              >
                <DefaultDotGroup
                  disableActiveDots
                  className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center mt-7"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <div className="bg-[#F7F7F7] py-[60px] w-full px-6 xl:px-0">
          <div className="flex flex-1 flex-row justify-center">
            <Section className="flex flex-1 flex-col gap-y-8 max-w-7xl">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900">
                    Hot Deals
                  </h2>
                  <div className="flex flex-1 flex-row justify-end">
                    <Link
                      href="/products"
                      className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                    >
                      View All
                      <ArrowRightIcon className="h-4 w-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </SectionTitle>
              <SectionContent className="max-w-7xl w-full grid md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                <CarouselProvider {...hotDealsCarouselProviderProps}>
                  <CarouselRenderer {...hotDealsCarouselRendererProps}>
                    {Array.from({ length: 12 }).map((_value, index) => (
                      <SlideRenderer
                        key={index}
                        index={index}
                        innerClassName="px-1 mx-auto"
                        mobileMediaQuery="(max-width: 768px)"
                      >
                        {index === 0 ? (
                          <React.Fragment>
                            <div className="hidden md:block col-span-1 row-span-1 md:col-span-2 md:row-span-2">
                              <SummarizedProductCard
                                product={product}
                                isFirstOnList={index === 0}
                              />
                            </div>
                            <div className="block md:hidden">
                              <BasicProductCard
                                product={product}
                                isFirstOnList={index === 0}
                              />
                            </div>
                          </React.Fragment>
                        ) : (
                          <BasicProductCard
                            product={product}
                            isFirstOnList={index === 0}
                          />
                        )}
                      </SlideRenderer>
                    ))}
                  </CarouselRenderer>
                  <DotsRenderer mobileMediaQuery="(max-width: 768px)">
                    <DefaultDotGroup
                      disableActiveDots
                      className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center mt-7"
                    />
                  </DotsRenderer>
                </CarouselProvider>
              </SectionContent>
            </Section>
          </div>
        </div>
        <div className="w-full">
          <Section className="flex flex-1 flex-row justify-center px-6 xl:px-0">
            <Banner className="relative flex flex-1 flex-col gap-y-4 items-end rounded-[10px] max-w-7xl">
              <div className="bg-gradient-to-r from-black/60 to-black/0 h-[250px] w-full absolute top-0 rounded-[10px] flex md:hidden"></div>
              <Image
                src={discountBanner}
                alt="Offer Banner"
                placeholder="blur"
                quality={100}
                sizes="100vw"
                className="h-[250px] md:h-[300px] lg:h-auto w-full rounded-[10px] object-cover"
              />
              <div className="absolute left-6 md:right-12 flex flex-col gap-y-2 md:gap-y-4 h-full items-start justify-center">
                <span className="text-body-medium font-normal leading-[100%] text-white uppercase">
                  Summer Sale
                </span>
                <h3 className="text-body-xxl md:text-heading-1 font-semibold text-warning">
                  37%{" "}
                  <span className="font-normal uppercase text-white">Off</span>
                </h3>
                <p className="text-body-small md:text-body-medium font-normal text-white">
                  Free Shipping and 30 days money-back guarantee.
                </p>
                <Link
                  href="/products"
                  className="flex flex-row gap-x-2 items-center text-white rounded-full bg-primary max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group hover:bg-white hover:text-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
                >
                  Shop now{" "}
                  <ArrowRightIcon className="h-4 w-4 text-white group-hover:text-primary" />
                </Link>
              </div>
            </Banner>
          </Section>
        </div>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 xl:px-0">
          <SectionTitle className="max-w-7xl w-full">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900">
                Featured Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="text-body-medium font-medium text-primary flex flex-row gap-x-2 items-center justify-end"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="max-w-7xl w-full grid md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            <CarouselProvider {...featuredProductsCarouselProviderProps}>
              <CarouselRenderer {...featuredProductsCarouselRendererProps}>
                {Array.from({ length: 10 }).map((_value, index) => (
                  <SlideRenderer
                    key={index}
                    index={index}
                    innerClassName="px-1 mx-auto"
                    mobileMediaQuery="(max-width: 768px)"
                  >
                    <BasicProductCard
                      product={product}
                      isFirstOnList={index === 0}
                    />
                  </SlideRenderer>
                ))}
              </CarouselRenderer>
              <DotsRenderer mobileMediaQuery="(max-width: 768px)">
                <DefaultDotGroup
                  disableActiveDots
                  className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center mt-7"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <div className="bg-[#F7F7F7] py-[60px] w-full px-6 xl:px-0">
          <div className="flex flex-1 flex-row md:justify-center">
            <CarouselProvider {...testimonialsCarouselProviderProps}>
              <Section className="flex flex-1 flex-col gap-y-8 max-w-7xl">
                <SectionTitle className="w-full">
                  <div className="flex flex-1 flex-row">
                    <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900 text-center md:text-left w-full">
                      Customer Testimonials
                    </h2>
                    <div className="flex-1 flex-row justify-end gap-x-3 hidden md:flex">
                      <ButtonBackRenderer className="rounded-full h-[45px] w-[45px] border border-gray-100 flex flex-row items-center justify-center group hover:bg-primary hover:border-none motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100">
                        <ArrowLeftIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
                      </ButtonBackRenderer>
                      <ButtonNextRenderer className="rounded-full h-[45px] w-[45px] border border-gray-100 flex flex-row items-center justify-center group hover:bg-primary hover:border-none motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100">
                        <ArrowRightIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
                      </ButtonNextRenderer>
                    </div>
                  </div>
                </SectionTitle>
                <SectionContent className="w-full">
                  <CarouselRenderer {...testimonialsCarouselRendererProps}>
                    {Array.from({ length: 6 }).map((_value, index) => (
                      <SlideRenderer
                        key={index}
                        index={index}
                        innerClassName="px-1 mx-auto"
                        renderInDesktop
                      >
                        <HomepageCustomerTestimonial
                          testimonial={customerTestimonial}
                        />
                      </SlideRenderer>
                    ))}
                  </CarouselRenderer>
                  <DotsRenderer renderInDesktop>
                    <DefaultDotGroup
                      disableActiveDots
                      className="flex flex-1 flex-row gap-x-1 w-full justify-center items-center mt-7"
                    />
                  </DotsRenderer>
                </SectionContent>
              </Section>
            </CarouselProvider>
          </div>
        </div>
        <div className="w-full px-6 xl:px-0">
          <div className="flex flex-1 flex-row md:justify-center">
            <Section className="flex flex-1 flex-col gap-y-8 pb-[60px] max-w-7xl w-full">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-body-xl md:text-heading-5 font-semibold text-gray-900 text-center w-full">
                    Trusted by Leading Brands
                  </h2>
                </div>
              </SectionTitle>
              <SectionContent className="max-w-7xl">
                <div className="w-full overflow-x-hidden">
                  <div className="motion-safe:animate-infinite-carousel flex flex-1 flex-row w-[3000px]">
                    {brandIcons.concat(brandIcons).map((brandIcon, index) => (
                      <div key={index} className="flex flex-1">
                        {brandIcon}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionContent>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
