"use client";

import { saveAddressInformationAction } from "@/actions/customer-address/actions";
import { addressFormSchema, type AddressForm } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export function useAddressForm() {
  const [isPending, startTransition] = React.useTransition();

  const { ...form } = useForm<AddressForm>({
    resolver: zodResolver(addressFormSchema),
  });

  const onSubmit: SubmitHandler<AddressForm> = React.useCallback(
    async (data) => {
      try {
        startTransition(async () => {
          const response = await saveAddressInformationAction(data);
          console.log(response);
        });
      } catch (error) {
        throw new Error("Submit error on Address Form");
      }
    },
    []
  );

  const providerValue = React.useMemo(
    () => ({ form, onSubmit }),
    [form, onSubmit]
  );

  return {
    isPending,
    form,
    onSubmit,
    providerValue,
  };
}
