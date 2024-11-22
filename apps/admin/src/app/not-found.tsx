import { PageNotFound } from "@/components/ui/illustrations/page-not-found";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-[99%]">
      <PageNotFound className="h-64 w-64" />
      <h2 className="text-2xl">Page Not Found</h2>
      <p>{`We couldn't find the page you're looking for.`}</p>
      <Link href="admin/dashboard" className="underline text-blue-400">
        Return to the Dashboard
      </Link>
    </div>
  );
}
