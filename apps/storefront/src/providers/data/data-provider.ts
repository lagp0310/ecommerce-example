import { createClient } from "@supabase/supabase-js";

// For some reason, getting the env from the validation file
// doesn't work, so I have to write it like this.
export const baseSupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  {
    db: {
      schema: "public", // this can be overridden by passing `meta.schema` to data hooks.
    },
    auth: {
      persistSession: true,
    },
  }
);
