"use client";

import React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems, topMainSidebarItems } from "@/app/constants/constants";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSidebarHighlight } from "@/hooks/use-sidebar-highlight";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/context/user-context";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentSelectedObject = useSidebarHighlight();
  const pathname = usePathname();
  const { usersData } = useCurrentUser();

  const sidebarData = React.useMemo(
    () => ({
      user: {
        ...usersData,
      },
      topMain: topMainSidebarItems.map(({ icon, title, url }) => ({
        icon,
        title,
        url,
        isActive: !!url && pathname.includes(url),
      })),
      navMain: sidebarItems.map(
        ({ groupIcon, groupLabel, groupName, items }) => ({
          groupName,
          title: groupLabel,
          icon: groupIcon,
          isActive:
            !!currentSelectedObject &&
            currentSelectedObject.groupName === groupName,
          items: items.map(({ list, meta: { label } }) => ({
            title: label,
            url: list,
            isCurrent:
              !!currentSelectedObject &&
              !!currentSelectedObject?.list &&
              currentSelectedObject.list.includes(list),
          })),
        })
      ),
    }),
    [currentSelectedObject, pathname, usersData]
  );

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin/dashboard">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <ShoppingBagIcon className="h-4 w-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Ecommerce Admin
                  </span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-[0.5px]">
        <NavMain
          items={sidebarData.topMain}
          additionalMenuClasses="mb-0"
          additionalMenuButtonClasses="py-0"
        />
        <NavMain items={sidebarData.navMain} showSectionTitle={false} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
