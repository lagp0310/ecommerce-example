"use client";

import { Line_Items, type Carts } from "@/gql/graphql";
import React from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { createCart, updateCart } from "@/gql/mutations/cart/mutations";
import {
  defaultCurrencyId,
  localStorageCartIdItemName,
} from "@/constants/constants";
import {
  createLineItems,
  deleteLineItems,
  updateLineItems,
} from "@/gql/mutations/line-item/mutations";
import type { Product } from "@/types/types";
import isUUID from "validator/es/lib/isUUID";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { allLineItems } from "@/gql/queries/line-item/queries";
import { useToast } from "@/hooks/use-toast";

type CartContext = {
  cart: Carts | null;
  lineItems: Line_Items[];
  handleAddToCart: (product: Product) => Promise<void>;
  handleUpdateQuantity: (
    lineItemId: string,
    product: Product,
    quantity: number
  ) => Promise<void>;
  handleDeleteLineItem: (lineItemId: string) => Promise<void>;
  isCreateCartLoading: boolean;
  isUpdateCartLoading: boolean;
  isCreateLineItemsLoading: boolean;
  isUpdateLineItemsLoading: boolean;
  isDeleteLineItemsLoading: boolean;
};
const CartContext = React.createContext<CartContext>({
  cart: null,
  lineItems: [],
  handleAddToCart: async () => {},
  handleUpdateQuantity: async () => {},
  handleDeleteLineItem: async () => {},
  isCreateCartLoading: false,
  isUpdateCartLoading: false,
  isCreateLineItemsLoading: false,
  isUpdateLineItemsLoading: false,
  isDeleteLineItemsLoading: false,
});

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider.");
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  currentCart?: Carts | null;
};

export function CartContextProvider({ children, currentCart = null }: Props) {
  const { toast } = useToast();
  const [cart, setCart] = React.useState(currentCart);
  const [lineItems, setLineItems] = React.useState<Line_Items[]>([]);
  const [getCart] = useLazyQuery(getCartQuery);
  const [getLineItems] = useLazyQuery(allLineItems);
  React.useEffect(() => {
    if (!!cart) {
      return;
    }

    const cartId = window.localStorage.getItem(localStorageCartIdItemName);
    if (typeof cartId === "string" && isUUID(cartId)) {
      getCart({ variables: { filter: { id: { eq: cartId } } } })
        .then(
          ({
            data: {
              cartsCollection: { edges },
            },
          }) => {
            const cartNode = edges?.at(0)?.node;
            setCart(cartNode);
          }
        )
        .catch((error) => {
          throw new Error(error);
        });

      getLineItems({ variables: { filter: { cart: { eq: cartId } } } })
        .then(
          ({
            data: {
              line_itemsCollection: { edges },
            },
          }) => {
            const lineItemsNode = edges?.map(({ node }) => node);
            setLineItems(lineItemsNode);
          }
        )
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [cart, getCart, getLineItems]);

  const [
    mutateCreateCart,
    {
      loading: isCreateCartLoading,
      data: createCartData,
      error: createCartError,
    },
  ] = useMutation(createCart);
  const [
    mutateUpdateCart,
    {
      loading: isUpdateCartLoading,
      data: updateCartData,
      error: updateCartError,
    },
  ] = useMutation(updateCart);

  const [
    mutateCreateLineItems,
    {
      loading: isCreateLineItemsLoading,
      data: createLineItemsData,
      error: createLineItemsError,
    },
  ] = useMutation(createLineItems);
  const [
    mutateUpdateLineItems,
    {
      loading: isUpdateLineItemsLoading,
      data: updateLineItemsData,
      error: updateLineItemsError,
    },
  ] = useMutation(updateLineItems);
  const [
    mutateDeleteLineItems,
    {
      loading: isDeleteLineItemsLoading,
      data: deleteLineItemsData,
      error: deleteLineItemsError,
    },
  ] = useMutation(deleteLineItems);

  const handleAddToCart = React.useCallback(
    async (product: Product) => {
      try {
        const localStorageCartId = window.localStorage.getItem(
          localStorageCartIdItemName
        );

        let cartData;
        if (!localStorageCartId) {
          // FIXME: Add customer (id) on variables when login is ready.
          const { data: cartDataResponse } = await mutateCreateCart({
            variables: {
              cart: {
                // FIXME: Get env from validated file.
                store: process.env.NEXT_PUBLIC_STORE_ID,
                currency: defaultCurrencyId,
              },
            },
          });
          cartData = cartDataResponse;
        }

        const cartId = cartData?.insertIntocartsCollection?.records?.at(0)?.id;
        const { data: lineItemsData } = await mutateCreateLineItems({
          variables: {
            lineItems: [
              {
                cart: cart?.id ?? cartId,
                quantity: 1,
                price:
                  typeof product?.discountedPrice === "number"
                    ? product.discountedPrice
                    : product.price,
                product: product.id,
              },
            ],
          },
        });

        const newLineItem =
          lineItemsData?.insertIntoline_itemsCollection?.records?.at(0);
        setLineItems((lineItems) => lineItems.concat(newLineItem));

        toast({
          duration: 5000,
          description: `Added ${product.name} to Cart!`,
        });

        if (!localStorageCartId) {
          window.localStorage.setItem(localStorageCartIdItemName, cartId);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [cart?.id, mutateCreateCart, mutateCreateLineItems, toast]
  );

  const handleDeleteLineItem = React.useCallback(
    async (lineItemId: string) => {
      try {
        const { data: lineItemsData } = await mutateDeleteLineItems({
          variables: {
            filter: { id: { eq: lineItemId } },
          },
        });

        setLineItems((lineItems) =>
          lineItems.filter(({ id }) => id != lineItemId)
        );

        toast({
          duration: 5000,
          description: "Product was removed from the Cart",
        });
      } catch (error) {
        console.error(error);
      }
    },
    [mutateDeleteLineItems, toast]
  );

  const handleUpdateQuantity = React.useCallback(
    async (lineItemId: string, product: Product, quantity: number) => {
      if (!cart) {
        throw new Error(
          "Cannot update line items as cart is null or undefined"
        );
      }

      if (quantity === 0) {
        return handleDeleteLineItem(lineItemId);
      }

      try {
        const { data: lineItemsData } = await mutateUpdateLineItems({
          variables: {
            filter: { id: { eq: lineItemId } },
            lineItems: {
              cart: cart?.id,
              quantity,
              price:
                typeof product?.discountedPrice === "number"
                  ? product.discountedPrice
                  : product.price,
              product: product.id,
            },
          },
        });

        const updatedLineItem =
          lineItemsData?.updateline_itemsCollection?.records?.at(0);
        setLineItems((lineItems) =>
          lineItems.filter(({ id }) => id != lineItemId).concat(updatedLineItem)
        );

        toast({
          duration: 5000,
          description: "Quantity Updated",
        });
      } catch (error) {
        console.error(error);
      }
    },
    [cart, handleDeleteLineItem, mutateUpdateLineItems, toast]
  );

  const providerValue = React.useMemo(
    () => ({
      cart,
      lineItems,
      handleAddToCart,
      handleUpdateQuantity,
      handleDeleteLineItem,
      isCreateCartLoading,
      isUpdateCartLoading,
      isCreateLineItemsLoading,
      isUpdateLineItemsLoading,
      isDeleteLineItemsLoading,
    }),
    [
      cart,
      lineItems,
      handleAddToCart,
      handleUpdateQuantity,
      handleDeleteLineItem,
      isCreateCartLoading,
      isUpdateCartLoading,
      isCreateLineItemsLoading,
      isUpdateLineItemsLoading,
      isDeleteLineItemsLoading,
    ]
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}
