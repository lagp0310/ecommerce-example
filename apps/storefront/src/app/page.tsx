import { Banner } from "@/components/ui/banner/banner";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import { CarouselRenderer } from "@/components/carousel/carousel-renderer";
import { CarouselProvider } from "@/components/carousel/carousel-provider";
import { DefaultDotGroup } from "@/components/carousel/default-dot-group";
import { DotsRenderer } from "@/components/carousel/dots-renderer";
import { SlideRenderer } from "@/components/carousel/slide-renderer";
import { CategoryCard } from "@/components/ui/category/category-card";
import { Section } from "@/components/ui/common/section";
import { SectionContent } from "@/components/ui/common/section-content";
import { SectionTitle } from "@/components/ui/common/section-title";
import { StoreFeature } from "@/components/ui/store/store-feature";
import { StoreFeatures } from "@/components/ui/store/store-features";
import { SummarizedProductCard } from "@/components/ui/product/summarized-product-card";
import { StoreFeatureIcon } from "@/types/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCarouselSection } from "@/components/ui/product/product-carousel-section";
import { queryGraphql } from "@/lib/server-query";
import { allCategories } from "@/gql/queries/category/queries";
import { env } from "@/lib/env";
import { allStoreFeatures } from "@/gql/queries/store-feature/queries";
import { allProducts } from "@/gql/queries/product/queries";
import {
  cn,
  getHeaderBannerWrapper,
  getOfferBannerWrapper,
  getStoreFeaturesIcon,
  parseProductTags,
} from "@/lib/utils";
import {
  brandIcons,
  categoriesCarouselProviderProps,
  categoriesCarouselRendererProps,
  categoriesToShow,
  featuredProductsCarouselProviderProps,
  featuredProductsCarouselRendererProps,
  featuredProductsToShow,
  headerBannerCarouselProviderProps,
  headerBannerCarouselRendererProps,
  highlightCarouselProviderProps,
  highlightCarouselRendererProps,
  hotDealsCarouselProviderProps,
  hotDealsCarouselRendererProps,
  hotDealsProductsToShow,
  offerBannersCarouselProviderProps,
  offerBannersCarouselRendererProps,
  popularProductsCarouselProviderProps,
  popularProductsCarouselRendererProps,
  popularProductsToShow,
  storeFeaturesToShow,
} from "@/constants/homepage/constants";
import type {
  CategoryResponse,
  HeaderBannerResponse,
  ImageBannerResponse,
  OfferBannerResponse,
  ProductsResponse,
  StoreFeatureResponse,
} from "@/types/types";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import { allHeaderBanners } from "@/gql/queries/header-banner/queries";
import { allImageBanners } from "@/gql/queries/image-banner/queries";
import { allOfferBanners } from "@/gql/queries/offer-banner/queries";
import { ImageBannerWrapper } from "@/components/ui/banner/image-banner-wrapper";

export default async function Home() {
  const [
    headerBanners,
    offerBanners,
    imageBanners,
    storeFeatures,
    popularProductsResult,
    hotDealsProductsResult,
    featuredProductsResult,
    categories,
  ] = await Promise.all([
    queryGraphql<HeaderBannerResponse[]>(
      "headerBannersCollection",
      allHeaderBanners,
      {
        filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
        orderBy: { created_at: "AscNullsLast" },
      }
    ),
    queryGraphql<OfferBannerResponse[]>(
      "offerBannersCollection",
      allOfferBanners,
      {
        filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
        orderBy: { created_at: "AscNullsLast" },
      }
    ),
    queryGraphql<ImageBannerResponse[]>(
      "imageBannersCollection",
      allImageBanners,
      {
        filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
        orderBy: { created_at: "AscNullsLast" },
      }
    ),
    queryGraphql<StoreFeatureResponse[]>(
      "storeFeaturesCollection",
      allStoreFeatures,
      {
        first: storeFeaturesToShow,
        filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
        orderBy: { render_order: "AscNullsFirst" },
      }
    ),
    queryGraphql<ProductsResponse[]>("productsCollection", allProducts, {
      first: popularProductsToShow,
      filter: {
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
        available_quantity: { gt: 0 },
      },
      orderBy: { render_order: "AscNullsLast" },
    }),
    queryGraphql<ProductsResponse[]>("productsCollection", allProducts, {
      first: hotDealsProductsToShow,
      filter: {
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
        available_quantity: { gt: 0 },
      },
      orderBy: { render_order: "AscNullsLast" },
    }),
    queryGraphql<ProductsResponse[]>("productsCollection", allProducts, {
      first: featuredProductsToShow,
      filter: {
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
        available_quantity: { gt: 0 },
      },
      orderBy: { render_order: "AscNullsLast" },
    }),
    queryGraphql<CategoryResponse[]>("categoriesCollection", allCategories, {
      first: categoriesToShow,
      filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
      orderBy: { name: "AscNullsFirst" },
    }),
  ]);

  const imageBanner = imageBanners?.at(0);

  const popularProducts = parseProductTags(popularProductsResult);
  const hotDealsProducts = parseProductTags(hotDealsProductsResult);
  const featuredProducts = parseProductTags(featuredProductsResult);

  return (
    <div className="flex flex-1 flex-col">
      <div className="my-6 flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
        <section className="grid w-full max-w-7xl gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* FIXME: While carousels are loaded (client component) the server sends a basic HTML version which is
          a column-based slides. We can improve this by using a loader (skeleton) while the component loads. */}
          <CarouselProvider
            {...headerBannerCarouselProviderProps(headerBanners?.length ?? 0)}
          >
            <CarouselRenderer {...headerBannerCarouselRendererProps}>
              {headerBanners?.map(
                (
                  {
                    id,
                    bannerType: { type, ...bannerTypeRest },
                    ...bannerRest
                  },
                  index
                ) => (
                  <SlideRenderer
                    key={id}
                    index={index}
                    mobileMediaQuery="(max-width: 768px)"
                  >
                    <Banner
                      className={cn({
                        "relative rounded-ten md:col-span-2 md:row-span-2":
                          type === "header_sale_remark",
                        "relative col-span-1 rounded-ten":
                          type === "header_sale" ||
                          type === "header_title_only",
                      })}
                    >
                      {getHeaderBannerWrapper(type, {
                        id,
                        bannerType: { type, ...bannerTypeRest },
                        ...bannerRest,
                      })}
                    </Banner>
                  </SlideRenderer>
                )
              )}
            </CarouselRenderer>
            <DotsRenderer mobileMediaQuery="(max-width: 768px)">
              <DefaultDotGroup
                disableActiveDots
                className="flex w-full flex-1 flex-row items-center justify-center gap-x-1"
              />
            </DotsRenderer>
          </CarouselProvider>
        </section>
      </div>
      <div className="flex flex-1 px-6 md:justify-center xl:px-0">
        <StoreFeatures className="relative flex max-w-7xl flex-1 flex-col items-center justify-center rounded-lg p-6 shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] md:flex-row md:flex-wrap md:gap-y-6 md:p-10 lg:flex-nowrap lg:items-start">
          <CarouselProvider
            {...highlightCarouselProviderProps(storeFeatures?.length ?? 0)}
          >
            <CarouselRenderer {...highlightCarouselRendererProps}>
              {storeFeatures?.map(
                ({ id, description, iconName, title }, index) => (
                  <SlideRenderer
                    key={id}
                    index={index}
                    className="!pb-16"
                    innerClassName="!h-16"
                    mobileMediaQuery="(max-width: 768px)"
                  >
                    <StoreFeature className="flex w-full flex-1 flex-row justify-center gap-x-4 md:basis-1/2">
                      {typeof iconName === "string"
                        ? getStoreFeaturesIcon(iconName as StoreFeatureIcon)
                        : null}
                      <div className="flex flex-1 flex-col gap-y-2">
                        <h3 className="text-body-medium font-semibold text-gray-900">
                          {title}
                        </h3>
                        <p className="text-body-small font-normal text-gray-400">
                          {description}
                        </p>
                      </div>
                    </StoreFeature>
                  </SlideRenderer>
                )
              )}
            </CarouselRenderer>
            <DotsRenderer mobileMediaQuery="(max-width: 768px)">
              <DefaultDotGroup
                disableActiveDots
                className="flex w-full flex-1 flex-row items-center justify-center gap-x-1"
              />
            </DotsRenderer>
          </CarouselProvider>
        </StoreFeatures>
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
                  href={`/products?${defaultProductsSearchParams.toString()}`}
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
                {categories?.map(({ id, name, imageUrl }, index) => {
                  const categoriesSearchParams = new URLSearchParams(
                    defaultProductsSearchParams
                  );
                  categoriesSearchParams.set("categories", id);

                  return (
                    <SlideRenderer
                      key={id}
                      index={index}
                      innerClassName="px-1 mx-auto"
                      mobileMediaQuery="(max-width: 768px)"
                    >
                      <CategoryCard
                        url={`/products?${categoriesSearchParams.toString()}`}
                        className="flex flex-1 flex-col items-center justify-center gap-y-1.5 rounded-[5px] border border-gray-100 bg-white pb-6 pt-4 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:gap-y-4"
                      >
                        {typeof imageUrl === "string" ? (
                          <Image
                            src={imageUrl}
                            alt={name}
                            width={180}
                            height={130}
                            quality={100}
                            sizes="100vw"
                            className="h-[130px] w-full object-contain"
                          />
                        ) : null}
                        <span className="truncate whitespace-break-spaces text-center text-body-small font-medium text-gray-900 md:text-body-large">
                          {name}
                        </span>
                      </CategoryCard>
                    </SlideRenderer>
                  );
                })}
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
        <ProductCarouselSection
          sectionTitle="Popular Products"
          carouselProviderProps={popularProductsCarouselProviderProps}
          carouselRendererProps={popularProductsCarouselRendererProps}
          products={popularProducts}
        />
        <Section className="mt-[60px] w-full px-6 md:mt-0 lg:flex lg:flex-1 lg:flex-col lg:items-center lg:gap-y-8 xl:px-0">
          <SectionContent className="w-full max-w-7xl lg:flex lg:flex-1 lg:flex-row lg:gap-x-6">
            <CarouselProvider
              {...offerBannersCarouselProviderProps(offerBanners?.length ?? 0)}
            >
              <CarouselRenderer {...offerBannersCarouselRendererProps}>
                {offerBanners?.map(
                  (
                    {
                      id,
                      bannerType: { type, ...bannerTypeRest },
                      ...bannerRest
                    },
                    index
                  ) => (
                    <SlideRenderer
                      key={id}
                      index={index}
                      innerClassName="px-1 mx-auto"
                      mobileMediaQuery="(max-width: 1024px)"
                    >
                      <Banner className="relative flex flex-1 flex-col items-center gap-y-4">
                        {getOfferBannerWrapper(type, {
                          id,
                          bannerType: { type, ...bannerTypeRest },
                          ...bannerRest,
                        })}
                      </Banner>
                    </SlideRenderer>
                  )
                )}
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
                      href={`/products?${defaultProductsSearchParams.toString()}`}
                      className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
                    >
                      View All
                      <ArrowRightIcon className="size-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </SectionTitle>
              <SectionContent className="grid w-full max-w-7xl md:grid-cols-3 md:gap-6 min-[900px]:grid-cols-4 lg:grid-cols-5">
                <CarouselProvider {...hotDealsCarouselProviderProps}>
                  <CarouselRenderer {...hotDealsCarouselRendererProps}>
                    {hotDealsProducts?.map((product, index) => (
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
                                productCardClassName="col-span-2 row-span-2"
                              />
                            </div>
                            <div className="block md:hidden">
                              <BasicProductCard
                                product={product}
                                cardClassname="mt-2 md:mt-0"
                              />
                            </div>
                          </React.Fragment>
                        ) : (
                          <BasicProductCard
                            product={product}
                            cardClassname="mt-2 md:mt-0"
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
        {!!imageBanner ? <ImageBannerWrapper {...imageBanner} /> : null}
        <ProductCarouselSection
          sectionTitle="Featured Products"
          carouselProviderProps={featuredProductsCarouselProviderProps}
          carouselRendererProps={featuredProductsCarouselRendererProps}
          products={featuredProducts}
        />
        {/* TODO: Pending feature. */}
        {/* <div className="w-full bg-[#F7F7F7] px-6 py-[60px] xl:px-0">
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
        </div> */}
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
