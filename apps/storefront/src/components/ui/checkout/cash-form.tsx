"use client";

import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { useCart } from "@/context/cart-context";
import { useCashForm } from "@/context/cash-form-context";
import { type CashForm } from "@/types/types";
import React from "react";
import {
  type NumberFormatValues,
  NumericFormat,
  type NumericFormatProps,
} from "react-number-format";

export type Props = { htmlNamePrefix: string };

export function CashForm({ htmlNamePrefix }: Props) {
  const {
    form: {
      clearErrors,
      formState: { errors },
      handleSubmit,
      register,
      setError,
      setValue,
    },
    onSubmit,
  } = useCashForm();

  const { cartSummary } = useCart();
  const cartTotal = React.useMemo(
    () => parseFloat(cartSummary.total.toFixed(2)),
    [cartSummary.total]
  );

  const [change, setChange] = React.useState(0);
  const handleAmountChange = React.useCallback(
    (values: NumberFormatValues) => {
      const floatValue = values.floatValue;

      if (typeof floatValue !== "number") {
        return;
      }

      const difference = floatValue - cartTotal;
      setChange(difference);
      setValue("amount", floatValue);
    },
    [cartTotal, setValue]
  );
  React.useEffect(() => {
    if (change < 0) {
      setError("amount", {
        message: `Amount cannot be less than $${cartTotal}`,
        type: "onChange",
      });
    } else {
      clearErrors("amount");
    }
  }, [clearErrors, setError, change, cartTotal]);

  const commonNumericFormatProps: NumericFormatProps = React.useMemo(
    () => ({
      customInput: Input,
      allowLeadingZeros: true,
      decimalSeparator: ".",
      fixedDecimalScale: true,
      decimalScale: 2,
      prefix: "$",
      thousandSeparator: ",",
    }),
    []
  );
  const amountProps: NumericFormatProps = React.useMemo(
    () => ({
      onValueChange: handleAmountChange,
      id: `${htmlNamePrefix}-pay-amount`,
      placeholder: "Amount",
      type: "text",
      "aria-required": true,
      className:
        "data-invalid:ring-2 data-invalid:ring-danger w-full focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      "data-invalid": !!errors.amount,
      allowNegative: false,
      ...commonNumericFormatProps,
      ...register("amount"),
    }),
    [
      commonNumericFormatProps,
      errors.amount,
      handleAmountChange,
      htmlNamePrefix,
      register,
    ]
  );
  const changeProps: NumericFormatProps = React.useMemo(
    () => ({
      value: change,
      id: `${htmlNamePrefix}-change`,
      name: `${htmlNamePrefix}-change`,
      placeholder: "Amount",
      type: "text",
      disabled: true,
      "aria-disabled": true,
      className:
        "w-full focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none cursor-default",
      allowNegative: true,
      ...commonNumericFormatProps,
    }),
    [change, commonNumericFormatProps, htmlNamePrefix]
  );

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col gap-4"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap gap-4 md:flex-nowrap">
          <Label
            htmlFor={`${htmlNamePrefix}-first-name`}
            className="flex w-full cursor-pointer flex-col gap-y-2 md:w-fit"
          >
            <span className="text-body-small font-normal text-gray-900">
              {`I'll pay...`}
              <span className="text-danger"> *</span>
            </span>
            <NumericFormat {...amountProps} />
            <FieldError error={errors.amount} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-change`}
            className="flex w-full flex-col gap-y-2 md:w-fit"
          >
            <span className="text-body-small font-normal text-gray-900">
              {`Your change`}
            </span>
            <NumericFormat {...changeProps} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
