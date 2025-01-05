"use server";

import { createCustomerAddress } from "@/gql/mutations/customer-address/mutations";
import { mutateGraphql } from "@/lib/server-mutate";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  addressFormSchema,
  type AddressForm,
  type SuccessFailureMock,
} from "@/types/form/types";

// TODO: Revalidate cache after operations.

export async function saveAddressInformationAction({
  addressTypeId,
  countryId,
  countryStateId,
  email,
  firstName,
  lastName,
  phoneNumber,
  streetAddress,
  zipCode,
  companyName,
  customerId,
  isSuccess = true,
}: AddressForm & SuccessFailureMock) {
  // TODO: Update this mock.
  try {
    if (!isSuccess) {
      throw new Error("Address Creation Failed");
    }

    const customerAddresses = [
      {
        address_type: addressTypeId,
        first_name: firstName,
        last_name: lastName,
        street_address: streetAddress,
        company_name: companyName,
        country: countryId,
        country_state: countryStateId,
        zip_code: zipCode,
        customer: customerId,
        email,
        phone_number: phoneNumber,
      },
    ];

    await addressFormSchema.parseAsync({
      addressTypeId,
      countryId,
      countryStateId,
      email,
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      zipCode,
      companyName,
      customerId,
    });

    // TODO: Types.
    const addressCreationResponse = await mutateGraphql(
      "insertIntoCustomerAddressesCollection",
      createCustomerAddress,
      {
        customerAddresses,
      }
    );

    return {
      message: "Address Creation Successful",
      code: "ADDRESS_CREATION_SUCCESS",
      addresses: addressCreationResponse,
      continue: true,
    };
  } catch (error) {
    const parsedMessage = getParsedErrorMessage(
      error,
      "Address Creation Failed"
    );

    return {
      message: parsedMessage,
      code: "ADDRESS_CREATION_FAILURE",
      continue: false,
    };
  }
}
