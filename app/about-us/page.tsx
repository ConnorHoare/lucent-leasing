import PageHeader from "@/components/About/PageHeader"
import AboutMediaStrip from "@/components/About/MediaStrip"
import AboutProofRail from "@/components/About/ProofRail"
import AboutWhoWeWorkWith from "@/components/About/WhoWeWorkWith"
import HomeAreasWeCover from "@/components/About/AreasWeCover"
import FinalCtaBand from "@/components/Home/CTAband"
import { AboutOurStrategy, AboutOurTeam, AboutPurposeValues, AboutWhoWeAre } from "@/components/About/AboutBriefSections"



const page = () => {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="About Lucent Leasing"
        intro="Lucent Leases Ltd (Lucent Leasing) is a UK-based leasing and accommodation provider working in partnership with local authorities and housing partners. We deliver safe, high-quality temporary, supported, and self-contained accommodation for individuals and families who need housing—helping create stable outcomes while reducing pressure on public services."
        chips={["UK-based", "Local authorities", "Landlords", "Housing partners"]}
        background={{ colorValue: "#000000", overlayStrength: 0 }}
        textVariant="light"
      />

      <AboutMediaStrip background={{ colorValue: "#000000" }} textVariant="light" />

      {/* NEW BRIEF-CORRECT SECTIONS + CORRECT ANCHOR IDS */}
      <AboutWhoWeAre background={{ colorValue: "#000000" }} textVariant="light" />
      <AboutOurTeam background={{ colorValue: "#000000" }} textVariant="light" />
      <AboutPurposeValues background={{ colorValue: "#000000" }} textVariant="light" />
      <AboutOurStrategy background={{ colorValue: "#000000" }} textVariant="light" />

      <AboutProofRail background={{ colorValue: "#000000" }} textVariant="light" />

      <AboutWhoWeWorkWith background={{ colorValue: "#000000", overlayStrength: 0 }} textVariant="light" />

      <HomeAreasWeCover
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
        background={{ colorValue: "#000000", overlayStrength: 0 }}
        textVariant="light"
      />

      <FinalCtaBand background={{ colorValue: "#000000", overlayStrength: 0 }} textVariant="light" />
    </div>
  )
}

export default page
