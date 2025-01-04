import { customerFragment } from "@/gql/fragments/customer/fragments";
import { gql } from "@apollo/client";

export const createCustomer = gql`
  mutation CreateCustomer($customers: [customersInsertInput!]!) {
    insertIntoCustomersCollection: insertIntocustomersCollection(
      objects: $customers
    ) {
      __typename
      affectedCount
      records {
        ...CustomerFragment
      }
    }
  }
  ${customerFragment}
`;

export const updateCustomer = gql`
  mutation UpdateCustomer(
    $customer: customersUpdateInput!
    $filter: customersFilter
  ) {
    updateCustomersCollection: updatecustomersCollection(
      set: $customer
      filter: $filter
    ) {
      __typename
      affectedCount
      records {
        ...CustomerFragment
      }
    }
  }
  ${customerFragment}
`;
