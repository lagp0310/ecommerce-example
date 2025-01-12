"use server";

import { createOrder } from "@/gql/mutations/order/mutations";
import { mutateGraphql } from "@/lib/server-mutate";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  orderFormSchema,
  type OrderForm,
  type SuccessFailureMock,
} from "@/types/form/types";
import type { OrderCreationResponse } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createOrderAction({
  isSuccess = true,
  ...orderData
}: OrderForm & SuccessFailureMock) {
  try {
    if (!isSuccess) {
      throw new Error("Order Creation Failed");
    }

    const orderCreationResponse = await mutateGraphql<OrderCreationResponse>(
      "insertIntoOrdersCollection",
      createOrder,
      { orders: [orderData] }
    );

    await orderFormSchema.parseAsync(orderData);

    revalidatePath("/checkout");

    return {
      message: "Order Creation Successful",
      code: "ORDER_CREATION_SUCCESS",
      order: orderCreationResponse,
      continue: true,
    };
  } catch (error) {
    const parsedMessages = getParsedErrorMessage(
      error,
      "Order Creation Failed"
    );

    return {
      message: [parsedMessages],
      code: "ORDER_CREATION_FAILURE",
      continue: false,
    };
  }
}
