import { gql } from "@apollo/client";

export const zipCodeFragment = gql`
  fragment ZipCodeFragment on zip_codes {
    id
    stateId: state
    zipCode: zip_code
    county
    city
  }
`;
