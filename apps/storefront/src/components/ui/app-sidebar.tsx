import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/logo";
import { LanguageSelector } from "./language-selector";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CurrencySelector } from "./currency-selector";
import {
  availableLanguages,
  languageIcon,
  languageShortName,
  languageName,
  availableCurrencies,
  currencyIcon,
  currencyShortName,
  currencyName,
} from "@/constants/constants";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "/products",
    },
  ];

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
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild href={item.url}>
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-1 flex-row gap-x-2">
          <LanguageSelector
            languages={availableLanguages}
            wrapperClassname="flex flex-1 w-full"
          >
            <div className="text-green-gray-700 flex flex-1 flex-row gap-x-1 items-center text-body-tiny font-normal border border-neutral-200 rounded-sm p-1.5 w-full justify-center">
              {languageIcon}{" "}
              {(languageShortName ?? languageName).toLocaleUpperCase()}{" "}
              <ChevronDownIcon className="h-4 w-4 text-green-gray-700" />
            </div>
          </LanguageSelector>
          <CurrencySelector
            currencies={availableCurrencies}
            wrapperClassname="flex flex-1 w-full"
          >
            <div className="text-green-gray-700 flex flex-1 flex-row gap-x-1 items-center text-body-tiny font-normal border border-neutral-200 rounded-sm p-1.5 w-full justify-center">
              {currencyIcon}{" "}
              {(currencyShortName ?? currencyName).toLocaleUpperCase()}{" "}
              <ChevronDownIcon className="h-4 w-4 text-green-gray-700" />
            </div>
          </CurrencySelector>
        </div>
        <span className="text-body-tiny font-normal text-gray-900">
          Ecobazar © 2024. All Rights Reserved
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
