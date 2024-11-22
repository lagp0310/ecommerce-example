import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { DefaultLayout } from "@/components/utils/default-layout";
import NextTopLoader from "nextjs-toploader";
import { ThemeContextProvider } from "@/context/theme-context";
import { UserContextProvider } from "@/context/user-context";

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
        <ThemeContextProvider initialTheme="system">
          <UserContextProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </UserContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
