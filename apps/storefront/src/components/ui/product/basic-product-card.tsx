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
        "relative col-span-1 flex flex-1 flex-col justify-center gap-y-[6px] rounded-[5px] border border-gray-100 bg-white p-3 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
      }
    >
      {shouldShowTags ? (
        <div className="absolute left-3 top-3 z-20 flex flex-1 flex-row flex-wrap gap-x-2 gap-y-1 pr-12 text-body-tiny md:text-body-small">
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
          <span className="line-clamp-1 truncate text-body-small font-normal text-gray-700">
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
            <div className="flex flex-1 flex-row items-center gap-x-1">
              <Rating
                className="flex flex-row gap-x-0.5"
                rating={rating}
                emptyIcon={<StarIcon className="size-3 text-warning" />}
                filledIcon={<FilledStarIcon className="size-3 text-warning" />}
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
          <div className="absolute right-3 top-3 z-10 flex flex-1 flex-col gap-y-2">
            <Button className="group flex size-8 flex-row items-center justify-center rounded-full border border-gray-50 bg-white hover:border-none hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
              <HeartIcon className="size-4 text-gray-900 group-hover:text-white" />
            </Button>
          </div>
          <ClientLink href={`/products/${id}`} className="col-span-1">
            {productNode}
          </ClientLink>
          <div className="absolute bottom-6 right-3 flex flex-1 flex-row items-center justify-end">
            <Button className="group flex size-8 flex-row items-center justify-center rounded-full bg-gray-50 hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
              <ShoppingBagIcon className="size-4 text-gray-900 group-hover:text-white" />
            </Button>
          </div>
        </div>
      ) : (
        productNode
      )}
    </React.Fragment>
  );
}
