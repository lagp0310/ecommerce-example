"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/solid";
import { baseSupabaseClient } from "@/app/providers/data/dataProvider";
import { authLoginRoute } from "@/app/constants/constants";
import { useRouter } from "next/navigation";
import { useNotificationProvider } from "@refinedev/antd";
import { OpenNotificationParams } from "@refinedev/core";

export function NavUser({
  user: { avatar, email, name },
}: {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const { open } = useNotificationProvider();
  const openNotification = React.useCallback(
    (
      type: OpenNotificationParams["type"],
      description: string,
      message: string
    ) => {
      open({
        description,
        message,
        type,
      });
    },
    [open]
  );

  const handleLogout = React.useCallback(async () => {
    const { error } = await baseSupabaseClient.auth.signOut();

    if (error) {
      console.error("Could not sign out the user");
      openNotification(
        "error",
        "Error",
        "There was an error trying to sign out. Please try again."
      );
    }

    return router.push(authLoginRoute);
  }, [openNotification, router]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
              </div>
              <ChevronUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-xs">{email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
