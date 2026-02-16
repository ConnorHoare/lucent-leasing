import { ServicePage } from "@/components/Service/ServicePage"
import type { ServiceConfig } from "@/components/Service/types"

export const CONFIG: ServiceConfig = {
  slug: "supported-shared-accommodation",
  eyebrow: "Service",
  title: "Supported shared accommodation",
  intro:
    "Supported shared accommodation in well-managed HMOs—providing a safe, structured environment with practical, welfare-focused support to help residents live independently and build confidence.",
  heroImage: {
    src: "/images/services/supported-shared-accommodation.jpg",
    alt: "Supported shared accommodation in a managed shared home",
  },

  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: {
    label: "Email hello@lucentleases.co.uk",
    href: "mailto:hello@lucentleases.co.uk",
  },

  chips: ["HMO placements", "Regular support visits", "Safe & structured homes"],

  highlights: [
    {
      title: "Safe, structured shared living",
      description:
        "A supportive HMO environment for residents who need additional help while living independently.",
    },
    {
      title: "High standards and careful management",
      description:
        "Homes are managed to strong safety and quality standards, with communal areas maintained and clear household expectations.",
    },
    {
      title: "Regular visits and responsive support",
      description:
        "Our team visits routinely to help residents settle, offer practical guidance, and resolve issues quickly—supporting a harmonious household.",
    },
    {
      title: "Welfare-focused, independence-building",
      description:
        "Guidance on everyday living, access to local services, and skills development—helping residents build confidence and self-sufficiency.",
    },
  ],

  sections: [
    {
      title: "Overview",
      body:
        "Our Supported Shared Accommodation service provides placements in carefully managed houses in multiple occupation (HMOs). Residents have private space while benefiting from a structured shared environment designed to support stability, wellbeing, and progress toward greater independence.",
    },
    {
      title: "What’s included",
      body:
        "• Private room for each resident\n" +
        "• Maintained communal areas and shared facilities\n" +
        "• Regular support visits to help residents settle and sustain the placement\n" +
        "• Practical guidance on everyday living\n" +
        "• Signposting and access to local support services\n" +
        "• Responsive issue resolution to support household harmony",
    },
    {
      title: "Standards, safety, and council confidence",
      body:
        "We combine professional property management with welfare-focused care. Our team monitors household wellbeing, addresses concerns early, and maintains clear communication—helping councils place residents with confidence in the safety, quality, and ongoing oversight of each home.",
    },
  ],

  steps: [
    {
      title: "Enquire / refer",
      description:
        "Share resident needs, risks, and key considerations so we can assess suitability and the right household environment.",
    },
    {
      title: "Match",
      description:
        "We identify an appropriate HMO placement and set expectations to support a stable, respectful household.",
    },
    {
      title: "Settle",
      description:
        "Residents are supported to move in smoothly, understand the home, and establish routines for shared living.",
    },
    {
      title: "Support & manage",
      description:
        "Regular visits, practical guidance, and fast issue resolution—supporting independence while maintaining safety and harmony.",
    },
  ],

  faqs: [
    {
      q: "What level of support do residents receive?",
      a: "Residents receive regular visits and practical support to help them settle, manage everyday living, and access local services. Support is delivered alongside strong property management and clear household expectations.",
    },
    {
      q: "How do you maintain harmony within shared households?",
      a: "We set clear expectations, respond quickly to issues, and check in regularly. Early intervention and consistent management help keep shared living stable and respectful.",
    },
    {
      q: "Are the properties managed to high safety standards?",
      a: "Yes. Homes are carefully managed with a focus on safety and quality, including maintained communal areas and appropriate oversight to support resident wellbeing.",
    },
  ],

  finalCta: {
    eyebrow: "Next steps",
    title: "Place residents in a safe, supported shared home",
    body:
      "Send us your requirements and any key considerations. We’ll assess suitability, confirm options, and coordinate a stable HMO placement with clear communication and ongoing support.",
  },
}



export default function Page() {
  return <ServicePage config={CONFIG} textVariant="light" />
}
