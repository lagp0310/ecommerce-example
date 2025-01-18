import { getClient } from "@/lib/apollo-client";
import type { BaseOperationVariables } from "@/types/types";
import type { OperationVariables, DocumentNode } from "@apollo/client";

const client = getClient();

export async function mutateGraphql<
  T,
  Q extends OperationVariables = BaseOperationVariables,
>(collectionName: string, mutation: DocumentNode, variables?: Q) {
  try {
    const { data, errors } = await client.mutate<T, Q>({
      mutation,
      variables,
    });

    if (errors) {
      throw new Error(errors.map(({ message }) => message).join("\n"));
    }

    // @ts-expect-error: Correct indexing should be checked by the caller.
    const collection = data[collectionName] as {
      __typename: string;
      affectedCount: number;
      records?: T[];
    };
    const result = collection?.records as T[];

    return result;
  } catch (error) {
    return null;
  }
}
