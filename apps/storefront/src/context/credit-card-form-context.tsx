"use client";

import { useCardForm } from "@/hooks/use-card-form";
import type { CardForm, CardFormContext } from "@/types/types";
import React from "react";
import { type UseFormReturn } from "react-hook-form";

const CreditCardFormContext = React.createContext<CardFormContext>({
  form: {} as UseFormReturn<CardForm>,
  onSubmit: () => {},
});

export function useCreditCardForm() {
  const context = React.useContext(CreditCardFormContext);
  if (!context) {
    throw new Error(
      "useCreditCardForm must be used within a CreditCardFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function CreditCardFormContextProvider({ children }: Props) {
  const { providerValue } = useCardForm();

  return (
    <CreditCardFormContext.Provider value={providerValue}>
      {children}
    </CreditCardFormContext.Provider>
  );
}
