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
import Image from "next/image";
import type { Product } from "@/types/types";
import greenAppleProduct from "@/public/images/green-apple-product.png";
import { type DialogProps } from "@radix-ui/react-dialog";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/common/tooltip";

const cartProduct: Product = {
  id: "868b9f7f-620c-490c-9c8b-b45cccb4507f",
  name: "Green Apple",
  price: 20.99,
  currencySymbol: "$",
  currencyCode: "USD",
  image: (
    <Image
      src={greenAppleProduct}
      alt="Green Apple"
      className="h-auto w-20 max-w-20 rounded-[10px]"
    />
  ),
};
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
            <ShoppingBagIcon className="h-6 w-6 text-gray-900" />
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-normal text-body-medium text-gray-900">My Cart</p>
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
          <div className="flex flex-1 flex-col h-full max-h-full overflow-y-auto overflow-x-hidden pr-4 basis-full">
            {Array.from({ length: numberOfProducts }).map((_value, index) => (
              <div key={index} className="group/cart-product flex flex-col">
                <BasicCartProduct
                  key={index}
                  product={cartProduct}
                  toggleSidebar={toggleSidebar}
                />
                <div className="group-last/cart-product:hidden border-t border-gray-100/50 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <span className="font-normal text-gray-900 text-body-medium">
            Your cart is currently empty.
          </span>
        )}
        <SheetFooter className="flex flex-1 flex-col sm:flex-col sm:justify-end gap-y-2 md:gap-y-4 items-center basis-1/4">
          <div className="border-t border-gray-100/50 w-full"></div>
          <Link
            href={`/carts/${cartId}`}
            className="rounded-[10px] border border-gray-100/50 w-full text-gray-900 text-center px-5 py-3 text-body-small md:text-body-medium font-normal leading-[120%] hover:bg-green-gray-100/50 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
            onClick={toggleSidebar}
          >
            View Cart
          </Link>
          <Link
            href={`/checkout/${cartId}`}
            className="rounded-[10px] border border-gray-100/50 w-full text-center px-5 py-3 text-body-small md:text-body-medium font-normal leading-[120%] bg-primary text-white hover:bg-hard-primary/100 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100"
            onClick={toggleSidebar}
          >
            Checkout
          </Link>
        </SheetFooter>
      </SheetContent>
    </CartSheet>
  );
}
