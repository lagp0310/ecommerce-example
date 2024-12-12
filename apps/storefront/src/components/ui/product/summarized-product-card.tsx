import { cn } from "@/lib/utils";
import { Product } from "@/types/types";
import {
  HeartIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button } from "@/components/ui/common/button";
import { ProductCard } from "@/components/ui//product/product-card";
import { Rating } from "@/components/ui/product/rating";
import { ClientLink } from "@/components/navigation/client-link";
import { BannerCountdownWrapper } from "@/components/ui/banner/banner-countdown-wrapper";

type Props = {
  product: Product;
  shouldShowProductTags?: boolean;
  shouldUseNextLink?: boolean;
  isFirstOnList: boolean;
};

export function SummarizedProductCard({
  product: {
    id,
    name,
    price,
    currencySymbol,
    discountedPrice,
    image,
    rating,
    totalRatings,
    tags,
  },
  shouldShowProductTags = true,
  shouldUseNextLink = true,
  isFirstOnList,
}: Props) {
  const shouldShowTags =
    Array.isArray(tags) &&
    tags.length > 0 &&
    shouldShowProductTags &&
    isFirstOnList;
  const productActions = (
    <div className="flex flex-row gap-x-2">
      <Button className="bg-gray-50 rounded-full h-8 w-8 flex flex-row justify-center items-center group hover:bg-primary">
        <HeartIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
      </Button>
      <Button className="bg-primary text-white flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full text-body-small font-semibold group hover:text-primary hover:border hover:border-primary hover:bg-white leading-6">
        Add to Cart
        <ShoppingBagIcon className="h-4 w-4 group-hover:text-primary" />
      </Button>
    </div>
  );
  const productData = (
    <React.Fragment>
      <span className="text-body-large font-normal text-hard-primary truncate line-clamp-2">
        {name}
      </span>
      <div className="flex flex-row gap-x-2">
        {!!discountedPrice && isFirstOnList ? (
          <span
            className={cn({
              "text-body-xxl font-medium text-gray-900 truncate line-clamp-1":
                !discountedPrice,
            })}
          >{`${currencySymbol}${discountedPrice}`}</span>
        ) : null}
        <span
          className={cn({
            "text-body-xxl font-normal text-gray-400 leading-[150%] line-through truncate line-clamp-1":
              discountedPrice && isFirstOnList,
            "text-body-medium font-medium text-gray-900 truncate line-clamp-1":
              !discountedPrice,
          })}
        >{`${currencySymbol}${price}`}</span>
      </div>
      {typeof rating === "number" && typeof totalRatings === "number" ? (
        <div className="flex flex-row gap-x-1 items-center">
          <Rating
            className="flex flex-1 flex-row gap-x-0.5"
            rating={rating}
            emptyIcon={<StarIcon className="text-warning h-3 w-3" />}
            filledIcon={<FilledStarIcon className="text-warning h-3 w-3" />}
          />
          <span className="text-body-tiny font-normal text-gray-500">
            {`(${totalRatings})`}
          </span>
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
        <div className="z-20 absolute top-3 left-3 flex flex-1 flex-row gap-x-2 text-body-tiny md:text-body-small flex-wrap pr-12 gap-y-1">
          {tags.map(({ text, type }, index) => (
            <span
              key={index}
              className={cn(
                "font-normal cursor-pointer rounded-[4px] px-2 py-[3px] truncate whitespace-break-spaces",
                {
                  "bg-blue-500 text-white": type === "info",
                  "bg-danger text-white": type === "danger",
                }
              )}
            >
              {text}
            </span>
          ))}
        </div>
      ) : null}
      <div className="flex flex-1 flex-row justify-center min-h-[250px]">
        {image}
      </div>
    </React.Fragment>
  );
  const productNode = (
    <ProductCard
      className={cn(
        "h-full relative bg-white flex flex-1 flex-col justify-center border border-gray-100 gap-y-[6px] p-3 rounded-[5px] hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 col-span-1 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100",
        {
          "col-span-2 row-span-2": isFirstOnList,
        }
      )}
    >
      {shouldUseNextLink ? (
        <ClientLink
          href={`/products/${id}`}
          className="flex flex-1 flex-col gap-y-2 pt-[6px] items-center"
        >
          {productPresentation}
        </ClientLink>
      ) : (
        productPresentation
      )}
      {productActions}
      {shouldUseNextLink ? (
        <ClientLink
          href={`/products/${id}`}
          className="flex flex-1 flex-col gap-y-2 pt-[6px] items-center"
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
