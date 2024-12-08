import { NotFoundIllustration } from "@/components/ui/illustrations/not-found";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-y-4 pb-20">
      <NotFoundIllustration className="h-64 w-64 md:h-96 md:w-96" />
      <h2 className="text-heading-5 text-center md:text-heading-3 font-semibold text-gray-900">
        Oops! Page not found
      </h2>
      <p className="text-center text-body-small md:text-body-medium font-normal text-gray-500">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <Link
        href="/"
        className="text-body-small font-semibold text-white max-w-fit px-5 py-3 bg-primary rounded-full"
      >
        Back to Home
      </Link>
    </div>
  );
}
