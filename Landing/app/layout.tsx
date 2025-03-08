import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Elements/NavBar/NavBar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Footer from "@/app/Elements/Footer/Footer";
import BackgroundBlur from "./Elements/Backgrounds/BackgroundBlur/BackgroundBlur";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Affairs",
  description: "Design Your Space On The Internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-732WE3MHNM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-732WE3MHNM');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white select-none`}
      >
        <BackgroundBlur />
        <NavBar />
        <main className="relative z-10">{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
