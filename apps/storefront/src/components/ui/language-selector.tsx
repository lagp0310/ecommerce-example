import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Language } from "@/types/types";

type Props = React.PropsWithChildren<{
  languages: Language[];
}>;

export function LanguageSelector({ children, languages, ...props }: Props) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map(({ name }, index) => (
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
