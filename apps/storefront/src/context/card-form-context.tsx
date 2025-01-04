"use client";

import { processCardPaymentAction } from "@/app/(store)/checkout/actions";
import { type CardForm, cardFormSchema } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  type SubmitHandler,
  useForm,
  type UseFormReturn,
} from "react-hook-form";

type CardFormContext = {
  form: UseFormReturn<CardForm>;
  onSubmit: SubmitHandler<CardForm>;
};
const CardFormContext = React.createContext<CardFormContext>({
  form: {} as UseFormReturn<CardForm>,
  onSubmit: () => {},
});

export function useCardForm() {
  const context = React.useContext(CardFormContext);
  if (!context) {
    throw new Error(
      "useCardForm must be used within a CardFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function CardFormContextProvider({ children }: Props) {
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

  return (
    <CardFormContext.Provider value={providerValue}>
      {children}
    </CardFormContext.Provider>
  );
}
