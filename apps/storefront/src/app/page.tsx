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
      icon: <TruckIcon className="size-10 text-primary" />,
      title: "Free Shipping",
      description: "Free shipping on all your orders",
    },
    {
      icon: <HeadphonesIcon className="size-10 text-primary" />,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: <ShoppingBagCheckedIcon className="size-10 text-primary" />,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: <BoxIcon className="size-10 text-primary" />,
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

  const headerBanners = [
    <Banner
      key={0}
      className="relative rounded-[10px] md:col-span-2 md:row-span-2"
    >
      <Image
        src={headerBigBanner}
        alt="Header Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[300px] w-full rounded-[10px] object-cover sm:h-[400px] lg:h-auto"
      />
      <div className="absolute left-0 top-0 size-full rounded-[10px] bg-gradient-to-br from-black/60 to-black/0"></div>
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
          href="/products"
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now
          <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
        </ClientLink>
      </div>
    </Banner>,
    <Banner key={1} className="relative col-span-1 rounded-[10px]">
      <div className="absolute left-0 top-0 size-full rounded-[10px] bg-gradient-to-r from-white/60 via-white/50 to-white/30"></div>
      <Image
        src={headerSecondBanner}
        alt="Second Header Banner"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="h-[300px] w-full rounded-[10px] object-cover sm:h-[400px] lg:h-auto"
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
          href="/products"
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-primary px-5 py-3 text-body-small font-semibold leading-[120%] text-white hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now
          <ArrowRightIcon className="size-4 text-white group-hover:text-primary" />
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
        className="h-[300px] w-full rounded-[10px] object-cover sm:h-[400px] lg:h-auto"
      />
      <div className="absolute left-0 top-0 size-full rounded-[10px] bg-green-gray-900/80"></div>
      <div className="absolute left-0 top-0 flex size-full flex-1 flex-col items-center justify-center gap-y-6 px-6 md:gap-y-8 md:px-12">
        <span className="text-center text-body-small font-medium uppercase leading-[100%] text-white">
          Best Deal
        </span>
        <h5 className="line-clamp-2 text-center text-body-xxl font-semibold text-white md:text-heading-5">
          Special Products of the Month
        </h5>
        <ClientLink
          href="/products"
          className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
        >
          Shop now
          <ArrowRightIcon className="size-4 text-primary group-hover:text-primary" />
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
  const totalCustomerTestimonials = 6;

  const offerBanners = [
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
        className="h-[500px] w-full rounded-[10px] object-cover lg:h-auto"
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
            href="/products"
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
        className="h-[500px] w-full rounded-[10px] object-cover lg:h-auto"
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
            href="/products"
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
        className="h-[500px] w-full rounded-[10px] object-cover lg:h-auto"
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
            href="/products"
            className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
          >
            Shop now{" "}
            <ArrowRightIcon className="size-4 text-primary group-hover:text-white" />
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
  const totalProducts = 10;

  return (
    <div className="flex flex-1 flex-col">
      <div className="my-6 flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
        <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-3 lg:grid-rows-2">
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
                className="flex w-full flex-1 flex-row items-center justify-center gap-x-1"
              />
            </DotsRenderer>
          </CarouselProvider>
        </div>
      </div>
      <div className="flex flex-1 px-6 md:justify-center xl:px-0">
        <StoreHighlights className="relative flex max-w-7xl flex-1 flex-col items-center justify-center rounded-lg p-6 shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] md:flex-row md:flex-wrap md:gap-y-6 md:p-10 lg:flex-nowrap lg:items-start">
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
                  <StoreHighlight className="flex w-full flex-1 flex-row justify-center gap-x-4 md:basis-1/2">
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
                className="flex w-full flex-1 flex-row items-center justify-center gap-x-1"
              />
            </DotsRenderer>
          </CarouselProvider>
        </StoreHighlights>
      </div>
      <div className="mt-[60px] flex flex-1 flex-col gap-y-[60px] md:items-center">
        <Section className="flex w-full flex-1 flex-col items-center gap-y-8 px-6 xl:px-0">
          <SectionTitle className="w-full max-w-7xl">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
                Popular Categories
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
                >
                  View All
                  <ArrowRightIcon className="size-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="w-full max-w-7xl md:grid md:grid-cols-4 md:gap-6 lg:grid-cols-6">
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
                      className="flex flex-1 flex-col items-center justify-center gap-y-1.5 rounded-[5px] border border-gray-100 bg-white pb-6 pt-4 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:gap-y-4"
                    >
                      {category?.image}
                      <span className="truncate whitespace-break-spaces text-center text-body-small font-medium text-gray-900 md:text-body-large">
                        {category.title}
                      </span>
                    </CategoryCard>
                  </SlideRenderer>
                ))}
              </CarouselRenderer>
              <DotsRenderer mobileMediaQuery="(max-width: 768px)">
                <DefaultDotGroup
                  disableActiveDots
                  className="flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 xl:px-0">
          <SectionTitle className="w-full max-w-7xl">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
                Popular Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
                >
                  View All
                  <ArrowRightIcon className="size-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="w-full max-w-7xl md:grid md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            <CarouselProvider {...popularProductsCarouselProviderProps}>
              <CarouselRenderer {...popularProductsCarouselRendererProps}>
                {Array.from({ length: totalProducts }).map((_value, index) => (
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
                  className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <Section className="mt-[60px] w-full px-6 md:mt-0 lg:flex lg:flex-1 lg:flex-col lg:items-center lg:gap-y-8 xl:px-0">
          <SectionContent className="w-full max-w-7xl lg:flex lg:flex-1 lg:flex-row lg:gap-x-6">
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
                  className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <div className="w-full bg-[#F7F7F7] px-6 py-[60px] xl:px-0">
          <div className="flex flex-1 flex-row justify-center">
            <Section className="flex max-w-7xl flex-1 flex-col gap-y-8">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
                    Hot Deals
                  </h2>
                  <div className="flex flex-1 flex-row justify-end">
                    <Link
                      href="/products"
                      className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
                    >
                      View All
                      <ArrowRightIcon className="size-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </SectionTitle>
              <SectionContent className="grid w-full max-w-7xl md:grid-cols-4 md:gap-6 lg:grid-cols-5">
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
                            <div className="col-span-1 row-span-1 hidden md:col-span-2 md:row-span-2 md:block">
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
                      className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                    />
                  </DotsRenderer>
                </CarouselProvider>
              </SectionContent>
            </Section>
          </div>
        </div>
        <div className="w-full">
          <Section className="flex flex-1 flex-row justify-center px-6 xl:px-0">
            <Banner className="relative flex max-w-7xl flex-1 flex-col items-end gap-y-4 rounded-[10px]">
              <div className="absolute top-0 flex h-[250px] w-full rounded-[10px] bg-gradient-to-r from-black/60 to-black/0 md:hidden"></div>
              <Image
                src={discountBanner}
                alt="Offer Banner"
                placeholder="blur"
                quality={100}
                sizes="100vw"
                className="h-[250px] w-full rounded-[10px] object-cover md:h-[300px] lg:h-auto"
              />
              <div className="absolute left-6 flex h-full flex-col items-start justify-center gap-y-2 md:right-12 md:gap-y-4">
                <span className="text-body-medium font-normal uppercase leading-[100%] text-white">
                  Summer Sale
                </span>
                <h3 className="text-body-xxl font-semibold text-warning md:text-heading-1">
                  37%{" "}
                  <span className="font-normal uppercase text-white">Off</span>
                </h3>
                <p className="text-body-small font-normal text-white md:text-body-medium">
                  Free Shipping and 30 days money-back guarantee.
                </p>
                <Link
                  href="/products"
                  className="group flex max-w-fit flex-row items-center gap-x-2 rounded-full bg-primary px-5 py-3 text-body-small font-semibold leading-[120%] text-white hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
                >
                  Shop now{" "}
                  <ArrowRightIcon className="size-4 text-white group-hover:text-primary" />
                </Link>
              </div>
            </Banner>
          </Section>
        </div>
        <Section className="flex flex-1 flex-col gap-y-8 px-6 xl:px-0">
          <SectionTitle className="w-full max-w-7xl">
            <div className="flex flex-1 flex-row">
              <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
                Featured Products
              </h2>
              <div className="flex flex-1 flex-row justify-end">
                <Link
                  href="/products"
                  className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
                >
                  View All
                  <ArrowRightIcon className="size-4 text-primary" />
                </Link>
              </div>
            </div>
          </SectionTitle>
          <SectionContent className="grid w-full max-w-7xl md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            <CarouselProvider {...featuredProductsCarouselProviderProps}>
              <CarouselRenderer {...featuredProductsCarouselRendererProps}>
                {Array.from({ length: totalProducts }).map((_value, index) => (
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
                  className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                />
              </DotsRenderer>
            </CarouselProvider>
          </SectionContent>
        </Section>
        <div className="w-full bg-[#F7F7F7] px-6 py-[60px] xl:px-0">
          <div className="flex flex-1 flex-row md:justify-center">
            <CarouselProvider {...testimonialsCarouselProviderProps}>
              <Section className="flex max-w-7xl flex-1 flex-col gap-y-8">
                <SectionTitle className="w-full">
                  <div className="flex flex-1 flex-row">
                    <h2 className="w-full text-center text-body-xl font-semibold text-gray-900 md:text-left md:text-heading-5">
                      Customer Testimonials
                    </h2>
                    <div className="hidden flex-1 flex-row justify-end gap-x-3 md:flex">
                      <ButtonBackRenderer className="group flex size-[45px] flex-row items-center justify-center rounded-full border border-gray-100 hover:border-none hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                        <ArrowLeftIcon className="size-4 text-gray-900 group-hover:text-white" />
                      </ButtonBackRenderer>
                      <ButtonNextRenderer className="group flex size-[45px] flex-row items-center justify-center rounded-full border border-gray-100 hover:border-none hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                        <ArrowRightIcon className="size-4 text-gray-900 group-hover:text-white" />
                      </ButtonNextRenderer>
                    </div>
                  </div>
                </SectionTitle>
                <SectionContent className="w-full">
                  <CarouselRenderer {...testimonialsCarouselRendererProps}>
                    {Array.from({ length: totalCustomerTestimonials }).map(
                      (_value, index) => (
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
                      )
                    )}
                  </CarouselRenderer>
                  <DotsRenderer renderInDesktop>
                    <DefaultDotGroup
                      disableActiveDots
                      className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
                    />
                  </DotsRenderer>
                </SectionContent>
              </Section>
            </CarouselProvider>
          </div>
        </div>
        <div className="w-full px-6 xl:px-0">
          <div className="flex flex-1 flex-row md:justify-center">
            <Section className="flex w-full max-w-7xl flex-1 flex-col gap-y-8 pb-[60px]">
              <SectionTitle className="w-full">
                <div className="flex flex-1 flex-row">
                  <h2 className="w-full text-center text-body-xl font-semibold text-gray-900 md:text-heading-5">
                    Trusted by Leading Brands
                  </h2>
                </div>
              </SectionTitle>
              <SectionContent className="max-w-7xl">
                <div className="w-full overflow-x-hidden">
                  <div className="flex w-[3000px] flex-1 flex-row motion-safe:animate-infinite-carousel">
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
