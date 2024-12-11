import React from "react";
import type { SelectOption } from "@/types/types";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "@radix-ui/react-select";

type Props = SelectProps & {
  initialOption?: string;
  options: SelectOption[];
  wrapperClassname?: Pick<
    React.HTMLProps<HTMLDivElement>,
    "className"
  >["className"];
};

export function SortBySelector({
  initialOption = "Select a value...",
  wrapperClassname = "",
  options,
  ...props
}: Props) {
  return (
    <div className={wrapperClassname}>
      <Select {...props}>
        <SelectTrigger className="w-fit gap-x-2 outline-none focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder={initialOption} />
        </SelectTrigger>
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
