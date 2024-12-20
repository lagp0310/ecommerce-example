import { cn } from "@/lib/utils";
import type { TProduct } from "@/types/types";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ProductCard } from "@/components/ui//product/product-card";
import { Rating } from "@/components/ui/product/rating";
import { ClientLink } from "@/components/navigation/client-link";
import { BannerCountdownWrapper } from "@/components/ui/banner/banner-countdown-wrapper";
import { ProductTag } from "./product-tag";
import { ProductPricing } from "./product-pricing";
import Image from "next/image";
import { AddToCartWrapper } from "@/components/ui/product/add-to-cart-wrapper";
import { defaultCurrencySymbol } from "@/constants/constants";

type Props = {
  product: TProduct;
  shouldShowProductTags?: boolean;
  shouldUseNextLink?: boolean;
  productCardClassName?: string;
};

export function SummarizedProductCard({
  product: {
    id,
    slug,
    name,
    price,
    discountedPrice,
    currencies,
    imageUrl,
    rating,
    totalRatings,
    generalTags,
    discountTags,
    ...restProduct
  },
  shouldShowProductTags = true,
  shouldUseNextLink = true,
  productCardClassName,
}: Props) {
  const product = {
    id,
    slug,
    name,
    price,
    discountedPrice,
    currencies,
    imageUrl,
    rating,
    totalRatings,
    generalTags,
    discountTags,
    ...restProduct,
  };
  const allTags = generalTags?.concat(discountTags ?? []);
  const shouldShowTags =
    Array.isArray(allTags) && allTags.length > 0 && shouldShowProductTags;
  const productActions = (
    <div className="flex h-[45px] w-full flex-row items-center justify-center gap-x-2">
      {/* <Button className="group flex size-8 flex-row items-center justify-center rounded-full bg-gray-50 hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
        <HeartIcon className="size-4 text-gray-900 group-hover:text-white" />
      </Button> */}
      <AddToCartWrapper
        product={product}
        className="group flex h-[45px] w-full flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
        minusClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
        moreClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
      >
        Add to Cart
        <ShoppingBagIcon className="size-4 group-hover:text-primary group-disabled:group-hover:text-white" />
      </AddToCartWrapper>
    </div>
  );
  const productData = (
    <React.Fragment>
      <span className="line-clamp-2 truncate text-body-large font-normal text-hard-primary">
        {name}
      </span>
      <ProductPricing
        className="flex flex-row gap-x-2"
        price={price}
        discountedPrice={discountedPrice}
        currencySymbol={currencies?.symbol ?? defaultCurrencySymbol}
        discountedPriceClasses={cn({
          "text-body-xxl font-medium text-gray-900 truncate line-clamp-1":
            !discountedPrice,
        })}
        priceClasses={cn({
          "text-body-xxl font-normal text-gray-400 leading-[150%] line-through truncate line-clamp-1":
            discountedPrice,
          "text-body-medium font-medium text-gray-900 truncate line-clamp-1":
            !discountedPrice,
        })}
      />
      {typeof rating === "number" ? (
        <div className="flex flex-row items-center gap-x-1">
          <Rating
            className="flex flex-1 flex-row gap-x-0.5"
            rating={rating}
            emptyIcon={<StarIcon className="size-3 text-warning" />}
            filledIcon={<FilledStarIcon className="size-3 text-warning" />}
          />
          {typeof totalRatings === "number" ? (
            <span className="text-body-tiny font-normal text-gray-500">
              {`(${totalRatings})`}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col items-center gap-y-4 pt-[18px]">
        <span className="text-body-small leading-[18px] text-gray-400">
          Hurry up! Offer ends In:
        </span>
        <BannerCountdownWrapper
          className="flex flex-1 flex-row gap-x-4"
          semicolonClasses="font-normal text-body-xl text-gray-500"
          timeClasses="font-medium text-body-large text-gray-900 uppercase"
          timeUnitClasses="font-medium text-[10px] leading-[100%] text-gray-400 uppercase"
        />
      </div>
    </React.Fragment>
  );
  const productPresentation = (
    <React.Fragment>
      {shouldShowTags ? (
        <div className="absolute left-3 top-3 z-20 flex flex-1 flex-row flex-wrap gap-x-2 gap-y-1 pr-12 text-body-tiny md:text-body-small">
          {allTags.map((tag, index) => (
            <ProductTag
              key={index}
              tag={tag}
              className="cursor-pointer truncate whitespace-break-spaces rounded-[4px] px-2 py-[3px] font-normal"
            />
          ))}
        </div>
      ) : null}
      {typeof imageUrl === "string" ? (
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="flex max-h-80 min-h-[250px] flex-1 flex-row justify-center object-contain"
        />
      ) : null}
    </React.Fragment>
  );
  const productNode = (
    <ProductCard
      className={cn(
        "h-full relative bg-white flex flex-1 flex-col justify-center border border-gray-100 gap-y-[6px] p-3 rounded-[5px] hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 col-span-1 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100",
        productCardClassName
      )}
    >
      {shouldUseNextLink ? (
        <ClientLink
          href={`/products/${slug}`}
          className="flex flex-1 flex-col items-center gap-y-2 pt-[6px]"
        >
          {productPresentation}
        </ClientLink>
      ) : (
        productPresentation
      )}
      {productActions}
      {shouldUseNextLink ? (
        <ClientLink
          href={`/products/${slug}`}
          className="flex flex-1 flex-col items-center gap-y-2 pt-[6px]"
        >
          {productData}
        </ClientLink>
      ) : (
        productData
      )}
    </ProductCard>
  );

  return <React.Fragment>{productNode}</React.Fragment>;
}
