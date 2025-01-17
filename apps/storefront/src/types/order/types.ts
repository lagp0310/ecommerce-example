import type {
  OrdersInsertResponse as OrderInsertResult,
  Orders as Order,
} from "@/gql/graphql";
import { CartResponse } from "@/types/cart/types";

export type OrderResponse = Omit<
  Order,
  "carts" | "created_at" | "updated_at"
> & { orderCart: CartResponse; createdAt?: string; updatedAt?: string };

export type OrderCreationResponse = Omit<OrderInsertResult, "records"> & {
  records: OrderResponse;
};
