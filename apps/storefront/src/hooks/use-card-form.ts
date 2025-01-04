"use client";

import { processCardPaymentAction } from "@/app/(store)/checkout/actions";
import { type CardForm, cardFormSchema } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export function useCardForm() {
  const [isPending, startTransition] = React.useTransition();

  const { ...form } = useForm<CardForm>({
    resolver: zodResolver(cardFormSchema),
  });
  const onSubmit: SubmitHandler<CardForm> = React.useCallback(async (data) => {
    try {
      startTransition(async () => {
        const response = await processCardPaymentAction({
          ...data,
        });
        console.log(response);
      });
    } catch (error) {
      throw new Error("Submit error on Card Form");
    }
  }, []);

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
