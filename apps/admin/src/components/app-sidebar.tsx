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

const data = {
  user: {
    id: "dd8d6bec-5c3c-4518-bd18-a0a62080e316",
    name: "Test User",
    email: "test@example.com",
    avatar: "/avatars/test.jpg",
  },
  topMain: topMainSidebarItems,
  navMain: sidebarItems.map(({ groupIcon, groupLabel, items }) => ({
    title: groupLabel,
    icon: groupIcon,
    items: items.map(({ list, meta: { label } }) => ({
      title: label,
      url: list,
    })),
  })),
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <ShoppingBagIcon className="h-4 w-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Ecommerce Project
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
          items={data.topMain}
          additionalMenuClasses="mb-0"
          additionalMenuButtonClasses="py-0"
        />
        <NavMain items={data.navMain} showSectionTitle={false} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
