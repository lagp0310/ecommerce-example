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
  CheckIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { baseSupabaseClient } from "@/app/providers/data/data-provider";
import { authLoginRoute } from "@/app/constants/constants";
import { usePathname, useRouter } from "next/navigation";
import { useNotificationProvider } from "@refinedev/antd";
import { OpenNotificationParams } from "@refinedev/core";
import { Theme, useTheme } from "@/context/theme-context";
import { UserData } from "@/context/user-context";

export function NavUser({
  user: { avatar, firstName, lastName, email },
}: {
  user: UserData;
}) {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

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

    return router.push(`${authLoginRoute}?redirectTo=${pathname}`);
  }, [openNotification, pathname, router]);

  const { theme, setTheme, setLocalStorageTheme } = useTheme();
  const themeIcon = React.useMemo(() => {
    if (theme === "system") return <ComputerDesktopIcon className="h-4 w-4" />;

    return theme === "dark" ? (
      <MoonIcon className="h-4 w-4" />
    ) : (
      <SunIcon className="h4 w-4" />
    );
  }, [theme]);
  const handleThemeChange = React.useCallback(
    (theme: Theme) => {
      setTheme(theme);
      setLocalStorageTheme(theme);
    },
    [setLocalStorageTheme, setTheme]
  );
  const getCheckedComponent = React.useCallback(
    (themeArg: Theme) => {
      return theme === themeArg ? (
        <div className="flex flex-1 justify-end items-center">
          <CheckIcon className="h-4 w-4" />
        </div>
      ) : null;
    },
    [theme]
  );

  const userInfoSection = React.useCallback(
    (showChevronUpDown = true) => (
      <>
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
          <AvatarFallback className="rounded-lg">{`${firstName?.substring(0, 1)} ${lastName?.substring(0, 1)}`}</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{`${firstName} ${lastName}`}</span>
          <span className="truncate text-xs">{email}</span>
        </div>
        {showChevronUpDown ? (
          <ChevronUpDownIcon className="ml-auto size-4" />
        ) : null}
      </>
    ),
    [avatar, email, firstName, lastName]
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {userInfoSection()}
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
                {userInfoSection(false)}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer dark:hover:bg-sidebar-accent dark:hover:text-sidebar-accent-foreground flex flex-1 p-0">
              <SidebarMenu className="m-0">
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                        {themeIcon}
                        Theme
                        <div className="flex flex-1 justify-end">
                          <ChevronRightIcon className="h-4 w-4" />
                        </div>
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                      side={isMobile ? "bottom" : "right"}
                      align="end"
                      sideOffset={6}
                    >
                      <DropdownMenuItem
                        onClick={() => handleThemeChange("system")}
                        className="hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      >
                        <ComputerDesktopIcon className="h-4 w-4" />
                        System
                        {getCheckedComponent("system")}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleThemeChange("light")}
                        className="hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      >
                        <SunIcon className="h-4 w-4" />
                        Light
                        {getCheckedComponent("light")}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleThemeChange("dark")}
                        className="hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      >
                        <MoonIcon className="h-4 w-4" />
                        Dark
                        {getCheckedComponent("dark")}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
