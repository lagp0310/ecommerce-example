import type { Node } from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import type { BaseOperationVariables } from "@/types/types";
import type {
  OperationVariables,
  DocumentNode,
  FetchPolicy,
} from "@apollo/client";

const client = getClient();

export async function queryGraphql<
  T,
  Q extends OperationVariables = BaseOperationVariables,
>(
  collectionName: string,
  query: DocumentNode,
  variables?: Q,
  fetchPolicy?: FetchPolicy
) {
  try {
    const { data, error } = await client.query<T, Q>({
      query,
      variables,
      fetchPolicy,
    });

    if (error) {
      throw new Error(error?.message);
    }

    // @ts-expect-error: Correct indexing should be checked by the caller.
    const collection = data[collectionName] as { edges?: { node?: Node }[] };
    const result = collection?.edges?.map(({ node }) => node) as T;

    return result;
  } catch (error) {
    return null;
  }
}
