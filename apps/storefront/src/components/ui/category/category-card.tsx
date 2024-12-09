import React from "react";
import isURL from "validator/es/lib/isURL";
import { ClientLink } from "@/components/navigation/client-link";

type Props = React.HTMLProps<HTMLDivElement> & {
  url?: string;
  shouldUseNextLink?: boolean;
};

export function CategoryCard({
  children,
  url,
  shouldUseNextLink = true,
  ...props
}: Props) {
  const isValidUrl =
    typeof url === "string" && isURL(url, { require_host: false });

  return (
    <React.Fragment>
      {isValidUrl && shouldUseNextLink ? (
        <ClientLink href={url} className={props.className}>
          {children}
        </ClientLink>
      ) : (
        <div {...props}>{children}</div>
      )}
    </React.Fragment>
  );
}
