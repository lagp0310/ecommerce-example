import React from "react";
import {
  defaultCarouselInterval,
  defaultMaxProductPrice,
  defaultSlideHeight,
  defaultSlideWidth,
  maxProductRating,
} from "@/constants/constants";
import type {
  CarouselProviderCustomProps,
  CarouselRendererProps,
  ProductFilter,
} from "@/types/types";
import {
  Categories as Category,
  Product_Tags as ProductTag,
} from "@/gql/graphql";
import { ResetFilterWrapper } from "@/components/ui/product/reset-filter-wrapper";
import { SliderContextProvider } from "@/context/slider-context";
import { PricingSlider } from "@/components/ui/product/pricing-slider";
import {
  cn,
  getPricingSliderProps,
  isRecordIdInSearchParamArray,
} from "@/lib/utils";
import { PriceFilterResetWrapper } from "@/components/ui/product/price-filter-reset-wrapper";
import { RatingFilterItemWrapper } from "@/components/ui/product/rating-filter-item-wrapper";
import { ToggleGroup } from "@/components/ui/common/toggle-group";
import { TagFilterItemWrapper } from "@/components/ui/product/tag-filter-item-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/common/accordion";
import {
  CategoryFilterItemWrapper,
  type Props as CategoryFilterItemProps,
} from "@/components/ui/category/category-filter-item-wrapper";

export const categoriesToShow = 30;
export const productsToShow = 20;

export const relatedProductsToShow = 10;
export const relatedProductsCarouselProviderProps: (
  totalSlides: number
) => CarouselProviderCustomProps = (totalSlides: number) => ({
  naturalSlideHeight: defaultSlideHeight,
  naturalSlideWidth: defaultSlideWidth,
  totalSlides,
  interval: defaultCarouselInterval,
  isPlaying: true,
  infinite: true,
  visibleSlides: 2,
  renderInDesktop: true,
  className:
    "w-full h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80 mb-16",
  mobileMediaQuery: "(max-width: 768px)",
  visibleSlidesSm: { mediaQuery: "(max-width: 640px)", visibleSlides: 2 },
  visibleSlidesMd: {
    mediaQuery: "(min-width: 641px) and (max-width: 768px)",
    visibleSlides: 3,
  },
  visibleSlidesLg: {
    mediaQuery: "(min-width: 769px) and (max-width: 1280px)",
    visibleSlides: 4,
  },
  visibleSlidesXl: {
    mediaQuery: "(min-width: 1281px)",
    visibleSlides: 5,
  },
});
export const relatedProductsCarouselRendererProps: CarouselRendererProps = {
  mobileMediaQuery: "(max-width: 768px)",
  renderInDesktop: true,
  carouselSliderProps: {
    className:
      "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
    classNameTray:
      "h-64 min-[420px]:h-72 min-[500px]:h-80 min-[580px]:h-[350px] sm:h-[300px] md:h-64 min-[860px]:h-72 lg:h-80 min-[1100px]:h-[350px] xl:h-80",
  },
};

export const defaultCarouselProductSkeletons = 5;
export const productSkeletonFields = 4;

export const resetFiltersRemoveParams = [
  "categories",
  "maxPrice",
  "minRating",
  "tags",
];

export const getProductFilters: (
  categories: Category[] | null,
  tags?: ProductTag[],
  maxProductsPrice?: number,
  maxPrice?: number | null,
  minRating?: number | null,
  categoriesSearchParam?: string,
  tagsSearchParam?: string
) => ProductFilter[] = (
  categories,
  tags,
  maxProductsPrice,
  maxPrice,
  minRating,
  categoriesSearchParam,
  tagsSearchParam
) => [
  {
    children: (
      <div className="flex flex-1 flex-col items-start gap-1.5">
        {categories?.map(({ id, name }) => {
          const isChecked = isRecordIdInSearchParamArray(
            id,
            categoriesSearchParam
          );
          const itemProps: CategoryFilterItemProps = {
            categoryId: id,
            checked: isChecked,
            "aria-checked": isChecked,
            htmlFor: id,
            wrapperClassName: cn("order-none", { "order-1": !isChecked }),
            className:
              "flex flex-1 flex-row items-center justify-start gap-x-1 text-body-small font-normal text-gray-900",
          };

          return (
            <React.Suspense key={id}>
              <CategoryFilterItemWrapper {...itemProps}>
                {name}
                {/* <span className="text-body-small font-normal text-gray-500">{`(${numberOfItems})`}</span> */}
              </CategoryFilterItemWrapper>
            </React.Suspense>
          );
        })}
      </div>
    ),
    name: "Categories",
    action: (
      <ResetFilterWrapper
        paramNameToRemove="categories"
        className="group/reset-filters-button mr-3 flex w-full max-w-fit flex-row items-center justify-end bg-white text-body-small font-normal leading-[120%] text-gray-700 outline-none hover:underline motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Clear
      </ResetFilterWrapper>
    ),
    actionClassName: "flex flex-1 flex-row justify-end max-w-fit",
  },
  {
    children: (
      <div className="flex flex-1 flex-col justify-center gap-6 pt-4">
        <React.Suspense>
          <SliderContextProvider
            initialValue={maxProductsPrice ?? defaultMaxProductPrice}
            paramName="maxPrice"
          >
            <PricingSlider
              {...getPricingSliderProps(
                maxProductsPrice ?? defaultMaxProductPrice,
                maxPrice ?? maxProductsPrice ?? null
              )}
            />
          </SliderContextProvider>
        </React.Suspense>
      </div>
    ),
    name: "Price",
    action: (
      <PriceFilterResetWrapper
        paramNameToRemove="maxPrice"
        className="group/reset-filters-button mr-3 flex w-full max-w-fit flex-row items-center justify-end bg-white text-body-small font-normal leading-[120%] text-gray-700 outline-none hover:underline motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Clear
      </PriceFilterResetWrapper>
    ),
    actionClassName: "flex flex-1 flex-row justify-end max-w-fit",
    forceMount: true,
    styles: {
      "--radix-collapsible-content-height": "85px",
    },
  },
  {
    children: (
      <div className="flex flex-1 flex-col justify-center gap-y-1.5">
        {Array.from({ length: maxProductRating })
          .map((_value, index) => {
            const hasRatingSearchParam =
              typeof minRating === "string" && !isNaN(minRating);
            const isChecked = hasRatingSearchParam && minRating === index + 1;

            return (
              <React.Suspense key={index}>
                <RatingFilterItemWrapper
                  index={index}
                  checked={isChecked}
                  wrapperClassName={
                    hasRatingSearchParam && minRating > index + 1
                      ? "hidden"
                      : ""
                  }
                />
              </React.Suspense>
            );
          })
          .reverse()}
      </div>
    ),
    name: "Rating",
    action: (
      <ResetFilterWrapper
        paramNameToRemove="minRating"
        className="group/reset-filters-button mr-3 flex w-full max-w-fit flex-row items-center justify-end bg-white text-body-small font-normal leading-[120%] text-gray-700 outline-none hover:underline motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Clear
      </ResetFilterWrapper>
    ),
    actionClassName: "flex flex-1 flex-row justify-end max-w-fit",
  },
  {
    children: (
      <ToggleGroup
        type="multiple"
        className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2"
      >
        {tags?.map((tagItem, index) => {
          const tagsArray = tagsSearchParam?.split(",");
          const hasTagsSearchParam =
            Array.isArray(tagsArray) && tagsArray.length > 0;
          const isSelected =
            hasTagsSearchParam && tagsArray?.includes(tagItem.id);

          return (
            <React.Suspense key={index}>
              <TagFilterItemWrapper
                tagItem={tagItem}
                selected={isSelected}
                wrapperClassName={cn("order-none", {
                  "order-1": !isSelected,
                })}
              />
            </React.Suspense>
          );
        })}
      </ToggleGroup>
    ),
    name: "Popular Tags",
    action: (
      <ResetFilterWrapper
        paramNameToRemove="tags"
        className="group/reset-filters-button mr-3 flex w-full max-w-fit flex-row items-center justify-end bg-white text-body-small font-normal leading-[120%] text-gray-700 outline-none hover:underline motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
      >
        Clear
      </ResetFilterWrapper>
    ),
    actionClassName: "flex flex-1 flex-row justify-end max-w-fit",
  },
];

export const filterComponents = (
  filters: ProductFilter[],
  accordionRootClassName = "hidden lg:grid"
) => (
  <React.Fragment>
    {filters?.map(
      (
        {
          children,
          name,
          initiallyCollapsed,
          forceMount,
          styles,
          ...triggerProps
        },
        index
      ) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          defaultValue={!initiallyCollapsed ? name : undefined}
          className={accordionRootClassName}
        >
          <AccordionItem value={name} className="group/accordion-item h-auto">
            <AccordionTrigger
              className={cn({
                "pt-0": index === 0,
              })}
              {...triggerProps}
            >
              {name}
            </AccordionTrigger>
            <AccordionContent
              forceMount={forceMount}
              className={cn({
                "group-data-[state=closed]/accordion-item:hidden transition-all group-data-[state=closed]/accordion-item:animate-accordion-down":
                  forceMount,
              })}
              style={forceMount ? styles : undefined}
            >
              {children}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    )}
  </React.Fragment>
);
