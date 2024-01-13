"use client";
import { Providers } from "./providers";
import React from "react";
import "app/globals.css";
import "regenerator-runtime/runtime";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
