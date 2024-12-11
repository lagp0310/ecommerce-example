import React from "react";
import breadcrumbsBackground from "@/public/images/products-breadcrumbs-bg.png";
import Image from "next/image";
import {
  category,
  product,
  productsSortByOptions,
} from "@/constants/constants";
import { BasicProductCard } from "@/components/ui/product/basic-product-card";
import { Button } from "@/components/ui/common/button";
import type { ProductFilter, ProductTag } from "@/types/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  AdjustmentsHorizontalIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Rating } from "@/components/ui/product/rating";
import { Checkbox } from "@/components/ui/checkbox";
import { PricingSlider } from "@/components/ui/product/pricing-slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SortBySelector } from "@/components/ui/common/sort-by-selector";

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
        <RadioGroup>
          {categories.map(({ categoryId, title, numberOfItems }, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem
                value={categoryId}
                id={categoryId}
                className="rounded-full border border-gray-100 data-[state=checked]:bg-white data-[state=checked]:border-primary h-5 w-5 data-[state=checked]:text-primary"
                insetCircleClasses="h-3 w-3"
              />
              <Label
                htmlFor={categoryId}
                className="font-normal text-body-small text-gray-900"
              >
                {title}
                <span className="font-normal text-body-small text-gray-500">
                  {` (${numberOfItems})`}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      ),
      name: "Categories",
    },
    {
      children: (
        <div className="flex flex-1 flex-col justify-center pt-4 gap-6">
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
                className="flex flex-1 flex-row gap-x-2 items-center group/rating"
              >
                <Checkbox className="h-5 w-5 rounded-[3px] bg-white border border-gray-100 outline-none data-[state=checked]:border-none text-gray-900 data-[state=checked]:text-white data-[state=checked]:bg-primary" />
                <Rating
                  className="flex flex-row gap-x-0.5 justify-end"
                  rating={index + 1}
                  emptyIcon={<StarIcon className="text-warning h-3 w-3" />}
                  filledIcon={
                    <FilledStarIcon className="text-warning h-3 w-3" />
                  }
                />
                <span className="font-normal text-body-small text-gray-900">
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
          className="flex flex-1 flex-row gap-2 justify-start items-center flex-wrap"
        >
          {Array.from({ length: numberOfPopularTags }).map((_value, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-full bg-gray-50"
            >
              <ToggleGroupItem
                value={tag.text}
                id={`${tag.text}-${index}`}
                className="font-normal text-body-small text-gray-900 rounded-full hover:bg-primary hover:text-white"
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
    <div className="flex flex-1 flex-col gap-y-8">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-gradient-to-r from-black/70 to-black/0 h-full w-full"></div>
        <Image
          src={breadcrumbsBackground}
          alt="Breadcrumbs Background"
          className="h-[120px] object-cover"
          placeholder="blur"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-1 flex-row justify-center w-full">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 max-w-7xl">
          <div className="col-span-1 row-span-2">
            <Button className="flex flex-row gap-x-2 items-center bg-white border border-primary rounded-full text-primary max-w-fit px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%]">
              Filter{" "}
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-primary" />
            </Button>
            {filters.map(({ children, name, initiallyCollapsed }, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                defaultValue={!initiallyCollapsed ? name : undefined}
              >
                <AccordionItem value={name}>
                  <AccordionTrigger>{name}</AccordionTrigger>
                  <AccordionContent>{children}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="col-span-4 row-span-1">
            <div className="flex flex-1 flex-row w-full items-center">
              <div className="flex flex-1 flex-row items-center gap-x-2">
                <span className="font-normal text-body-small text-gray-500">
                  Sort by:
                </span>
                <SortBySelector
                  options={productsSortByOptions}
                  defaultValue={productsSortByOptions.at(0)?.value}
                />
              </div>
              <div className="flex flex-1 flex-row justify-end">
                <span className="font-normal text-body-medium text-gray-600">
                  <span className="font-semibold text-body-medium text-gray-900">
                    52
                  </span>{" "}
                  Results Found
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 xl:col-start-2 xl:col-span-4 gap-4">
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
        </div>
      </div>
    </div>
  );
}
