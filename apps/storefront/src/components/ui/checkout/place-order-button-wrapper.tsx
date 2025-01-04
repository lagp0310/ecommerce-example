"use client";

import React from "react";
import {
  Button,
  type Props as ButtonProps,
} from "@/components/ui/common/button";
import { useCart } from "@/context/cart-context";
import { useCashForm } from "@/context/cash-form-context";
import { useAdditionalInfoForm } from "@/context/additional-info-form-context";
import { useBillingAddressForm } from "@/context/billing-address-form-context";
import { useShippingAddressForm } from "@/context/shipping-address-form-context";
import { createOrderAction } from "@/app/(store)/checkout/actions";
import { useCreditCardForm } from "@/context/credit-card-form-context";
import { useDebitCardForm } from "@/context/debit-card-form-context";

type Props = ButtonProps;

export function PlaceOrderButtonWrapper({ ...props }: Props) {
  const { cart } = useCart();

  const { form: billingAddressForm, onSubmit: onBillingAddressFormSubmit } =
    useBillingAddressForm();
  const { form: shippingAddressForm, onSubmit: onShippingAddressFormSubmit } =
    useShippingAddressForm();
  const { form: cashForm, onSubmit: onCashFormSubmit } = useCashForm();
  const { form: debitCardForm, onSubmit: onDebitCardFormSubmit } =
    useDebitCardForm();
  const { form: creditCardForm, onSubmit: onCreditCardFormSubmit } =
    useCreditCardForm();
  const { form: additionalInfoForm } = useAdditionalInfoForm();

  const submitAllForms = React.useCallback(async () => {
    const cartId = cart?.id;

    if (!cartId) {
      throw new Error("Cart could not be found");
    }

    const isAdditionalInfoFormValid = await additionalInfoForm.trigger();
    if (!isAdditionalInfoFormValid) {
      throw new Error("Additional Info Form is not valid");
    }

    // FIXME: Validate payment method depending on current selection.
    const [
      billingFormAddressResponse,
      shippingFormAddressResponse,
      cashFormResponse,
      cardFormResponse,
      createOrderResponse,
    ] = await Promise.all([
      billingAddressForm.handleSubmit(onBillingAddressFormSubmit)(),
      shippingAddressForm.handleSubmit(onShippingAddressFormSubmit)(),
      cashForm.handleSubmit(onCashFormSubmit)(),
      debitCardForm.handleSubmit(onDebitCardFormSubmit)(),
      creditCardForm.handleSubmit(onCreditCardFormSubmit)(),
      createOrderAction({
        cart: cartId,
        notes: additionalInfoForm.getValues("orderNotes"),
      }),
    ]);

    console.log(
      billingFormAddressResponse,
      shippingFormAddressResponse,
      cashFormResponse,
      cardFormResponse,
      createOrderResponse
    );
  }, [
    additionalInfoForm,
    billingAddressForm,
    cart?.id,
    cashForm,
    creditCardForm,
    debitCardForm,
    onBillingAddressFormSubmit,
    onCashFormSubmit,
    onCreditCardFormSubmit,
    onDebitCardFormSubmit,
    onShippingAddressFormSubmit,
    shippingAddressForm,
  ]);

  return <Button {...props} onClick={submitAllForms} />;
}
