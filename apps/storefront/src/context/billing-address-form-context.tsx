"use client";

import { useAddressForm } from "@/hooks/use-address-form";
import type { AddressFormContext, AddressForm } from "@/types/form/types";
import React from "react";
import { type UseFormReturn } from "react-hook-form";

export const BillingAddressFormContext =
  React.createContext<AddressFormContext>({
    form: {} as UseFormReturn<AddressForm>,
    onSubmit: () => {},
  });

export function useBillingAddressForm() {
  const context = React.useContext(BillingAddressFormContext);
  if (!context) {
    throw new Error(
      "useBillingAddressForm must be used within a BillingAddressFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function BillingAddressFormContextProvider({ children }: Props) {
  const { providerValue } = useAddressForm();

  return (
    <BillingAddressFormContext.Provider value={providerValue}>
      {children}
    </BillingAddressFormContext.Provider>
  );
}
