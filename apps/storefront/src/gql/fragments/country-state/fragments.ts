import { gql } from "@apollo/client";
import { zipCodeFragment } from "@/gql/fragments/zip-code/fragments";

export const countryStateFragment = gql`
  fragment CountryStateFragment on country_states {
    id
    name
    shortName: short_name
    countryId: country
  }
  ${zipCodeFragment}
`;
