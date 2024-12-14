import React from "react";
import {
  category,
  product,
  productsSortByOptions,
} from "@/constants/constants";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import type { ProductFilter, ProductTag } from "@/types/types";
import { Label } from "@/components/ui/common/label";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/common/accordion";
import { Rating } from "@/components/ui/product/rating";
import { Checkbox } from "@/components/ui/common/checkbox";
import { PricingSlider } from "@/components/ui/product/pricing-slider";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/common/toggle-group";
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
import { FiltersWrapper } from "@/components/ui/product/filters-wrapper";
import { DialogHeader, DialogTitle } from "@/components/ui/common/dialog";
import { cn } from "@/lib/utils";

export default async function Products() {
  const numberOfPopularTags = 12;
  const numberOfCategories = 7;
  const maxRating = 5;
  const pricingSliderProps = {
    max: 100,
  };

  const categories = Array.from({ length: numberOfCategories }).map(
    () => category
  );
  const tag: ProductTag = { text: "Healthy" };
  const filters: ProductFilter[] = [
    {
      children: (
        <ToggleGroup
          type="single"
          className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2"
        >
          {categories.map(({ categoryId, title, numberOfItems }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-full"
            >
              <ToggleGroupItem
                value={categoryId}
                id={`${categoryId}-${index}`}
                name={`${categoryId}-${index}`}
                className="focus-active:bg-black pl-0 text-body-small font-normal text-gray-900 hover:bg-transparent hover:text-gray-900 data-[state=on]:bg-transparent"
              >
                <Checkbox className="size-5 rounded-[3px] border border-gray-100 bg-white text-gray-900 outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
                <Label
                  htmlFor={`${categoryId}-${index}`}
                  className="flex flex-1 flex-row items-center gap-x-1 text-body-small font-normal text-gray-900"
                >
                  {title}
                  <span className="text-body-small font-normal text-gray-500">{`(${numberOfItems})`}</span>
                </Label>
              </ToggleGroupItem>
            </div>
          ))}
        </ToggleGroup>
      ),
      name: "Categories",
    },
    {
      children: (
        <div className="flex flex-1 flex-col justify-center gap-6 pt-4">
          <PricingSlider {...pricingSliderProps} />
        </div>
      ),
      name: "Price",
    },
    {
      children: (
        <div className="flex flex-1 flex-col justify-center gap-y-1.5">
          {Array.from({ length: maxRating })
            .map((_value, index) => (
              // TODO: Hide some on selection.
              <div
                key={index}
                className="group/rating flex flex-1 flex-row items-center gap-x-2"
              >
                <Checkbox className="size-5 rounded-[3px] border border-gray-100 bg-white text-gray-900 outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
                <Rating
                  className="flex flex-row justify-end gap-x-0.5"
                  rating={index + 1}
                  emptyIcon={<StarIcon className="size-3 text-warning" />}
                  filledIcon={
                    <FilledStarIcon className="size-3 text-warning" />
                  }
                />
                <span className="text-body-small font-normal text-gray-900">
                  {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }).format(index + 1)}
                  <span className="group-first/rating:hidden"> and up</span>
                </span>
              </div>
            ))
            .reverse()}
        </div>
      ),
      name: "Rating",
    },
    {
      children: (
        <ToggleGroup
          type="single"
          className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2"
        >
          {Array.from({ length: numberOfPopularTags }).map((_value, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-full bg-gray-50"
            >
              <ToggleGroupItem
                value={tag.text}
                id={`${tag.text}-${index}`}
                className="rounded-full text-body-small font-normal text-gray-900 hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              >
                {tag.text}
              </ToggleGroupItem>
            </div>
          ))}
        </ToggleGroup>
      ),
      name: "Popular Tags",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-4 xl:grid-cols-5">
          <div className="col-span-1 row-span-2 w-full">
            <div className="sticky top-8">
              <FiltersWrapper
                wrapperClassname="grid lg:hidden relative"
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
              </FiltersWrapper>
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
          <div className="lg:col-span-3 lg:col-start-2 lg:row-span-1 xl:col-span-4 xl:col-start-2">
            <div className="flex w-full flex-1 flex-row items-center">
              <div className="flex flex-1 flex-row items-center gap-x-2">
                <span className="text-body-small font-normal text-gray-500">
                  Sort by:
                </span>
                <DropdownSelector
                  options={productsSortByOptions}
                  defaultValue={productsSortByOptions.at(0)?.value}
                />
              </div>
              <div className="flex flex-1 flex-row justify-end">
                <span className="text-body-medium font-normal text-gray-600">
                  <span className="text-body-medium font-semibold text-gray-900">
                    52
                  </span>{" "}
                  Results Found
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:col-start-2 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4">
            {Array.from({ length: 20 }).map((_value, index) => (
              <div key={index} className="col-span-1 row-span-1">
                <BasicProductCard
                  key={index}
                  product={product}
                  isFirstOnList={index === 0}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:col-start-2 xl:col-span-4 xl:col-start-2 xl:grid-cols-4">
            <Pagination className="col-span-full flex flex-1 flex-row items-center justify-center gap-x-3">
              <PaginationContent>
                <PaginationItem className="group/back-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-neutral-50 disabled:bg-gray-300 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                  <PaginationPrevious
                    href="#"
                    className="flex size-9 flex-1 flex-row items-center justify-center rounded-full px-0 text-gray-600 disabled:text-gray-300 group-hover/back-button:bg-primary group-hover/back-button:font-semibold group-hover/back-button:text-white group-disabled/back-button:hover:cursor-not-allowed"
                  />
                </PaginationItem>
                <PaginationItem className="group/page-item rounded-full hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                  <PaginationLink
                    href="#"
                    className="flex size-9 flex-1 flex-row items-center justify-center rounded-full bg-white p-0 text-body-medium font-normal text-gray-600 group-hover/page-item:bg-primary group-hover/page-item:font-semibold group-hover/page-item:text-white"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="flex flex-1 flex-row items-center justify-center" />
                </PaginationItem>
                <PaginationItem className="group/page-item rounded-full hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                  <PaginationLink
                    href="#"
                    className="flex size-9 flex-1 flex-row items-center justify-center rounded-full bg-white p-0 text-body-medium font-normal text-gray-600 group-hover/page-item:bg-primary group-hover/page-item:font-semibold group-hover/page-item:text-white"
                  >
                    21
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="group/back-button rounded-full border border-neutral-100 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-neutral-50 disabled:bg-gray-300 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none">
                  <PaginationNext
                    href="#"
                    className="flex size-9 flex-1 flex-row items-center justify-center rounded-full p-0 text-gray-600 disabled:text-gray-300 group-hover/back-button:bg-primary group-hover/back-button:font-semibold group-hover/back-button:text-white group-disabled/back-button:hover:cursor-not-allowed"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
