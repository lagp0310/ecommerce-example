import React from "react";
import type { BaseSelectOption } from "@/types/types";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/common/select";
import type { SelectProps } from "@radix-ui/react-select";

type Props = SelectProps & {
  initialOption?: string;
  options: BaseSelectOption[];
  wrapperClassname?: React.HTMLProps<HTMLDivElement>["className"];
};

export function DropdownSelector({
  initialOption = "Select a value...",
  wrapperClassname = "",
  options,
  children = (
    <SelectTrigger className="w-fit gap-x-2 outline-none focus:ring-0 focus:ring-offset-0">
      <SelectValue placeholder={initialOption} />
    </SelectTrigger>
  ),
  ...props
}: Props) {
  return (
    <div className={wrapperClassname}>
      <Select {...props}>
        {children}
        <SelectContent>
          {options.map(({ name, value, isDisabled }, index) => (
            <SelectItem key={index} value={value} disabled={isDisabled}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
