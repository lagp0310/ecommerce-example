"use client";

import type { CustomerResponse } from "@/types/types";
import React from "react";

type CustomerContext = {
  customer: CustomerResponse | null;
};
const CustomerContext = React.createContext<CustomerContext>({
  customer: null,
});

export function useCustomer() {
  const context = React.useContext(CustomerContext);
  if (!context) {
    throw new Error(
      "useCustomer must be used within a CustomerContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  initialCustomer?: CustomerResponse | null;
};

export function CustomerContextProvider({
  children,
  initialCustomer = null,
}: Props) {
  const [customer, setCustomer] = React.useState(initialCustomer);

  const providerValue = React.useMemo(() => ({ customer }), [customer]);

  return (
    <CustomerContext.Provider value={providerValue}>
      {children}
    </CustomerContext.Provider>
  );
}
