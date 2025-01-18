import { gql } from "@apollo/client";
import { cartFragment } from "@/gql/fragments/cart/fragments";

export const orderFragment = gql`
  fragment OrderFragment on orders {
    id
    notes
    orderCart: carts {
      ...CartFragment
    }
    createdAt: created_at
    updatedAt: updated_at
  }
  ${cartFragment}
`;
