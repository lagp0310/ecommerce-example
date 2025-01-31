"use client";

import { useAddressForm } from "@/hooks/use-address-form";
import {
  type AddressFormContext,
  type AddressForm,
  AddressType,
} from "@/types/types";
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

export type Props = {
  children: React.ReactNode;
  addressTypeId: string;
  currentValues?: AddressForm;
};

export function BillingAddressFormContextProvider({
  children,
  addressTypeId,
  currentValues,
}: Props) {
  const { providerValue } = useAddressForm(
    addressTypeId,
    AddressType.BILLING,
    currentValues
  );

  return (
    <BillingAddressFormContext.Provider value={providerValue}>
      {children}
    </BillingAddressFormContext.Provider>
  );
}
