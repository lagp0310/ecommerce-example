"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import isURL from "validator/lib/isURL";

export function NavMain({
  items,
  showSectionTitle = true,
  additionalMenuClasses = "",
  additionalMenuButtonClasses = "",
}: {
  items: {
    title: string;
    url?: string;
    icon: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      isCurrent: boolean;
    }[];
  }[];
  showSectionTitle?: boolean;
  additionalMenuClasses?: string;
  additionalMenuButtonClasses?: string;
}) {
  const { setOpenMobile } = useSidebar();

  const hasGroupValidLink = React.useCallback(
    (url: string) =>
      typeof url === "string" &&
      isURL(url, {
        require_host: false,
        require_port: false,
        require_protocol: false,
      }),
    []
  );

  return (
    <SidebarGroup className="py-0">
      {showSectionTitle ? (
        <SidebarGroupLabel>Ecommerce Platform</SidebarGroupLabel>
      ) : null}
      <SidebarMenu className={additionalMenuClasses}>
        {items.map(({ icon, title, isActive, items, url }) => (
          <Collapsible key={title} asChild defaultOpen={isActive}>
            <SidebarMenuItem className="group">
              <SidebarMenuButton
                asChild
                tooltip={title}
                className={`[&>button]:hover:text-sidebar-accent-foreground ${additionalMenuButtonClasses}`}
              >
                {!!url && hasGroupValidLink(url) ? (
                  <Link
                    href={url}
                    className={
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : ""
                    }
                    onClick={() => setOpenMobile(false)}
                  >
                    {icon}
                    <span>{title}</span>
                  </Link>
                ) : (
                  <CollapsibleTrigger>
                    <SidebarMenuAction>
                      {icon}
                      <span>{title}</span>
                      <div className="flex flex-1 justify-end w-full">
                        <ChevronRightIcon className="h-4 w-4 group-data-[state=open]:rotate-90" />
                      </div>
                      <span className="sr-only">{`Toggle ${title}`}</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                )}
              </SidebarMenuButton>
              {items?.length ? (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {items?.map(({ isCurrent, title, url }) => (
                      <SidebarMenuSubItem key={title}>
                        <SidebarMenuSubButton asChild>
                          <Link
                            href={url}
                            className={
                              isCurrent ? "bg-sidebar-accent text-white" : ""
                            }
                            onClick={() => setOpenMobile(false)}
                          >
                            <span>{title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
