"use client";

import { createOrder } from "@/app/(store)/checkout/actions";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import React from "react";
import { Checkbox } from "../common/checkbox";

type Props = {};

export function CheckoutForm({ ...props }: Props) {
  // TODO: Client and Server validation.
  // TODO: Error states.
  // TODO: Autofill data if the user is signed in.

  return (
    <Form action={createOrder} className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label htmlFor="first-name" className="flex flex-col gap-y-2 w-full">
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
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label htmlFor="last-name" className="flex flex-col gap-y-2 w-full">
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
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="company-name"
            className="flex flex-col gap-y-2 w-full"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Company Name (Optional)`}
            </span>
            <Input
              id="company-name"
              name="company-name"
              placeholder="Company Name"
              type="text"
              aria-required={false}
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row gap-4">
          <Label
            htmlFor="street-address"
            className="flex flex-col gap-y-2 w-full"
          >
            <span className="font-normal text-body-small text-gray-900">
              Street Address<span className="text-danger"> *</span>
            </span>
            <Input
              id="street-address"
              name="street-address"
              placeholder="Street Address"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label
            htmlFor="country-region"
            className="flex flex-col gap-y-2 w-full"
          >
            <span className="font-normal text-body-small text-gray-900">
              Country / Region<span className="text-danger"> *</span>
            </span>
            <Input
              id="country-region"
              name="country-region"
              placeholder="Select"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label htmlFor="state" className="flex flex-col gap-y-2 w-full">
            <span className="font-normal text-body-small text-gray-900">
              State<span className="text-danger"> *</span>
            </span>
            <Input
              id="state"
              name="state"
              placeholder="Select"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label htmlFor="zip-code" className="flex flex-col gap-y-2 w-full">
            <span className="font-normal text-body-small text-gray-900">
              ZIP Code<span className="text-danger"> *</span>
            </span>
            <Input
              id="zip-code"
              name="zip-code"
              placeholder="ZIP Code"
              type="text"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
        <div className="flex flex-1 flex-row flex-wrap md:flex-nowrap gap-4">
          <Label htmlFor="email" className="flex flex-col gap-y-2 w-full">
            <span className="font-normal text-body-small text-gray-900">
              Email<span className="text-danger"> *</span>
            </span>
            <Input
              id="email"
              name="email"
              placeholder="Email Address"
              type="email"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
          <Label
            htmlFor="phone-number"
            className="flex flex-col gap-y-2 w-full"
          >
            <span className="font-normal text-body-small text-gray-900">
              Phone Number<span className="text-danger"> *</span>
            </span>
            <Input
              id="phone-number"
              name="phone-number"
              placeholder="Phone Number"
              type="tel"
              required
              aria-required
              className="focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
            />
          </Label>
        </div>
      </div>
      <Label
        htmlFor="ship-different-address"
        className="flex flex-row gap-2 w-fit items-center"
      >
        <Checkbox
          id="ship-different-address"
          name="ship-different-address"
          aria-required={false}
          className="size-5 rounded-[3px] border border-gray-100 bg-white text-gray-900 outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
        />
        <span className="font-normal text-body-small text-gray-900">
          Ship to a different address
        </span>
      </Label>
    </Form>
  );
}
