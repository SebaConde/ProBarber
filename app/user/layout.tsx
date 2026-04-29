/* eslint-disable react/jsx-no-undef */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import UserNav from "./dashboard/user-nav";
import AdminSearch from "@/components/admin/admin-search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata ={
  title:{
    template: `%s | ProBarber`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html
    //   lang="en"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    // >
    //   <body className="min-h-full flex flex-col">{children}</body>
    // </html>
    <div className="flex flex-col">
        <div className="border-b container mx-auto">
          <div className="flex items-center h-16 px-4">
            <Link href="/" className="w-22">
              <Image src="/assets/barber.png" height={48} width={48} alt={APP_NAME}/>
            </Link> 
            {/* <MainNav className="mx-6" /> */}
            <UserNav />
            <div className="ml-auto items-center flex space-x-4">
            menu user para cerrar sesion
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 p-8 pt-6 container mx-auto">
            {children}
        </div>
      </div>
  );
}
