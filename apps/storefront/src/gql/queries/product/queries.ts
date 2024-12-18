import { gql } from "@apollo/client";
import { productFragment } from "@/gql/fragments/product/fragments";

export const allProducts = (params: string) => gql`
  query AllProducts($cursor: Cursor) {
    productsCollection(${params}) {
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

export const getProduct = (params: string) => gql`
  query GetProduct($cursor: Cursor) {
    productsCollection(${params}) {
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
`;
