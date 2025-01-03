import { gql } from "@apollo/client";

export const productFragment = gql`
  fragment ProductFragment on products {
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
    allTags: product_tagCollection {
      edges {
        node {
          id
          productTags: product_tags {
            tag
            isGeneralTag: is_general_tag
            isDiscountTag: is_discount_tag
            tagTypes: tag_types {
              type
            }
          }
        }
      }
    }
    createdAt: created_at
  }
`;
