import React from "react";
import { parseRemainingTime } from "@/lib/utils";

export function useCountdown(targetDate: string | Date) {
  const countDownDate = React.useMemo(
    () => new Date(targetDate).getTime(),
    [targetDate]
  );

  const [countDown, setCountDown] = React.useState(
    countDownDate - new Date().getTime()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return parseRemainingTime(countDown);
}
