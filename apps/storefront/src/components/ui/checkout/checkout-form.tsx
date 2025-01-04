"use client";

import { Label } from "@/components/form/label";
import React from "react";
import {
  Checkbox,
  type Props as CheckboxProps,
} from "@/components/ui/common/checkbox";
import type {
  AddressTypesResponse,
  GetParsedOptionsResponse,
} from "@/types/types";
import { cn } from "@/lib/utils";
import { AddressType } from "@/types/form/types";
import {
  AddressForm,
  type Props as AddressFormProps,
} from "@/components/ui/checkout/address-form";
import { useBillingAddressForm } from "@/context/billing-address-form-context";
import { useShippingAddressForm } from "@/context/shipping-address-form-context";

export type Props = {
  customerId: string;
  customerAddressTypes: AddressTypesResponse[];
  countries: GetParsedOptionsResponse;
  countryStates: GetParsedOptionsResponse;
};

export function CheckoutForm({ customerAddressTypes, ...formProps }: Props) {
  // TODO: Client and Server validation.
  // TODO: Error states.
  // TODO: Autofill data if the user is signed in.

  const billingContextValue = useBillingAddressForm();
  const shippingContextValue = useShippingAddressForm();

  const [showShippingAddressForm, setShowShippingAddressForm] =
    React.useState(false);

  const checkboxProps: CheckboxProps = React.useMemo(
    () => ({
      id: "ship-different-address",
      name: "ship-different-address",
      "aria-required": false,
      className:
        "size-5 rounded-[3px] border border-gray-100 bg-white text-gray-900 outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      checked: showShippingAddressForm,
      onClick: () => setShowShippingAddressForm((prevState) => !prevState),
    }),
    [showShippingAddressForm, setShowShippingAddressForm]
  );

  const billingAddressTypeId = React.useMemo(
    () =>
      customerAddressTypes.find(
        ({ type }) => type.toLowerCase() === AddressType.BILLING.toLowerCase()
      )?.id,
    [customerAddressTypes]
  );
  const shippingAddressTypeId = React.useMemo(
    () =>
      customerAddressTypes.find(
        ({ type }) => type.toLowerCase() === AddressType.SHIPPING.toLowerCase()
      )?.id,
    [customerAddressTypes]
  );

  const billingAddressFormProps: Omit<AddressFormProps, "addressTypeId"> = {
    ...formProps,
    htmlNamePrefix: "billing",
    ...billingContextValue,
  };
  const shippingAddressFormProps: Omit<AddressFormProps, "addressTypeId"> = {
    ...formProps,
    htmlNamePrefix: "shipping",
    ...shippingContextValue,
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      {!!billingAddressTypeId ? (
        <AddressForm
          {...billingAddressFormProps}
          addressTypeId={billingAddressTypeId}
        />
      ) : null}
      <Label
        htmlFor="ship-different-address"
        className="flex flex-row gap-2 w-fit items-center"
      >
        <Checkbox {...checkboxProps} />
        <span className="font-normal text-body-small text-gray-900 w-fit align-middle leading-normal">
          Ship to a different address
        </span>
      </Label>
      <div
        className={cn(
          "flex motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
          { hidden: !showShippingAddressForm }
        )}
      >
        {!!shippingAddressTypeId ? (
          <AddressForm
            {...shippingAddressFormProps}
            addressTypeId={shippingAddressTypeId}
          />
        ) : null}
      </div>
    </div>
  );
}
