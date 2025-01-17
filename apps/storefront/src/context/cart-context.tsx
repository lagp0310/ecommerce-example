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
import type {
  CartSummary,
  ClientCartResponse,
  GetCartSummaryResponse,
  LineItemInput,
  TProduct,
} from "@/types/types";
import isUUID from "validator/es/lib/isUUID";
import { getCart as getCartQuery } from "@/gql/queries/cart/queries";
import { useToast } from "@/hooks/use-toast";
import { dataProviderClient } from "@/providers/data/data-provider.client";
import { initialCartSummary } from "@/constants/cart/constants";

type CartContext = {
  cart: Cart | null;
  lineItems: LineItem[];
  cartSummary: CartSummary;
  getCartLineItemId: (productId: string) => string | null;
  getCartLineItemWeight: (productId: string) => number | null;
  handleAddToCart: (
    product: TProduct,
    quantity?: number | null,
    weight?: number
  ) => Promise<void>;
  handleUpdateQuantity: (
    lineItemId: string,
    product: TProduct,
    quantity: number
  ) => Promise<void>;
  handleUpdateWeight: (
    lineItemId: string,
    product: TProduct,
    weight: number
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
  cartSummary: initialCartSummary,
  getCartLineItemId: () => {
    return null;
  },
  getCartLineItemWeight: () => {
    return null;
  },
  handleAddToCart: async () => {},
  handleUpdateQuantity: async () => {},
  handleUpdateWeight: async () => {},
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
  const [summaryData, setSummaryData] =
    React.useState<CartSummary>(initialCartSummary);
  const [getCart] = useLazyQuery<ClientCartResponse>(getCartQuery);

  const refetchCart = React.useCallback(async () => {
    const cartId = window.localStorage.getItem(localStorageCartIdItemName);
    if (typeof cartId === "string" && isUUID(cartId)) {
      getCart({
        fetchPolicy: "no-cache",
        variables: {
          filter: { id: { eq: cartId } },
          lineItemsOrderBy: { created_at: "AscNullsLast" },
        },
      })
        // @ts-expect-error: TS error.
        .then(({ data }) => {
          const cartNode = data?.cartsCollection?.edges?.at(0)?.node;
          const lineItemsNodes = (
            cartNode?.lineItemsCollection?.edges as LineItemEdge[]
          )?.map(({ node }) => node);

          if (!cartNode) {
            throw new Error("Cart is invalid");
          }

          setCart(cartNode);
          setLineItems(lineItemsNodes);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [getCart]);

  React.useEffect(() => {
    if (!!cart) {
      return;
    }

    refetchCart()
      .then(null)
      .catch((error) => {
        throw new Error(error);
      });
  }, [cart, getCart, refetchCart]);

  React.useEffect(() => {
    if (!cart?.id) {
      return;
    }

    dataProviderClient
      .rpc("get_cart_summary_data", {
        cart_id: cart?.id,
      })
      .then(({ data, error }) => {
        if (error) {
          throw new Error(error?.message);
        }
        if (!data) {
          throw new Error("Summary cart data is empty");
        }

        const { subtotal_result, shipping_result, taxes_result, total_result } =
          data as GetCartSummaryResponse;
        setSummaryData({
          subtotal: subtotal_result,
          shipping: shipping_result,
          taxes: taxes_result,
          total: total_result,
        });
      });
  }, [cart, lineItems]);

  // TODO: Types for mutations.
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
      if (!lineItems) {
        return null;
      }

      const lineItemId = lineItems.find(
        ({ products }) => products?.id === productId
      )?.id;

      return lineItemId ?? null;
    },
    [lineItems]
  );
  const getCartLineItemWeight = React.useCallback(
    (productId: string) => {
      if (!lineItems) {
        return null;
      }

      const lineItemWeight = lineItems.find(
        ({ products }) => products?.id === productId
      )?.weight;

      return lineItemWeight ?? null;
    },
    [lineItems]
  );

  const createLocalCart = React.useCallback(async () => {
    if (!!cart) {
      return cart;
    }

    const localStorageCartId = window.localStorage.getItem(
      localStorageCartIdItemName
    );

    if (!localStorageCartId) {
      // FIXME: Add customer (id) on variables when login is ready.
      const { data: cartDataResponse } = await mutateCreateCart({
        variables: {
          carts: {
            // FIXME: Get env from validated file.
            store: process.env.NEXT_PUBLIC_STORE_ID,
            currency: defaultCurrencyId,
          },
        },
      });

      const cartObject =
        cartDataResponse?.insertIntoCartsCollection?.records?.at(0);
      if (!!cartObject) {
        setCart(cartObject);
        window.localStorage.setItem(localStorageCartIdItemName, cartObject?.id);
      }

      return cartDataResponse;
    }

    return null;
  }, [cart, mutateCreateCart]);

  const handleAddToCart = React.useCallback(
    async (product: TProduct, quantity: number | null = 1, weight?: number) => {
      try {
        const cartData = await createLocalCart();
        const cartId = cartData?.insertIntoCartsCollection?.records?.at(0)?.id;
        const lineItems = [
          {
            cart: cart?.id ?? cartId,
            quantity,
            weight,
            price:
              typeof product?.discountedPrice === "number"
                ? product.discountedPrice
                : product.price,
            product: product.id,
          },
        ];
        await mutateCreateLineItems({
          variables: {
            lineItems,
          },
        });

        await refetchCart();

        toast({
          duration: 5000,
          description: `Added ${product.name} to Cart!`,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [cart?.id, createLocalCart, mutateCreateLineItems, refetchCart, toast]
  );

  const handleDeleteLineItem = React.useCallback(
    async (lineItemId: string, showToast = true) => {
      try {
        await mutateDeleteLineItems({
          variables: {
            filter: { id: { eq: lineItemId } },
          },
        });

        await refetchCart();

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
    [mutateDeleteLineItems, refetchCart, toast]
  );

  const updateLineItem = React.useCallback(
    async (
      lineItemId: string,
      lineItem: LineItemInput,
      numericValue: number,
      removeIfZero = true
    ) => {
      if (!cart) {
        throw new Error(
          "Cannot update line items as cart is null or undefined"
        );
      }

      if (numericValue <= 0 && removeIfZero) {
        return handleDeleteLineItem(lineItemId);
      }

      try {
        await mutateUpdateLineItems({
          variables: {
            filter: { id: { eq: lineItemId } },
            lineItems: lineItem,
          },
        });

        await refetchCart();

        toast({
          duration: 5000,
          description: "Updated Product",
        });
      } catch (error) {
        console.error(error);
      }
    },
    [cart, handleDeleteLineItem, mutateUpdateLineItems, refetchCart, toast]
  );

  const handleUpdateQuantity = React.useCallback(
    async (lineItemId: string, product: TProduct, quantity: number) => {
      if (!cart) {
        throw new Error(
          "Cannot update line items as cart is null or undefined"
        );
      }

      try {
        const lineItem = {
          cart: cart?.id,
          quantity,
          price:
            typeof product?.discountedPrice === "number"
              ? product.discountedPrice
              : product.price,
          product: product.id,
        };

        await updateLineItem(lineItemId, lineItem, quantity);
      } catch (error) {
        console.error(error);
      }
    },
    [cart, updateLineItem]
  );

  const handleUpdateWeight = React.useCallback(
    async (lineItemId: string, product: TProduct, weight: number) => {
      if (!cart) {
        throw new Error(
          "Cannot update line items as cart is null or undefined"
        );
      }

      try {
        const lineItem = {
          cart: cart?.id,
          weight,
          price:
            typeof product?.discountedPrice === "number"
              ? product.discountedPrice
              : product.price,
          product: product.id,
        };

        await updateLineItem(lineItemId, lineItem, weight);
      } catch (error) {
        console.error(error);
      }
    },
    [cart, updateLineItem]
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
      cartSummary: summaryData,
      getCartLineItemId,
      getCartLineItemWeight,
      handleAddToCart,
      handleUpdateQuantity,
      handleUpdateWeight,
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
      summaryData,
      getCartLineItemId,
      getCartLineItemWeight,
      handleAddToCart,
      handleUpdateQuantity,
      handleUpdateWeight,
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
