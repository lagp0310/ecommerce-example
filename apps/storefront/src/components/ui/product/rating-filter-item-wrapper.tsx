"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Rating } from "@/components/ui/product/rating";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/common/radio-group";

type Props = {
  wrapperClassName?: string;
  checked?: boolean;
  index: number;
};

export function RatingFilterItemWrapper({
  wrapperClassName,
  checked = false,
  index,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleRatingItemClick = React.useCallback(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    if (checked) {
      updatedSearchParams.delete("minRating");
    } else {
      updatedSearchParams.set("minRating", (index + 1).toString());
    }

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, [checked, index, pathname, router, searchParams]);

  return (
    <RadioGroup
      className={cn(
        "group/rating flex flex-1 flex-row items-center gap-x-2",
        wrapperClassName
      )}
      onClick={handleRatingItemClick}
    >
      <RadioGroupItem
        checked={checked}
        value={(index + 1).toString()}
        className="h-5 w-5 ring-primary outline-none focus-visible:ring-8 focus-visible:ring-offset-0 border border-gray-200 aria-checked:border-primary text-primary"
      />
      <Rating
        className="flex flex-row justify-end gap-x-0.5"
        rating={index + 1}
        emptyIcon={<StarIcon className="size-3 text-warning" />}
        filledIcon={<FilledStarIcon className="size-3 text-warning" />}
      />
      <span className="text-body-small font-normal text-gray-900">
        {(index + 1).toFixed(1)}
        <span className="group-first/rating:hidden"> and up</span>
      </span>
    </RadioGroup>
  );
}
