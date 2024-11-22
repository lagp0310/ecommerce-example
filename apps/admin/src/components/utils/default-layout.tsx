"use client";

import React from "react";
import { dataProviderClient } from "@/app/providers/data/data-provider.client";
import { authProviderClient } from "@/app/providers/auth/auth-provider.client";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import "@refinedev/antd/dist/reset.css";
import { QueryClientProvider } from "@/components/utils/query-client-provider";
import {
  formValidationMessages,
  nonProtectedPathnames,
  refineResources,
} from "@/app/constants/constants";
import { ThemedLayoutClient } from "@/components/utils/themed-layout-client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";

type Props = { children: React.ReactNode };

export function DefaultLayout({ children }: Props) {
  const { theme: currentTheme, prefersDarkTheme } = useTheme();
  const pathname = usePathname();
  const shouldShowSidebar = React.useMemo(
    () =>
      nonProtectedPathnames.some(
        (partialPath) => !pathname.startsWith(partialPath)
      ),
    [pathname]
  );

  return (
    <QueryClientProvider>
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme === "dark" || prefersDarkTheme
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
        form={{ validateMessages: formValidationMessages }}
      >
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
            resources={[...refineResources]}
          >
            {shouldShowSidebar ? (
              <SidebarProvider>
                <ThemedLayoutClient>
                  <SidebarTrigger />
                  {children}
                </ThemedLayoutClient>
              </SidebarProvider>
            ) : (
              <ThemedLayoutV2 Sider={() => <></>}>{children}</ThemedLayoutV2>
            )}
          </Refine>
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
