import { z } from "zod";

export const parsedEnvs = z
  .object({
    NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_KEY: z.string(),
    ECOMMERCE_ADMIN: z.string().email().optional(),
    ECOMMERCE_PASSWORD: z.string().optional(),
  })
  .safeParse(process.env);

export function validateEnvs() {
  if (!parsedEnvs.success) {
    throw new Error(
      `Invalid environment variables: \n\n${parsedEnvs.error.errors.map(({ path, message }) => `${path?.at(0)}: ${message}`).join("\n")}`
    );
  }
}

export const env = parsedEnvs.data!;
