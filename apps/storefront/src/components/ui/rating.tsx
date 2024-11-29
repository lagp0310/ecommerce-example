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
  maxRating = 5,
  filledIcon,
  emptyIcon,
  ...props
}: Props) {
  return (
    <div {...props}>
      {createRatingIcons(rating, filledIcon)}
      {createRatingIcons(maxRating - rating, emptyIcon)}
    </div>
  );
}
