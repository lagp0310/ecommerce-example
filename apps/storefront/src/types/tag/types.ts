import type {
  Product_Tags as ProductTagResponse,
  Product_TagsConnection as ProductTagConnection,
  Product_TagsEdge as ProductTagEdge,
  Tag_Types as TagType,
} from "@/gql/graphql";
import { ProductTagType } from "@/types/tag-type/types";

export type ProductTag = {
  id: string;
  tag: string;
  type: ProductTagType;
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
