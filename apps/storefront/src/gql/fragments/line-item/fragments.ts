import { gql } from "@apollo/client";
import { productFragment } from "@/gql/fragments/product/fragments";

export const lineItemFragment = gql`
  fragment LineItemFragment on line_items {
    id
    quantity
    comment
    products {
      ...ProductFragment
    }
    price
  }
  ${productFragment}
`;
