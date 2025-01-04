"use server";

import { createCustomerAddress } from "@/gql/mutations/customer-address/mutations";
import { createOrder } from "@/gql/mutations/order/mutations";
import { mutateGraphql } from "@/lib/server-mutate";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  addressFormSchema,
  cardFormSchema,
  cashFormSchema,
  orderFormSchema,
  type AddressForm,
  type CardForm,
  type CashForm,
  type OrderForm,
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

export async function processCashPaymentAction({
  amount,
  isSuccess = true,
  ...cashFormRest
}: CashForm & SuccessFailureMock) {
  // TODO: Update this mock.
  try {
    if (!isSuccess) {
      throw new Error("Payment Failed");
    }

    await cashFormSchema.parseAsync({ amount, ...cashFormRest });

    return {
      message: "Payment Successful",
      code: "CASH_PAYMENT_SUCCESS",
      paymentId: "c64ff9bf-5077-4a8a-95ec-1667924c62a2",
      amount: parseFloat(amount.toFixed(2)),
      continue: true,
    };
  } catch (error) {
    const parsedMessage = getParsedErrorMessage(error, "Payment Failed");

    return {
      message: parsedMessage,
      code: "CASH_PAYMENT_FAILURE",
      continue: false,
    };
  }
}

export async function processCardPaymentAction({
  amount,
  cardNumber,
  isSuccess = true,
  ...cardFormRest
}: CardForm & SuccessFailureMock) {
  // TODO: Update this mock.
  try {
    if (!isSuccess) {
      throw new Error("Payment Failed");
    }

    await cardFormSchema.parseAsync({ amount, cardNumber, ...cardFormRest });

    return {
      message: "Payment Successful",
      code: "CARD_PAYMENT_SUCCESS",
      paymentId: "751b7b3f-11a3-4aaa-8a37-4dac7fb328fe",
      amount: parseFloat(amount.toFixed(2)),
      cardNumber: `${cardNumber.substring(0, cardNumber.length - 4).replace(/[0-9\-]/g, "*")}${cardNumber.substring(cardNumber.length - 4)}`,
      continue: true,
    };
  } catch (error) {
    const parsedMessage = getParsedErrorMessage(error, "Payment Failed");

    return {
      message: parsedMessage,
      code: "CARD_PAYMENT_FAILURE",
      continue: false,
    };
  }
}

export async function createOrderAction({
  isSuccess = true,
  ...orderData
}: OrderForm & SuccessFailureMock) {
  try {
    if (!isSuccess) {
      throw new Error("Order Creation Failed");
    }

    // TODO: Types.
    const orderCreationResponse = await mutateGraphql(
      "insertIntoOrdersCollection",
      createOrder,
      { orders: [orderData] }
    );

    await orderFormSchema.parseAsync(orderData);

    return {
      message: "Order Creation Successful",
      code: "ORDER_CREATION_SUCCESS",
      order: orderCreationResponse,
      continue: true,
    };
  } catch (error) {
    const parsedMessage = getParsedErrorMessage(error, "Order Creation Failed");

    return {
      message: parsedMessage,
      code: "ORDER_CREATION_FAILURE",
      continue: false,
    };
  }
}
