import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { DefaultLayout } from "@/components/utils/defaultLayout";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ecommerce Admin",
  description: "Ecommerce Admin generated using Refine",
};

export default async function RootLayout({
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
