import { dataProviderServer } from "@/providers/data/data-provider.server";

export async function callDatabaseFunction<T, Q = object>(
  functionName: string,
  args?: Q
) {
  try {
    const { data, error } = await dataProviderServer.rpc(functionName, args);

    if (error) {
      throw new Error(error.message);
    }

    return data as T;
  } catch (error) {
    console.error(error);
  }
}
