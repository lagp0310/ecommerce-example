import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & { label: string; value: string };

export function CartSummaryItem({ label, value, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "flex flex-row justify-start items-center gap-x-2 border-b last:border-none border-gray-100 py-3 w-full",
        className
      )}
      {...props}
    >
      <span className="text-body-small font-normal text-gray-700">{label}</span>
      <div className="flex w-full flex-1 flex-row justify-end">
        <span className="text-body-small font-medium text-gray-900">
          {value}
        </span>
      </div>
    </div>
  );
}
