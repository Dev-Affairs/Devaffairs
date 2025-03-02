'use client';

import React from 'react'
import Hero from "@/app/Elements/Hero/Hero";
import ContactRefSection from "@/app/Sections/ContactRefSection/ContactRefSection";
import FeatureSection from "@/app/Sections/FeatureSection/FeatureSection";
import StepsSection from "@/app/Sections/StepsSection/StepsSection";
import TechSection from "@/app/Sections/TechSection/TechSection";

function LandingPageWrapper() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <StepsSection />
            <TechSection />
            <ContactRefSection />
        </>
    )
}

export default LandingPageWrapper