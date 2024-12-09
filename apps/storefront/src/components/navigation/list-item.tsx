"use client";

import React from "react";
import { NavigationMenuLink } from "./navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import isURL from "validator/lib/isURL";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { backgroundImage?: React.ReactNode }
>(({ href, className, title, children, backgroundImage, ...props }, ref) => {
  const isValidUrl = typeof href === "string" && isURL(href);
  const item = (
    <React.Fragment>
      {backgroundImage}
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </React.Fragment>
  );

  return (
    <li>
      <NavigationMenuLink asChild>
        {isValidUrl ? (
          <Link
            href={href}
            ref={ref}
            className={cn(
              "relative group overflow-clip block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {item}
          </Link>
        ) : (
          item
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { ListItem };
