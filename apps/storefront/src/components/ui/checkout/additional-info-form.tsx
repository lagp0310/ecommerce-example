"use client";

import { Form } from "@/components/form/form";
import { Label } from "@/components/form/label";
import {
  Textarea,
  type Props as TextareaProps,
} from "@/components/form/textarea";
import { cn } from "@/lib/utils";
import React from "react";
import { type AdditionalInfoForm } from "@/types/types";
import { FieldError } from "@/components/form/field-error";
import { useAdditionalInfoForm } from "@/context/additional-info-form-context";

type Props = React.HTMLProps<HTMLTextAreaElement>;

export function AdditionalInfoForm({ className, ...props }: Props) {
  const {
    form: {
      formState: { errors },
      register,
    },
  } = useAdditionalInfoForm();

  const textareaProps: TextareaProps = React.useMemo(
    () => ({
      id: "order-notes",
      placeholder: "Notes about your order, e.g. special notes for delivery.",
      "aria-required": false,
      maxLength: 2000,
      className: cn(
        "data-invalid:ring-2 data-invalid:ring-danger focus:ring-2 focus:ring-primary/50 resize-y min-h-[100px] max-h-[500px] placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
        className
      ),
      "data-invalid": !!errors.orderNotes,
      ...props,
      ...register("orderNotes"),
    }),
    [className, errors.orderNotes, props, register]
  );

  return (
    <Form className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row gap-4">
          <Label
            htmlFor="order-notes"
            className="flex w-full cursor-pointer flex-col gap-y-2"
          >
            <span className="text-body-small font-normal text-gray-900">
              {`Order Notes (Optional)`}
            </span>
            <Textarea {...textareaProps} />
            <FieldError error={errors.orderNotes} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
