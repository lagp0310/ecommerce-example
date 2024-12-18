import { CarouselProvider } from "@/components/carousel/carousel-provider";
import { CarouselRenderer } from "@/components/carousel/carousel-renderer";
import { DefaultDotGroup } from "@/components/carousel/default-dot-group";
import { DotsRenderer } from "@/components/carousel/dots-renderer";
import { SlideRenderer } from "@/components/carousel/slide-renderer";
import { Section } from "@/components/ui/common/section";
import { SectionContent } from "@/components/ui/common/section-content";
import { SectionTitle } from "@/components/ui/common/section-title";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import { ProductPricing } from "@/components/ui/product/product-pricing";
import { ProductTag } from "@/components/ui/product/product-tag";
import { ProductTitle } from "@/components/ui/product/product-title";
import { Rating } from "@/components/ui/product/rating";
import {
  defaultCarouselInterval,
  defaultProductsShowPerPage,
  defaultSlideHeight,
  defaultSlideWidth,
  defaultSortBy,
  defaultSortByDirection,
  product,
} from "@/constants/constants";
import { cn } from "@/lib/utils";
import type {
  CarouselProviderCustomProps,
  CarouselRendererProps,
} from "@/types/types";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(await params);

  const {
    name,
    price,
    discountedPrice,
    imageUrl,
    currencies: { currencySymbol },
    rating,
    generalTags,
    discountTags,
    totalRatings,
    description,
  } = product;
  const relatedProductsLength = 10;
  const relatedProductsCarouselProviderProps: CarouselProviderCustomProps = {
    naturalSlideHeight: defaultSlideHeight,
    naturalSlideWidth: defaultSlideWidth,
    totalSlides: relatedProductsLength,
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
  };
  const relatedProductsCarouselRendererProps: CarouselRendererProps = {
    mobileMediaQuery: "(max-width: 768px)",
    renderInDesktop: true,
    carouselSliderProps: {
      className:
        "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
      classNameTray:
        "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
    },
  };

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex max-w-7xl flex-1 flex-col px-6 py-8 xl:px-0">
        <div className="flex flex-1 flex-col gap-x-4 sm:flex-row">
          <Image
            src={imageUrl}
            alt={name}
            width={500}
            height={400}
            className="flex flex-1 basis-1/2 flex-row items-center justify-center"
          />
          <div className="flex basis-1/2 flex-col gap-6">
            <div className="flex flex-col justify-center gap-5 border-b border-gray-100 pb-5">
              <div className="flex flex-row flex-wrap items-center gap-4">
                <ProductTitle className="text-heading-4 font-normal text-gray-900">
                  {name}
                </ProductTitle>
                <div className="mr-20 flex flex-1 flex-row flex-wrap gap-2 min-[400px]:mr-0 sm:mr-10 min-[740px]:mr-20 min-[800px]:mr-0">
                  {generalTags?.map((tag, index) => (
                    <ProductTag
                      key={index}
                      tag={tag}
                      className="line-clamp-1"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Rating
                  className="flex flex-row justify-end gap-x-0.5"
                  rating={rating}
                  emptyIcon={<StarIcon className="size-[18px] text-warning" />}
                  filledIcon={
                    <FilledStarIcon className="size-[18px] text-warning" />
                  }
                />
                <div className="items-center">
                  <span className="text-body-small font-normal text-gray-600">{`${totalRatings} Reviews`}</span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <ProductPricing
                  className="flex flex-row items-center gap-2"
                  currencySymbol={currencySymbol}
                  price={price}
                  discountedPrice={discountedPrice}
                  discountedPriceClasses={cn(
                    "font-medium text-body-xxl text-hard-primary"
                  )}
                  priceClasses={cn(
                    "font-medium text-body-xxl text-hard-primary",
                    {
                      "font-normal leading-[150%] text-body-xl text-gray-300":
                        !!discountedPrice,
                    }
                  )}
                />
                <div className="flex flex-1 flex-row flex-wrap items-center gap-2">
                  {discountTags?.map((tag, index) => (
                    <ProductTag key={index} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 border-b border-gray-100 pb-5">
              <p className="line-clamp-4 text-body-small font-normal text-gray-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section className="flex w-full flex-1 flex-col items-center gap-y-8 px-6 xl:px-0">
        <SectionTitle className="w-full max-w-7xl">
          <div className="flex flex-1 flex-row">
            <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
              Related Products
            </h2>
            <div className="flex flex-1 flex-row justify-end">
              <Link
                href={`/products?page=1&perPage=${defaultProductsShowPerPage}&sortBy=${defaultSortBy}&sortByDirection=${defaultSortByDirection}`}
                className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
              >
                View All
                <ArrowRightIcon className="size-4 text-primary" />
              </Link>
            </div>
          </div>
        </SectionTitle>
        <SectionContent className="w-full max-w-7xl">
          <CarouselProvider {...relatedProductsCarouselProviderProps}>
            <CarouselRenderer {...relatedProductsCarouselRendererProps}>
              {Array.from({ length: relatedProductsLength }).map(
                (_value, index) => (
                  <SlideRenderer
                    key={index}
                    index={index}
                    innerClassName="px-1 mx-auto"
                    mobileMediaQuery="(max-width: 768px)"
                    renderInDesktop
                  >
                    <BasicProductCard
                      product={product}
                      cardClassname="max-w-fit mt-2"
                    />
                  </SlideRenderer>
                )
              )}
            </CarouselRenderer>
            <DotsRenderer mobileMediaQuery="(max-width: 768px)" renderInDesktop>
              <DefaultDotGroup
                disableActiveDots
                className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
              />
            </DotsRenderer>
          </CarouselProvider>
        </SectionContent>
      </Section>
    </div>
  );
}
