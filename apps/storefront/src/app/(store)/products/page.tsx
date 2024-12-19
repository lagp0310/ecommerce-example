import React from "react";
import {
  defaultMaxProductPrice,
  defaultProductsShowPerPage,
  defaultSortBy,
  defaultSortByDirection,
  maxPagesToShow,
  maxProductRating,
  productsSortByOptions,
} from "@/constants/constants";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import type { ProductFilter } from "@/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/common/accordion";
import { PricingSlider } from "@/components/ui/product/pricing-slider";
import { ToggleGroup } from "@/components/ui/common/toggle-group";
import { DropdownSelector } from "@/components/ui/common/dropdown-selector";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination/pagination";
import { FiltersDialogWrapper } from "@/components/ui/product/filters-dialog-wrapper";
import { DialogHeader, DialogTitle } from "@/components/ui/common/dialog";
import {
  cn,
  isRecordIdInSearchParamArray,
  parseProductTags,
} from "@/lib/utils";
import { allCategories } from "@/gql/queries/category/queries";
import { queryGraphql } from "@/lib/server-query";
import { env } from "@/lib/env";
import { allProducts } from "@/gql/queries/product/queries";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { redirect } from "next/navigation";
import { SelectTrigger, SelectValue } from "@/components/ui/common/select";
import { CategoryFilterItemWrapper } from "@/components/ui/category/category-filter-item-wrapper";
import emptyListImage from "@/public/images/empty-products-list.png";
import Image from "next/image";
import { RatingFilterItemWrapper } from "@/components/ui/product/rating-filter-item-wrapper";
import { TagFilterItemWrapper } from "@/components/ui/product/tag-filter-item-wrapper";
import {
  categoriesToShow,
  pricingSliderProps,
  productsToShow,
} from "@/constants/product/constants";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<Record<string, string> | string | URLSearchParams>;
}) {
  const [
    {
      page,
      perPage,
      sortBy,
      sortByDirection,
      categories: categoriesSearchParam,
      maxPrice,
      minRating,
      tags,
    },
    categories,
    allTags,
    { result_max_price: maxProductsPrice },
    { result_products_count: productsCount },
  ] = await Promise.all([
    searchParams,
    queryGraphql("categoriesCollection", allCategories, {
      first: categoriesToShow,
      filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
      orderBy: { name: "AscNullsFirst" },
    }),
    callDatabaseFunction("get_all_product_tags", {
      store_id: env.NEXT_PUBLIC_STORE_ID,
    }),
    callDatabaseFunction("get_products_max_price", {
      store_id: env.NEXT_PUBLIC_STORE_ID,
    }),
    callDatabaseFunction("get_products_count", {
      store_id: env.NEXT_PUBLIC_STORE_ID,
    }),
  ]);

  if (!page || !perPage || !sortBy || !sortByDirection) {
    redirect(
      `/products?page=1&perPage=${perPage || defaultProductsShowPerPage}&sortBy=${defaultSortBy}&sortByDirection=${defaultSortByDirection}`
    );
  }

  const productsResult = await queryGraphql("productsCollection", allProducts, {
    first: productsToShow,
    offset: (page - 1) * productsToShow,
    filter: {
      store: { eq: env.NEXT_PUBLIC_STORE_ID },
      available_quantity: { gt: 0 },
      price: { lte: parseInt(maxPrice ?? maxProductsPrice) },
      rating: { gte: parseInt(minRating ?? "0") },
      or: [
        categoriesSearchParam
          ?.split(",")
          ?.map((value: string) => ({ categories: { contains: [value] } })),
        tags
          ?.split(",")
          ?.map((value: string) => ({ tags: { contains: [value] } })),
      ]
        .filter((value) => !!value)
        .flatMap((value) => value),
    },
    orderBy: {
      [sortBy]: sortByDirection === "asc" ? "AscNullsLast" : "DescNullsLast",
    },
  });
  const products = parseProductTags(productsResult);

  const totalPages = Math.ceil(productsCount / defaultProductsShowPerPage);
  const isPreviousButtonDisabled = parseInt(page) === 1;
  const isNextButtonDisabled = parseInt(page) === totalPages;
  const previousHref =
    parseInt(page) === 1
      ? `/products?page=${page}&perPage=${perPage || defaultProductsShowPerPage}`
      : `/products?page=${parseInt(page) - 1}&perPage=${perPage || defaultProductsShowPerPage}`;
  const nextHref =
    parseInt(page) === totalPages
      ? `/products?page=${page}&perPage=${perPage || defaultProductsShowPerPage}`
      : `/products?page=${parseInt(page) - 1}&perPage=${perPage || defaultProductsShowPerPage}`;
  if (parseInt(page) > totalPages) {
    redirect(
      `/products?page=1&perPage=${perPage || defaultProductsShowPerPage}`
    );
  }

  const filters: ProductFilter[] = [
    {
      children: (
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {categories.map(({ id, name }) => {
            const isChecked = isRecordIdInSearchParamArray(
              categoriesSearchParam,
              id
            );

            return (
              <CategoryFilterItemWrapper
                key={id}
                categoryId={id}
                checked={isChecked}
                aria-checked={isChecked}
                htmlFor={id}
                wrapperClassName={cn("order-none", { "order-1": !isChecked })}
                className="flex flex-1 flex-row justify-start items-center gap-x-1 text-body-small font-normal text-gray-900"
              >
                {name}
                {/* <span className="text-body-small font-normal text-gray-500">{`(${numberOfItems})`}</span> */}
              </CategoryFilterItemWrapper>
            );
          })}
        </div>
      ),
      name: "Categories",
    },
    {
      children: (
        <div className="flex flex-1 flex-col justify-center gap-6 pt-4">
          <PricingSlider
            {...pricingSliderProps(
              parseInt(maxProductsPrice),
              parseInt(maxPrice)
            )}
          />
        </div>
      ),
      name: "Price",
    },
    {
      children: (
        <div className="flex flex-1 flex-col justify-center gap-y-1.5">
          {Array.from({ length: maxProductRating })
            .map((_value, index) => {
              const parsedMinRating = parseInt(minRating);
              const hasRatingSearchParam =
                typeof minRating === "string" && !isNaN(parsedMinRating);
              const isChecked =
                hasRatingSearchParam && parsedMinRating === index + 1;

              return (
                <RatingFilterItemWrapper
                  key={index}
                  index={index}
                  checked={isChecked}
                  wrapperClassName={
                    hasRatingSearchParam && parsedMinRating > index + 1
                      ? "hidden"
                      : ""
                  }
                />
              );
            })
            .reverse()}
        </div>
      ),
      name: "Rating",
    },
    {
      children: (
        <ToggleGroup
          type="multiple"
          className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2"
        >
          {allTags.map((tagItem, index) => {
            const tagsArray = tags?.split(",");
            const hasTagsSearchParam =
              Array.isArray(tagsArray) && tagsArray.length > 0;
            const isSelected =
              hasTagsSearchParam && tagsArray?.includes(tagItem.id);

            return (
              <TagFilterItemWrapper
                key={index}
                tagItem={tagItem}
                selected={isSelected}
                wrapperClassName={cn("order-none", { "order-1": !isSelected })}
              />
            );
          })}
        </ToggleGroup>
      ),
      name: "Popular Tags",
    },
  ];

  const currentSortByValue = productsSortByOptions.find(
    ({ sortBy: sortByOption, direction }) =>
      sortByOption === sortBy && direction === sortByDirection
  );

  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
          <div className="flex flex-1 flex-row lg:basis-1/4 w-full lg:max-w-fit lg:min-w-[260px]">
            <div className="sticky top-8 w-full">
              <FiltersDialogWrapper
                wrapperClassname="flex flex-1 lg:hidden relative"
                contentClassname="rounded-[10px] max-w-[80vw] sm:max-w-[70vw] md:max-w-[60vw] overflow-y-auto max-h-[90vh]"
              >
                <DialogHeader>
                  <DialogTitle>Filters</DialogTitle>
                </DialogHeader>
                {filters.map(
                  ({ children, name, initiallyCollapsed }, index) => (
                    <Accordion
                      key={index}
                      type="single"
                      collapsible
                      defaultValue={!initiallyCollapsed ? name : undefined}
                      className="grid"
                    >
                      <AccordionItem value={name}>
                        <AccordionTrigger>{name}</AccordionTrigger>
                        <AccordionContent>{children}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                )}
              </FiltersDialogWrapper>
              {filters.map(({ children, name, initiallyCollapsed }, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  defaultValue={!initiallyCollapsed ? name : undefined}
                  className="hidden lg:grid"
                >
                  <AccordionItem value={name}>
                    <AccordionTrigger className={cn({ "pt-0": index === 0 })}>
                      {name}
                    </AccordionTrigger>
                    <AccordionContent>{children}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-1 flex-row items-center w-full max-h-fit">
              <div className="flex flex-1 w-full flex-row items-center">
                <div className="flex flex-1 flex-row items-center gap-x-2">
                  <span className="text-body-small font-normal text-gray-500">
                    Sort by:
                  </span>
                  <DropdownSelector
                    useNextLink
                    currentValue={currentSortByValue?.value}
                    options={productsSortByOptions}
                    defaultValue={currentSortByValue?.value}
                    wrapperClassname="flex flex-1"
                  >
                    <SelectTrigger className="w-fit gap-x-1 md:gap-x-2 outline-none focus:ring-0 focus:ring-offset-0 line-clamp-1 truncate flex flex-row">
                      {currentSortByValue?.name}
                      <SelectValue placeholder={currentSortByValue?.value} />
                    </SelectTrigger>
                  </DropdownSelector>
                </div>
                <div className="flex flex-1 flex-row justify-end">
                  <span className="text-body-medium font-normal text-gray-600">
                    <span className="text-body-medium font-semibold text-gray-900">
                      {productsCount}
                    </span>{" "}
                    Results Found
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4 h-full">
              {hasProducts ? (
                products.map((product, index) => (
                  <div key={index} className="col-span-1 row-span-1">
                    <BasicProductCard key={index} product={product} />
                  </div>
                ))
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center w-full row-span-full col-span-full gap-y-4 py-20 h-full">
                  <Image
                    src={emptyListImage}
                    alt="Empty Products List Image"
                    width={320}
                    height={250}
                    className="h-[250px] w-[350px] object-contain"
                  />
                  <h2 className="text-center text-heading-3 font-semibold text-gray-900">
                    We couldn&apos;t find any products
                  </h2>
                  <p className="text-center font-normal text-body-medium text-gray-500">
                    Try changing or removing some filters.
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:col-start-2 xl:col-span-4 xl:col-start-2 xl:grid-cols-4">
              {hasProducts ? (
                <Pagination className="col-span-full flex flex-1 flex-row items-center justify-center gap-x-3">
                  <PaginationContent>
                    <PaginationItem
                      className="group/back-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white aria-disabled:cursor-not-allowed aria-disabled:border-neutral-50 aria-disabled:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none aria-disabled:hover:bg-none"
                      aria-disabled={isPreviousButtonDisabled}
                    >
                      <PaginationPrevious
                        href={previousHref}
                        className="flex size-9 flex-1 flex-row items-center justify-center rounded-full px-0 text-gray-600 aria-disabled:text-gray-300 group-hover/back-button:bg-primary group-hover/back-button:aria-disabled:bg-white group-hover/back-button:font-semibold group-hover/back-button:text-white group-hover/back-button:aria-disabled:text-gray-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-white aria-disabled:pointer-events-none"
                        disabled={isPreviousButtonDisabled}
                        aria-disabled={isPreviousButtonDisabled}
                      />
                    </PaginationItem>
                    {Array.from({
                      length:
                        totalPages > maxPagesToShow
                          ? maxPagesToShow
                          : totalPages,
                    }).map((_value, index) => (
                      <React.Fragment key={index}>
                        <PaginationItem
                          key={index}
                          className="group/page-item rounded-full hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                        >
                          <PaginationLink
                            href={`/products?page=${index + 1}&perPage=${perPage || defaultProductsShowPerPage}`}
                            className="flex size-9 flex-1 flex-row items-center justify-center rounded-full bg-white p-0 text-body-medium font-normal text-gray-600 group-hover/page-item:bg-primary group-hover/page-item:font-semibold group-hover/page-item:text-white"
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                        {index === maxPagesToShow - 1 ? (
                          <React.Fragment>
                            <PaginationItem>
                              <PaginationEllipsis className="flex flex-1 flex-row items-center justify-center" />
                            </PaginationItem>
                            <PaginationItem
                              key={index}
                              className="group/page-item rounded-full hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                            >
                              <PaginationLink
                                href={`/products?page=${totalPages}&perPage=${perPage || defaultProductsShowPerPage}`}
                                className="flex size-9 flex-1 flex-row items-center justify-center rounded-full bg-white p-0 text-body-medium font-normal text-gray-600 group-hover/page-item:bg-primary group-hover/page-item:font-semibold group-hover/page-item:text-white"
                              >
                                {totalPages}
                              </PaginationLink>
                            </PaginationItem>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    ))}
                    <PaginationItem
                      className="group/next-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white aria-disabled:cursor-not-allowed aria-disabled:border-neutral-50 aria-disabled:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none aria-disabled:hover:bg-none"
                      aria-disabled={isNextButtonDisabled}
                    >
                      <PaginationNext
                        href={nextHref}
                        className="flex size-9 flex-1 flex-row items-center justify-center rounded-full px-0 text-gray-600 aria-disabled:text-gray-300 group-hover/next-button:bg-primary group-hover/next-button:aria-disabled:bg-white group-hover/next-button:font-semibold group-hover/next-button:text-white group-hover/next-button:aria-disabled:text-gray-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-white aria-disabled:pointer-events-none"
                        disabled={isNextButtonDisabled}
                        aria-disabled={isNextButtonDisabled}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
