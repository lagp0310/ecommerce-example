import { countryFragment } from "@/gql/fragments/country/fragments";
import { gql } from "@apollo/client";

export const allCountries = gql`
  query AllCountries(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: countriesFilter
    $orderBy: [countriesOrderBy!]
    $countryStatesFilter: country_statesFilter
  ) {
    countriesCollection(
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
          ...CountryFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${countryFragment}
`;
