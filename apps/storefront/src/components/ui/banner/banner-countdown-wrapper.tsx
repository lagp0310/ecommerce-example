"use client";

import React from "react";
import { useCountdown } from "@/hooks/use-countdown";
import { BannerCountdown } from "@/components/ui/banner/banner-countdown";
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import { cn } from "@/lib/utils";
import { offerEndDate } from "@/constants/constants";

dayjs.extend(utcPlugin);

type Props = React.HTMLProps<HTMLDivElement> & {
  endDate?: Date;
  semicolonClasses?: Pick<
    React.HTMLProps<HTMLDivElement>,
    "className"
  >["className"];
  timeClasses?: Pick<
    React.HTMLProps<HTMLSpanElement>,
    "className"
  >["className"];
  timeUnitClasses?: Pick<
    React.HTMLProps<HTMLSpanElement>,
    "className"
  >["className"];
};

export function BannerCountdownWrapper({
  endDate = offerEndDate,
  semicolonClasses,
  timeClasses,
  timeUnitClasses,
  ...props
}: Props) {
  const countdownObject = useCountdown(endDate);
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
            <div className="flex flex-1 flex-col gap-y-4 items-center">
              <span className={cn(timeClasses)}>{time}</span>
              <span className={cn(timeUnitClasses)}>{unit}</span>
            </div>
          </React.Fragment>
        );
      })}
    </BannerCountdown>
  );
}
