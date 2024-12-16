import { dataProviderServer } from "@/providers/data/data-provider.server";
import {
  HttpLink,
  InMemoryCache,
  ApolloClient,
  defaultDataIdFromObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

const authLink = setContext(async (_, { headers }) => {
  const token = (await dataProviderServer.auth.getSession()).data.session
    ?.access_token;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  const cache = new InMemoryCache({
    dataIdFromObject(responseObject) {
      if ("nodeId" in responseObject) {
        return `${responseObject.nodeId}`;
      }

      return defaultDataIdFromObject(responseObject);
    },
    typePolicies: {
      Query: {
        fields: {
          node: {
            read(_, { args, toReference }) {
              const ref = toReference({
                nodeId: args?.nodeId,
              });

              return ref;
            },
          },
        },
      },
    },
  });
  const httpLink = new HttpLink({
    // For some reason, getting the env from the validation file
    // doesn't work, so I have to write it like this.
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
    headers: {
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    },
  });

  return new ApolloClient({ cache, link: authLink.concat(httpLink) });
});
