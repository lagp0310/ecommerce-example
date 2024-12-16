import { maxProductRating } from "@/constants/constants";
import React from "react";

function createRatingIcons(length: number, icon: React.ReactNode) {
  return Array.from({
    length,
  }).map((_value, index) => (
    <React.Fragment key={index}>{icon}</React.Fragment>
  ));
}

type Props = React.HTMLProps<HTMLDivElement> & {
  rating: number;
  maxRating?: number;
  filledIcon: React.ReactNode;
  emptyIcon: React.ReactNode;
};

export function Rating({
  rating,
  maxRating = maxProductRating,
  filledIcon,
  emptyIcon,
  ...props
}: Props) {
  return (
    <div {...props}>
      {createRatingIcons(rating, filledIcon)}
      {createRatingIcons(
        rating > 0 ? maxRating - rating : maxRating,
        emptyIcon
      )}
    </div>
  );
}
