import { dataProviderServer } from "@/providers/data/data-provider.server";

export async function callDatabaseFunction(functionName: string, args?: any) {
  try {
    const { data, error } = await dataProviderServer.rpc(functionName, args);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
