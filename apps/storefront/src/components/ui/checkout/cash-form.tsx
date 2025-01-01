"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { useCart } from "@/context/cart-context";
import React from "react";
import {
  type NumberFormatValues,
  NumericFormat,
  type NumericFormatProps,
} from "react-number-format";

export type Props = { htmlNamePrefix: string };

export function CashForm({ htmlNamePrefix }: Props) {
  // TODO: Client and Server validation.
  // TODO: Error states.
  // TODO: Autofill data if the user is signed in.

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

      setChange(floatValue - cartTotal);
    },
    [cartTotal]
  );

  const commonNumericFormatProps: NumericFormatProps = React.useMemo(
    () => ({
      customInput: Input,
      allowLeadingZeros: true,
      allowNegative: false,
      decimalSeparator: ".",
      fixedDecimalScale: true,
      decimalScale: 2,
      prefix: "$",
      thousandSeparator: ",",
    }),
    []
  );

  return (
    <Form action={createOrder} className="flex flex-1 flex-col gap-4">
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
              name={`${htmlNamePrefix}-first-name`}
              placeholder="Amount"
              type="text"
              required
              aria-required
              className="w-full md:w-fit focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              {...commonNumericFormatProps}
            />
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
              className="w-full md:w-fit focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none cursor-default"
              {...commonNumericFormatProps}
            />
          </Label>
        </div>
      </div>
    </Form>
  );
}
