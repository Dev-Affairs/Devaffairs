import Image from "next/image";
import HeroSection from "./Sections/HeroSection/HeroSection";
import DetailSection from "./Sections/DetailSection/DetailSection";
import ServicesSection from "./Sections/ServicesSection/ServicesSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import ArticleSection from "./Sections/ArticleSection/ArticleSection";
import ConsultationSection from "./Sections/ConsultationSection/ConsultationSection";
import FAQSection from "./Sections/FAQSection/FAQSection";
import ContactCardSection from "./Sections/ContactCardSection/ContactCardSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailSection />
      <ServicesSection />
      <StepsSection />
      <ArticleSection />
      <ConsultationSection />
      <FAQSection />
      <ContactCardSection />
    </>
  );
}
