"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import React from "react";
import { PatternFormat } from "react-number-format";

export type Props = {};

export function CardForm({}: Props) {
  // TODO: Client and Server validation.
  // TODO: Error states.
  // TODO: Autofill data if the user is signed in.

  return (
    <Form action={createOrder} className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor="first-name"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              First Name<span className="text-danger"> *</span>
            </span>
            <Input
              id="first-name"
              name="first-name"
              placeholder="First Name"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="last-name"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Last Name<span className="text-danger"> *</span>
            </span>
            <Input
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor="card-number"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              Card Number<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id="card-number"
              name="card-number"
              placeholder="Card Number"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="####-####-####-####"
            />
          </Label>
          <Label
            htmlFor="cvc"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              CVC<span className="text-danger"> *</span>
            </span>
            <PatternFormat
              id="cvc"
              name="cvc"
              placeholder="CVC"
              type="password"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
              customInput={Input}
              format="###"
            />
          </Label>
        </div>
      </div>
    </Form>
  );
}
