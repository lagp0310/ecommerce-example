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
import { DropdownSelector } from "./dropdown-selector";
import { SelectTrigger, SelectValue } from "@/components/ui/select";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row gap-x-4 items-center p-4">
        <Logo className="h-6 w-6 md:h-8 md:w-8 text-primary" />
        <h1 className="text-body-xxl font-medium lg:text-heading-5 leading-[38px] tracking-[-3%] text-green-900">
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
          <DropdownSelector
            options={availableLanguages}
            wrapperClassname="flex flex-1 w-full"
            defaultValue={languageValue}
          >
            <SelectTrigger className="w-full gap-x-2 outline-none focus:ring-0 focus:ring-offset-0 text-green-gray-700 flex flex-1 flex-row items-center text-body-tiny font-normal border border-neutral-200 rounded-sm p-1.5 justify-center">
              {languageIcon}
              <SelectValue placeholder={languageName} />
            </SelectTrigger>
          </DropdownSelector>
          <DropdownSelector
            options={availableCurrencies}
            wrapperClassname="flex flex-1 w-full"
            defaultValue={currencyValue}
          >
            <SelectTrigger className="outline-none focus:ring-0 focus:ring-offset-0 w-full text-green-gray-700 flex flex-1 flex-row gap-x-1 items-center text-body-tiny font-normal border border-neutral-200 rounded-sm p-1.5 justify-center">
              {currencyIcon}
              <SelectValue placeholder={currencyName} />
            </SelectTrigger>
          </DropdownSelector>
        </div>
        <span className="text-body-tiny font-normal text-gray-900">
          Ecobazar © 2024. All Rights Reserved
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
