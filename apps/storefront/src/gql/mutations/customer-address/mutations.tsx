import { customerAddressFragment } from "@/gql/fragments/customer-address/fragments";
import { gql } from "@apollo/client";

export const createCustomerAddress = gql`
  mutation CreateCustomerAddress(
    $customerAddresses: [customer_addressesInsertInput!]!
  ) {
    insertIntoCustomerAddressesCollection: insertIntocustomer_addressesCollection(
      objects: $customerAddresses
    ) {
      __typename
      affectedCount
      records {
        ...CustomerAddressFragment
      }
    }
  }
  ${customerAddressFragment}
`;

export const updateCustomerAddress = gql`
  mutation UpdateCustomerAddress(
    $customerAddress: customer_addressesUpdateInput!
    $filter: customer_addressesFilter
  ) {
    updateCustomerAddressesCollection: updatecustomer_addressesCollection(
      set: $customerAddress
      filter: $filter
    ) {
      __typename
      affectedCount
      records {
        ...CustomerAddressFragment
      }
    }
  }
  ${customerAddressFragment}
`;
