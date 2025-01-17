"use server";

import {
  createCartAddress,
  deleteCartAddress,
} from "@/gql/mutations/cart-address/mutations";
import { allCartAddresses } from "@/gql/queries/cart-address/queries";
import { mutateGraphql } from "@/lib/server-mutate";
import { queryGraphql } from "@/lib/server-query";
import { getParsedErrorMessage } from "@/lib/utils";
import {
  ActionCommonArgs,
  type CartAddressForm,
  type SuccessFailureMock,
  cartAddressFormSchema,
} from "@/types/types";
import type {
  CartAddressDeleteResponse,
  CartAddressInsertResponse,
  CartAddressResponse,
} from "@/types/types";
import { revalidatePath } from "next/cache";

export async function saveCartAddressAction({
  cart,
  address,
  addressType,
  revalidate = false,
  isSuccess = true,
}: CartAddressForm & SuccessFailureMock & ActionCommonArgs) {
  // TODO: Update this mock.
  try {
    if (!isSuccess) {
      throw new Error("Address Creation Failed");
    }

    const cartAddresses = [{ cart, address, address_type: addressType }];
    await cartAddressFormSchema.parseAsync({
      cart,
      address,
      addressType,
    });

    const currentCartAddresses = await queryGraphql<CartAddressResponse[]>(
      "cartAddressCollection",
      allCartAddresses,
      { filter: { cart: { eq: cart }, address_type: { eq: addressType } } },
      "no-cache"
    );

    let cartAddressCreationResponse: CartAddressResponse[] | null | undefined;
    if (Array.isArray(currentCartAddresses)) {
      if (currentCartAddresses.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_deleteCartAddressResponse, addressCreationResponse] =
          await Promise.all([
            mutateGraphql<CartAddressDeleteResponse>(
              "deleteFromCartAddressCollection",
              deleteCartAddress,
              {
                filter: {
                  cart: { eq: cart },
                  address: { neq: address },
                  address_type: { eq: addressType },
                },
              }
            ),
            mutateGraphql<CartAddressInsertResponse>(
              "insertIntoCartAddressCollection",
              createCartAddress,
              {
                cartAddresses,
              }
            ),
          ]);

        cartAddressCreationResponse = addressCreationResponse?.map(
          ({ records }) => records
        );
      } else {
        cartAddressCreationResponse = (
          await mutateGraphql<CartAddressInsertResponse>(
            "insertIntoCartAddressCollection",
            createCartAddress,
            { cartAddresses }
          )
        )?.map(({ records }) => records);
      }
    }

    if (revalidate) {
      revalidatePath("/checkout");
    }

    return {
      messages: ["Cart Address Creation Successful"],
      code: "CART_ADDRESS_CREATION_SUCCESS",
      cartAddresses: cartAddressCreationResponse,
      continue: true,
    };
  } catch (error) {
    const parsedMessages = getParsedErrorMessage(
      error,
      "Cart Address Creation Failed"
    );

    return {
      messages: [parsedMessages],
      code: "CART_ADDRESS_CREATION_FAILURE",
      continue: false,
    };
  }
}
