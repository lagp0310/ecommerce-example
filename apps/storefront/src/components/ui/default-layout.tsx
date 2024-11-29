import React from "react";
import { Button } from "@/components/ui/button";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Logo } from "@/components/ui/logo";
import { Navbar } from "@/components/ui/navbar";
import { NavbarLink } from "@/components/ui/navbar-link";
import { NavbarLinkDropdown } from "@/components/ui/navbar-link-dropdown";
import { TopBar } from "@/components/ui/top-bar";
import {
  MapPinIcon,
  ChevronDownIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { NewsletterSubscribe } from "@/components/ui/newsletter-subscribe";
import { Input } from "@/components/ui/input";
import { FooterContent } from "@/components/ui/footer-content";
import Link from "next/link";
import { FacebookIcon } from "@/components/ui/icons/facebook";
import { PinterestIcon } from "@/components/ui/icons/pinterest";
import { InstagramIcon } from "@/components/ui/icons/instagram";
import { FooterLink } from "@/types/types";

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
    {
      groupName: "About Us",
      links: [{ text: "About Us", url: "#" }],
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <TopBar className="hidden md:flex flex-1 items-center justify-center py-3 bg-green-gray-50">
        <div className="flex flex-1 flex-row max-w-7xl items-center justify-center">
          <span className="flex flex-1 flex-row gap-x-4 text-green-gray-700 items-center text-body-tiny font-normal">
            <MapPinIcon className="h-4 w-4 text-green-gray-700" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
          <div className="flex flex-1 flex-row gap-x-4 justify-end">
            <LanguageSelector className="text-green-gray-700 flex flex-row gap-x-1 items-center text-body-tiny font-normal">
              ENG <ChevronDownIcon className="h-4 w-4 text-green-gray-700" />
            </LanguageSelector>
            <CurrencySelector className="text-green-gray-700 flex flex-row gap-x-1 items-center text-body-tiny font-normal">
              USD <ChevronDownIcon className="h-4 w-4 text-green-gray-700" />
            </CurrencySelector>
          </div>
        </div>
      </TopBar>
      <nav className="flex flex-1 flex-row justify-center items-center bg-white shadow-sm">
        <Navbar className="flex flex-1 flex-row items-center justify-center py-6 px-6 md:px-0 max-w-7xl">
          <div className="hidden md:flex flex-1 flex-row items-center gap-x-10">
            <NavbarLinkDropdown className="flex flex-row gap-x-1 items-center text-body-small font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
              Home <ChevronDownIcon className="h-4 w-4" />
            </NavbarLinkDropdown>
            <NavbarLinkDropdown className="flex flex-row gap-x-1 items-center text-body-small font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
              Products <ChevronDownIcon className="h-4 w-4" />
            </NavbarLinkDropdown>
            <NavbarLink
              href="/about-us"
              className="flex flex-row gap-x-1 items-center text-body-small font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              About Us
            </NavbarLink>
          </div>
          <NavbarLink
            href="/"
            className="flex flex-row gap-x-4 justify-center items-center"
          >
            <Bars3Icon className="flex md:hidden h-6 w-6 text-gray-900" />
            <Logo className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <h1 className="text-body-xxl font-medium md:text-heading-5 leading-[38px] tracking-[-3%] text-green-900">
              Ecobazar
            </h1>
          </NavbarLink>
          <div className="flex flex-1 flex-row items-center justify-end max-w-7xl">
            <div className="flex flex-1 flex-row gap-x-4 justify-end">
              <NavbarLink
                href="tel:2195550114"
                className="text-gray-900 text-body-small font-medium hidden md:flex flex-row md:gap-x-2 items-center mr-4"
              >
                <PhoneIcon className="h-6 w-6" />
                <span className="hidden md:flex">(219) 555-0114</span>
              </NavbarLink>
              <Button>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-900" />
              </Button>
              <Button>
                <HeartIcon className="h-6 w-6 text-gray-900" />
              </Button>
              <Button>
                <ShoppingBagIcon className="h-6 w-6 text-gray-900" />
              </Button>
              <Button>
                <UserIcon className="h-6 w-6 text-gray-900" />
              </Button>
            </div>
          </div>
        </Navbar>
      </nav>
      <main>{children}</main>
      <footer className="flex flex-1 flex-col justify-center bg-gray-900">
        <NewsletterSubscribe className="bg-[#F7F7F7] flex flex-1 flex-row gap-x-10 items-center justify-center py-10">
          <div className="flex flex-1 flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-center max-w-7xl px-6 md:px-0">
            <div className="flex flex-1 flex-col gap-y-2 basis-full md:basis-1/2 md:pr-48">
              <span className="text-body-xxl font-semibold text-gray-900 text-center md:text-left">
                Subscribe to our Newsletter
              </span>
              <span className="text-body-small font-normal text-gray-400 text-center md:text-left">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-center md:justify-end basis-full md:basis-1/2 w-full">
              <div className="flex flex-1 w-full">
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="flex-1 rounded-full outline-none p-3.5 placeholder:text-body-medium placeholder:font-normal placeholder:text-gray-500 text-gray-500"
                />
                <Button className="rounded-full text-white bg-primary p-3.5 -ml-10">
                  Subscribe
                </Button>
              </div>
              <div className="flex flex-row gap-x-2 items-center justify-center md:justify-end md:ml-8">
                <Link
                  href="#"
                  className="text-gray-700 hover:bg-primary hover:text-white rounded-full p-3"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:bg-primary hover:text-white rounded-full p-3"
                >
                  <PinterestIcon className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:bg-primary hover:text-white rounded-full p-3"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </NewsletterSubscribe>
        <FooterContent className="flex flex-1 flex-row justify-center items-center px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-56 max-w-7xl">
            <div className="col-span-1 md:col-span-2 flex flex-1 flex-col gap-y-2 py-8 md:py-[60px]">
              <NavbarLink
                href="/"
                className="flex flex-row gap-x-4 items-center"
              >
                <Logo className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h1 className="font-medium text-heading-5 leading-[38px] tracking-[-3%] text-white">
                  Ecobazar
                </h1>
              </NavbarLink>
              <span className="text-body-small font-normal text-gray-500">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </span>
              <div className="flex flex-1 flex-col gap-y-4 md:gap-y-0 md:flex-row gap-x-2">
                <Link
                  href="tel:2195550114"
                  className="text-body-small font-normal text-white max-w-fit"
                >
                  (219) 555-0114
                  <hr className="bg-primary mt-2 border border-primary" />
                </Link>
                <span className="hidden md:flex text-body-medium font-normal text-gray-500 mx-4">
                  or
                </span>
                <Link
                  href="mailto:support@ecommerce.com"
                  className="text-body-small font-normal text-white max-w-fit"
                >
                  support@ecommerce.com
                  <hr className="bg-primary mt-2 border border-primary" />
                </Link>
              </div>
            </div>
            <div className="grid col-span-1 grid-cols-1 md:col-span-3 md:grid-cols-3 md:py-[60px] gap-x-4 gap-y-8 md:gap-y-0 pb-8 md:pb-0">
              {footerLinks.map(({ groupName, links }, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-1 flex-col gap-y-2"
                >
                  <span className="text-body-medium font-medium text-white max-w-fit mb-2">
                    {groupName}
                    <hr className="bg-primary mt-2 border border-primary" />
                  </span>
                  {links.map(({ text, url }, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={url}
                      className="text-body-small font-normal text-gray-400 hover:text-white"
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <hr className="col-span-full -ml-8 -mr-8 md:ml-0 md:mr-0" />
            <div className="flex flex-1 flex-row items-center col-span-full py-6">
              <span className="text-body-small font-normal text-gray-500">
                Ecobazar © 2024. All Rights Reserved
              </span>
            </div>
          </div>
        </FooterContent>
      </footer>
    </div>
  );
}
