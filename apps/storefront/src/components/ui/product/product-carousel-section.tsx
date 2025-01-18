import { CarouselRenderer } from "@/components/carousel/carousel-renderer";
import { DefaultDotGroup } from "@/components/carousel/default-dot-group";
import {
  DotsRenderer,
  type Props as DotsProps,
} from "@/components/carousel/dots-renderer";
import {
  SlideRenderer,
  type Props as SlideProps,
} from "@/components/carousel/slide-renderer";
import React from "react";
import { SectionContent } from "@/components/ui/common/section-content";
import { SectionTitle } from "@/components/ui/common/section-title";
import {
  BasicProductCard,
  type Props as ProductCardProps,
} from "@/components/ui/product/basic-product-card";
import { Section } from "@/components/ui/common/section";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CarouselProvider } from "@/components/carousel/carousel-provider";
import type {
  CarouselProviderCustomProps,
  CarouselRendererProps,
  TProduct,
} from "@/types/types";
import isURL from "validator/es/lib/isURL";
import { defaultProductsSearchParams } from "@/constants/product/constants";
import { cn } from "@/lib/utils";

type Props = {
  sectionTitle?: string;
  sectionRedirectURL?: string;
  sectionRedirectText?: string;
  carouselProviderProps: CarouselProviderCustomProps;
  carouselRendererProps: CarouselRendererProps;
  products: TProduct[];
  sectionClassName?: string;
  sectionContentClassName?: string;
  additionalProductProps?: Omit<ProductCardProps, "product">;
  additionalSlideProps?: Pick<
    SlideProps,
    "renderInDesktop" | "mobileMediaQuery"
  >;
  additionalDotsProps?: DotsProps;
};

export function ProductCarouselSection({
  sectionTitle,
  sectionRedirectURL = `/products?${defaultProductsSearchParams.toString()}`,
  sectionRedirectText = "View All",
  carouselProviderProps,
  carouselRendererProps,
  products,
  sectionClassName,
  sectionContentClassName,
  additionalProductProps,
  additionalSlideProps,
  additionalDotsProps,
}: Props) {
  const isValidURL =
    typeof sectionRedirectURL === "string" &&
    isURL(sectionRedirectURL, {
      require_host: false,
      require_port: false,
      require_protocol: false,
    });

  return (
    <Section
      className={cn(
        "flex flex-1 flex-col gap-y-8 px-6 xl:px-0",
        sectionClassName
      )}
    >
      <SectionTitle className="w-full max-w-7xl">
        <div className="flex flex-1 flex-row">
          <h2 className="text-body-xl font-semibold text-gray-900 md:text-heading-5">
            {sectionTitle}
          </h2>
          <div className="flex flex-1 flex-row justify-end">
            {isValidURL ? (
              <Link
                href={sectionRedirectURL}
                className="flex flex-row items-center justify-end gap-x-2 text-body-medium font-medium text-primary"
              >
                {sectionRedirectText}
                <ArrowRightIcon className="size-4 text-primary" />
              </Link>
            ) : null}
          </div>
        </div>
      </SectionTitle>
      <SectionContent
        className={cn(
          "w-full max-w-7xl md:grid md:grid-cols-3 min-[900px]:grid-cols-4 md:gap-6 lg:grid-cols-5",
          sectionContentClassName
        )}
      >
        <CarouselProvider {...carouselProviderProps}>
          <CarouselRenderer {...carouselRendererProps}>
            {products.map((product, index) => (
              <SlideRenderer
                key={index}
                index={index}
                innerClassName="px-1 mx-auto"
                mobileMediaQuery="(max-width: 768px)"
                {...additionalSlideProps}
              >
                <BasicProductCard
                  product={product}
                  {...additionalProductProps}
                />
              </SlideRenderer>
            ))}
          </CarouselRenderer>
          <DotsRenderer
            mobileMediaQuery="(max-width: 768px)"
            {...additionalDotsProps}
          >
            <DefaultDotGroup
              disableActiveDots
              className="mt-7 flex w-full flex-1 flex-row items-center justify-center gap-x-1"
            />
          </DotsRenderer>
        </CarouselProvider>
      </SectionContent>
    </Section>
  );
}
