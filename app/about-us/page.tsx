import PageHeader from "@/components/About/PageHeader"
import AboutMediaStrip from "@/components/About/MediaStrip"
import AboutProofRail from "@/components/About/ProofRail"
import AboutWhoWeWorkWith from "@/components/About/WhoWeWorkWith"
import FinalCtaBand from "@/components/About/FinalCtaBand"
import LogosCarousel from "@/components/About/LogosCarousel"
import {
  AboutWhoWeAre,
  AboutOurTeam,
  AboutPurposeValues,
  AboutOurStrategy
} from '@/components/About/AboutBriefSections'

export default function AboutPage() {
  return (
    <div>
      {/* 01 — Hero header */}
      <PageHeader
        eyebrow="About"
        title="About Lucent Leases"
        intro="Lucent Leases Ltd is a UK-based leasing and accommodation provider working in partnership with local authorities and housing partners. We deliver safe, high-quality temporary, supported, and self-contained accommodation for individuals and families who need housing — helping create stable outcomes while reducing pressure on public services."
        chips={["UK-based", "Local authorities", "Landlords", "Housing partners"]}
        textVariant="light"
      />

      {/* 02 — Property photography editorial grid */}
      <AboutMediaStrip textVariant="light" />

      {/* 03–06 — Numbered editorial text sections */}
      <AboutWhoWeAre />
      <AboutOurTeam />
      <AboutPurposeValues />
      <AboutOurStrategy />

      {/* 07 — Standards proof rail (horizontal scroll) */}
      <AboutProofRail textVariant="light" />

      {/* 08 — Interactive partner selector */}
      <AboutWhoWeWorkWith textVariant="light" />

      {/* 09 — Council logos marquee */}
      <LogosCarousel
        textVariant="light"
        logos={{
          title: "Working with local authorities across the South Coast",
          items: [
            { src: "/images/arun-council.png", alt: "Arun Council" },
            { src: "/images/chichester-council.png", alt: "Chichester City Council" },
            { src: "/images/eastbourne-council.png", alt: "Eastbourne Council" },
            { src: "/images/eastleigh-council.png", alt: "Eastleigh Council" },
            { src: "/images/gosport-council.png", alt: "Gosport Council" },
            { src: "/images/rushmoor.jpeg", alt: "Rushmoor Borough Council" },
            { src: "/images/southampton-council.png", alt: "Southampton City Council" },
            { src: "/images/test-council.png", alt: "Test Valley Borough Council" },
            { src: "/images/worthing-council.png", alt: "Worthing Council" },
          ],
        }}
      />

      {/* 10 — Full-bleed closing CTA */}
      <FinalCtaBand textVariant="light" />
    </div>
  )
}