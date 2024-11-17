import React, { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { dataProviderClient } from "@/app/providers/data/dataProvider.client";
import { authProviderClient } from "@/app/providers/auth/authProvider.client";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { Poppins } from "next/font/google";
import {
  RefineThemes,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/antd";
import { App as AntdApp, ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";
import { QueryClientProvider } from "@/components/utils/QueryClientProvider";
import { refineResources } from "@/app/constants/constants";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Ecommerce Admin",
  description: "Ecommerce Admin generated using Refine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Suspense>
          <QueryClientProvider>
            <ConfigProvider theme={RefineThemes.Blue}>
              <AntdApp>
                <Refine
                  routerProvider={routerProvider}
                  options={{
                    warnWhenUnsavedChanges: true,
                    disableTelemetry: true,
                    title: { icon: null, text: "Ecommerce Admin" },
                    syncWithLocation: true,
                  }}
                  dataProvider={dataProviderClient}
                  authProvider={authProviderClient}
                  notificationProvider={useNotificationProvider}
                  resources={refineResources}
                >
                  <ThemedLayoutV2
                    // Title={}
                    // Footer={}
                    // Header={}
                    // Sider={}
                    initialSiderCollapsed={false}
                  >
                    {children}
                  </ThemedLayoutV2>
                </Refine>
              </AntdApp>
            </ConfigProvider>
          </QueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
