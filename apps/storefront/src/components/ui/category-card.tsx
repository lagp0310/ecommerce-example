import Link from "next/link";
import React from "react";
import isURL from "validator/es/lib/isURL";

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
        // FIXME: This should be a next link but it's throwing errors.
        <a href={url} className={props.className}>
          {children}
        </a>
      ) : (
        <div {...props}>{children}</div>
      )}
    </React.Fragment>
  );
}
