"use client";

import React from "react";
import {
  BasicCartProduct,
  type Props as CartProductProps,
} from "@/components/ui/cart/basic-cart-product";
import { CartSheet } from "@/components/ui/cart/cart-sheet";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
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
import Link from "next/link";
import isUUID from "validator/es/lib/isUUID";
import { DeleteProductButton } from "@/components/ui/cart/delete-product-button";
import { usePathname } from "next/navigation";
import { getCartSummaryItems, lineItemsQuantityCounter } from "@/lib/utils";
import { CartSummary } from "@/components/ui/cart/cart-summary";
import { CartSummaryItem } from "@/components/ui/cart/cart-summary-item";
import type { CartSummaryField } from "@/types/types";
import { maxAllowedLineItemsCount } from "@/constants/constants";

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
  const { cart, lineItems, cartSummary } = useCart();
  const cartId = React.useMemo(
    () => (typeof cart?.id === "string" && isUUID(cart.id) ? cart.id : null),
    [cart?.id]
  );
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

  const pathname = usePathname();
  const isCartPage = React.useMemo(
    () => pathname.startsWith("/cart"),
    [pathname]
  );

  const cartProductsCount = React.useMemo(
    () =>
      Array.isArray(lineItems)
        ? lineItems.reduce(lineItemsQuantityCounter, 0)
        : 0,
    [lineItems]
  );
  const cartProductsCountText = React.useMemo(
    () =>
      cartProductsCount > maxAllowedLineItemsCount ? "9+" : cartProductsCount,
    [cartProductsCount]
  );

  const cartTotalSummary: CartSummaryField[] = React.useMemo(
    () =>
      getCartSummaryItems(
        cartSummary.subtotal,
        cartSummary.shipping,
        cartSummary.taxes,
        cartSummary.total
      ),
    [
      cartSummary.shipping,
      cartSummary.subtotal,
      cartSummary.taxes,
      cartSummary.total,
    ]
  );

  const isCheckoutActionDisabled = React.useMemo(
    () => !cartId || cartProductsCount === 0,
    [cartId, cartProductsCount]
  );

  return (
    <CartSheet {...sheetProps} open={isOpen} onOpenChange={setIsOpen}>
      <div className="relative">
        <div className="absolute -top-2.5 left-3 flex size-5 flex-1 flex-row items-center justify-center rounded-full bg-primary text-[10px] font-normal text-white">
          {cartProductsCountText}
        </div>
        {sheetTrigger}
      </div>
      <SheetContent className="flex flex-1 flex-col gap-y-4">
        <SheetHeader>{sheetTitle}</SheetHeader>
        {hasProducts ? (
          <div className="flex h-full max-h-full flex-1 basis-full flex-col gap-y-2 overflow-y-auto overflow-x-hidden pr-4">
            {lineItems.map(({ products: product, id, ...lineItem }) => {
              if (!product) {
                return null;
              }

              const cartProductProps: CartProductProps = {
                lineItem: {
                  id,
                  ...lineItem,
                },
                product,
                toggleSidebar,
                actions: (
                  <DeleteProductButton
                    className="group -mr-2 rounded-full border-none p-2 hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                    lineItemId={id}
                    refreshAfterDelete={isCartPage}
                  />
                ),
              };

              return (
                <div key={id} className="group/cart-product flex flex-col">
                  <BasicCartProduct {...cartProductProps} />
                  <div className="mt-1 w-full border-t border-gray-100/50 group-last/cart-product:hidden"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <span className="text-body-medium font-normal text-gray-900">
            Your cart is currently empty.
          </span>
        )}
        <SheetFooter className="flex flex-1 basis-1/4 flex-col items-center gap-y-2 sm:flex-col sm:justify-end md:gap-y-4">
          <CartSummary
            className="top-0 flex max-h-fit w-full flex-1 basis-1/3 gap-y-0 border-none p-0"
            sectionTitle={null}
          >
            <div className="w-full border-t border-gray-100/50"></div>
            {cartTotalSummary?.map(({ currencySymbol, name, label, value }) => {
              const parsedValue =
                typeof value === "number" ? value.toFixed(2).toString() : value;
              const valuePrefix =
                typeof currencySymbol === "string" ? currencySymbol : null;

              return (
                <CartSummaryItem
                  key={name}
                  label={label}
                  value={`${valuePrefix ?? ""}${parsedValue}`}
                />
              );
            })}
          </CartSummary>
          {!!cartId ? (
            <React.Fragment>
              <Link
                href={`/carts/${cartId}`}
                className="w-full rounded-ten border border-gray-100/50 px-5 py-3 text-center text-body-small font-normal leading-[120%] text-gray-900 hover:bg-green-gray-100/50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
                onClick={toggleSidebar}
              >
                View Cart
              </Link>
              <Link
                href={`/checkout/${cartId}`}
                className="w-full rounded-ten border border-gray-100/50 bg-primary px-5 py-3 text-center text-body-small font-normal leading-[120%] text-white hover:bg-hard-primary/100 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium"
                onClick={toggleSidebar}
                aria-disabled={isCheckoutActionDisabled}
              >
                Checkout
              </Link>
            </React.Fragment>
          ) : null}
        </SheetFooter>
      </SheetContent>
    </CartSheet>
  );
}
