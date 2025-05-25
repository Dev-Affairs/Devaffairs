import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Elements/NavBar/NavBar";
import Footer from "./Elements/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevAffairs",
  description: "Design Your Space On The Internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={inter.className + " antialiased select-none bg-[#f5f5f7] text-black dark:bg-black dark:text-white transition duration-300"}>
        <ThemeProvider>
          <NavBar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
