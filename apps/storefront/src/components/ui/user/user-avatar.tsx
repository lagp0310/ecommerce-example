import React from "react";

type Props = React.PropsWithChildren<{
  firstName?: string;
  lastName?: string;
}>;

export function UserAvatar({ children, firstName, lastName }: Props) {
  const hasFullName =
    typeof firstName === "string" &&
    firstName.length > 0 &&
    typeof lastName === "string" &&
    lastName.length > 0;
  const initials = hasFullName
    ? `${firstName.substring(0, 1).toLocaleUpperCase()}${lastName.substring(0, 1).toLocaleUpperCase()}}`
    : null;
  const hasInitials = typeof initials === "string";

  return (
    <React.Fragment>
      {!!children ? (
        <React.Fragment>{children}</React.Fragment>
      ) : hasInitials ? (
        <div className="rounded-full h-[56px] w-[56px]">{initials}</div>
      ) : null}
    </React.Fragment>
  );
}
