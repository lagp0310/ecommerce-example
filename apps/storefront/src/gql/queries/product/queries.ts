import { gql } from "@apollo/client";
import { productFragment } from "@/gql/fragments/product/fragments";

export const allProducts = gql`
  query AllProducts(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: productsFilter
    $orderBy: [productsOrderBy!]
  ) {
    productsCollection(
      first: $first
      last: $last
      before: $before
      after: $after
      offset: $offset
      filter: $filter
      orderBy: $orderBy
    ) {
      edges {
        node {
          ...ProductFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${productFragment}
`;
