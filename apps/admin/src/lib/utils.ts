import { refineResources } from "@/constants/constants";
import { Month } from "@/types/types";
import type { HttpError, OpenNotificationParams } from "@refinedev/core";
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

export function successNotification<TData = unknown, TVariables = unknown>(
  _data?: TData,
  _values?: TVariables,
  resource?: string
): OpenNotificationParams | false | undefined {
  const label = refineResources.find(({ name }) => name === resource)?.meta
    ?.singularLabel;

  return {
    message: `Successfully created ${label}`,
    description: "Success",
    type: "success",
  };
}

export function errorNotification<
  TError extends HttpError,
  TVariables = unknown,
>(
  error?: TError,
  _values?: TVariables,
  resource?: string
): OpenNotificationParams | false | undefined {
  const label = refineResources.find(({ name }) => name === resource)?.meta
    ?.singularLabel;

  return {
    message: error?.message ?? "An error has occurred",
    description: `Failed to create ${label}`,
    type: "error",
  };
}
