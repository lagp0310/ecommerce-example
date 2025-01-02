"use client";

import { Form } from "@/components/form/form";
import { PaymentMethodEnum, type PaymentMethodsResponse } from "@/types/types";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/common/radio-group";
import { Label } from "@/components/form/label";
import { CashForm } from "@/components/ui/checkout/cash-form";
import { cn, getPaymentMethodValue } from "@/lib/utils";
import { CardForm } from "@/components/ui/checkout/card-form";

export type Props = { paymentMethods: PaymentMethodsResponse[] };

export function PaymentMethodForm({ paymentMethods }: Props) {
  const defaultRadioValue = React.useMemo(
    () => getPaymentMethodValue(paymentMethods.at(0)?.paymentMethodTypes?.type),
    [paymentMethods]
  );
  const [currentValue, setCurrentValue] =
    React.useState<PaymentMethodEnum | null>(defaultRadioValue);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Form className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-4">
          {!!currentValue && !!defaultRadioValue ? (
            <RadioGroup
              value={currentValue}
              onValueChange={(value) =>
                setCurrentValue(getPaymentMethodValue(value))
              }
              defaultValue={defaultRadioValue}
              className="flex flex-row flex-wrap md:flex-nowrap gap-4"
            >
              {paymentMethods.map(
                ({ id, paymentMethodTypes: { type, description } }) => {
                  const radioText = `${type}${!!description ? ` (${description})` : ""}`;

                  return (
                    <div key={id} className="flex flex-row gap-2">
                      <RadioGroupItem
                        id={id}
                        className="size-5 rounded-full border-[1.5px] border-primary ring-primary aria-checked:ring-[0.5px] motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                        insetCircleClasses="size-3 rounded-full text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                        value={type}
                      />
                      <Label
                        htmlFor={id}
                        className="flex flex-1 flex-row items-center font-normal text-body-small text-gray-900 hover:cursor-pointer"
                      >
                        {radioText}
                      </Label>
                    </div>
                  );
                }
              )}
            </RadioGroup>
          ) : null}
        </div>
      </Form>
      <div
        className={cn(
          "flex motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
          { hidden: currentValue != PaymentMethodEnum.CASH }
        )}
      >
        <CashForm htmlNamePrefix="cash" />
      </div>
      <div
        className={cn(
          "flex motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
          { hidden: currentValue != PaymentMethodEnum.CREDIT_CARD }
        )}
      >
        <CardForm htmlNamePrefix="credit-card" />
      </div>
      <div
        className={cn(
          "flex motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
          { hidden: currentValue != PaymentMethodEnum.DEBIT_CARD }
        )}
      >
        <CardForm htmlNamePrefix="debit-card" />
      </div>
    </div>
  );
}
