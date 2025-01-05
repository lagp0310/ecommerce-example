"use client";

import { Label } from "@/components/form/label";
import React from "react";
import {
  Checkbox,
  type Props as CheckboxProps,
} from "@/components/ui/common/checkbox";
import type {
  GetParsedOptionsRenamedResponse,
  GetParsedOptionsResponse,
} from "@/types/types";
import { cn } from "@/lib/utils";
import {
  AddressForm,
  type Props as AddressFormProps,
} from "@/components/ui/checkout/address-form";
import { useBillingAddressForm } from "@/context/billing-address-form-context";
import { useShippingAddressForm } from "@/context/shipping-address-form-context";
import {
  AddressSelectorWrapper,
  type Props as AddressSelectorWrapperProps,
} from "@/components/ui/checkout/address-selector-wrapper";

export type Props = {
  currentBillingAddressId?: string;
  billingCustomerAddresses?: GetParsedOptionsRenamedResponse;
  currentShippingAddressId?: string;
  shippingCustomerAddresses?: GetParsedOptionsRenamedResponse;
  billingCountries: GetParsedOptionsResponse;
  shippingCountries: GetParsedOptionsResponse;
  billingCountryStates: GetParsedOptionsResponse;
  shippingCountryStates: GetParsedOptionsResponse;
};

export function CheckoutForm({
  currentBillingAddressId,
  billingCustomerAddresses = [],
  currentShippingAddressId,
  shippingCustomerAddresses = [],
  billingCountries,
  shippingCountries,
  billingCountryStates,
  shippingCountryStates,
  ...formProps
}: Props) {
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

  const billingAddressFormProps: Omit<AddressFormProps, "addressTypeId"> = {
    ...formProps,
    countrySearchParamName: "billingCountryId",
    countryStateSearchParamName: "billingCountryStateId",
    countries: billingCountries,
    countryStates: billingCountryStates,
    htmlNamePrefix: "billing",
    ...billingContextValue,
  };
  const shippingAddressFormProps: Omit<AddressFormProps, "addressTypeId"> = {
    ...formProps,
    countrySearchParamName: "shippingCountryId",
    countryStateSearchParamName: "shippingCountryStateId",
    countries: shippingCountries,
    countryStates: shippingCountryStates,
    htmlNamePrefix: "shipping",
    ...shippingContextValue,
  };

  const commonAddressSelectorWrapperProps: Omit<
    AddressSelectorWrapperProps,
    "options"
  > = {
    useNextLink: true,
    wrapperClassname: "flex flex-1",
  };
  const billingAddressSelectorWrapperProps: AddressSelectorWrapperProps = {
    options: billingCustomerAddresses,
    currentValue: currentBillingAddressId,
    ...commonAddressSelectorWrapperProps,
  };
  const shippingAddressSelectorWrapperProps: AddressSelectorWrapperProps = {
    options: shippingCustomerAddresses,
    currentValue: currentShippingAddressId,
    ...commonAddressSelectorWrapperProps,
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <AddressSelectorWrapper {...billingAddressSelectorWrapperProps} />
      <AddressForm {...billingAddressFormProps} />
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
          "flex flex-col gap-4 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
          { hidden: !showShippingAddressForm }
        )}
      >
        <AddressSelectorWrapper {...shippingAddressSelectorWrapperProps} />
        <AddressForm {...shippingAddressFormProps} />
      </div>
    </div>
  );
}
