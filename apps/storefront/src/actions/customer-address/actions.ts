"use server";

import { createCartAddress } from "@/gql/mutations/cart-address/mutations";
import { createCustomerAddress } from "@/gql/mutations/customer-address/mutations";
import { mutateGraphql } from "@/lib/server-mutate";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  addressFormSchema,
  type CartAddressForm,
  type AddressForm,
  type SuccessFailureMock,
  cartAddressFormSchema,
} from "@/types/form/types";

// TODO: Revalidate cache after operations.

export async function saveAddressInformationAction({
  id,
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
  cart,
  addressType,
  isSuccess = true,
}: AddressForm & Omit<CartAddressForm, "address"> & SuccessFailureMock) {
  // TODO: Update this mock.
  try {
    if (!isSuccess) {
      throw new Error("Address Creation Failed");
    }

    const customerAddresses = [
      {
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
    // TODO: Update if exists (if id is present).
    let addressResponse;
    if (!id) {
      addressResponse = await mutateGraphql(
        "insertIntoCustomerAddressesCollection",
        createCustomerAddress,
        {
          customerAddresses,
        }
      );
    } else {
      addressResponse = await mutateGraphql(
        "updateCustomerAddressesCollection",
        createCustomerAddress,
        {
          customerAddress: customerAddresses,
          filter: { id: { eq: id } },
        }
      );
    }

    const addressObject = addressResponse?.at(0);
    const cartAddresses = [
      { cart, address: addressObject?.id, address_type: addressType },
    ];
    await cartAddressFormSchema.parseAsync({
      cart,
      address: addressObject?.id,
      addressType,
    });

    // TODO: Types.
    // FIXME: If cart contains an address of this type (addressTypeId), we should delete
    // the cart_address record and create a new one.
    const cartAddressCreationResponse = await mutateGraphql(
      "insertIntoCartAddressCollection",
      createCartAddress,
      { cartAddresses }
    );

    return {
      messages: ["Address Creation Successful"],
      code: "ADDRESS_CREATION_SUCCESS",
      addresses: addressResponse,
      cartAddresses: cartAddressCreationResponse,
      continue: true,
    };
  } catch (error) {
    const parsedMessages = getParsedErrorMessage(
      error,
      "Address Creation Failed"
    );

    return {
      messages: [parsedMessages],
      code: "ADDRESS_CREATION_FAILURE",
      continue: false,
    };
  }
}
