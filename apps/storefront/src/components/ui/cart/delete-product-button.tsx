"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cart-context";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
} & { lineItemId: string };

export function DeleteProductButton({ lineItemId, ...props }: Props) {
  const { handleDeleteLineItem, isLoading } = useCart();
  const handleDeleteClick = React.useCallback(async () => {
    try {
      await handleDeleteLineItem(lineItemId, false);
    } catch (error) {
      console.error(error);
    }
  }, [handleDeleteLineItem, lineItemId]);

  return (
    <Button {...props} onClick={handleDeleteClick} disabled={isLoading}>
      <TrashIcon className="size-4 text-gray-900 group-hover:text-danger group-disabled:transition-none group-disabled:group-hover:text-gray-900 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
    </Button>
  );
}
