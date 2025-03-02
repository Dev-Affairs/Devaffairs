"use client";
import Hero from "./Elements/Hero/Hero";
import BlogSection from "./Sections/BlogSection/BlogSection";
import ContactRefSection from "./Sections/ContactRefSection/ContactRefSection";
import FeatureSection from "./Sections/FeatureSection/FeatureSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import TechSection from "./Sections/TechSection/TechSection";

export default function Home() {

  return (
    <>
      <Hero />
      <FeatureSection />
      <StepsSection />
      <TechSection />
      <ContactRefSection />
    </>
  );
}
