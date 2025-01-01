import { gql } from "@apollo/client";
import { countryStateFragment } from "@/gql/fragments/country-state/fragments";

export const countryFragment = gql`
  fragment CountryFragment on countries {
    id
    name
    alpha2: alpha_2
    countryCode: country_code
    countryStatesCollection: country_statesCollection(
      filter: $countryStatesFilter
    ) {
      edges {
        node {
          ...CountryStateFragment
        }
      }
    }
  }
  ${countryStateFragment}
`;
