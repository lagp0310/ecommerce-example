import { NotFoundIllustration } from "@/components/ui/illustrations/not-found";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 pb-20">
      <NotFoundIllustration className="size-64 md:size-96" />
      <h2 className="text-center text-heading-5 font-semibold text-gray-900 md:text-heading-3">
        Oops! Page not found
      </h2>
      <p className="text-center text-body-small font-normal text-gray-500 md:text-body-medium">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <Link
        href="/"
        className="max-w-fit rounded-full bg-primary px-5 py-3 text-body-small font-semibold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
