"use client";

import { useAddressForm } from "@/hooks/use-address-form";
import type { AddressFormContext, AddressForm } from "@/types/form/types";
import React from "react";
import { type UseFormReturn } from "react-hook-form";

export const ShippingAddressFormContext =
  React.createContext<AddressFormContext>({
    form: {} as UseFormReturn<AddressForm>,
    onSubmit: () => {},
  });

export function useShippingAddressForm() {
  const context = React.useContext(ShippingAddressFormContext);
  if (!context) {
    throw new Error(
      "useShippingAddressForm must be used within a ShippingAddressFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function ShippingAddressFormContextProvider({ children }: Props) {
  const { providerValue } = useAddressForm();

  return (
    <ShippingAddressFormContext.Provider value={providerValue}>
      {children}
    </ShippingAddressFormContext.Provider>
  );
}
