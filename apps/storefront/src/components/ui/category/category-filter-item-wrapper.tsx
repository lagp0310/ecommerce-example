"use client";

import React from "react";
import { Checkbox } from "@/components/ui/common/checkbox";
import { Label, LabelProps } from "@/components/ui/common/label";
import { cn, updateSearchParam } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = LabelProps & {
  wrapperClassName?: string;
  checked?: boolean;
  categoryId: string;
};

export function CategoryFilterItemWrapper({
  wrapperClassName,
  checked = false,
  categoryId,
  ...props
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleCategoryClick = React.useCallback(() => {
    const updatedSearchParams = updateSearchParam(
      "categories",
      searchParams,
      categoryId
    );
    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, [categoryId, pathname, router, searchParams]);

  return (
    <div
      className={cn(
        "flex gap-x-2 w-full flex-row focus-active:bg-black pl-0 text-body-small font-normal text-gray-900 hover:bg-transparent hover:text-gray-900 data-[state=on]:bg-transparent",
        wrapperClassName
      )}
      onClick={handleCategoryClick}
    >
      <Checkbox
        checked={checked}
        className="size-5 rounded-[3px] border border-gray-100 bg-white text-gray-900 outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none"
      />
      <Label {...props} />
    </div>
  );
}
