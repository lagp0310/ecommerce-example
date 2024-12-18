"use client";

import React from "react";
import { BasicCartProduct } from "./basic-cart-product";
import { CartSheet } from "./cart-sheet";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/common/sheet";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { type DialogProps } from "@radix-ui/react-dialog";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/common/tooltip";
import { product } from "@/constants/constants";

const cartId = "0e84b499-0047-4125-9f96-f44b7a793214";
const numberOfProducts = 4;
const hasProducts = numberOfProducts > 0;

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
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = React.useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <CartSheet {...sheetProps} open={isOpen} onOpenChange={setIsOpen}>
      {sheetTrigger}
      <SheetContent className="flex flex-1 flex-col gap-y-4">
        <SheetHeader>{sheetTitle}</SheetHeader>
        {hasProducts ? (
          <div className="flex h-full max-h-full flex-1 basis-full flex-col overflow-y-auto overflow-x-hidden pr-4">
            {Array.from({ length: numberOfProducts }).map((_value, index) => (
              <div key={index} className="group/cart-product flex flex-col">
                <BasicCartProduct
                  key={index}
                  product={product}
                  toggleSidebar={toggleSidebar}
                />
                <div className="w-full border-t border-gray-100/50 group-last/cart-product:hidden"></div>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-body-medium font-normal text-gray-900">
            Your cart is currently empty.
          </span>
        )}
        <SheetFooter className="flex flex-1 basis-1/4 flex-col items-center gap-y-2 sm:flex-col sm:justify-end md:gap-y-4">
          <div className="w-full border-t border-gray-100/50"></div>
          <Link
            href={`/carts/${cartId}`}
            className="w-full rounded-[10px] border border-gray-100/50 px-5 py-3 text-center text-body-small font-normal leading-[120%] text-gray-900 hover:bg-green-gray-100/50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
            onClick={toggleSidebar}
          >
            View Cart
          </Link>
          <Link
            href={`/checkout/${cartId}`}
            className="w-full rounded-[10px] border border-gray-100/50 bg-primary px-5 py-3 text-center text-body-small font-normal leading-[120%] text-white hover:bg-hard-primary/100 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
            onClick={toggleSidebar}
          >
            Checkout
          </Link>
        </SheetFooter>
      </SheetContent>
    </CartSheet>
  );
}
