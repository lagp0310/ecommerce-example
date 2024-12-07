import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Poppins } from "next/font/google";
import { validateEnvs } from "@/lib/env";
import { DefaultLayout } from "@/components/ui/default-layout";
import NextTopLoader from "nextjs-toploader";

validateEnvs();

// TODO: Code refactor. Check all components and pages to see how to
// improve the code.

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Example Ecommerce Storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NextTopLoader />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
