import { cn } from "@/lib/utils";
import React from "react";
import { type FieldError } from "react-hook-form";

type Props = React.HTMLProps<HTMLDivElement> & {
  error?: FieldError;
  textClassName?: string;
};

export function FieldError({ error, textClassName, ...props }: Props) {
  return (
    <div {...props}>
      {error ? (
        <p
          role="alert"
          className={cn(
            "font-normal text-body-small text-danger line-clamp-1",
            textClassName
          )}
        >
          {error.message}
        </p>
      ) : null}
    </div>
  );
}
