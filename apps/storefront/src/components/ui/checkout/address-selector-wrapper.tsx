import React from "react";
import {
  DropdownSelector,
  type Props as DropdownSelectorProps,
} from "@/components/ui/common/dropdown-selector";
import { SelectTrigger, SelectValue } from "@/components/ui/common/select";

export type Props = DropdownSelectorProps;

export function AddressSelectorWrapper({
  currentValue,
  options,
  ...props
}: Props) {
  const optionValue = options.find(({ id }) => id === currentValue)?.name;

  const dropdownSelectorProps: DropdownSelectorProps = {
    currentValue,
    options,
    ...props,
  };

  return (
    <React.Suspense>
      <DropdownSelector {...dropdownSelectorProps}>
        <SelectTrigger className="line-clamp-1 flex w-full flex-row gap-x-1 truncate outline-none focus:ring-0 focus:ring-offset-0 md:gap-x-2">
          {optionValue}
          <SelectValue placeholder={optionValue} />
        </SelectTrigger>
      </DropdownSelector>
    </React.Suspense>
  );
}
