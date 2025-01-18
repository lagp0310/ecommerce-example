import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/common/sidebar";
import { Logo } from "@/components/ui/common/logo";
import {
  availableLanguages,
  languageIcon,
  availableCurrencies,
  currencyIcon,
  languageValue,
  currencyValue,
  languageName,
  currencyName,
} from "@/constants/constants";
import { SidebarLinksWrapper } from "@/components/ui/common/sidebar-menu-links-wrapper";
import { DropdownSelector } from "@/components/ui/common/dropdown-selector";
import { SelectTrigger, SelectValue } from "@/components/ui/common/select";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center gap-x-4 p-4">
        <Logo className="size-6 text-primary md:size-8" />
        <h1 className="text-body-xxl font-medium leading-[38px] tracking-[-3%] text-green-900 lg:text-heading-5">
          Ecobazar
        </h1>
      </SidebarHeader>
      <SidebarContent className="p-4 pt-0">
        <SidebarGroup className="flex flex-1 flex-col gap-y-2 p-0">
          <SidebarLinksWrapper />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-1 flex-row gap-x-2">
          <React.Suspense>
            <DropdownSelector
              options={availableLanguages}
              wrapperClassname="flex flex-1 w-full"
              defaultValue={languageValue}
            >
              <SelectTrigger className="flex w-full flex-1 flex-row items-center justify-center gap-x-2 rounded-sm border border-neutral-200 p-1.5 text-body-tiny font-normal text-green-gray-700 outline-none focus:ring-0 focus:ring-offset-0">
                {languageIcon}
                <SelectValue placeholder={languageName} />
              </SelectTrigger>
            </DropdownSelector>
            <DropdownSelector
              options={availableCurrencies}
              wrapperClassname="flex flex-1 w-full"
              defaultValue={currencyValue}
            >
              <SelectTrigger className="flex w-full flex-1 flex-row items-center justify-center gap-x-1 rounded-sm border border-neutral-200 p-1.5 text-body-tiny font-normal text-green-gray-700 outline-none focus:ring-0 focus:ring-offset-0">
                {currencyIcon}
                <SelectValue placeholder={currencyName} />
              </SelectTrigger>
            </DropdownSelector>
          </React.Suspense>
        </div>
        <span className="text-body-tiny font-normal text-gray-900">
          Ecobazar © 2024. All Rights Reserved
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
