import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

type NonNullableSchema = Required<Pick<CodegenConfig, "schema">>["schema"];

const config: Omit<CodegenConfig, "schema"> & NonNullableSchema = {
  schema: {
    [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
      },
    },
  },
  documents: "src/**/*.tsx",
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: "string",
          Date: "string",
          Time: "string",
          Datetime: "string",
          JSON: "string",
          BigInt: "string",
          BigFloat: "string",
          Opaque: "any",
        },
      },
    },
  },
};

export default config;
