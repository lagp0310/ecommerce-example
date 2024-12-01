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
  const isValidUrl = typeof url === "string" && isURL(url);

  return (
    <React.Fragment>
      {isValidUrl && shouldUseNextLink ? (
        <Link href={url}>{children}</Link>
      ) : (
        <div {...props}>{children}</div>
      )}
    </React.Fragment>
  );
}
