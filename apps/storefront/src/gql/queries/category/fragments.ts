import { gql } from "@apollo/client";

export const categoryFragment = gql`
  fragment CategoryFragment on categories {
    id
    name
    imageUrl: image_url
    storeId: store
    createdAt: created_at
  }
`;
