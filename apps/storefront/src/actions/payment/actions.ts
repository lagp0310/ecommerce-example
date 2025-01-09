"use server";

import { getParsedErrorMessage } from "@/lib/utils";
import {
  cardFormSchema,
  cashFormSchema,
  type CardForm,
  type CashForm,
  type SuccessFailureMock,
} from "@/types/form/types";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/checkout");

    return {
      message: "Payment Successful",
      code: "CASH_PAYMENT_SUCCESS",
      paymentId: "c64ff9bf-5077-4a8a-95ec-1667924c62a2",
      amount: parseFloat(amount.toFixed(2)),
      continue: true,
    };
  } catch (error) {
    const parsedMessages = getParsedErrorMessage(error, "Payment Failed");

    return {
      message: [parsedMessages],
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

    revalidatePath("/checkout");

    return {
      message: "Payment Successful",
      code: "CARD_PAYMENT_SUCCESS",
      paymentId: "751b7b3f-11a3-4aaa-8a37-4dac7fb328fe",
      amount: parseFloat(amount.toFixed(2)),
      cardNumber: `${cardNumber.substring(0, cardNumber.length - 4).replace(/[0-9\-]/g, "*")}${cardNumber.substring(cardNumber.length - 4)}`,
      continue: true,
    };
  } catch (error) {
    const parsedMessages = getParsedErrorMessage(error, "Payment Failed");

    return {
      message: [parsedMessages],
      code: "CARD_PAYMENT_FAILURE",
      continue: false,
    };
  }
}
