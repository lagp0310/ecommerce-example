import type { Line_Items as LineItem } from "@/gql/graphql";
import { TProduct } from "@/types/product/types";

export type LineItemWithProduct = Omit<LineItem, "products"> & {
  products: TProduct;
};

export type LineItemInput = Pick<
  LineItem,
  "cart" | "comment" | "price" | "product" | "weight"
> & { quantity?: number };
