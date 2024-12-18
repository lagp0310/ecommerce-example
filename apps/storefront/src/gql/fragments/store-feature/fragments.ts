import { gql } from "@apollo/client";

export const storeFeatureFragment = gql`
  fragment StoreFeatureFragment on store_features {
    id
    title
    description
    iconName: icon_name
    createdAt: created_at
  }
`;
