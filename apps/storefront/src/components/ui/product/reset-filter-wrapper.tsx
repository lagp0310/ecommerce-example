"use client";

import React from "react";
import { removeParamFromURL } from "@/lib/utils";
import { Button } from "@/components/ui/common/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type Props = React.PropsWithChildren<
  Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
    type?: "button" | "reset" | "submit";
  }
> & {
  paramNameToRemove: string;
  paramsToSet?: { name: string; value: string }[];
  redirectCallback?: CallableFunction;
};

export function ResetFilterWrapper({
  paramNameToRemove,
  paramsToSet,
  redirectCallback,
  ...props
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleRedirect = React.useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (Array.isArray(paramsToSet) && paramsToSet.length > 0) {
      paramsToSet.forEach(({ name, value }) =>
        newSearchParams.set(name, value)
      );
    }

    const finalSearchParams = removeParamFromURL(
      newSearchParams,
      paramNameToRemove
    );

    if (redirectCallback) {
      redirectCallback();
    }

    router.push(`${pathname}?${finalSearchParams.toString()}`);
  }, [
    paramNameToRemove,
    paramsToSet,
    pathname,
    redirectCallback,
    router,
    searchParams,
  ]);

  return <Button {...props} onClick={handleRedirect} />;
}
