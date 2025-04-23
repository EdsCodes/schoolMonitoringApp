import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "School Monitoring App",
  description: "A web application for CRUD of students, teachers, courses and inscriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <div className="grid grid-cols-[auto_1fr] min-h-screen font-inter">
          <aside className="col-start-1 row-span-full p-8 sm:p-20 bg-blue-300 shadow-md border-r border-gray-200 sticky top-0 h-screen">
            <SideBar />
          </aside>
          <main className="col-start-2 p-8 pb-20 sm:p-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
