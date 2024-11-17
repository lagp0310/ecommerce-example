import React, { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { dataProviderClient } from "@/app/providers/data/dataProvider.client";
import { authProviderClient } from "@/app/providers/auth/authProvider.client";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Ecommerce Admin",
  description: "Ecommerce Admin generated using Refine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Suspense>
          <Refine
            routerProvider={routerProvider}
            options={{
              disableTelemetry: true,
              title: { icon: null, text: "Ecommerce Admin" },
            }}
            dataProvider={dataProviderClient}
            authProvider={authProviderClient}
            resources={[
              {
                name: "customers",
                list: "/customers",
                create: "/customers/create",
                edit: "/customers/edit/:id",
                meta: { canDelete: true },
              },
            ]}
          >
            {children}
          </Refine>
        </Suspense>
      </body>
    </html>
  );
}
