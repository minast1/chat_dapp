import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers/providers";
import { auth } from "../../../auth";
import { headers } from "next/headers";
import Header from "@/components/header";
import { Session } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//    title: "Create Next App",   description: "Generated by create next app", };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await auth()) as Session;
  const cookie = (await headers()).get("cookie") as string;
  return (
    <section
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-1 flex-col gap-4 p-4`}
    >
      <Providers session={session} cookie={cookie}>
        {/* <header className="flex h-20 shrink-0 items-center border-b px-4"> */}
        <Header />
        {children}
      </Providers>
    </section>
  );
}
