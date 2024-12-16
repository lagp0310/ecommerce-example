import { getClient } from "@/lib/apollo-client";
import { type DocumentNode, gql } from "@apollo/client";

const client = getClient();

export async function queryGraphql(
  collectionName: string,
  query: DocumentNode
) {
  try {
    // TODO: Response types. Check generated graphql types.
    const {
      // data: {
      //   categoriesCollection: { edges },
      // },
      data,
      error,
    } = await client.query({
      query,
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
