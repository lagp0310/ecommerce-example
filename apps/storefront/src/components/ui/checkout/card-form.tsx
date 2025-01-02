"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { useFormUtils } from "@/hooks/use-form-utils";
import {
  type CardFormInputKeys,
  cardFormSchema,
  type CardForm,
} from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";

export type Props = { htmlNamePrefix: string };

export function CardForm({ htmlNamePrefix }: Props) {
  // TODO: Client and Server validation.
  // TODO: Autofill data if the user is signed in.

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<CardForm>({
    resolver: zodResolver(cardFormSchema),
  });
  const onSubmit: SubmitHandler<CardForm> = React.useCallback(async (data) => {
    console.log(data);
  }, []);
  const { handleInputChange } = useFormUtils<CardForm, CardFormInputKeys>(
    setValue
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
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor={`${htmlNamePrefix}-card-number`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Card Number<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id={`${htmlNamePrefix}-card-number`}
              placeholder="Card Number"
              type="text"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="####-####-####-####"
              data-invalid={!!errors.cardNumber}
              onValueChange={(...args) =>
                handleInputChange("cardNumber", ...args, false)
              }
              {...register("cardNumber")}
            />
            <FieldError error={errors.cardNumber} />
          </Label>
          <Label
            htmlFor={`${htmlNamePrefix}-cvc`}
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              CVC<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id={`${htmlNamePrefix}-cvc`}
              placeholder="CVC"
              type="password"
              aria-required
              className="data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="###"
              valueIsNumericString
              data-invalid={!!errors.cvc}
              onValueChange={(...args) =>
                handleInputChange("cvc", ...args, false)
              }
              {...register("cvc")}
            />
            <FieldError error={errors.cvc} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
