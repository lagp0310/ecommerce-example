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
  wrapperClassname?: Pick<
    React.HTMLProps<HTMLDivElement>,
    "className"
  >["className"];
}>;

export function LanguageSelector({
  children,
  wrapperClassname = "",
  languages,
  ...props
}: Props) {
  return (
    <div className={wrapperClassname}>
      <DropdownMenu {...props}>
        <DropdownMenuTrigger className="w-full outline-none">
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
    </div>
  );
}
