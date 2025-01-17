import type {
  Products as ProductResponse,
  Weight_Units as WeightUnit,
  Weight_UnitsEdge as WeightUnitEdge,
} from "@/gql/graphql";
import { ProductTag, ProductTagConnectionResponse } from "@/types/tag/types";

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

export type ProductWeightUnit = Omit<
  WeightUnit,
  "plural_name" | "singular_name"
> & { pluralName: string; singularName: string };
export type ProductWeightUnitEdge = Omit<WeightUnitEdge, "node"> & {
  node: { id: string; weightUnit: ProductWeightUnit };
};

export type TProduct = Omit<
  ProductResponse,
  "image_url" | "discounted_price" | "product_weightsCollection"
> & {
  discountedPrice?: number;
  imageUrl?: string;
  generalTags?: ProductTag[];
  discountTags?: ProductTag[];
  totalRatings?: number;
  productWeight?: {
    edges: ProductWeightUnitEdge[];
  };
};

export type GetProductsMaxPriceResponse = { result_max_price: number };
export type GetProductIdsByTagsResponse = { id: string }[];
export type GetProductIdsByCategoriesResponse = { id: string }[];

export type ProductsResponse = Omit<
  ProductResponse,
  "product_tagsCollection"
> & {
  allTags?: ProductTagConnectionResponse;
};

export type ProductPageSearchParams = {
  categories?: string;
  maxPrice?: string;
  minRating?: string;
  page?: string;
  perPage?: string;
  sortBy?: string;
  sortByDirection?: string;
  tags?: string;
};
