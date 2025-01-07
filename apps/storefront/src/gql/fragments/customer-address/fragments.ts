import { gql } from "@apollo/client";

export const customerAddressFragment = gql`
  fragment CustomerAddressFragment on customer_addresses {
    id
    streetAddress: street_address
    firstName: first_name
    lastName: last_name
    companyName: company_name
    zipCode: zip_code
    email
    phoneNumber: phone_number
    country: countries {
      id
      name
      alpha2: alpha_2
    }
    countryState: country_states {
      id
      name
      shortName: short_name
    }
    customerAddressType: customer_address_types {
      id
      type
    }
    createdAt: created_at
    updatedAt: updated_at
  }
`;

export const customerAddressFormFragment = gql`
  fragment CustomerAddressFormFragment on customer_addresses {
    id
    streetAddress: street_address
    firstName: first_name
    lastName: last_name
    companyName: company_name
    zipCode: zip_code
    email
    phoneNumber: phone_number
    countryId: country
    countryStateId: country_state
    customerId: customer
  }
`;
