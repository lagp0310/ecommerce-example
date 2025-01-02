"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
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
  // TODO: Server validation.

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
    console.log(data);
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
      setValue("payAmount", floatValue);
    },
    [cartTotal, setValue]
  );
  React.useEffect(() => {
    if (change < 0) {
      setError("payAmount", {
        message: `Amount cannot be less than $${cartTotal}`,
        type: "onChange",
      });
    } else {
      clearErrors("payAmount");
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
            className="flex flex-col gap-y-2 cursor-pointer w-full md:w-fit"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`I'll pay...`}
              <span className="text-danger"> *</span>
            </span>
            <NumericFormat
              onValueChange={handleAmountChange}
              id={`${htmlNamePrefix}-first-name`}
              placeholder="Amount"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger w-full focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              data-invalid={!!errors.payAmount}
              allowNegative={false}
              {...commonNumericFormatProps}
              {...register("payAmount")}
            />
            <FieldError error={errors.payAmount} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-change`}
            className="flex flex-col gap-y-2 w-full md:w-fit"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Your change`}
            </span>
            <NumericFormat
              value={change}
              id={`${htmlNamePrefix}-change`}
              name={`${htmlNamePrefix}-change`}
              placeholder="Amount"
              type="text"
              disabled
              aria-disabled
              className="w-full focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none cursor-default"
              allowNegative
              {...commonNumericFormatProps}
            />
          </Label>
        </div>
      </div>
    </Form>
  );
}
