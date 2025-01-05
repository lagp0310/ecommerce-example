"use client";

import React from "react";
import type { BaseSelectOption } from "@/types/types";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/common/select";
import { type SelectProps } from "@radix-ui/react-select";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = SelectProps & {
  useNextLink?: boolean;
  placeholder?: string;
  currentValue?: string;
  options: BaseSelectOption[];
  wrapperClassname?: React.HTMLProps<HTMLDivElement>["className"];
};

export function DropdownSelector({
  useNextLink = false,
  placeholder = "Select a value...",
  currentValue,
  wrapperClassname = "",
  options,
  children = (
    <SelectTrigger
      className="w-fit gap-x-2 outline-none focus:ring-0 focus:ring-offset-0"
      value={currentValue}
    >
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
  ),
  ...props
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(false);
  }, [searchParams]);

  return (
    <div className={wrapperClassname}>
      <Select
        {...props}
        open={open}
        onOpenChange={setOpen}
        value={currentValue}
      >
        {children}
        <SelectContent>
          {options.map(
            ({ name, value, isDisabled, sortBy, direction }, index) => {
              const newSearchParams = new URLSearchParams(searchParams);
              if (sortBy && direction) {
                newSearchParams.set("sortBy", sortBy);
                newSearchParams.set("sortByDirection", direction);
              }

              return useNextLink ? (
                <Link
                  key={index}
                  href={`${pathname}?${newSearchParams.toString()}`}
                  className="group/select-link relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gray-50 focus:bg-neutral-100 focus:text-neutral-900 disabled:cursor-not-allowed aria-selected:bg-gray-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50"
                  aria-selected={currentValue === value}
                >
                  <span className="absolute left-2 hidden size-3.5 items-center justify-center group-aria-selected/select-link:flex">
                    <CheckIcon className="size-4" />
                  </span>
                  {name}
                </Link>
              ) : (
                <SelectItem key={index} value={value} disabled={isDisabled}>
                  {name}
                </SelectItem>
              );
            }
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
