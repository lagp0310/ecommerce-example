"use client";

import {
  type AdditionalInfoForm,
  additionalInfoFormSchema,
} from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type UseFormReturn } from "react-hook-form";

type AdditionalInfoFormContext = {
  form: UseFormReturn<AdditionalInfoForm>;
};
const AdditionalInfoFormContext =
  React.createContext<AdditionalInfoFormContext>({
    form: {} as UseFormReturn<AdditionalInfoForm>,
  });

export function useAdditionalInfoForm() {
  const context = React.useContext(AdditionalInfoFormContext);
  if (!context) {
    throw new Error(
      "useAdditionalInfoForm must be used within a AdditionalInfoFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function AdditionalInfoFormContextProvider({ children }: Props) {
  const { ...form } = useForm<AdditionalInfoForm>({
    resolver: zodResolver(additionalInfoFormSchema),
  });

  const providerValue = React.useMemo(() => ({ form }), [form]);

  return (
    <AdditionalInfoFormContext.Provider value={providerValue}>
      {children}
    </AdditionalInfoFormContext.Provider>
  );
}
