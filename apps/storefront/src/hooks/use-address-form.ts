"use client";

import { saveAddressInformationAction } from "@/actions/customer-address/actions";
import { useCart } from "@/context/cart-context";
import { useCustomer } from "@/context/customer-context";
import {
  addressFormSchema,
  AddressType,
  type AddressForm,
} from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export function useAddressForm(
  addressTypeId: string,
  addressType: AddressType,
  currentValues?: AddressForm
) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { cart } = useCart();
  const { customer } = useCustomer();
  const customerId = React.useMemo(() => customer?.id ?? "", [customer?.id]);

  const [isPending, startTransition] = React.useTransition();

  const { reset, ...form } = useForm<AddressForm>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: { ...currentValues, customerId },
  });

  React.useEffect(() => {
    if (currentValues) {
      reset({ ...currentValues, customerId });
    }
  }, [currentValues, customerId, reset]);

  const onSubmit: SubmitHandler<AddressForm> = React.useCallback(
    async (data) => {
      try {
        startTransition(async () => {
          const response = await saveAddressInformationAction({
            ...data,
            cart: cart?.id ?? "",
            addressType: addressTypeId,
          });

          const addressId = response?.addresses?.at(0)?.id;
          const updatedSearchParams = new URLSearchParams(searchParams);
          if (addressId) {
            const paramName =
              addressType === AddressType.BILLING
                ? "billingAddressId"
                : addressType === AddressType.SHIPPING
                  ? "shippingAddressId"
                  : "";

            updatedSearchParams.set(paramName, addressId);
            router.push(`${pathname}?${updatedSearchParams.toString()}`);
          }
        });
      } catch (error) {
        throw new Error("Submit error on Address Form");
      }
    },
    [addressType, addressTypeId, cart?.id, pathname, router, searchParams]
  );

  const providerValue = React.useMemo(
    () => ({ form: { reset, ...form }, onSubmit }),
    [form, onSubmit, reset]
  );

  return {
    isPending,
    form,
    onSubmit,
    providerValue,
  };
}
