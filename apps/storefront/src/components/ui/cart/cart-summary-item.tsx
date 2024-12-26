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
      <span className="font-normal text-body-small text-gray-700">{label}</span>
      <div className="flex flex-1 flex-row w-full justify-end">
        <span className="font-medium text-body-small text-gray-900">
          {value}
        </span>
      </div>
    </div>
  );
}
