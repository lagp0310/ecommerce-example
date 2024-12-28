import { CarouselProvider } from "@/components/carousel/carousel-provider";
import { CarouselRenderer } from "@/components/carousel/carousel-renderer";
import { DefaultDotGroup } from "@/components/carousel/default-dot-group";
import { DotsRenderer } from "@/components/carousel/dots-renderer";
import { SlideRenderer } from "@/components/carousel/slide-renderer";
import { Section } from "@/components/ui/common/section";
import { SectionContent } from "@/components/ui/common/section-content";
import { SectionTitle } from "@/components/ui/common/section-title";
import {
  AddToCartWrapper,
  type Props as AddToCartWrapperProps,
} from "@/components/ui/product/add-to-cart-wrapper";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import {
  ProductPricing,
  type Props as ProductPricingProps,
} from "@/components/ui/product/product-pricing";
import { ProductTag } from "@/components/ui/product/product-tag";
import { ProductTitle } from "@/components/ui/product/product-title";
import { Rating } from "@/components/ui/product/rating";
import {
  defaultCurrencySymbol,
  defaultSortBy,
  defaultSortByDirection,
} from "@/constants/constants";
import {
  defaultProductsSearchParams,
  relatedProductsCarouselProviderProps,
  relatedProductsCarouselRendererProps,
  relatedProductsToShow,
} from "@/constants/product/constants";
import { allProducts } from "@/gql/queries/product/queries";
import { env } from "@/lib/env";
import { queryGraphql } from "@/lib/server-query";
import { cn, parseProductTags } from "@/lib/utils";
import type { ProductsResponse, TProduct } from "@/types/types";
import {
  ArrowRightIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const productResult = await queryGraphql<ProductsResponse[]>(
    "productsCollection",
    allProducts,
    {
      filter: {
        slug: { eq: slug },
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
      },
      orderBy: {
        [defaultSortBy]:
          defaultSortByDirection === "asc" ? "AscNullsLast" : "DescNullsLast",
      },
    }
  );
  const product = parseProductTags(productResult)?.at(0);
  const {
    id: productId,
    name,
    price,
    discountedPrice,
    imageUrl,
    currencies,
    rating,
    generalTags,
    discountTags,
    description,
  } = product as TProduct;

  const relatedProductsResult = await queryGraphql<ProductsResponse[]>(
    "productsCollection",
    allProducts,
    {
      first: relatedProductsToShow,
      filter: {
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
        available_quantity: { gt: 0 },
        id: { neq: productId },
      },
      orderBy: {
        [defaultSortBy]:
          defaultSortByDirection === "asc" ? "AscNullsLast" : "DescNullsLast",
      },
    }
  );
  const relatedProducts = parseProductTags(relatedProductsResult);

  const addToCartWrapperProps: Partial<AddToCartWrapperProps> = {
    wrapperClassName: "flex flex-row w-fit h-[30px] md:h-[45px] mt-3 md:mt-0",
    counterWrapperClassName: "flex",
    className:
      "group flex h-[30px] md:h-[45px] flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:border-none disabled:opacity-50 disabled:transition-none disabled:hover:bg-primary disabled:hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    minusClassName:
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    moreClassName:
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-4 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
  };
  const productPricingProps: ProductPricingProps = {
    className: "flex flex-row items-center gap-2",
    currencySymbol: currencies?.symbol ?? defaultCurrencySymbol,
    price,
    discountedPrice,
    discountedPriceClasses: cn("font-medium text-body-xxl text-hard-primary"),
    priceClasses: cn("font-medium text-body-xxl text-hard-primary", {
      "font-normal leading-[150%] text-body-xl text-gray-300":
        !!discountedPrice,
    }),
  };

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex max-w-7xl flex-1 flex-col px-6 py-8 xl:px-0">
        <div className="flex flex-1 flex-col gap-x-4 sm:flex-row">
          <div className="flex flex-1 basis-1/2 flex-row items-center justify-center">
            {typeof imageUrl === "string" ? (
              <Image
                src={imageUrl}
                alt={name}
                width={550}
                height={550}
                quality={100}
                sizes="100vw"
                className="max-h-52 max-w-52 md:max-h-64 md:max-w-64 lg:max-h-[550px] lg:max-w-[550px]"
              />
            ) : null}
          </div>
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
                {typeof rating === "number" ? (
                  <Rating
                    className="flex flex-row justify-end gap-x-0.5"
                    rating={rating}
                    emptyIcon={
                      <StarIcon className="size-[18px] text-warning" />
                    }
                    filledIcon={
                      <FilledStarIcon className="size-[18px] text-warning" />
                    }
                  />
                ) : null}
                {/* <div className="items-center">
                  <span className="text-body-small font-normal text-gray-600">{`${totalRatings} Reviews`}</span>
                </div> */}
              </div>
              <div className="flex flex-row items-center gap-4">
                <ProductPricing {...productPricingProps} />
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
            <div className="flex h-[30px] flex-row items-center gap-3 pb-5 md:h-[45px]">
              {!!product ? (
                <AddToCartWrapper {...addToCartWrapperProps} product={product}>
                  Add to Cart
                  <ShoppingBagIcon className="size-5 group-hover:text-primary group-disabled:text-white" />
                </AddToCartWrapper>
              ) : null}
              {/* <Button className="h-[50px] w-[50px] group flex flex-row items-center justify-center rounded-full bg-gray-50 hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                <HeartIcon className="size-5 text-gray-900 group-hover:text-white" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      {/* TODO: We could use the same section component from homepage instead. */}
      <Section className="flex w-full flex-1 flex-col items-center gap-y-8 px-6 xl:px-0">
        <SectionTitle className="w-full max-w-7xl">
          <div className="flex flex-1 flex-row">
            <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
              Related Products
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
        <SectionContent className="w-full max-w-7xl">
          <CarouselProvider
            {...relatedProductsCarouselProviderProps(
              relatedProducts?.length ?? 0
            )}
          >
            <CarouselRenderer {...relatedProductsCarouselRendererProps}>
              {relatedProducts?.map((product, index) => (
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
              ))}
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
