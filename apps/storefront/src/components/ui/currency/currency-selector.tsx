import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/common/dropdown-menu";
import type { Currency } from "@/types/types";

type Props = React.PropsWithChildren<{
  currencies: Currency[];
  wrapperClassname?: Pick<
    React.HTMLProps<HTMLDivElement>,
    "className"
  >["className"];
}>;

export function CurrencySelector({
  children,
  wrapperClassname = "",
  currencies,
  ...props
}: Props) {
  return (
    <div className={wrapperClassname}>
      <DropdownMenu {...props}>
        <DropdownMenuTrigger className="w-full outline-none">
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {currencies.map(({ name }, index) => (
            <DropdownMenuItem
              key={index}
              className="flex flex-1 flex-row gap-x-1"
            >
              <span>{name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
