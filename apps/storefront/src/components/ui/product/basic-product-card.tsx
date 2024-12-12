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
import { ProductCard } from "@/components/ui/product/product-card";
import { Rating } from "@/components/ui/product/rating";
import { ClientLink } from "@/components/navigation/client-link";

type Props = {
  product: Product;
  shouldShowProductTags?: boolean;
  shouldUseNextLink?: boolean;
  isFirstOnList: boolean;
};

export function BasicProductCard({
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
  const productNode = (
    <ProductCard
      className={
        "relative bg-white flex flex-1 flex-col justify-center border border-gray-100 gap-y-[6px] p-3 rounded-[5px] hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 col-span-1 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
      }
    >
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
      <div className="mt-6 md:mt-2">{image}</div>
      <div className="flex flex-1 flex-row">
        <div className="flex flex-1 flex-col">
          <span className="text-body-small font-normal text-gray-700 truncate line-clamp-1">
            {name}
          </span>
          <div className="flex flex-1 flex-row gap-x-2 text-body-small md:text-body-medium">
            {!!discountedPrice && isFirstOnList ? (
              <span
                className={cn({
                  "font-medium text-gray-900 truncate line-clamp-1":
                    !discountedPrice,
                })}
              >{`${currencySymbol}${discountedPrice}`}</span>
            ) : null}
            <span
              className={cn({
                "font-normal text-gray-400 line-through truncate line-clamp-1":
                  discountedPrice && isFirstOnList,
                "font-medium text-gray-900 truncate line-clamp-1":
                  !discountedPrice,
              })}
            >{`${currencySymbol}${price}`}</span>
          </div>
          {typeof rating === "number" && typeof totalRatings === "number" ? (
            <div className="flex flex-1 flex-row gap-x-1 items-center">
              <Rating
                className="flex flex-row gap-x-0.5"
                rating={rating}
                emptyIcon={<StarIcon className="text-warning h-3 w-3" />}
                filledIcon={<FilledStarIcon className="text-warning h-3 w-3" />}
              />
              <span className="text-body-tiny font-normal text-gray-500">
                {`(${totalRatings})`}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </ProductCard>
  );

  return (
    <React.Fragment>
      {shouldUseNextLink ? (
        <div className="relative">
          <div className="z-10 absolute top-3 right-3 flex flex-1 flex-col gap-y-2">
            <Button className="bg-white rounded-full h-8 w-8 flex flex-row justify-center items-center border border-gray-50 group hover:bg-primary hover:border-none">
              <HeartIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
            </Button>
          </div>
          <ClientLink href={`/products/${id}`} className="col-span-1">
            {productNode}
          </ClientLink>
          <div className="absolute bottom-6 right-3 flex flex-1 flex-row items-center justify-end">
            <Button className="bg-gray-50 rounded-full h-8 w-8 flex flex-row justify-center items-center hover:bg-primary group">
              <ShoppingBagIcon className="h-4 w-4 text-gray-900 group-hover:text-white" />
            </Button>
          </div>
        </div>
      ) : (
        productNode
      )}
    </React.Fragment>
  );
}
