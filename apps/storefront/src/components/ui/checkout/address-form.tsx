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
import { PatternFormat } from "react-number-format";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  type AddressForm,
  type AddressFormComboboxKeys,
  addressFormSchema,
  type CustomOnValueChange,
} from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError } from "@/components/form/field-error";

export type Props = {
  htmlNamePrefix: string;
  countries: GetParsedOptionsResponse;
  countryStates: GetParsedOptionsResponse;
};

export function AddressForm({
  htmlNamePrefix,
  countries,
  countryStates,
}: Props) {
  // TODO: Server validation.
  // TODO: Autofill data if the user is signed in.

  const {
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddressForm>({
    resolver: zodResolver(addressFormSchema),
  });
  const onSubmit: SubmitHandler<AddressForm> = React.useCallback(
    async (data) => {
      console.log(data);
    },
    []
  );

  const isCountryStateSelectorDisabled = React.useMemo(
    () => !Array.isArray(countryStates) || countryStates.length === 0,
    [countryStates]
  );
  const isCountryStateInvalid = React.useMemo(
    () => !isCountryStateSelectorDisabled && !!errors.countryStateId,
    [errors.countryStateId, isCountryStateSelectorDisabled]
  );

  const onComboboxChange = React.useCallback(
    (name: AddressFormComboboxKeys, newValue: string) => {
      setValue(name, newValue);
    },
    [setValue]
  );
  const onValueChange = React.useCallback(
    (name: AddressFormComboboxKeys, newValue: string) => {
      onComboboxChange(name, newValue);
      clearErrors(name);
    },
    [clearErrors, onComboboxChange]
  );
  const onCountryChange = React.useCallback(
    (newValue: string) => {
      onValueChange("countryId", newValue);
    },
    [onValueChange]
  );
  const onCountryStateChange = React.useCallback(
    (newValue: string) => {
      onValueChange("countryStateId", newValue);
    },
    [onValueChange]
  );

  const handleInputChange: CustomOnValueChange = React.useCallback(
    (name, values, _sourceInfo, useFormattedValue = true) => {
      const inputValue = useFormattedValue
        ? values.formattedValue
        : values.value;
      setValue(name, inputValue);
    },
    [setValue]
  );

  return (
    <Form
      action={createOrder}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col gap-4"
    >
      <input type="submit" />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-first-name`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              First Name<span className="text-danger"> *</span>
            </span>
            <Input
              id={`${htmlNamePrefix}-first-name`}
              placeholder="First Name"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.firstName}
              {...register("firstName")}
            />
            <FieldError error={errors.firstName} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-last-name`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Last Name<span className="text-danger"> *</span>
            </span>
            <Input
              id={`${htmlNamePrefix}-last-name`}
              placeholder="Last Name"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.lastName}
              {...register("lastName")}
            />
            <FieldError error={errors.lastName} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-company-name`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Company Name (Optional)`}
            </span>
            <Input
              id={`${htmlNamePrefix}-company-name`}
              placeholder="Company Name"
              type="text"
              aria-required={false}
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.companyName}
              {...register("companyName")}
            />
            <FieldError error={errors.companyName} />
          </Label>
        </div>
        <div className="flex flex-1 flex-row gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-street-address`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Street Address<span className="text-danger"> *</span>
            </span>
            <Input
              id={`${htmlNamePrefix}-street-address`}
              placeholder="Street Address"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.streetAddress}
              {...register("streetAddress")}
            />
            <FieldError error={errors.streetAddress} />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4 max-h-fit">
          <ComboboxContextProvider
            paramName="countryId"
            onValueChange={onCountryChange}
          >
            <ComboboxLabel
              htmlFor={`${htmlNamePrefix}-country`}
              className="flex flex-col gap-y-2 w-full cursor-pointer"
              aria-required
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
                buttonClassName="data-invalid:ring-2 data-invalid:ring-danger w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                isInvalid={!!errors.countryId}
              />
              <FieldError error={errors.countryId} />
            </ComboboxLabel>
          </ComboboxContextProvider>
          <ComboboxContextProvider
            paramName="countryStateId"
            onValueChange={onCountryStateChange}
          >
            <ComboboxLabel
              htmlFor={`${htmlNamePrefix}-state`}
              className="flex flex-col gap-y-2 w-full cursor-pointer"
              disabled={isCountryStateSelectorDisabled}
              aria-disabled={isCountryStateSelectorDisabled}
              aria-required
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
                buttonClassName="data-invalid:ring-2 data-invalid:ring-danger w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                isDisabled={isCountryStateSelectorDisabled}
                isInvalid={isCountryStateInvalid}
              />
              {!isCountryStateSelectorDisabled ? (
                <FieldError error={errors.countryStateId} />
              ) : null}
            </ComboboxLabel>
          </ComboboxContextProvider>
          <Label
            htmlFor={`${htmlNamePrefix}-zip-code`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              ZIP Code<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id={`${htmlNamePrefix}-zip-code`}
              placeholder="ZIP Code"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="#####"
              valueIsNumericString
              onValueChange={(...args) =>
                handleInputChange("zipCode", ...args, false)
              }
              data-invalid={!!errors.zipCode}
              {...register("zipCode")}
            />
            <FieldError error={errors.zipCode} />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-email`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Email<span className="text-danger"> *</span>
            </span>
            <Input
              id={`${htmlNamePrefix}-email`}
              placeholder="Email Address"
              type="email"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.email}
              {...register("email")}
            />
            <FieldError error={errors.email} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-phone-number`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Phone Number<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id={`${htmlNamePrefix}-phone-number`}
              placeholder="Phone Number"
              type="tel"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="+1 (###) ###-####"
              valueIsNumericString
              onValueChange={(...args) =>
                handleInputChange("phoneNumber", ...args)
              }
              data-invalid={!!errors.phoneNumber}
              {...register("phoneNumber")}
            />
            <FieldError error={errors.phoneNumber} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
