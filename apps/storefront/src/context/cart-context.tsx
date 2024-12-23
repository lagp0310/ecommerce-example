"use client";

import type {
  Line_Items as LineItem,
  Line_ItemsEdge as LineItemEdge,
  Carts as Cart,
} from "@/gql/graphql";
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
import type { TProduct } from "@/types/types";
import isUUID from "validator/es/lib/isUUID";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { allLineItems } from "@/gql/queries/line-item/queries";
import { useToast } from "@/hooks/use-toast";

type CartContext = {
  cart: Cart | null;
  lineItems: LineItem[];
  getCartLineItemId: (productId: string) => string | null;
  handleAddToCart: (product: TProduct) => Promise<void>;
  handleUpdateQuantity: (
    lineItemId: string,
    product: TProduct,
    quantity: number
  ) => Promise<void>;
  handleDeleteLineItem: (
    lineItemId: string,
    showToast?: boolean
  ) => Promise<void>;
  isCreateCartLoading: boolean;
  isUpdateCartLoading: boolean;
  isCreateLineItemsLoading: boolean;
  isUpdateLineItemsLoading: boolean;
  isDeleteLineItemsLoading: boolean;
  isLoading: boolean;
};
const CartContext = React.createContext<CartContext>({
  cart: null,
  lineItems: [],
  getCartLineItemId: () => {
    return null;
  },
  handleAddToCart: async () => {},
  handleUpdateQuantity: async () => {},
  handleDeleteLineItem: async () => {},
  isCreateCartLoading: false,
  isUpdateCartLoading: false,
  isCreateLineItemsLoading: false,
  isUpdateLineItemsLoading: false,
  isDeleteLineItemsLoading: false,
  isLoading: false,
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
  currentCart?: Cart | null;
};

export function CartContextProvider({ children, currentCart = null }: Props) {
  const { toast } = useToast();
  const [cart, setCart] = React.useState(currentCart);
  const [lineItems, setLineItems] = React.useState<LineItem[]>([]);
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
              lineItemsCollection: { edges },
            },
          }) => {
            const lineItemsNode = (edges as LineItemEdge[])?.map(
              ({ node }) => node
            );
            setLineItems(lineItemsNode);
          }
        )
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [cart, getCart, getLineItems]);

  const [mutateCreateCart, { loading: isCreateCartLoading }] =
    useMutation(createCart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_mutateUpdateCart, { loading: isUpdateCartLoading }] =
    useMutation(updateCart);
  const [mutateCreateLineItems, { loading: isCreateLineItemsLoading }] =
    useMutation(createLineItems);
  const [mutateUpdateLineItems, { loading: isUpdateLineItemsLoading }] =
    useMutation(updateLineItems);
  const [mutateDeleteLineItems, { loading: isDeleteLineItemsLoading }] =
    useMutation(deleteLineItems);

  const getCartLineItemId = React.useCallback(
    (productId: string) => {
      if (!lineItems) return null;

      const lineItemId = lineItems.find(
        ({ products }) => products?.id === productId
      )?.id;

      return lineItemId ?? null;
    },
    [lineItems]
  );

  const handleAddToCart = React.useCallback(
    async (product: TProduct) => {
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

        const cartId = cartData?.insertIntoCartsCollection?.records?.at(0)?.id;
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
          lineItemsData?.insertIntoLineItemsCollection?.records?.at(0);
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
    async (lineItemId: string, showToast = true) => {
      try {
        await mutateDeleteLineItems({
          variables: {
            filter: { id: { eq: lineItemId } },
          },
        });

        setLineItems((lineItems) =>
          lineItems.filter(({ id }) => id != lineItemId)
        );

        if (showToast) {
          toast({
            duration: 5000,
            description: "Product was removed from the Cart",
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [mutateDeleteLineItems, toast]
  );

  const handleUpdateQuantity = React.useCallback(
    async (lineItemId: string, product: TProduct, quantity: number) => {
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
          lineItemsData?.updateLineItemsCollection?.records?.at(0);
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

  const isLoading = React.useMemo(
    () =>
      isCreateCartLoading ||
      isUpdateCartLoading ||
      isCreateLineItemsLoading ||
      isUpdateLineItemsLoading ||
      isDeleteLineItemsLoading,
    [
      isCreateCartLoading,
      isCreateLineItemsLoading,
      isDeleteLineItemsLoading,
      isUpdateCartLoading,
      isUpdateLineItemsLoading,
    ]
  );

  const providerValue = React.useMemo(
    () => ({
      cart,
      lineItems,
      getCartLineItemId,
      handleAddToCart,
      handleUpdateQuantity,
      handleDeleteLineItem,
      isCreateCartLoading,
      isUpdateCartLoading,
      isCreateLineItemsLoading,
      isUpdateLineItemsLoading,
      isDeleteLineItemsLoading,
      isLoading,
    }),
    [
      cart,
      lineItems,
      getCartLineItemId,
      handleAddToCart,
      handleUpdateQuantity,
      handleDeleteLineItem,
      isCreateCartLoading,
      isUpdateCartLoading,
      isCreateLineItemsLoading,
      isUpdateLineItemsLoading,
      isDeleteLineItemsLoading,
      isLoading,
    ]
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}
