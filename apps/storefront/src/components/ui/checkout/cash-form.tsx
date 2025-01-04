"use client";

import { processCashPaymentAction } from "@/app/(store)/checkout/actions";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { useCart } from "@/context/cart-context";
import { cashFormSchema, type CashForm } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  type NumberFormatValues,
  NumericFormat,
  type NumericFormatProps,
} from "react-number-format";

export type Props = { htmlNamePrefix: string };

export function CashForm({ htmlNamePrefix }: Props) {
  const [isPending, startTransition] = React.useTransition();

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    setError,
    setValue,
  } = useForm<CashForm>({
    resolver: zodResolver(cashFormSchema),
  });
  const onSubmit: SubmitHandler<CashForm> = React.useCallback(async (data) => {
    try {
      startTransition(async () => {
        const response = await processCashPaymentAction({
          ...data,
        });
        console.log(response);
      });
    } catch (error) {
      throw new Error("Submit error on Address Form");
    }
  }, []);

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
      <input type="submit" />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-first-name`}
            className="flex flex-col gap-y-2 cursor-pointer w-full md:w-fit"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`I'll pay...`}
              <span className="text-danger"> *</span>
            </span>
            <NumericFormat {...amountProps} />
            <FieldError error={errors.amount} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-change`}
            className="flex flex-col gap-y-2 w-full md:w-fit"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Your change`}
            </span>
            <NumericFormat {...changeProps} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
