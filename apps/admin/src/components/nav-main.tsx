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
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export function NavMain({
  items,
  showSectionTitle = true,
  additionalMenuClasses = "",
  additionalMenuButtonClasses = "",
}: {
  items: {
    title: string;
    url: string;
    icon: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  showSectionTitle?: boolean;
  additionalMenuClasses?: string;
  additionalMenuButtonClasses?: string;
}) {
  return (
    <SidebarGroup className="py-0">
      {showSectionTitle ? (
        <SidebarGroupLabel>Ecommerce Platform</SidebarGroupLabel>
      ) : null}
      <SidebarMenu className={additionalMenuClasses}>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={additionalMenuButtonClasses}
              >
                <a href={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRightIcon />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
