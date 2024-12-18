import { CarouselProviderProps } from "pure-react-carousel";
import { type Props as CarouselProps } from "@/components/carousel/carousel";
import { MediaQuerySlide } from "@/hooks/use-visible-slides";
import React from "react";

export type Language = {
  id: string;
  name: string;
  shortName?: string;
  value: string;
  icon: React.ReactNode;
};
export type Currency = {
  id: string;
  name: string;
  shortName?: string;
  value: string;
  icon: React.ReactNode;
};

export type NavigationCategory = {
  title: string;
  href: string;
  description?: string;
};
export type NavigationLink = {
  groupName: string;
  title?: React.ReactNode;
  content: React.ReactNode;
  isDropdown?: boolean;
};
export type FooterLink = {
  groupName?: string;
  links: { text: string; url: string }[];
};

export type StoreHighlight = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type Category = {
  categoryId: string;
  image?: React.ReactNode;
  title: string;
  url: string;
  numberOfItems?: number;
};

export type ProductTagType = "info" | "danger" | "success";
export type ProductTag = {
  id: string;
  tag: string;
  type: ProductTagType;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  discountedPrice?: number;
  currencies: { id: string; currencySymbol: string; currencyCode: string };
  imageUrl: string;
  rating: number;
  totalRatings?: number;
  generalTags?: ProductTag[];
  discountTags?: ProductTag[];
  description?: string;
};

export type CustomerTestimonial = {
  id: string;
  text: string;
  avatarUrl: string;
  rating: number;
  fullName: string;
};

export type CarouselProviderCustomProps = Omit<
  CarouselProviderProps,
  "children"
> & {
  renderInDesktop?: boolean;
  mobileMediaQuery?: string;
  visibleSlidesSm?: MediaQuerySlide;
  visibleSlidesMd?: MediaQuerySlide;
  visibleSlidesLg?: MediaQuerySlide;
  visibleSlidesXl?: MediaQuerySlide;
};

export type CarouselRendererProps = Partial<CarouselProps> & {
  renderInDesktop?: boolean;
  mobileMediaQuery?: string;
};

export type ProductFilter = {
  name: string;
  initiallyCollapsed?: boolean;
  children: React.ReactNode;
};

export type BaseSelectOption = {
  id: string;
  name: string;
  value: string;
  isDisabled?: boolean;
  sortBy: string;
  direction: SortByDirection;
};

export type SortByDirection = "asc" | "desc";
