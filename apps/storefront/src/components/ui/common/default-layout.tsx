import React from "react";
import { Button } from "@/components/ui/common/button";
import { Logo } from "@/components/ui/common/logo";
import { Navbar } from "@/components/navigation/navbar";
import { NavbarLink } from "@/components/navigation/navbar-link";
import { TopBar } from "@/components/ui/common/top-bar";
import { MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { NewsletterSubscribe } from "@/components/ui/marketing/newsletter-subscribe";
import { Input } from "@/components/form/input";
import { FooterContent } from "@/components/ui/common/footer-content";
import Link from "next/link";
import { FacebookIcon } from "@/components/ui/icons/brands/facebook";
import { PinterestIcon } from "@/components/ui/icons/brands/pinterest";
import { InstagramIcon } from "@/components/ui/icons/brands/instagram";
import type { FooterLink } from "@/types/types";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/navigation/navigation-menu";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/common/sidebar";
import { AppSidebar } from "@/components/ui/common/app-sidebar";
import {
  availableCurrencies,
  availableLanguages,
  currencyIcon,
  currencyName,
  currencyValue,
  languageIcon,
  languageName,
  languageValue,
} from "@/constants/constants";
import { NavigationLinksWrapper } from "@/components/navigation/navigation-links-wrapper";
import { SidebarCartWrapper } from "@/components/ui/cart/sidebar-cart-wrapper";
import { DropdownSelector } from "@/components/ui/common/dropdown-selector";
import { SelectTrigger, SelectValue } from "@/components/ui/common/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/common/tooltip";

type Props = React.PropsWithChildren;

export function DefaultLayout({ children }: Props) {
  const footerLinks: FooterLink[] = [
    {
      groupName: "My Account",
      links: [
        { text: "My Account", url: "#" },
        { text: "Order History", url: "#" },
        { text: "Cart", url: "#" },
        { text: "Wishlist", url: "#" },
      ],
    },
    {
      groupName: "Help",
      links: [
        { text: "Contact", url: "#" },
        { text: "FAQ", url: "#" },
        { text: "Terms and Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
      ],
    },
    // {
    //   groupName: "About Us",
    //   links: [{ text: "About Us", url: "/about-us" }],
    // },
  ];

  return (
    <SidebarProvider open={false} className="*:max-w-full">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <TopBar className="hidden items-center justify-center bg-green-gray-50 px-6 py-3 md:flex">
          <div className="flex max-w-7xl flex-1 flex-row items-center justify-center">
            <span className="flex flex-1 flex-row items-center gap-x-4 text-body-tiny font-normal text-green-gray-700">
              <MapPinIcon className="size-4 text-green-gray-700" />
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
            <div className="flex flex-1 flex-row justify-end gap-x-4">
              <React.Suspense>
                <DropdownSelector
                  options={availableLanguages}
                  defaultValue={languageValue}
                >
                  <SelectTrigger className="flex max-h-5 w-fit flex-row items-center gap-x-2 border-none bg-transparent p-0 text-body-tiny font-normal text-green-gray-700 outline-none focus:ring-0 focus:ring-offset-0">
                    {languageIcon}
                    <SelectValue placeholder={languageName} />
                  </SelectTrigger>
                </DropdownSelector>
                <DropdownSelector
                  options={availableCurrencies}
                  defaultValue={currencyValue}
                >
                  <SelectTrigger className="flex max-h-5 w-fit flex-row items-center gap-x-2 border-none bg-transparent p-0 text-body-tiny font-normal text-green-gray-700 outline-none focus:ring-0 focus:ring-offset-0">
                    {currencyIcon}
                    <SelectValue placeholder={currencyName} />
                  </SelectTrigger>
                </DropdownSelector>
              </React.Suspense>
            </div>
          </div>
        </TopBar>
        <div className="sticky top-0 z-50 flex flex-row items-center justify-center bg-white px-6 shadow-sm">
          <Navbar className="flex max-w-7xl flex-1 flex-row items-center justify-center gap-x-2 py-6 lg:gap-x-0">
            <NavigationMenu className="hidden max-w-full basis-1/3 flex-row items-center justify-start gap-x-2 lg:flex lg:gap-x-0">
              <NavigationMenuList>
                <NavigationLinksWrapper />
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex w-full flex-1 basis-1/3 flex-row items-center justify-start lg:justify-center">
              <SidebarTrigger className="mr-4" />
              <NavbarLink
                href="/"
                className="flex max-w-fit flex-1 flex-row items-center justify-start gap-x-4 lg:justify-center"
              >
                <Logo className="size-6 text-primary md:size-8" />
                <h1 className="text-body-xxl font-medium leading-[38px] tracking-[-3%] text-green-900 lg:text-heading-5">
                  Ecobazar
                </h1>
              </NavbarLink>
            </div>
            <div className="flex max-w-7xl basis-1/3 flex-row items-center justify-end">
              <div className="flex flex-row justify-end gap-x-4">
                <NavbarLink
                  href="tel:2195550114"
                  className="hidden flex-row items-center text-body-small font-medium text-gray-900 md:flex md:gap-x-2 lg:mr-4"
                >
                  <PhoneIcon className="size-6" />
                  <span className="hidden lg:flex">(219) 555-0114</span>
                </NavbarLink>
                {/* <Button>
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-900" />
                </Button>
                <Button>
                  <HeartIcon className="h-6 w-6 text-gray-900" />
                </Button> */}
                <SidebarCartWrapper />
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <UserIcon className="size-6 text-gray-900" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-body-medium font-normal text-gray-900">
                        My Account
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Navbar>
        </div>
        <main>{children}</main>
        <footer className="flex flex-col justify-center bg-gray-900">
          <NewsletterSubscribe className="flex flex-1 flex-row items-center justify-center gap-x-10 bg-[#F7F7F7] py-10">
            <div className="flex max-w-7xl flex-1 flex-col items-center justify-center gap-y-4 px-6 lg:flex-row lg:gap-y-0 xl:px-0">
              <div className="flex flex-1 basis-full flex-col gap-y-2 md:max-w-screen-sm md:basis-1/2 lg:pr-48">
                <span className="text-center text-body-xl font-semibold text-gray-900 md:text-left md:text-body-xxl">
                  Subscribe to our Newsletter
                </span>
                <span className="text-center text-body-tiny font-normal text-gray-400 md:text-left md:text-body-small">
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna.
                </span>
              </div>
              <div className="flex w-full flex-1 basis-full flex-col items-center justify-center gap-y-4 md:basis-1/2 md:justify-end lg:flex-row lg:gap-y-0">
                {/* TODO: Add form with validation. */}
                <div className="flex w-full flex-1 md:max-w-screen-sm">
                  <Input
                    placeholder="Your email address"
                    type="email"
                    className="flex-1 rounded-full p-3.5 text-gray-500 outline-none placeholder:text-body-small placeholder:font-normal placeholder:text-gray-500 md:placeholder:text-body-medium"
                  />
                  <Button className="-ml-10 rounded-full bg-primary p-3.5 text-body-small text-white hover:border hover:border-primary hover:bg-white hover:text-primary motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-base">
                    Subscribe
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2 md:ml-8 md:justify-end">
                  <Link
                    href="#"
                    className="rounded-full p-3 text-gray-700 hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                  >
                    <FacebookIcon className="size-[18px]" />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full p-3 text-gray-700 hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                  >
                    <PinterestIcon className="size-[18px]" />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full p-3 text-gray-700 hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                  >
                    <InstagramIcon className="size-[18px]" />
                  </Link>
                </div>
              </div>
            </div>
          </NewsletterSubscribe>
          <FooterContent className="flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
            <div className="grid grid-cols-1 md:max-w-screen-sm lg:max-w-7xl lg:grid-cols-5 lg:gap-x-56">
              <div className="col-span-1 flex flex-1 flex-col gap-y-2 py-8 md:col-span-2 md:pt-[60px] lg:pb-[60px]">
                <NavbarLink
                  href="/"
                  className="flex flex-row items-center gap-x-4"
                >
                  <Logo className="size-6 text-primary md:size-8" />
                  <h1 className="text-heading-5 font-medium leading-[38px] tracking-[-3%] text-white">
                    Ecobazar
                  </h1>
                </NavbarLink>
                <span className="text-body-small font-normal text-gray-500">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magna congue nec.
                </span>
                <div className="flex flex-1 flex-col gap-x-2 gap-y-4 md:flex-row md:gap-y-0">
                  <Link
                    href="tel:2195550114"
                    className="max-w-fit whitespace-nowrap text-body-small font-normal text-white"
                  >
                    (219) 555-0114
                    <hr className="mt-2 border border-primary bg-primary" />
                  </Link>
                  <span className="mx-4 hidden text-body-medium font-normal text-gray-500 md:flex">
                    or
                  </span>
                  <Link
                    href="mailto:support@ecommerce.com"
                    className="max-w-fit text-body-small font-normal text-white"
                  >
                    support@ecommerce.com
                    <hr className="mt-2 border border-primary bg-primary" />
                  </Link>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 gap-x-4 gap-y-8 pb-8 md:col-span-3 md:grid-cols-3 md:gap-y-0 lg:py-[60px] lg:pb-0">
                {footerLinks.map(({ groupName, links }, index) => (
                  <div
                    key={index}
                    className="col-span-1 flex flex-1 flex-col gap-y-2"
                  >
                    <span className="mb-2 max-w-fit text-body-medium font-medium text-white">
                      {groupName}
                      <hr className="mt-2 border border-primary bg-primary" />
                    </span>
                    {links.map(({ text, url }, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={url}
                        className="text-body-small font-normal text-gray-400 hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <hr className="col-span-full -mx-6 md:mx-0" />
              <div className="col-span-full flex flex-1 flex-row items-center py-6">
                <span className="text-body-small font-normal text-gray-500">
                  Ecobazar © 2024. All Rights Reserved
                </span>
                <div className="flex w-full flex-1 flex-row items-center justify-end">
                  <span className="text-body-small font-normal text-gray-500">
                    <Link
                      href="https://www.figma.com/community/file/1272474484693685580"
                      className="underline"
                    >
                      Design
                    </Link>{" "}
                    by:{" "}
                    <Link
                      href="https://www.figma.com/@templatecookie"
                      className="underline"
                    >
                      TemplateCookie
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </FooterContent>
        </footer>
      </div>
    </SidebarProvider>
  );
}
