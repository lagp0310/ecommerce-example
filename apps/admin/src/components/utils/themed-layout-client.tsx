"use client";

import { RefineThemedLayoutV2Props, ThemedLayoutV2 } from "@refinedev/antd";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";

export function ThemedLayoutClient({
  initialSiderCollapsed = false,
  Sider = () => <AppSidebar />,
  ...props
}: RefineThemedLayoutV2Props) {
  return (
    <ThemedLayoutV2
      Sider={Sider}
      initialSiderCollapsed={initialSiderCollapsed}
      {...props}
    />
  );
}
