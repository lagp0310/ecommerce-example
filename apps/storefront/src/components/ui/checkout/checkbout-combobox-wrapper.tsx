"use client";

import React from "react";
import {
  ComboboxWrapper,
  type Props as ComboboxProps,
} from "@/components/ui/common/combobox-wrapper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = ComboboxProps & { searchParamName?: string };

export function CheckoutComboboxWrapper({
  searchParamName,
  ...comboboxProps
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (!searchParamName) {
        return;
      }

      const updatedSearchParams = new URLSearchParams(searchParams);
      const hasSearchParam = updatedSearchParams.has(searchParamName, newValue);

      if (hasSearchParam) {
        updatedSearchParams.delete(searchParamName, newValue);
      } else {
        updatedSearchParams.set(searchParamName, newValue);
      }

      router.push(`${pathname}?${updatedSearchParams.toString()}`, {
        scroll: false,
      });
    },
    [searchParamName, searchParams, router, pathname]
  );
  const onValueChangeCallback = React.useMemo(
    () => (searchParamName ? handleValueChange : undefined),
    [handleValueChange, searchParamName]
  );

  return (
    <ComboboxWrapper
      {...comboboxProps}
      onValueChangeCallback={onValueChangeCallback}
    />
  );
}
