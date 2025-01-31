"use client";

import React from "react";
import { cn, updateSearchParam } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ToggleGroupItem } from "@/components/ui/common/toggle-group";
import type { Product_Tags as ProductTag } from "@/gql/graphql";

type Props = {
  tagItem: ProductTag;
  selected?: boolean;
  wrapperClassName?: string;
};

export function TagFilterItemWrapper({
  tagItem: { id, tag },
  selected = false,
  wrapperClassName,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleTagClick = React.useCallback(() => {
    const updatedSearchParams = updateSearchParam("tags", searchParams, id);
    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, [id, pathname, router, searchParams]);
  const groupItemProps = React.useMemo(
    () => ({
      value: tag,
      id,
      className:
        "rounded-full text-body-small font-normal text-gray-900 hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none",
      onClick: handleTagClick,
      "data-state": selected ? "on" : "off",
    }),
    [handleTagClick, id, selected, tag]
  );

  return (
    <div
      key={id}
      className={cn(
        "flex items-center space-x-2 rounded-full bg-gray-50",
        wrapperClassName
      )}
    >
      <ToggleGroupItem {...groupItemProps}>{tag}</ToggleGroupItem>
    </div>
  );
}
