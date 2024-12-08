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
    <div className="flex flex-1 flex-col justify-center items-center gap-y-4 py-20">
      <h2 className="text-heading-5 text-center md:text-heading-3 font-semibold text-gray-900">
        Oops! An error has ocurred
      </h2>
      <p className="text-center text-body-small md:text-body-medium font-normal text-gray-500">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <button
        className="text-body-small font-semibold text-white max-w-fit px-5 py-3 bg-primary rounded-full"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
