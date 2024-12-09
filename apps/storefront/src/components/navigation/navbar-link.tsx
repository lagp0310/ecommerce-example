import Link, { type LinkProps } from "next/link";
import React from "react";

type Props = React.PropsWithChildren<
  LinkProps & React.HTMLProps<HTMLAnchorElement>
>;

export function NavbarLink({ ...props }: Props) {
  return <Link {...props}></Link>;
}
