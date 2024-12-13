"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 py-20">
      <h2 className="text-center text-heading-5 font-semibold text-gray-900 md:text-heading-3">
        Oops! An error has ocurred
      </h2>
      <p className="text-center text-body-small font-normal text-gray-500 md:text-body-medium">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <button
        className="max-w-fit rounded-full bg-primary px-5 py-3 text-body-small font-semibold text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
