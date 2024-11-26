import { Month } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMonthName(monthNumber: number, returnShortName = true) {
  const monthName = Object.entries(Month)
    .find(([monthNro]) => parseInt(monthNro) === monthNumber)
    ?.at(1)
    ?.toString();

  if (!monthName) {
    console.error("Could not find the month name");
    throw Error("Could not find the month name");
  }

  const finalName = returnShortName
    ? `${monthName.substring(0, 1)}${monthName.substring(1, 3).toLocaleLowerCase()}`
    : `${monthName.substring(0, 1)}${monthName.substring(1).toLocaleLowerCase()}`;

  return finalName;
}
