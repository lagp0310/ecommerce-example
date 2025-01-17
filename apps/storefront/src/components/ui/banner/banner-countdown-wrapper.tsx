"use client";

import React from "react";
import { useCountdown } from "@/hooks/use-countdown";
import { BannerCountdown } from "@/components/ui/banner/banner-countdown";
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import { cn } from "@/lib/utils";

dayjs.extend(utcPlugin);

type Props = React.HTMLProps<HTMLDivElement> & {
  validUntil?: string;
  semicolonClasses?: React.HTMLProps<HTMLDivElement>["className"];
  timeClasses?: React.HTMLProps<HTMLSpanElement>["className"];
  timeUnitClasses?: React.HTMLProps<HTMLSpanElement>["className"];
};

export function BannerCountdownWrapper({
  validUntil,
  semicolonClasses,
  timeClasses,
  timeUnitClasses,
  ...props
}: Props) {
  const countdownObject = useCountdown(dayjs(validUntil).toDate());
  const countdownEntries = Object.entries(countdownObject);
  const countdownTimers = Object.keys(countdownObject).length;

  return (
    <BannerCountdown {...props}>
      {Array.from({ length: countdownTimers }).map((_value, index) => {
        const time = countdownEntries.at(index)?.at(1);
        const unit = countdownEntries.at(index)?.at(0);

        return (
          <React.Fragment key={index}>
            <div className={cn("first:hidden last:hidden", semicolonClasses)}>
              :
            </div>
            <div className="flex flex-1 flex-col items-center gap-y-4">
              <span className={cn(timeClasses)}>{time}</span>
              <span className={cn(timeUnitClasses)}>{unit}</span>
            </div>
          </React.Fragment>
        );
      })}
    </BannerCountdown>
  );
}
