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
      <SidebarContent className="p-4">
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
        <span className="text-body-tiny font-normal text-gray-900">
          Ecobazar © 2024. All Rights Reserved
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
