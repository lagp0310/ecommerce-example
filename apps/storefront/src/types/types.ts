import { CarouselProviderProps } from "pure-react-carousel";
import { type Props as CarouselProps } from "@/components/carousel/carousel";
import { MediaQuerySlide } from "@/hooks/use-visible-slides";
import React from "react";
import type {
  Categories,
  Product_Tags as ProductTagResponse,
  Product_TagsConnection as ProductTagConnection,
  Product_TagsEdge as ProductTagEdge,
  Products as ProductResponse,
  Store_Features as StoreFeature,
  Tag_Types as TagType,
  Line_Items as LineItem,
  Payment_Methods as PaymentMethodResponse,
  Payment_Method_Types as PaymentMethodType,
  Customer_Address_Types as CustomerAddressType,
  Line_ItemsEdge as LineItemEdge,
  Carts as Cart,
} from "@/gql/graphql";
import type { OperationVariables } from "@apollo/client";

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

export type BaseAccordionItem = {
  name: string;
  initiallyCollapsed?: boolean;
  children: React.ReactNode;
  action?: React.ReactNode;
  actionClassName?: string;
  forceMount?: true;
  styles?: React.CSSProperties & { [key: string]: string };
};

export type BaseSelectOption = {
  id: string;
  name: string;
  value: string;
  isDisabled?: boolean;
  sortBy?: string;
  direction?: SortByDirection;
  additionalSearchParams?: Record<string, string>;
};

export type SortByDirection = "asc" | "desc";

export type TProduct = Omit<
  ProductResponse,
  "image_url" | "discounted_price"
> & {
  discountedPrice?: number;
  imageUrl?: string;
  generalTags?: ProductTag[];
  discountTags?: ProductTag[];
  totalRatings?: number;
};

export type BaseOperationVariables = OperationVariables;

export type GetProductsMaxPriceResponse = { result_max_price: number };

export type StoreFeatureResponse = Omit<StoreFeature, "icon_name"> & {
  iconName?: string;
};
export type CategoryResponse = Omit<Categories, "image_url"> & {
  imageUrl?: string;
};

export type ProductTagsResponse = Omit<
  ProductTagResponse,
  "is_general_tag" | "is_discount_tag" | "tag_types"
> & { isGeneralTag: boolean; isDiscountTag: boolean; tagTypes?: TagType };
export type ProductNode = Omit<ProductTagEdge, "product_tags"> & {
  productTags: ProductTagsResponse;
};
export type ProductTagsEdgeResponse = Omit<ProductTagEdge, "node"> & {
  node: ProductNode;
};
export type ProductTagConnectionResponse = Omit<
  ProductTagConnection,
  "edges"
> & { edges: Array<ProductTagsEdgeResponse> };
export type ProductsResponse = Omit<
  ProductResponse,
  "product_tagsCollection"
> & {
  allTags?: ProductTagConnectionResponse;
};
export type CartLineItemsCollectionEdge = Omit<LineItemEdge, "node"> & {
  node: LineItemWithProduct;
};
export type CartResponse = Omit<Cart, "line_itemsCollection"> & {
  lineItemsCollection?: { edges: CartLineItemsCollectionEdge[] };
};
export type LineItemWithProduct = Omit<LineItem, "products"> & {
  products: TProduct;
};
export type CartTableColumns = LineItemWithProduct & {
  subtotal: number;
  actions: React.ReactNode;
};

export type GetCartSummaryResponse = {
  subtotal_result: number;
  shipping_result: number;
  taxes_result: number;
  total_result: number;
};
export type CartSummaryField = {
  name: "subtotal" | "shipping" | "taxes" | "total";
  label: string;
  currencySymbol: string;
  value: string | number;
};
export type CartSummary = {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
};

export type PaymentMethodTypeResponse = Omit<
  PaymentMethodType,
  "created_at" | "updated_at"
> & { createdAt: string; updatedAt: string };
export type PaymentMethodsResponse = Omit<
  PaymentMethodResponse,
  | "payment_method_types"
  | "store"
  | "is_active"
  | "created_at"
  | "updated_at"
  | "payment_method_type"
> & {
  isActive: boolean;
  paymentMethodTypeId: string;
  paymentMethodTypes: PaymentMethodTypeResponse;
  storeId: string;
  createdAt?: string;
  updatedAt?: string;
};

export type GetParsedOptionsResponse = Pick<
  BaseSelectOption,
  "id" | "name" | "value"
>[];

export enum PaymentMethodEnum {
  CASH = "Cash",
  CREDIT_CARD = "Credit Card",
  DEBIT_CARD = "Debit Card",
}

export type GetProductIdsByTagsResponse = { id: string }[];
export type GetProductIdsByCategoriesResponse = { id: string }[];

export type AddressTypesResponse = Omit<
  CustomerAddressType,
  "created_at" | "updated_at"
> & { createdAt?: string; updatedAt?: string };
