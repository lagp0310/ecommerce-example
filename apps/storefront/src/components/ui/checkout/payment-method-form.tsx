"use client";

import { Form } from "@/components/form/form";
import type { PaymentMethodsResponse } from "@/types/types";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/common/radio-group";
import { Label } from "@/components/form/label";

export type Props = { paymentMethods: PaymentMethodsResponse[] };

export function PaymentMethodForm({ paymentMethods }: Props) {
  const defaultRadioValue = React.useMemo(
    () => paymentMethods.at(0)?.id,
    [paymentMethods]
  );

  // TODO: Add Card form.
  return (
    <Form className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-4">
        <RadioGroup
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
                    value={id}
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
      </div>
    </Form>
  );
}
