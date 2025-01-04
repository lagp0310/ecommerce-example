"use client";

import { useCardForm } from "@/hooks/use-card-form";
import type { CardFormContext, CardForm } from "@/types/form/types";
import React from "react";
import { type UseFormReturn } from "react-hook-form";

const DebitCardFormContext = React.createContext<CardFormContext>({
  form: {} as UseFormReturn<CardForm>,
  onSubmit: () => {},
});

export function useDebitCardForm() {
  const context = React.useContext(DebitCardFormContext);
  if (!context) {
    throw new Error(
      "useDebitCardForm must be used within a DebitCardFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function DebitCardFormContextProvider({ children }: Props) {
  const { providerValue } = useCardForm();

  return (
    <DebitCardFormContext.Provider value={providerValue}>
      {children}
    </DebitCardFormContext.Provider>
  );
}
