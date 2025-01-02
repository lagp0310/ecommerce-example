"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/common/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/common/popover";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import type { BaseSelectOption } from "@/types/types";
import { type Command as CommandPrimitive } from "cmdk";
import { useCombobox } from "@/context/combobox-context";

export type Props = {
  options: BaseSelectOption[];
  defaultOption?: BaseSelectOption;
  emptyValueText?: string;
  noOptionFoundText?: string;
  commandInputProps?: React.ComponentPropsWithoutRef<
    typeof CommandPrimitive.Input
  >;
  buttonClassName?: string;
  isDisabled?: boolean;
  onValueChangeCallback?: (newValue: string) => void;
  isInvalid?: boolean;
};

export function ComboboxWrapper({
  options,
  emptyValueText = "Select an option...",
  noOptionFoundText = "No option found.",
  commandInputProps = {
    placeholder: "Search...",
  },
  buttonClassName,
  isDisabled = false,
  onValueChangeCallback,
  isInvalid = false,
}: Props) {
  const { open, setOpen, value, setValue } = useCombobox();

  const currentValue = React.useMemo(
    () => options.find(({ id }) => id === value),
    [options, value]
  );

  const handleOnSelect = React.useCallback(
    (newValue: string) => {
      setValue(newValue === value ? "" : newValue);
      setOpen(false);

      if (onValueChangeCallback) {
        onValueChangeCallback(newValue);
      }
    },
    [onValueChangeCallback, setOpen, setValue, value]
  );

  const buttonText = React.useMemo(
    () => currentValue?.name ?? emptyValueText,
    [currentValue, emptyValueText]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "items-center justify-between disabled:cursor-not-allowed disabled:opacity-50",
            buttonClassName
          )}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          data-invalid={isInvalid}
        >
          {buttonText}
          <ChevronUpDownIcon className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput {...commandInputProps} />
          <CommandList>
            <CommandEmpty>{noOptionFoundText}</CommandEmpty>
            <CommandGroup>
              {options.map(({ id, name, value: optionValue }) => (
                <CommandItem
                  key={id}
                  value={optionValue}
                  onSelect={() => handleOnSelect(id)}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
