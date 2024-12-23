import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ProductCard } from "@/components/ui/product/product-card";
import { Rating } from "@/components/ui/product/rating";
import { ClientLink } from "@/components/navigation/client-link";
import { ProductTag } from "@/components/ui/product/product-tag";
import { ProductPricing } from "@/components/ui/product/product-pricing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AddToCartWrapper } from "@/components/ui/product/add-to-cart-wrapper";
import type { TProduct } from "@/types/types";
import { defaultCurrencySymbol } from "@/constants/constants";

type Props = React.HTMLProps<HTMLDivElement> & {
  cardClassname?: string;
  product: TProduct;
  shouldShowProductTags?: boolean;
  shouldUseNextLink?: boolean;
};

export function BasicProductCard({
  className,
  cardClassname = "",
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
  const productNode = (
    <ProductCard
      className={cn(
        "relative col-span-1 flex flex-1 flex-col justify-center gap-y-[6px] rounded-[5px] border border-gray-100 bg-white p-3 hover:border-soft-primary/45 hover:shadow-[0px_0px_12px_0px_rgba(132,209,135,0.32)] hover:shadow-soft-primary/60 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
        className
      )}
    >
      {shouldShowTags ? (
        <div className="absolute left-3 top-3 z-0 flex flex-1 flex-row flex-wrap gap-x-2 gap-y-1 pr-12 text-body-tiny md:text-body-small">
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
          width={180}
          height={180}
          className="mt-6 w-full md:mt-2"
        />
      ) : null}
      <div className="flex flex-1 flex-row">
        <div className="flex flex-1 flex-col">
          <span className="line-clamp-1 truncate text-body-small font-normal text-gray-700">
            {name}
          </span>
          <ProductPricing
            className="flex flex-1 flex-row gap-x-2 text-body-small md:text-body-medium"
            price={price}
            discountedPrice={discountedPrice}
            currencySymbol={currencies?.symbol ?? defaultCurrencySymbol}
          />
          {typeof rating === "number" ? (
            <div className="flex flex-1 flex-row items-center gap-x-1">
              <Rating
                className="flex flex-row gap-x-0.5"
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
        </div>
      </div>
    </ProductCard>
  );

  return (
    <React.Fragment>
      {shouldUseNextLink ? (
        <div className={cn("relative", cardClassname)}>
          {/* <div className="absolute right-1.5 top-3 z-10 flex flex-1 flex-col gap-y-2 min-[400px]:right-3">
            <Button className="group flex size-8 flex-row items-center justify-center rounded-full border border-gray-50 bg-white hover:border-none hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
              <HeartIcon className="size-4 text-gray-900 group-hover:text-white" />
            </Button>
          </div> */}
          <ClientLink href={`/products/${slug}`} className="col-span-1">
            {productNode}
          </ClientLink>
          <div className="absolute bottom-4 right-3 flex-1 flex-row items-center justify-end">
            <AddToCartWrapper
              product={product}
              className="group flex size-8 flex-row items-center justify-center rounded-full bg-gray-50 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:transition-none disabled:hover:bg-gray-50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              counterWrapperClassName="gap-2"
              minusClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/minus-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              moreClassName="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-gray-100 rounded-full border border-gray-100 p-2 flex flex-1 flex-row items-center justify-center group/more-button hover:border-transparent hover:bg-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            >
              <ShoppingBagIcon className="size-4 text-gray-900 group-hover:text-white group-disabled:group-hover:text-gray-900" />
            </AddToCartWrapper>
          </div>
        </div>
      ) : (
        productNode
      )}
    </React.Fragment>
  );
}
