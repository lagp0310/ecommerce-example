"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import React from "react";
import type { GetParsedOptionsResponse } from "@/types/types";
import { CheckoutComboboxWrapper } from "@/components/ui/checkout/checkbout-combobox-wrapper";
import { ComboboxContextProvider } from "@/context/combobox-context";
import { ComboboxLabel } from "@/components/form/combobox-label";

export type Props = {
  countries: GetParsedOptionsResponse;
  countryStates: GetParsedOptionsResponse;
  zipCodes: GetParsedOptionsResponse;
};

export function AddressForm({ countries, countryStates, zipCodes }: Props) {
  // TODO: Client and Server validation.
  // TODO: Error states.
  // TODO: Autofill data if the user is signed in.

  const isCountryStateSelectorDisabled = React.useMemo(
    () => !Array.isArray(countryStates) || countryStates.length === 0,
    [countryStates]
  );
  const isZipCodeSelectorDisabled = React.useMemo(
    () => !Array.isArray(zipCodes) || zipCodes.length === 0,
    [zipCodes]
  );

  return (
    <Form action={createOrder} className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor="first-name"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              First Name<span className="text-danger"> *</span>
            </span>
            <Input
              id="first-name"
              name="first-name"
              placeholder="First Name"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="last-name"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Last Name<span className="text-danger"> *</span>
            </span>
            <Input
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="company-name"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Company Name (Optional)`}
            </span>
            <Input
              id="company-name"
              name="company-name"
              placeholder="Company Name"
              type="text"
              aria-required={false}
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row gap-4">
          <Label
            htmlFor="street-address"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Street Address<span className="text-danger"> *</span>
            </span>
            <Input
              id="street-address"
              name="street-address"
              placeholder="Street Address"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4 max-h-fit">
          <ComboboxContextProvider paramName="countryId">
            <ComboboxLabel
              htmlFor="country"
              className="flex flex-col gap-y-2 w-full cursor-pointer"
            >
              <span className="font-normal text-body-small text-gray-900">
                Country<span className="text-danger"> *</span>
              </span>
              <CheckoutComboboxWrapper
                searchParamName="countryId"
                options={countries}
                emptyValueText="Select a Country..."
                commandInputProps={{ placeholder: "Search a Country..." }}
                noOptionFoundText="No Country was found."
                buttonClassName="w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              />
            </ComboboxLabel>
          </ComboboxContextProvider>
          <ComboboxContextProvider paramName="countryStateId">
            <ComboboxLabel
              htmlFor="state"
              className="flex flex-col gap-y-2 w-full cursor-pointer"
            >
              <span className="font-normal text-body-small text-gray-900">
                State<span className="text-danger"> *</span>
              </span>
              <CheckoutComboboxWrapper
                searchParamName="countryStateId"
                options={countryStates}
                emptyValueText="Select a State..."
                commandInputProps={{ placeholder: "Search a State..." }}
                noOptionFoundText="No State was found."
                buttonClassName="w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                isDisabled={isCountryStateSelectorDisabled}
              />
            </ComboboxLabel>
          </ComboboxContextProvider>
          <ComboboxContextProvider paramName="zipCodeId">
            <ComboboxLabel
              htmlFor="zip-code"
              className="flex flex-col gap-y-2 w-full cursor-pointer"
            >
              <span className="font-normal text-body-small text-gray-900">
                ZIP Code<span className="text-danger"> *</span>
              </span>
              <CheckoutComboboxWrapper
                searchParamName="zipCodeId"
                options={zipCodes}
                emptyValueText="Select a Zip Code..."
                commandInputProps={{ placeholder: "Search a Zip Code..." }}
                noOptionFoundText="No Zip Code was found."
                buttonClassName="w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                isDisabled={isZipCodeSelectorDisabled}
              />
            </ComboboxLabel>
          </ComboboxContextProvider>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor="email"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Email<span className="text-danger"> *</span>
            </span>
            <Input
              id="email"
              name="email"
              placeholder="Email Address"
              type="email"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="phone-number"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Phone Number<span className="text-danger"> *</span>
            </span>
            <Input
              id="phone-number"
              name="phone-number"
              placeholder="Phone Number"
              type="tel"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
      </div>
    </Form>
  );
}
