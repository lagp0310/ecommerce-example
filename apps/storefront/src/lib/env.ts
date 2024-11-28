import { z } from "zod";

export const parsedEnvs = z
  .object({
    NODE_ENV: z.enum(["development", "production", "test"]),
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
