import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Currency } from "@/types/types";

type Props = React.PropsWithChildren<{
  currencies: Currency[];
}>;

export function CurrencySelector({ children, currencies, ...props }: Props) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger className="outline-none">
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
  );
}
