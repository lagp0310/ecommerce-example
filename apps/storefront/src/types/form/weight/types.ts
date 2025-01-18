import { z } from "zod";

export enum WeightUnit {
  KG = "Kg",
}

export const weightFormSchema = z.object({
  weight: z
    .number({
      invalid_type_error: "Field must be a number",
      required_error: "Field is required",
    })
    .positive("Number must be positive"),
  unit: z.nativeEnum(WeightUnit, {
    invalid_type_error: "Field must be a number",
    required_error: "Field is required",
  }),
});
export type WeightForm = z.infer<typeof weightFormSchema>;
