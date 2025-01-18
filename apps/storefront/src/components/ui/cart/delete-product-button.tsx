"use client";

import React from "react";
import { Button } from "@/components/ui/common/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
} & { lineItemId: string; refreshAfterDelete?: boolean };

export function DeleteProductButton({
  lineItemId,
  refreshAfterDelete = false,
  ...props
}: Props) {
  const router = useRouter();

  const { handleDeleteLineItem, isLoading } = useCart();
  const handleDeleteClick = React.useCallback(async () => {
    try {
      await handleDeleteLineItem(lineItemId, false);

      if (refreshAfterDelete) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  }, [handleDeleteLineItem, lineItemId, refreshAfterDelete, router]);

  return (
    <Button {...props} onClick={handleDeleteClick} disabled={isLoading}>
      <TrashIcon className="size-4 text-gray-900 group-hover:text-danger group-disabled:transition-none group-disabled:group-hover:text-gray-900 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none" />
    </Button>
  );
}
