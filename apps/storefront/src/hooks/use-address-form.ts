"use client";

import { saveAddressInformationAction } from "@/actions/customer-address/actions";
import { useCart } from "@/context/cart-context";
import { useCustomer } from "@/context/customer-context";
import { addressFormSchema, type AddressForm } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export function useAddressForm(
  addressTypeId: string,
  currentValues?: AddressForm
) {
  const { cart } = useCart();
  const { customer } = useCustomer();
  const customerId = React.useMemo(() => customer?.id ?? "", [customer?.id]);

  const [isPending, startTransition] = React.useTransition();

  const { reset, ...form } = useForm<AddressForm>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: { ...currentValues, customerId },
  });

  React.useEffect(() => {
    if (currentValues) {
      reset({ ...currentValues, customerId });
    }
  }, [currentValues, customerId, reset]);

  const onSubmit: SubmitHandler<AddressForm> = React.useCallback(
    async (data) => {
      try {
        startTransition(async () => {
          const response = await saveAddressInformationAction({
            ...data,
            cart: cart?.id ?? "",
            addressType: addressTypeId,
          });
          console.log(response);
        });
      } catch (error) {
        throw new Error("Submit error on Address Form");
      }
    },
    [addressTypeId, cart?.id]
  );

  const providerValue = React.useMemo(
    () => ({ form: { reset, ...form }, onSubmit }),
    [form, onSubmit, reset]
  );

  return {
    isPending,
    form,
    onSubmit,
    providerValue,
  };
}
