import { cn } from "@/lib/utils";
import type { ProductTag as TProductTag } from "@/types/types";
import React from "react";

type Props = React.HTMLProps<HTMLSpanElement> & { tag: TProductTag };

export function ProductTag({ className, tag: { tag, type }, ...props }: Props) {
  return (
    <span
      className={cn(
        "font-normal rounded-[4px] px-2 py-[3px] truncate whitespace-break-spaces",
        {
          "bg-blue-500 text-white": type === "info",
          "bg-danger text-white": type === "danger",
        },
        className
      )}
      {...props}
    >
      {tag}
    </span>
  );
}
