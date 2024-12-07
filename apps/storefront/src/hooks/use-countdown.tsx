import React from "react";

const intervalMs = 1000;
const secondsTransform = 60;
const minutesTransform = 60 * 60;
const daysTransform = minutesTransform * 24;

const padNumber = (value: number, maxLength = 2, fillString = "0") =>
  value.toString().padStart(maxLength, fillString);

const parseRemainingTime = (countDown: number) => {
  const days = Math.floor(countDown / (intervalMs * daysTransform));
  const hours = Math.floor(
    (countDown % (intervalMs * daysTransform)) / (intervalMs * minutesTransform)
  );
  const minutes = Math.floor(
    (countDown % (intervalMs * minutesTransform)) /
      (intervalMs * secondsTransform)
  );
  const seconds = Math.floor(
    (countDown % (intervalMs * secondsTransform)) / 1000
  );

  return {
    days: padNumber(days),
    hours: padNumber(hours),
    minutes: padNumber(minutes),
    seconds: padNumber(seconds),
  };
};

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
