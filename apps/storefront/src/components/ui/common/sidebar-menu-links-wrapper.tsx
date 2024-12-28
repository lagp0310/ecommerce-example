"use client";

import React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/common/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { defaultProductsSearchParams } from "@/constants/product/constants";

export function SidebarLinksWrapper() {
  const pathname = usePathname();

  const items = React.useMemo(
    () => [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Products",
        url: `/products?${defaultProductsSearchParams.toString()}`,
      },
      {
        title: "About Us",
        url: "/about-us",
      },
    ],
    []
  );

  return (
    <SidebarMenu>
      {items.map(({ title, url }) => (
        <SidebarMenuItem
          key={title}
          className={cn(
            "hover:bg-green-gray-100/50 group-hover/menu-item:rounded-md rounded-md motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100",
            { "bg-green-gray-100/50 text-gray-900": pathname === url }
          )}
        >
          <SidebarMenuButton
            asChild
            href={url}
            className={cn({
              "group-hover/menu-item:bg-green-gray-100/50 motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100":
                pathname !== url,
              "group-hover/menu-item:bg-transparent": pathname === url,
            })}
          >
            <span>{title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
