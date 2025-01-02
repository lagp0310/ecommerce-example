"use client";

import { Form } from "@/components/form/form";
import { Label } from "@/components/form/label";
import { Textarea } from "@/components/form/textarea";
import { cn } from "@/lib/utils";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { addressFormSchema, type AdditionalInfoForm } from "@/types/form/types";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = React.HTMLProps<HTMLTextAreaElement>;

export function AdditionalInfoForm({ className, ...props }: Props) {
  // TODO: Server validation.

  const { register, handleSubmit } = useForm<AdditionalInfoForm>({
    resolver: zodResolver(addressFormSchema),
  });
  const onSubmit: SubmitHandler<AdditionalInfoForm> = React.useCallback(
    async (data) => {
      console.log(data);
    },
    []
  );

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col gap-4"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row gap-4">
          <Label
            htmlFor="order-notes"
            className="flex flex-col gap-y-2 w-full cursor-pointer"
          >
            <span className="font-normal text-body-small text-gray-900">
              {`Order Notes (Optional)`}
            </span>
            <Textarea
              id="order-notes"
              placeholder="Notes about your order, e.g. special notes for delivery."
              aria-required={false}
              maxLength={2000}
              className={cn(
                "focus:ring-2 focus:ring-primary/50 resize-y min-h-[100px] max-h-[500px] placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-medium placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
                className
              )}
              {...props}
              {...register("orderNotes")}
            />
          </Label>
        </div>
      </div>
    </Form>
  );
}
