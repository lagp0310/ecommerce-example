import { gql } from "@apollo/client";
import { offerBannerFragment } from "@/gql/fragments/offer-banner/fragments";

export const allOfferBanners = gql`
  query AllOfferBanners(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: offer_bannersFilter
    $orderBy: [offer_bannersOrderBy!]
  ) {
    offerBannersCollection: offer_bannersCollection(
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
          ...OfferBannerFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${offerBannerFragment}
`;
