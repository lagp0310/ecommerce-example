"use client";

import React from "react";
import {
  Button,
  type Props as ButtonProps,
} from "@/components/ui/common/button";
import { createOrderAction } from "@/app/(store)/checkout/actions";
import { useCart } from "@/context/cart-context";

type Props = ButtonProps;

// FIXME: This should submit all the checkout forms, validate them, call server actions and if everything is OK, then we call create order.
export function PlaceOrderButtonWrapper({ ...props }: Props) {
  const { cart } = useCart();

  return (
    <Button
      {...props}
      onClick={async () => {
        const cartId = cart?.id;

        if (!cartId) {
          throw new Error("Cart could not be found");
        }

        const response = await createOrderAction({
          cart: cartId,
        });
        console.log(response);
      }}
    />
  );
}
