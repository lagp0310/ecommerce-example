import React from "react";
import type { TProduct } from "@/types/types";
import { CartProduct } from "@/components/ui/cart/cart-product";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  CartProductActions,
  type Props as CartProductActionsProps,
} from "@/components/ui/cart/cart-product-actions";
import {
  ProductPricing,
  type Props as ProductPricingProps,
} from "@/components/ui/product/product-pricing";
import Image from "next/image";
import { Line_Items as LineItem } from "@/gql/graphql";
import { defaultCurrencySymbol } from "@/constants/constants";
import { WeightUnit } from "@/types/form/weight/types";

export type Props = React.HTMLProps<HTMLDivElement> & {
  actionsProps?: CartProductActionsProps;
  lineItem: LineItem;
  product: TProduct;
  toggleSidebar?: () => void;
  actions?: React.ReactNode;
};

export function BasicCartProduct({
  actionsProps,
  lineItem: { quantity, weight },
  product: { slug, name, price, currencies, discountedPrice, imageUrl },
  toggleSidebar,
  actions,
  ...props
}: Props) {
  const hasActions = !!actions;
  const onProductClick = !!toggleSidebar ? toggleSidebar : undefined;

  const productPricingProps: ProductPricingProps = {
    className:
      "flex flex-row items-center gap-x-1 text-body-small md:text-body-medium",
    quantity: !!quantity ? parseInt(quantity) : null,
    weight,
    weightUnit: WeightUnit.KG,
    quantityClasses: "flex",
    price,
    discountedPrice,
    currencySymbol: currencies?.symbol ?? defaultCurrencySymbol,
    discountedPriceClasses: cn({
      "font-medium text-gray-900 truncate line-clamp-1": !discountedPrice,
    }),
    priceClasses: cn({
      "font-normal text-gray-400 line-through truncate line-clamp-1":
        discountedPrice,
      "font-medium text-gray-900 truncate line-clamp-1": !discountedPrice,
    }),
    showFinalPriceOnly: true,
  };

  return (
    <div className="flex flex-1 flex-row items-center gap-x-2">
      <Link
        href={`/products/${slug}`}
        className="flex flex-1 flex-row gap-x-1"
        onClick={onProductClick}
      >
        <CartProduct
          {...props}
          className="flex flex-1 flex-row items-center gap-4"
        >
          {typeof imageUrl === "string" ? (
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              className="h-auto w-10 rounded-ten min-[430px]:w-20"
            />
          ) : null}
          <div className="flex flex-1 flex-col justify-center gap-1">
            <span className="line-clamp-2">{name}</span>
            <ProductPricing {...productPricingProps} />
          </div>
        </CartProduct>
      </Link>
      {hasActions ? (
        <CartProductActions
          {...actionsProps}
          className={cn("flex flex-row gap-x-1", actionsProps?.className)}
        >
          {actions}
        </CartProductActions>
      ) : null}
    </div>
  );
}
