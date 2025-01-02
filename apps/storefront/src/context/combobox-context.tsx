"use client";

import type { BaseSelectOption } from "@/types/types";
import { useSearchParams } from "next/navigation";
import React from "react";

type ComboboxContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const ComboboxContext = React.createContext<ComboboxContext>({
  open: false,
  setOpen: () => {},
  value: "",
  setValue: () => {},
});

export function useCombobox() {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error(
      "useCombobox must be used within a ComboboxContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  defaultOption?: BaseSelectOption;
  paramName?: string;
  onValueChange?: (newValue: string) => void;
};

export function ComboboxContextProvider({
  children,
  defaultOption,
  paramName,
  onValueChange,
}: Props) {
  const searchParams = useSearchParams();
  const searchParamValue = React.useMemo(
    () => (!!paramName ? searchParams.get(paramName) : null),
    [paramName, searchParams]
  );

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultOption?.value ?? "");

  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [onValueChange, value]);

  React.useEffect(() => {
    if (searchParamValue) {
      setValue(searchParamValue);
    }
  }, [searchParamValue]);

  const providerValue = React.useMemo(
    () => ({ open, setOpen, value, setValue }),
    [open, value]
  );

  return (
    <ComboboxContext.Provider value={providerValue}>
      {children}
    </ComboboxContext.Provider>
  );
}
