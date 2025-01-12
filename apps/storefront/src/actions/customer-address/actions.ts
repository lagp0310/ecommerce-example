"use server";

import {
  createCustomerAddress,
  updateCustomerAddress,
} from "@/gql/mutations/customer-address/mutations";
import { mutateGraphql } from "@/lib/server-mutate";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  addressFormSchema,
  type CartAddressForm,
  type AddressForm,
  type SuccessFailureMock,
} from "@/types/form/types";
import { revalidatePath } from "next/cache";
import { saveCartAddressAction } from "@/actions/cart-address/actions";
import type {
  AddressInsertIntoResponse,
  AddressUpdateFromResponse,
  CustomerAddressResponse,
} from "@/types/types";

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

    const customerAddress = {
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
    };

    await addressFormSchema.parseAsync({
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
    });

    let addressResponse: CustomerAddressResponse[] | null | undefined;
    if (!id) {
      addressResponse = (
        await mutateGraphql<AddressInsertIntoResponse>(
          "insertIntoCustomerAddressesCollection",
          createCustomerAddress,
          {
            customerAddresses: [customerAddress],
          }
        )
      )?.map(({ records }) => records);
    } else {
      addressResponse = (
        await mutateGraphql<AddressUpdateFromResponse>(
          "updateCustomerAddressesCollection",
          updateCustomerAddress,
          {
            customerAddress,
            filter: { id: { eq: id } },
          }
        )
      )?.map(({ records }) => records);
    }

    const addressId = id ?? addressResponse?.at(0)?.id;
    let cartAddressCreationResponse;
    if (addressId && !id) {
      cartAddressCreationResponse = await saveCartAddressAction({
        cart,
        address: addressId,
        addressType,
        revalidate: false,
      });
    }

    revalidatePath("/checkout");

    return {
      messages: ["Address Creation Successful"],
      code: "ADDRESS_CREATION_SUCCESS",
      addresses: addressResponse,
      cartAddresses: cartAddressCreationResponse?.cartAddresses,
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
