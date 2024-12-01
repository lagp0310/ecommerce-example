import { CarouselProviderProps } from "pure-react-carousel";
import { type Props as CarouselProps } from "@/components/ui/carousel/carousel";
import { MediaQuerySlide } from "@/hooks/useVisibleSlides";

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
};

export type ProductTag = {
  text: string;
  type?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  currencySymbol?: string;
  currencyCode: string;
  image?: React.ReactNode;
  rating?: number;
  totalRatings?: number;
  tags?: ProductTag[];
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
  visibleSlidesSm?: MediaQuerySlide;
  visibleSlidesMd?: MediaQuerySlide;
  visibleSlidesLg?: MediaQuerySlide;
  visibleSlidesXl?: MediaQuerySlide;
};

export type CarouselRendererProps = Partial<CarouselProps> & {
  renderInDesktop?: boolean;
};
