import { ServicePage } from "@/components/Service/ServicePage"
import type { ServiceConfig } from "@/components/Service/types"

export const CONFIG: ServiceConfig = {
  slug: "nightly-self-contained",
  eyebrow: "Service",
  title: "Nightly self-contained",
  intro:
    "High-quality, fully self-contained homes for residents who need immediate accommodation—providing privacy, security, and a safe place to reset during a period of uncertainty.",
  heroImage: {
    src: "/images/services/nightly-self-contained.jpg",
    alt: "Nightly self-contained accommodation",
  },

  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: {
    label: "Email hello@lucentleases.co.uk",
    href: "mailto:hello@lucentleases.co.uk",
  },

  chips: ["Immediate placements", "Fully self-contained", "Safe & well-equipped"],

  highlights: [
    {
      title: "Private, self-contained homes",
      description:
        "Residents have their own front door, kitchen and bathroom—supporting dignity, privacy, and day-to-day stability.",
    },
    {
      title: "Ready for urgent demand",
      description:
        "Swift, efficient placement handling so councils can respond to immediate housing needs without delay.",
    },
    {
      title: "Comfort and safety as standard",
      description:
        "Properties are carefully maintained and equipped with the essentials required for a safe, comfortable stay.",
    },
    {
      title: "Practical help and signposting",
      description:
        "Residents receive support with everyday essentials and guidance on accessing local services where needed.",
    },
  ],

  sections: [
    {
      title: "Overview",
      body:
        "Our Nightly Self-Contained service offers fully self-contained accommodation for residents who require immediate housing. Each home is managed with a focus on safety, quality, and resident wellbeing—providing a secure base while longer-term options are explored.",
    },
    {
      title: "What’s included",
      body:
        "• Fully self-contained property (private kitchen and bathroom)\n" +
        "• Clean, well-maintained, and furnished/ready-to-live-in\n" +
        "• Essential equipment for comfort and day-to-day living\n" +
        "• Practical support with everyday essentials (where required)\n" +
        "• Guidance on how to access local support services",
    },
    {
      title: "Standards and suitability",
      body:
        "Homes are selected and maintained to support safe placements and positive short-term outcomes. We prioritise privacy, security, and clear expectations, helping residents feel settled quickly while councils retain confidence in quality and responsiveness.",
    },
  ],

  steps: [
    {
      title: "Enquire / refer",
      description:
        "Share your requirements and urgency (household type, area, any key considerations).",
    },
    {
      title: "Match",
      description:
        "We confirm availability and align the most suitable self-contained option for the placement.",
    },
    {
      title: "Place",
      description:
        "Fast move-in coordination with clear instructions and check-in to ensure residents are settled safely.",
    },
    {
      title: "Manage",
      description:
        "Ongoing property oversight and responsive communication, plus signposting support where appropriate.",
    },
  ],

  faqs: [
    {
      q: "How quickly can you support an urgent placement?",
      a: "We prioritise urgent demand and aim to coordinate placements as quickly as possible, subject to availability and the information provided with the referral.",
    },
    {
      q: "What information do you need to assess availability?",
      a: "Household size, preferred area, urgency, any mobility/access needs, safeguarding considerations, and any risks or support needs that may affect suitability.",
    },
    {
      q: "Do residents receive any support during short stays?",
      a: "Yes—alongside a safe, self-contained home, residents can receive practical assistance with everyday essentials and guidance on accessing local support services.",
    },
  ],

  finalCta: {
    eyebrow: "Next steps",
    title: "Need immediate self-contained accommodation?",
    body:
      "Send us your requirements and urgency. We’ll confirm availability quickly and coordinate a safe, comfortable placement with clear communication throughout.",
  },
}


export default function Page() {
  return <ServicePage config={CONFIG} textVariant="light" />
}
