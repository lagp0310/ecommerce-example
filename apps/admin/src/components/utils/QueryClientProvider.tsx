"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider as Provider,
  QueryClientProviderProps as ProviderProps,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryClientProvider({
  client = queryClient,
  ...props
}: Partial<ProviderProps>) {
  return <Provider client={client} {...props}></Provider>;
}
