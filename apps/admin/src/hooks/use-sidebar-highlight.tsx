"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { refineResources } from "@/app/constants/constants";

export function useSidebarHighlight() {
  const pathname = usePathname();
  const currentResourceObject = React.useMemo(() => {
    const resourceObject = refineResources.find(({ list }) =>
      pathname.includes(list)
    );

    if (!resourceObject) return { path: pathname };

    return {
      list: resourceObject?.list,
      groupName: resourceObject?.meta?.groupName,
      label: resourceObject?.meta?.label,
    };
  }, [pathname]);

  return currentResourceObject;
}
