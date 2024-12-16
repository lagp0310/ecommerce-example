import { gql } from "@apollo/client";

export const allProducts = (params: string) => gql`
    query AllProducts($cursor: Cursor) {
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
