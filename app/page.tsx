import HomeHero from "@/components/Hero/HomeHero";
import HomeAreasWeCover from "@/components/Home/AreasCovered";
import FinalCtaBand from "@/components/Home/CTAband";
import HomeFaqs from "@/components/Home/HomeFAQ";
import HomeTrust from "@/components/Home/HomeTrust";
import HomeHowItWorks from "@/components/Home/HowItWorks";
import HomeKeyBenefits from "@/components/Home/KeyBenefits";
import HomeServicesPreview from "@/components/Home/ServicesPreview";
import HomeWhatWeDo from "@/components/Home/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HomeHero media={{ imageSrc: '/images/hero2.jpg', imageAlt: 'Lucent Leasing home hero' }} eyebrow="LUCENT LEASING" background={{ overlayStrength: 35, src: '/images/hero.jpg' }} />
      <HomeWhatWeDo />
      <HomeKeyBenefits background={{ colorClassName: "bg-zinc-50" }} />
      <HomeServicesPreview
        background={{ colorClassName: "bg-zinc-50" }}
        textVariant="dark"
        variant="cards"
      />
      <HomeHowItWorks />
      <HomeAreasWeCover />
      <HomeTrust />
      <HomeFaqs />
      <FinalCtaBand />
    </div>
  );
}
