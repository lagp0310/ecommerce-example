import React from "react";
import {
  defaultMaxProductPrice,
  defaultProductsShowPerPage,
  defaultSortBy,
  defaultSortByDirection,
  maxPagesToShow,
  productsSortByOptions,
} from "@/constants/constants";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import type {
  GetProductsMaxPriceResponse,
  ProductsResponse,
} from "@/types/types";
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
import { parseProductTags } from "@/lib/utils";
import { allCategories } from "@/gql/queries/category/queries";
import { queryGraphql } from "@/lib/server-query";
import { env } from "@/lib/env";
import { allProducts } from "@/gql/queries/product/queries";
import { callDatabaseFunction } from "@/lib/call-database-function";
import { redirect } from "next/navigation";
import { SelectTrigger, SelectValue } from "@/components/ui/common/select";
import emptyListImage from "@/public/images/empty-products-list.png";
import Image from "next/image";
import {
  categoriesToShow,
  filterComponents,
  getProductFilters,
  productsToShow,
} from "@/constants/product/constants";
import type {
  Categories as Category,
  Product_Tags as ProductTag,
} from "@/gql/graphql";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
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
      tags: tagsSearchParam,
    },
    categories,
    tags,
    productsMaxPriceResponse,
  ] = await Promise.all([
    searchParams,
    queryGraphql<Category[]>("categoriesCollection", allCategories, {
      first: categoriesToShow,
      filter: { store: { eq: env.NEXT_PUBLIC_STORE_ID } },
      orderBy: { name: "AscNullsFirst" },
    }),
    callDatabaseFunction<ProductTag[]>("get_all_product_tags", {
      store_id: env.NEXT_PUBLIC_STORE_ID,
    }),
    callDatabaseFunction<GetProductsMaxPriceResponse>(
      "get_products_max_price",
      {
        store_id: env.NEXT_PUBLIC_STORE_ID,
      }
    ),
  ]);
  const maxProductsPrice = productsMaxPriceResponse?.result_max_price;

  if (!page || !perPage || !sortBy || !sortByDirection || !maxPrice) {
    const updatedSearchParams = new URLSearchParams({
      page: "1",
      perPage: (perPage ?? defaultProductsShowPerPage).toString(),
      sortBy: defaultSortBy,
      sortByDirection: sortByDirection ?? defaultSortByDirection,
      maxPrice: (
        maxPrice ??
        maxProductsPrice ??
        defaultMaxProductPrice
      ).toString(),
    });
    if (!!categoriesSearchParam) {
      updatedSearchParams.set("categories", categoriesSearchParam);
    }
    if (!!tagsSearchParam) {
      updatedSearchParams.set("tags", tagsSearchParam);
    }

    redirect(`/products?${updatedSearchParams.toString()}`);
  }

  const productsResult = await queryGraphql<ProductsResponse[]>(
    "productsCollection",
    allProducts,
    {
      first: productsToShow,
      offset: ((!!page ? parseInt(page) : 1) - 1) * productsToShow,
      filter: {
        store: { eq: env.NEXT_PUBLIC_STORE_ID },
        available_quantity: { gt: 0 },
        price: {
          lte:
            !!maxPrice && !isNaN(parseInt(maxPrice))
              ? parseInt(maxPrice)
              : (maxProductsPrice ?? defaultMaxProductPrice),
        },
        rating: { gte: parseInt(minRating ?? "0") },
        or: [
          categoriesSearchParam
            ?.split(",")
            ?.map((value: string) => ({ categories: { contains: [value] } })),
          tagsSearchParam
            ?.split(",")
            ?.map((value: string) => ({ tags: { contains: [value] } })),
        ]
          .filter((value) => !!value)
          .flatMap((value) => value as unknown),
      },
      orderBy: {
        [sortBy ?? defaultSortBy]:
          (sortByDirection ?? defaultSortByDirection) === "asc"
            ? "AscNullsLast"
            : "DescNullsLast",
      },
    }
  );
  const productsCount = productsResult?.length ?? 0;
  const products = parseProductTags(productsResult);

  const currentPage = parseInt(page);
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
  if (productsCount > 0 && currentPage > totalPages) {
    const updatedSearchParams = new URLSearchParams({
      page: "1",
      perPage: (perPage ?? defaultProductsShowPerPage).toString(),
      sortBy: defaultSortBy,
      sortByDirection: sortByDirection ?? defaultSortByDirection,
      maxPrice: (
        maxPrice ??
        maxProductsPrice ??
        defaultMaxProductPrice
      ).toString(),
    });
    if (!!categoriesSearchParam) {
      updatedSearchParams.set("categories", categoriesSearchParam);
    }
    if (!!tagsSearchParam) {
      updatedSearchParams.set("tags", tagsSearchParam);
    }

    redirect(`/products?${updatedSearchParams.toString()}`);
  }

  const filters = getProductFilters(
    categories,
    tags,
    maxProductsPrice,
    !!maxPrice ? parseInt(maxPrice) : null,
    !!minRating ? parseInt(minRating) : null,
    categoriesSearchParam,
    tagsSearchParam
  );

  const currentSortByValue = productsSortByOptions.find(
    ({ sortBy: sortByOption, direction }) =>
      sortByOption === sortBy && direction === sortByDirection
  );

  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="flex w-full max-w-7xl flex-col gap-8 lg:flex-row">
          <div className="flex w-full flex-1 flex-row lg:min-w-[260px] lg:max-w-fit lg:basis-1/4">
            <div className="w-full">
              <FiltersDialogWrapper
                wrapperClassname="flex flex-1 lg:hidden relative"
                contentClassname="rounded-ten max-w-[80vw] sm:max-w-[70vw] md:max-w-[60vw] overflow-y-auto max-h-[90vh]"
              >
                <DialogHeader>
                  <DialogTitle>Filters</DialogTitle>
                </DialogHeader>
                {filterComponents(filters, "grid")}
              </FiltersDialogWrapper>
              <div className="sticky top-28">{filterComponents(filters)}</div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex max-h-fit w-full flex-1 flex-row items-center">
              <div className="flex w-full flex-1 flex-row items-center">
                <div className="flex flex-1 flex-row items-center gap-x-2">
                  <span className="text-body-small font-normal text-gray-500">
                    Sort by:
                  </span>
                  <React.Suspense>
                    <DropdownSelector
                      useNextLink
                      currentValue={currentSortByValue?.value}
                      options={productsSortByOptions}
                      defaultValue={currentSortByValue?.value}
                      wrapperClassname="flex flex-1"
                    >
                      <SelectTrigger className="line-clamp-1 flex w-fit flex-row gap-x-1 truncate outline-none focus:ring-0 focus:ring-offset-0 md:gap-x-2">
                        {currentSortByValue?.name}
                        <SelectValue placeholder={currentSortByValue?.value} />
                      </SelectTrigger>
                    </DropdownSelector>
                  </React.Suspense>
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
            <div className="grid h-full grid-cols-1 gap-4 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4">
              {hasProducts ? (
                products.map((product, index) => (
                  <div key={index} className="col-span-1 row-span-1">
                    <BasicProductCard key={index} product={product} />
                  </div>
                ))
              ) : (
                <div className="col-span-full row-span-full flex size-full flex-1 flex-col items-center justify-center gap-y-4 py-20">
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
                  <p className="text-center text-body-medium font-normal text-gray-500">
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
                      className="group/back-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white aria-disabled:cursor-not-allowed aria-disabled:border-neutral-50 aria-disabled:bg-white aria-disabled:hover:bg-none motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                      aria-disabled={isPreviousButtonDisabled}
                    >
                      <PaginationPrevious
                        href={previousHref}
                        className="flex size-9 flex-1 flex-row items-center justify-center rounded-full px-0 text-gray-600 group-hover/back-button:bg-primary group-hover/back-button:font-semibold group-hover/back-button:text-white aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:text-gray-300 aria-disabled:opacity-50 aria-disabled:hover:bg-white group-hover/back-button:aria-disabled:bg-white group-hover/back-button:aria-disabled:text-gray-300"
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
                      className="group/next-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white aria-disabled:cursor-not-allowed aria-disabled:border-neutral-50 aria-disabled:bg-white aria-disabled:hover:bg-none motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                      aria-disabled={isNextButtonDisabled}
                    >
                      <PaginationNext
                        href={nextHref}
                        className="flex size-9 flex-1 flex-row items-center justify-center rounded-full px-0 text-gray-600 group-hover/next-button:bg-primary group-hover/next-button:font-semibold group-hover/next-button:text-white aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:text-gray-300 aria-disabled:opacity-50 aria-disabled:hover:bg-white group-hover/next-button:aria-disabled:bg-white group-hover/next-button:aria-disabled:text-gray-300"
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
