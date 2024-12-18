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
          id
          sku
          slug
          name
          description
          availableQuantity: available_quantity
          price
          discountedPrice: discounted_price
          discountedUntil: discounted_until
          currencies {
            id
            currencyCode: three_letter_code
            currencySymbol: symbol
          }
          imageUrl: image_url
          rating
          product_tagsCollection {
            edges {
              node {
                id
                tag
                isGeneralTag: is_general_tag
                isDiscountTag: is_discount_tag
                tagTypes: tag_types {
                  type
                }
              }
            }
          }
          createdAt: created_at
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
