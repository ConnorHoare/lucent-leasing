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
      <HomeHero
        background={{ colorValue: "#000000" }}
        textVariant="light"
        media={{ imageSrc: "/images/hero2.jpg", imageAlt: "Lucent Leasing home hero" }}
        eyebrow="LUCENT LEASING"
      />

      <HomeWhatWeDo
        background={{ colorValue: "#000000", overlayStrength: 0 }}
        textVariant="light"
      />

      <HomeKeyBenefits
        background={{ colorValue: "#000000", overlayStrength: 0 }}
        textVariant="light"
      />

      <HomeServicesPreview
        background={{ colorValue: "#000000" }}
        textVariant="light"
        variant="cards"
      />

      <HomeHowItWorks
        background={{ colorValue: "#000000" }}
        textVariant="light"
      />

      <HomeAreasWeCover
        background={{ colorValue: "#000000" }}
        textVariant="light"
        logos={{
          items: [
            { src: "/images/arun-council.png", alt: "Arun Council logo" },
            { src: "/images/chichester-council.png", alt: "Chichester City Council logo" },
            { src: "/images/eastbourne-council.png", alt: "Eastbourne Council logo" },
            { src: "/images/eastleigh-council.png", alt: "Eastleigh Council logo" },
            { src: "/images/gosport-council.png", alt: "Gosport Council logo" },
            { src: "/images/rushmoor.jpeg", alt: "Rushmoor Borough Council logo" },
            { src: "/images/southampton-council.png", alt: "Southampton City Council logo" },
            { src: "/images/test-council.png", alt: "Test Council logo" },
            { src: "/images/worthing-council.png", alt: "Worthing Council logo" },
          ],
        }}
      />

      <HomeTrust
        background={{ colorValue: "#000000" }}
        textVariant="light"
      />

      <HomeFaqs
        background={{ colorValue: "#000000" }}
        textVariant="light"
      />

      <FinalCtaBand
        background={{ colorValue: "#000000" }}
        textVariant="light"
      />
    </div>
  );
}
