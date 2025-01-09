"use client";

import { useAddressForm } from "@/hooks/use-address-form";
import {
  type AddressFormContext,
  type AddressForm,
  AddressType,
} from "@/types/form/types";
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

export type Props = {
  children: React.ReactNode;
  addressTypeId: string;
  currentValues?: AddressForm;
};

export function ShippingAddressFormContextProvider({
  children,
  addressTypeId,
  currentValues,
}: Props) {
  const { providerValue } = useAddressForm(
    addressTypeId,
    AddressType.SHIPPING,
    currentValues
  );

  return (
    <ShippingAddressFormContext.Provider value={providerValue}>
      {children}
    </ShippingAddressFormContext.Provider>
  );
}
