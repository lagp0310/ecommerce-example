import { PageNotFound } from "@/components/ui/illustrations/page-not-found";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[99%] flex-1 flex-col items-center justify-center">
      <PageNotFound className="size-64" />
      <h2 className="text-2xl">Page Not Found</h2>
      <p>{`We couldn't find the page you're looking for.`}</p>
      <Link href="admin/dashboard" className="text-blue-400 underline">
        Return to the Dashboard
      </Link>
    </div>
  );
}
