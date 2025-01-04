"use client";

import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { Input, type Props as InputProps } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { useCart } from "@/context/cart-context";
import { useFormUtils } from "@/hooks/use-form-utils";
import type {
  CardFormInputKeys,
  CardForm,
  CardFormContext,
} from "@/types/form/types";
import React from "react";
import { PatternFormat, type PatternFormatProps } from "react-number-format";

export type Props = CardFormContext & { htmlNamePrefix: string };

export function CardForm({
  htmlNamePrefix,
  form: {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  },
  onSubmit,
}: Props) {
  const { cartSummary } = useCart();
  const cartTotal = React.useMemo(
    () => parseFloat(cartSummary.total.toFixed(2)),
    [cartSummary.total]
  );

  const { handleInputChange } = useFormUtils<CardForm, CardFormInputKeys>(
    setValue
  );
  React.useEffect(() => {
    setValue("amount", cartTotal);
  }, [cartTotal, setValue]);

  const commonInputProps: InputProps = React.useMemo(
    () => ({
      className:
        "data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      "aria-required": true,
    }),
    []
  );
  const firstNameInputProps: InputProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-first-name`,
      placeholder: "First Name",
      type: "text",
      "data-invalid": !!errors.firstName,
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
      ...commonInputProps,
      ...register("lastName"),
    }),
    [commonInputProps, errors.lastName, htmlNamePrefix, register]
  );
  const commonPatternFormatProps: Partial<PatternFormatProps> = React.useMemo(
    () => ({
      className:
        "data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      "aria-required": true,
      customInput: Input,
    }),
    []
  );
  const cardNumberProps: PatternFormatProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-card-number`,
      placeholder: "Card Number",
      type: "text",
      format: "####-####-####-####",
      "data-invalid": !!errors.cardNumber,
      onValueChange: (...args) =>
        handleInputChange("cardNumber", ...args, false),
      ...commonPatternFormatProps,
      ...register("cardNumber"),
    }),
    [
      commonPatternFormatProps,
      errors.cardNumber,
      handleInputChange,
      htmlNamePrefix,
      register,
    ]
  );
  const cvcProps: PatternFormatProps = React.useMemo(
    () => ({
      id: `${htmlNamePrefix}-cvc`,
      placeholder: "CVC",
      type: "password",
      format: "###",
      valueIsNumericString: true,
      "data-invalid": !!errors.cvc,
      onValueChange: (...args) => handleInputChange("cvc", ...args, false),
      ...commonPatternFormatProps,
      ...register("cvc"),
    }),
    [
      commonPatternFormatProps,
      errors.cvc,
      handleInputChange,
      htmlNamePrefix,
      register,
    ]
  );

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col gap-4"
    >
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
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-card-number`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Card Number<span className="text-danger"> *</span>
            </span>
            <PatternFormat {...cardNumberProps} />
            <FieldError error={errors.cardNumber} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-cvc`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              CVC<span className="text-danger"> *</span>
            </span>
            <PatternFormat {...cvcProps} />
            <FieldError error={errors.cvc} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
