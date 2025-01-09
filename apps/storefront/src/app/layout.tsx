import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Poppins } from "next/font/google";
import { validateEnvs } from "@/lib/env";
import { DefaultLayout } from "@/components/ui/common/default-layout";
import NextTopLoader from "nextjs-toploader";
import { ApolloWrapper } from "@/context/apollo-context";
import { CartContextProvider } from "@/context/cart-context";
import { Toaster } from "@/components/ui/common/toaster";
import { CustomerContextProvider } from "@/context/customer-context";

validateEnvs();

// FIXME: Render carousel provider on desktop too so we avoid errors when changing
// resolutions from desktop to mobile.

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
        <ApolloWrapper>
          <CustomerContextProvider>
            <CartContextProvider>
              <DefaultLayout>{children}</DefaultLayout>
            </CartContextProvider>
          </CustomerContextProvider>
        </ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}
