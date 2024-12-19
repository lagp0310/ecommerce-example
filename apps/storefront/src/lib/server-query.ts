import { getClient } from "@/lib/apollo-client";
import { type DocumentNode } from "@apollo/client";

const client = getClient();

export async function queryGraphql(
  collectionName: string,
  query: DocumentNode,
  variables?: any
) {
  try {
    // TODO: Response types. Check generated graphql types.
    const { data, error } = await client.query({
      query,
      variables,
    });

    if (error) {
      throw new Error(error?.message);
    }

    const result = data[collectionName]?.edges?.map(({ node }) => node);

    return result;
  } catch (error) {
    return null;
  }
}
