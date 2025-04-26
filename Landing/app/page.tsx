import { Metadata } from "next";
import LandingPageWrapper from "@/app/Wrappers/LandingPageWrapper";

export const metadata: Metadata = {
  title: "Dev Affairs",
  description: "Build Your Digital Solution",
  keywords: ["Web Development", "IT Services", "App Development", "SEO", "Digital Marketing", "Dev Affairs"],
  alternates: {
    canonical: `https://www.devaffairs.dev`,
  },
  openGraph: {
    title: "Dev Affairs: Build Your Digital Solution",
    description: "We focus on building High Performance, secure, and scalable solutions that align with your goals and drive success.",
    url: `https://www.devaffairs.dev/`,
    type: 'website',
    siteName: 'Dev Affairs',
    images: [
      {
        url: `https://www.devaffairs.dev/logo/og.svg`,
        width: 1200,
        height: 630
      }
    ],
  }
};

export default function Home() {

  return (
    <>
      <LandingPageWrapper />
    </>
  );
}
