"use client";

import { saveAddressInformationAction } from "@/actions/customer-address/actions";
import { addressFormSchema, type AddressForm } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export function useAddressForm(
  addressTypeId: string,
  currentValues?: AddressForm
) {
  const [isPending, startTransition] = React.useTransition();

  const { setValue, ...form } = useForm<AddressForm>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: currentValues,
  });

  React.useEffect(() => {
    setValue("addressTypeId", addressTypeId);
  }, [addressTypeId, setValue]);
  React.useEffect(() => {
    if (currentValues) {
      setValue("countryId", currentValues.countryId);
      setValue("countryStateId", currentValues.countryStateId);
      setValue("customerId", currentValues.customerId);
      setValue("phoneNumber", currentValues.phoneNumber);
      setValue("zipCode", currentValues.zipCode);
    }
  }, [currentValues, setValue]);

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
    () => ({ form: { setValue, ...form }, onSubmit }),
    [form, onSubmit, setValue]
  );

  return {
    isPending,
    form,
    onSubmit,
    providerValue,
  };
}
