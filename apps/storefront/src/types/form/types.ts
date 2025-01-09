import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import { type NumberFormatValues, type SourceInfo } from "react-number-format";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { z } from "zod";

export enum AddressType {
  BILLING = "Billing",
  SHIPPING = "Shipping",
}

export const addressFormSchema = z.object({
  id: z
    .string({
      required_error: "ID is required",
      invalid_type_error: "ID must be a string",
    })
    .uuid("ID is required")
    .optional(),
  customerId: z
    .string({
      required_error: "Customer is required",
      invalid_type_error: "Customer must be a string",
    })
    .uuid("Customer is required"),
  firstName: z
    .string({
      required_error: "First Name is required",
      invalid_type_error: "First Name must be a string",
    })
    .min(1, "First Name is required")
    .max(30, "First Name cannot be more than 30 characters long")
    .regex(/^[a-zA-Z]+$/i, "First Name can only contain letters"),
  lastName: z
    .string({
      required_error: "Last Name is required",
      invalid_type_error: "Last Name must be a string",
    })
    .min(1, "Last Name is required")
    .max(30, "Last Name cannot be more than 30 characters long")
    .regex(/^[a-zA-Z]+$/i, "Last Name can only contain letters"),
  companyName: z
    .string({
      invalid_type_error: "Company Name must be a string",
    })
    .max(50, "Company Name cannot be more than 50 characters long")
    .optional(),
  streetAddress: z
    .string({
      required_error: "Street Address is required",
      invalid_type_error: "Street Address must be a string",
    })
    .min(1, "Street Address is required")
    .max(500, "Street Address cannot be more than 500 characters long")
    .min(1, "Street Address cannot be empty"),
  countryId: z
    .string({
      required_error: "Country is required",
      invalid_type_error: "Country must be a string",
    })
    .uuid("Country is required"),
  countryStateId: z
    .string({
      required_error: "Country State is required",
      invalid_type_error: "Country State must be a string",
    })
    .uuid("Country State is required"),
  zipCode: z
    .string({
      required_error: "ZIP Code is required",
      invalid_type_error: "ZIP Code must be a string",
    })
    .length(5, "ZIP Code must be 5 characters long")
    .regex(/^[0-9]{5}$/, "ZIP Code must contain numbers only"),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Email is invalid")
    .min(1, "Email is required")
    .max(50, "Email cannot be more than 50 characters long"),
  phoneNumber: z
    .string({
      required_error: "Phone Number is required",
      invalid_type_error: "Phone Number must be a string",
    })
    .length(10, "Phone Number must be 10 characters long")
    .refine(
      (phoneNumber) => isMobilePhone(phoneNumber, "en-US"),
      "Phone Number is invalid"
    ),
});
export type AddressForm = z.infer<typeof addressFormSchema>;
export type AddressFormComboboxKeys = keyof Pick<
  AddressForm,
  "countryId" | "countryStateId"
>;
export type AddressFormInputKeys = keyof Omit<
  AddressForm,
  "countryId" | "countryStateId"
>;

export type CustomOnValueChange<T> = (
  name: T,
  values: NumberFormatValues,
  sourceInfo: SourceInfo,
  useFormattedValue?: boolean
) => void;

export const cashFormSchema = z.object({
  amount: z
    .number({
      invalid_type_error: "Field must be a number",
      required_error: "Field is required",
    })
    .positive("Number must be positive"),
});
export type CashForm = z.infer<typeof cashFormSchema>;

export const cardFormSchema = z.object({
  amount: z
    .number({
      invalid_type_error: "Field must be a number",
      required_error: "Field is required",
    })
    .positive("Number must be positive"),
  firstName: z
    .string({
      required_error: "First Name is required",
      invalid_type_error: "First Name must be a string",
    })
    .max(30, "First Name cannot be more than 30 characters long")
    .regex(/^[a-zA-Z]+$/i, "First Name can only contain letters"),
  lastName: z
    .string({
      required_error: "Last Name is required",
      invalid_type_error: "Last Name must be a string",
    })
    .max(30, "Last Name cannot be more than 30 characters long")
    .regex(/^[a-zA-Z]+$/i, "Last Name can only contain letters"),
  cardNumber: z
    .string({
      invalid_type_error: "Card Number must be a string",
      required_error: "Card Number is required",
    })
    // TODO: Uncomment for proper validation. For testing, validating
    // that card has 16 digits.
    // .refine((value) => isCreditCard(value), "Card Number is invalid"),
    .regex(/[0-9]{16}/, "Card Number is invalid"),
  cvc: z
    .string({
      required_error: "CVC is required",
      invalid_type_error: "CVC must be a string",
    })
    .length(3, "CVC must be 3 characters long")
    .regex(/^[0-9]{3}$/, "CVC must contain numbers only"),
});
export type CardForm = z.infer<typeof cardFormSchema>;
export type CardFormInputKeys = keyof CardForm;

export const orderNotesSchema = z
  .string({
    required_error: "Order Notes is required",
    invalid_type_error: "Order Notes must be a string",
  })
  .max(2000, "Order Notes cannot be more than 2000 characters long")
  .optional();
export const orderFormSchema = z.object({
  cart: z
    .string({
      required_error: "Cart is required",
      invalid_type_error: "Cart must be a string",
    })
    .uuid("Cart is required"),
  notes: orderNotesSchema,
});
export type OrderForm = z.infer<typeof orderFormSchema>;

export const additionalInfoFormSchema = z.object({
  orderNotes: orderNotesSchema,
});
export type AdditionalInfoForm = z.infer<typeof additionalInfoFormSchema>;

// TODO: Update this mock when payment is ready.
export type SuccessFailureMock = { isSuccess?: boolean };

export type AddressFormContext = {
  form: UseFormReturn<AddressForm>;
  onSubmit: SubmitHandler<AddressForm>;
};

export type CardFormContext = {
  form: UseFormReturn<CardForm>;
  onSubmit: SubmitHandler<CardForm>;
};

export const cartAddressFormSchema = z.object({
  cart: z
    .string({
      required_error: "Cart ID is required",
      invalid_type_error: "Cart ID must be a string",
    })
    .uuid("Cart ID is required"),
  address: z
    .string({
      required_error: "Address ID is required",
      invalid_type_error: "Address ID must be a string",
    })
    .uuid("Address ID is required"),
  addressType: z
    .string({
      required_error: "Address Type ID is required",
      invalid_type_error: "Address Type ID must be a string",
    })
    .uuid("Address Type ID is required"),
});
export type CartAddressForm = z.infer<typeof cartAddressFormSchema>;
