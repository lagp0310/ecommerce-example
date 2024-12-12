"use client";

import React from "react";
import { ClientLink } from "@/components/navigation/client-link";
import { NavigationLink } from "@/types/types";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavigationLinksWrapper() {
  const pathname = usePathname();

  // const navigationCategories: NavigationCategory[] = Array.from({
  //   length: 6,
  // }).map(() => ({
  //   title: "Fresh Fruit",
  //   href: "/products",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas faucibus est at dapibus. Quisque.",
  // }));
  const navigationLinks: NavigationLink[] = React.useMemo(
    () => [
      {
        groupName: "home",
        // title: "Home",
        content: (
          // <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          //   <li className="row-span-3">
          //     <NavigationMenuLink asChild>
          //       <Link
          //         className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md gap-y-4"
          //         href="/"
          //       >
          //         <Image src={navigationTopImage} alt="Fruits Basket" />
          //         <div className="flex flex-1 flex-row gap-x-4 items-center justify-center">
          //           <Logo className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          //           <h2 className="text-body-xxl font-medium lg:text-heading-5 leading-[38px] tracking-[-3%] text-green-900">
          //             Ecobazar
          //           </h2>
          //         </div>
          //         <p className="text-sm leading-tight text-muted-foreground">
          //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //           Nullam egestas faucibus est at dapibus. Quisque.
          //         </p>
          //       </Link>
          //     </NavigationMenuLink>
          //   </li>
          //   <ListItem
          //     href="/products"
          //     title="Products"
          //     className="relative z-10 hover:bg-green-gray-900/65 hover:text-white"
          //     backgroundImage={
          //       <Image
          //         src={productsBackground}
          //         alt="Products Background"
          //         placeholder="blur"
          //         quality={100}
          //         sizes="100vw"
          //         className="-z-10 h-auto w-full rounded-md object-cover absolute -top-8 left-0 hidden group-hover:block group-hover:opacity-40"
          //       />
          //     }
          //   >
          //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          //     egestas faucibus est at dapibus. Quisque.
          //   </ListItem>
          //   <ListItem
          //     href="/faq"
          //     title="FAQ"
          //     className="relative z-10 hover:bg-green-gray-900/65 hover:text-white"
          //     backgroundImage={
          //       <Image
          //         src={faqBackground}
          //         alt="FAQ Background"
          //         placeholder="blur"
          //         quality={100}
          //         sizes="100vw"
          //         className="-z-10 h-auto w-full rounded-md object-cover absolute top-0 left-0 hidden group-hover:block group-hover:opacity-40"
          //       />
          //     }
          //   >
          //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          //     egestas faucibus est at dapibus. Quisque.
          //   </ListItem>
          //   <ListItem
          //     href="/contact-us"
          //     title="Contact"
          //     className="relative z-10 hover:bg-green-gray-900/65 hover:text-white"
          //     backgroundImage={
          //       <Image
          //         src={contactUsBackground}
          //         alt="Contact Us Background"
          //         placeholder="blur"
          //         quality={100}
          //         sizes="100vw"
          //         className="-z-10 h-auto w-full rounded-md object-cover absolute top-0 left-0 hidden group-hover:block group-hover:opacity-40"
          //       />
          //     }
          //   >
          //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          //     egestas faucibus est at dapibus. Quisque.
          //   </ListItem>
          // </ul>
          <ClientLink
            href="/"
            legacyBehavior
            passHref
            className="w-full flex flex-1 flex-row group-hover/home:bg-green-gray-100/50 group-hover/home:rounded-md"
          >
            <NavigationMenuLink
              data-active={pathname === "/"}
              className={cn(
                "flex flex-row justify-center gap-x-1 items-center text-body-small font-medium text-gray-500 hover:!text-gray-900 cursor-pointer data-[active=true]:text-gray-900 data-[active=true]:!bg-green-gray-100/50 data-[active=false]:!bg-white group-hover/home:!bg-green-gray-100/50 group-hover/home:!rounded-md",
                navigationMenuTriggerStyle()
              )}
            >
              Home
            </NavigationMenuLink>
          </ClientLink>
        ),
        // isDropdown: true,
      },
      {
        groupName: "products",
        // title: "Products",
        content: (
          // <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          //   {navigationCategories.map(({ href, title, description }, index) => (
          //     <ListItem
          //       key={index}
          //       title={title}
          //       href={href}
          //       className="relative z-10 hover:bg-green-gray-900/80 hover:text-white"
          //       backgroundImage={
          //         <Image
          //           src={categoryBackground}
          //           alt="Fresh Fruit Category"
          //           placeholder="blur"
          //           quality={100}
          //           sizes="100vw"
          //           className="-z-10 h-auto w-full rounded-md object-cover absolute -top-20 left-0 hidden group-hover:block group-hover:opacity-40"
          //         />
          //       }
          //     >
          //       {description}
          //     </ListItem>
          //   ))}
          // </ul>
          <ClientLink
            href="/products"
            legacyBehavior
            passHref
            className="w-full flex flex-1 flex-row group-hover/products:bg-green-gray-100/50 group-hover/products:rounded-md"
          >
            <NavigationMenuLink
              data-active={pathname === "/products"}
              className={cn(
                "flex flex-row justify-center gap-x-1 items-center text-body-small font-medium text-gray-500 hover:!text-gray-900 cursor-pointer data-[active=true]:text-gray-900 data-[active=true]:!bg-green-gray-100/50 data-[active=false]:!bg-white group-hover/products:!bg-green-gray-100/50 group-hover/products:!rounded-md",
                navigationMenuTriggerStyle()
              )}
            >
              Products
            </NavigationMenuLink>
          </ClientLink>
        ),
        // isDropdown: true,
      },
      {
        groupName: "about-us",
        content: (
          <ClientLink
            href="/about-us"
            legacyBehavior
            passHref
            className="w-full flex flex-1 flex-row group-hover/about-us:bg-green-gray-100/50 group-hover/about-us:rounded-md"
          >
            <NavigationMenuLink
              data-active={pathname === "/about-us"}
              className={cn(
                "flex flex-row justify-center gap-x-1 items-center text-body-small font-medium text-gray-500 hover:!text-gray-900 cursor-pointer data-[active=true]:text-gray-900 data-[active=true]:!bg-green-gray-100/50 data-[active=false]:!bg-white group-hover/about-us:!bg-green-gray-100/50 group-hover/about-us:!rounded-md",
                navigationMenuTriggerStyle()
              )}
            >
              About Us
            </NavigationMenuLink>
          </ClientLink>
        ),
      },
    ],
    [pathname]
  );

  return (
    <React.Fragment>
      {navigationLinks.map(
        ({ content, title, groupName, isDropdown = false }, index) => (
          <NavigationMenuItem
            key={index}
            className={`flex flex-1 flex-row text-body-small font-medium hover:rounded-md group/${groupName} motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100`}
          >
            {isDropdown ? (
              <NavigationMenuTrigger className="text-body-small font-medium text-gray-500 hover:!text-gray-900 cursor-pointer">
                {title}
              </NavigationMenuTrigger>
            ) : null}
            {isDropdown ? (
              <NavigationMenuContent>{content}</NavigationMenuContent>
            ) : (
              content
            )}
          </NavigationMenuItem>
        )
      )}
    </React.Fragment>
  );
}
