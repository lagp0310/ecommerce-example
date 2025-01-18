"use client";

import { processCashPaymentAction } from "@/actions/payment/actions";
import { type CashForm, cashFormSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  type SubmitHandler,
  useForm,
  type UseFormReturn,
} from "react-hook-form";

type CashFormContext = {
  form: UseFormReturn<CashForm>;
  onSubmit: SubmitHandler<CashForm>;
};
const CashFormContext = React.createContext<CashFormContext>({
  form: {} as UseFormReturn<CashForm>,
  onSubmit: () => {},
});

export function useCashForm() {
  const context = React.useContext(CashFormContext);
  if (!context) {
    throw new Error(
      "useCashForm must be used within a CashFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function CashFormContextProvider({ children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = React.useTransition();

  const { ...form } = useForm<CashForm>({
    resolver: zodResolver(cashFormSchema),
  });
  const onSubmit: SubmitHandler<CashForm> = React.useCallback(async (data) => {
    try {
      startTransition(async () => {
        const response = await processCashPaymentAction({
          ...data,
        });
        console.log(response);
      });
    } catch (error) {
      throw new Error("Submit error on Cash Form");
    }
  }, []);

  const providerValue = React.useMemo(
    () => ({ form, onSubmit }),
    [form, onSubmit]
  );

  return (
    <CashFormContext.Provider value={providerValue}>
      {children}
    </CashFormContext.Provider>
  );
}
