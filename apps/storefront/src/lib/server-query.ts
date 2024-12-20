import type { Node } from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import type { BaseOperationVariables } from "@/types/types";
import type { OperationVariables, DocumentNode } from "@apollo/client";

const client = getClient();

export async function queryGraphql<
  T,
  Q extends OperationVariables = BaseOperationVariables,
>(collectionName: string, query: DocumentNode, variables?: Q) {
  try {
    const { data, error } = await client.query<T, Q>({
      query,
      variables,
    });

    if (error) {
      throw new Error(error?.message);
    }

    // @ts-expect-error: Correct indexing should be checked by caller.
    const collection = data[collectionName] as { edges?: { node?: Node }[] };
    const result = collection?.edges?.map(({ node }) => node) as T;

    return result;
  } catch (error) {
    return null;
  }
}
