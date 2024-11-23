import { LocaleList } from "@/components/locales";
import React from "react";

export default function LocaleListPage() {
  return (
    <React.Suspense>
      <LocaleList />
    </React.Suspense>
  );
}
