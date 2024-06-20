/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { ThemeProvider } from "@/components/material";
import { googleSans } from "@/constants/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plumbit",
  description: "Best Plumbing Services as affordable pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={googleSans.className}>
        <ThemeProvider>
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
