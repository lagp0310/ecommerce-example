import { dataProvider, createClient } from "@refinedev/supabase";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public", // this can be overridden by passing `meta.schema` to data hooks.
  },
  auth: {
    persistSession: true,
  },
});
export const baseDataProvider = dataProvider(supabaseClient);
