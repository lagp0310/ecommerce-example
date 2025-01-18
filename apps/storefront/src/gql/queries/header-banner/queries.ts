import { gql } from "@apollo/client";
import { headerBannerFragment } from "@/gql/fragments/header-banner/fragments";

export const allHeaderBanners = gql`
  query AllHeaderBanners(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: header_bannersFilter
    $orderBy: [header_bannersOrderBy!]
  ) {
    headerBannersCollection: header_bannersCollection(
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
          ...HeaderBannerFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${headerBannerFragment}
`;
