import { gql } from "@apollo/client";
import { customerAddressFragment } from "@/gql/fragments/customer-address/fragments";

export const customerFragment = gql`
  fragment CustomerFragment on customers {
    id
    firstName: first_name
    lastName: last_name
    birthDate: birth_date
    emails: emailsCollection {
      edges {
        node {
          id
          email
        }
      }
    }
    phoneNumbers: phone_numbersCollection {
      edges {
        node {
          id
          phoneNumber: phone_number
        }
      }
    }
    customerAddresses: customer_addressesCollection {
      edges {
        node {
          ...CustomerAddressFragment
        }
      }
    }
    createdAt: created_at
    updatedAt: updated_at
  }
  ${customerAddressFragment}
`;
