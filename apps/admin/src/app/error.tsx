"use client"; // Error boundaries must be Client Components

import React from "react";
import { ErrorPage } from "@/components/ui/illustrations/error-page";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[99%] flex-1 flex-col items-center justify-center">
      <ErrorPage className="size-64" />
      <h2 className="mt-8 text-2xl">Oops! Something went wrong</h2>
      <p>{`We're sorry. We've had a problem processing your request.`}</p>
      <Link href="admin/dashboard" className="text-blue-400 underline">
        Return to the Dashboard
      </Link>
    </div>
  );
}
