"use client";

import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { Input } from "@/components/form/input";
import {
  type WeightForm,
  weightFormSchema,
  WeightUnit,
} from "@/types/form/weight/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  type NumberFormatValues,
  NumericFormat,
  type NumericFormatProps,
} from "react-number-format";
import { Button } from "@/components/ui/common/button";
import { useCart } from "@/context/cart-context";
import type { TProduct } from "@/types/types";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export type Props = React.HTMLProps<HTMLDivElement> & {
  product: TProduct;
  initialWeight?: number;
  unit?: WeightUnit;
  buttonProps?: Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
    type?: "button" | "reset" | "submit";
  };
};

export function WeightCounter({
  product,
  initialWeight = 0,
  unit = WeightUnit.KG,
  buttonProps,
  ...props
}: Props) {
  const {
    isLoading: isCartLoading,
    handleAddToCart,
    handleUpdateWeight,
    getCartLineItemWeight,
    getCartLineItemId,
  } = useCart();
  const [isPending, startTransition] = React.useTransition();

  const lineItemId = React.useMemo(
    () => getCartLineItemId(product.id),
    [getCartLineItemId, product.id]
  );

  const {
    formState: {
      defaultValues,
      errors,
      isLoading,
      isSubmitSuccessful,
      isSubmitting,
      isValidating,
      isValid,
    },
    register,
    getValues,
    handleSubmit,
    setValue,
  } = useForm<WeightForm>({
    resolver: zodResolver(weightFormSchema),
    defaultValues: {
      weight: initialWeight,
      unit,
    },
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<WeightForm> = React.useCallback(
    async (data) => {
      try {
        startTransition(async () => {
          const { weight } = data;

          if (lineItemId) {
            await handleUpdateWeight(lineItemId, product, weight);
          } else {
            await handleAddToCart(product, null, weight);
          }
        });
      } catch (error) {
        throw new Error("Submit error on Cash Form");
      }
    },
    [handleAddToCart, handleUpdateWeight, lineItemId, product]
  );

  const handleWeightChange = React.useCallback(
    (values: NumberFormatValues) => {
      const floatValue = values?.floatValue;

      if (typeof floatValue !== "number" || isNaN(floatValue)) {
        return;
      }

      setValue("weight", floatValue);
    },
    [setValue]
  );

  const currentWeight = React.useMemo(
    () => getCartLineItemWeight(product.id),
    [getCartLineItemWeight, product.id]
  );
  React.useEffect(() => {
    if (typeof currentWeight === "number") {
      setValue("weight", currentWeight);
    }
  }, [currentWeight, setValue]);
  const weightProps: NumericFormatProps = React.useMemo(
    () => ({
      onValueChange: handleWeightChange,
      value: getValues("weight"),
      id: "weight",
      placeholder: "Weight",
      type: "text",
      "aria-required": true,
      className:
        "disabled:cursor-not-allowed data-invalid:ring-2 data-invalid:ring-danger w-full focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 placeholder:font-normal placeholder:text-body-small placeholder:leading-[130%] rounded-six border border-gray-100 outline-none p-3 motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      "data-invalid": !!errors.weight,
      allowNegative: false,
      customInput: Input,
      allowLeadingZeros: true,
      decimalSeparator: ".",
      fixedDecimalScale: true,
      decimalScale: 2,
      suffix: ` ${unit}`,
      thousandSeparator: ",",
      disabled: isCartLoading,
      "aria-disabled": isCartLoading,
      ...register("weight"),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      defaultValues,
      errors.weight,
      getValues,
      handleWeightChange,
      isCartLoading,
      register,
      unit,
    ]
  );

  const isActionDisabled = React.useMemo(
    () =>
      isLoading ||
      isSubmitSuccessful ||
      isSubmitting ||
      isValidating ||
      !isValid,
    [isLoading, isSubmitSuccessful, isSubmitting, isValid, isValidating]
  );
  const allButtonProps = React.useMemo(
    () => ({
      className:
        "disabled:cursor-not-allowed disabled:border-none disabled:opacity-50 disabled:transition-none disabled:hover:bg-primary disabled:hover:text-white group h-[45px] flex flex-1 flex-row items-center justify-center gap-x-2 rounded-full bg-primary text-body-small font-semibold leading-6 text-white hover:border hover:border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none w-full",
      disabled: isActionDisabled,
      ...buttonProps,
    }),
    [buttonProps, isActionDisabled]
  );

  const buttonText = React.useMemo(
    () => (typeof currentWeight !== "number" ? "Add to Cart" : "Update Cart"),
    [currentWeight]
  );

  return (
    <div {...props}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-row gap-4"
      >
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-1 flex-col flex-wrap md:flex-nowrap gap-4">
            <NumericFormat {...weightProps} />
            <FieldError error={errors.weight} />
          </div>
        </div>
        <Button {...allButtonProps}>
          {buttonText}
          <ShoppingBagIcon className="size-5 group-hover:text-primary group-disabled:text-white" />
        </Button>
      </Form>
    </div>
  );
}
