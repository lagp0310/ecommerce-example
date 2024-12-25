"use client";

import React from "react";
import { BasicCartProduct } from "./basic-cart-product";
import { CartSheet } from "./cart-sheet";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/common/sheet";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { type DialogProps } from "@radix-ui/react-dialog";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/common/tooltip";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

type Props = {
  sheetProps?: DialogProps;
  sheetTrigger?: React.ReactNode;
  sheetTitle?: React.ReactNode;
};

export function SidebarCartWrapper({
  sheetTrigger = (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger>
            <ShoppingBagIcon className="size-6 text-gray-900" />
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-body-medium font-normal text-gray-900">My Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  sheetTitle = <SheetTitle className="text-left">My Shopping Cart</SheetTitle>,
  ...sheetProps
}: Props) {
  const { lineItems } = useCart();
  const hasProducts = React.useMemo(
    () => Array.isArray(lineItems) && lineItems.length > 0,
    [lineItems]
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = React.useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const { toasts, dismiss } = useToast();
  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const openToasts = toasts?.filter(({ open }) => open);
    openToasts?.forEach(({ id }) => dismiss(id, 100));
  }, [dismiss, isOpen, toasts]);

  return (
    <CartSheet {...sheetProps} open={isOpen} onOpenChange={setIsOpen}>
      {sheetTrigger}
      <SheetContent className="flex flex-1 flex-col gap-y-4">
        <SheetHeader>{sheetTitle}</SheetHeader>
        {hasProducts ? (
          <div className="flex h-full max-h-full flex-1 basis-full flex-col overflow-y-auto overflow-x-hidden pr-4">
            {lineItems.map(({ products, id, ...lineItem }) => (
              <React.Fragment key={id}>
                {!!products ? (
                  <div className="group/cart-product flex flex-col">
                    <BasicCartProduct
                      lineItem={{
                        id,
                        ...lineItem,
                      }}
                      product={products}
                      toggleSidebar={toggleSidebar}
                    />
                    <div className="w-full border-t border-gray-100/50 group-last/cart-product:hidden"></div>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <span className="text-body-medium font-normal text-gray-900">
            Your cart is currently empty.
          </span>
        )}
        {/* <SheetFooter className="flex flex-1 basis-1/4 flex-col items-center gap-y-2 sm:flex-col sm:justify-end md:gap-y-4">
          <div className="w-full border-t border-gray-100/50"></div>
          <Link
            href={`/carts/${cartId}`}
            className="w-full rounded-ten border border-gray-100/50 px-5 py-3 text-center text-body-small font-normal leading-[120%] text-gray-900 hover:bg-green-gray-100/50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
            onClick={toggleSidebar}
          >
            View Cart
          </Link>
          <Link
            href={`/checkout/${cartId}`}
            className="w-full rounded-ten border border-gray-100/50 bg-primary px-5 py-3 text-center text-body-small font-normal leading-[120%] text-white hover:bg-hard-primary/100 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
            onClick={toggleSidebar}
          >
            Checkout
          </Link>
        </SheetFooter> */}
      </SheetContent>
    </CartSheet>
  );
}
