"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { Form } from "@/components/form/form";
import { Input, type Props as InputProps } from "@/components/form/input";
import { Label } from "@/components/form/label";
import React from "react";
import type { GetParsedOptionsResponse } from "@/types/types";
import {
  CheckoutComboboxWrapper,
  type Props as ComboboxWrapperProps,
} from "@/components/ui/checkout/checkbout-combobox-wrapper";
import { ComboboxContextProvider } from "@/context/combobox-context";
import { ComboboxLabel } from "@/components/form/combobox-label";
import { PatternFormat, type PatternFormatProps } from "react-number-format";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  type AddressForm,
  type AddressFormComboboxKeys,
  type AddressFormInputKeys,
  addressFormSchema,
} from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError } from "@/components/form/field-error";
import { useFormUtils } from "@/hooks/use-form-utils";

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
  const { handleInputChange } = useFormUtils<AddressForm, AddressFormInputKeys>(
    setValue
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

  const commonInputProps: InputProps = React.useMemo(
    () => ({
      className:
        "data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    }),
    []
  );
  const firstNameInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-first-name`,
      placeholder: "First Name",
      type: "text",
      "data-invalid": !!errors.firstName,
      "aria-required": true,
      ...commonInputProps,
      ...register("firstName"),
    }),
    [commonInputProps, errors.firstName, htmlNamePrefix, register]
  );
  const lastNameInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-last-name`,
      placeholder: "Last Name",
      type: "text",
      "data-invalid": !!errors.lastName,
      "aria-required": true,
      ...commonInputProps,
      ...register("lastName"),
    }),
    [commonInputProps, errors.lastName, htmlNamePrefix, register]
  );
  const companyNameInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-company-name`,
      placeholder: "Company Name",
      type: "text",
      "data-invalid": !!errors.companyName,
      "aria-required": false,
      ...commonInputProps,
      ...register("companyName"),
    }),
    [commonInputProps, errors.companyName, htmlNamePrefix, register]
  );
  const streetAddressInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-street-address`,
      placeholder: "Street Address",
      type: "text",
      "aria-required": true,
      "data-invalid": !!errors.streetAddress,
      ...commonInputProps,
      ...register("streetAddress"),
    }),
    [commonInputProps, errors.streetAddress, htmlNamePrefix, register]
  );
  const commonComboboxProps: Partial<ComboboxWrapperProps> = React.useMemo(
    () => ({
      buttonClassName:
        "data-invalid:ring-2 data-invalid:ring-danger w-full flex flex-1 flex-row gap-x-2 max-h-fit aria-expanded:ring-2 aria-expanded:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
    }),
    []
  );
  const countryComboboxProps: ComboboxWrapperProps = React.useMemo(
    () => ({
      searchParamName: "countryId",
      options: countries,
      emptyValueText: "Select a Country...",
      commandInputProps: { placeholder: "Search a Country..." },
      noOptionFoundText: "No Country was found.",
      isInvalid: !!errors.countryId,
      ...commonComboboxProps,
    }),
    [commonComboboxProps, countries, errors.countryId]
  );
  const countryStateComboboxProps: ComboboxWrapperProps = React.useMemo(
    () => ({
      searchParamName: "countryStateId",
      options: countryStates,
      emptyValueText: "Select a State...",
      commandInputProps: { placeholder: "Search a State..." },
      noOptionFoundText: "No State was found.",
      isDisabled: isCountryStateSelectorDisabled,
      isInvalid: isCountryStateInvalid,
      ...commonComboboxProps,
    }),
    [
      commonComboboxProps,
      countryStates,
      isCountryStateInvalid,
      isCountryStateSelectorDisabled,
    ]
  );
  const commonPatternFormatProps: Partial<PatternFormatProps> = React.useMemo(
    () => ({
      className:
        "data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      "aria-required": true,
      customInput: Input,
      valueIsNumericString: true,
    }),
    []
  );
  const zipCodeInputProps: PatternFormatProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-zip-code`,
      placeholder: "ZIP Code",
      type: "text",
      format: "#####",
      onValueChange: (...args) => handleInputChange("zipCode", ...args, false),
      "data-invalid": !!errors.zipCode,
      ...commonPatternFormatProps,
      ...register("zipCode"),
    }),
    [
      commonPatternFormatProps,
      errors.zipCode,
      handleInputChange,
      htmlNamePrefix,
      register,
    ]
  );
  const emailInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-email`,
      placeholder: "Email Address",
      type: "email",
      "aria-required": true,
      "data-invalid": !!errors.email,
      ...commonInputProps,
      ...register("email"),
    }),
    [commonInputProps, errors.email, htmlNamePrefix, register]
  );
  const phoneNumberInputProps: PatternFormatProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-phone-number`,
      placeholder: "Phone Number",
      type: "tel",
      format: "+1 (###) ###-####",
      onValueChange: (...args) => handleInputChange("phoneNumber", ...args),
      "data-invalid": !!errors.phoneNumber,
      ...commonPatternFormatProps,
      ...register("phoneNumber"),
    }),
    [
      commonPatternFormatProps,
      errors.phoneNumber,
      handleInputChange,
      htmlNamePrefix,
      register,
    ]
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
            <Input {...firstNameInputProps} />
            <FieldError error={errors.firstName} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-last-name`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Last Name<span className="text-danger"> *</span>
            </span>
            <Input {...lastNameInputProps} />
            <FieldError error={errors.lastName} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-company-name`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Company Name (Optional)`}
            </span>
            <Input {...companyNameInputProps} />
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
            <Input {...streetAddressInputProps} />
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
              <CheckoutComboboxWrapper {...countryComboboxProps} />
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
              <CheckoutComboboxWrapper {...countryStateComboboxProps} />
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
            <PatternFormat {...zipCodeInputProps} />
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
            <Input {...emailInputProps} />
            <FieldError error={errors.email} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-phone-number`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Phone Number<span className="text-danger"> *</span>
            </span>
            <PatternFormat {...phoneNumberInputProps} />
            <FieldError error={errors.phoneNumber} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
