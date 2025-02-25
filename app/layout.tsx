import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khan Academy",
  description: "Admin dashboard for Khan Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />

        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[350px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">
            {children}
          </div>
          {/* toaster for show message  */}
          <Toaster />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
