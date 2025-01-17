"use client";

import type { CustomOnValueChange } from "@/types/types";
import React from "react";
import type {
  PathValue,
  FieldPath,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

export function useFormUtils<T extends FieldValues, Q extends FieldPath<T>>(
  setValue: UseFormSetValue<T>
) {
  const handleInputChange: CustomOnValueChange<Q> = React.useCallback(
    (name, values, _sourceInfo, useFormattedValue = true) => {
      const inputValue = useFormattedValue
        ? values.formattedValue
        : values.value;
      setValue(name, inputValue as PathValue<T, Q>);
    },
    [setValue]
  );

  return { handleInputChange };
}
