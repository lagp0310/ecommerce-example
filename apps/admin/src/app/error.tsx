"use client"; // Error boundaries must be Client Components

import React from "react";
import { PageError } from "@/components/ui/illustrations/PageError";
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
    <div className="flex flex-1 flex-col justify-center items-center">
      <PageError className="h-64 w-64" />
      <h2 className="mt-8 text-2xl">Oops! Something went wrong</h2>
      <p>{`We're sorry. We've had a problem processing your request.`}</p>
      <Link href="admin/dashboard" className="underline text-blue-400">
        Return to the Dashboard
      </Link>
    </div>
  );
}
