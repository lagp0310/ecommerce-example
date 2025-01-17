import type {
  Line_ItemsEdge as LineItemEdge,
  Carts as Cart,
} from "@/gql/graphql";
import { LineItemWithProduct } from "@/types/line-item/types";

export type CartLineItemsCollectionEdge = Omit<LineItemEdge, "node"> & {
  node: LineItemWithProduct;
};

export type CartResponse = Omit<
  Cart,
  "line_itemsCollection" | "cart_addressCollection"
> & {
  lineItemsCollection?: { edges: CartLineItemsCollectionEdge[] };
};

export type ClientCartEdgeResponse = {
  node: CartResponse;
};

export type ClientCartResponse = {
  cartsCollection: { edges: ClientCartEdgeResponse[] };
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
