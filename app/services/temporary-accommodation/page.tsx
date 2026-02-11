import { ServicePage } from "@/components/Service/ServicePage"
import type { ServiceConfig } from "@/components/Service/types"

const CONFIG: ServiceConfig = {
  slug: "temporary-accommodation",
  eyebrow: "Service",
  title: "Temporary accommodation",
  intro: "Lorem ipsum dolor sit amet...",
  heroImage: { src: "/images/services/temporary.jpg", alt: "Temporary accommodation" },

  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: { label: "Email hello@lucentleases.co.uk", href: "mailto:hello@lucentleases.co.uk" },

  chips: ["Placement-ready", "Public-sector friendly", "Property-first standards"],

  highlights: [
    { title: "Placement-ready options", description: "Lorem ipsum..." },
    { title: "Clear coordination", description: "Lorem ipsum..." },
    { title: "Consistent standards", description: "Lorem ipsum..." },
    { title: "Responsive communication", description: "Lorem ipsum..." },
  ],

  sections: [
    { title: "Overview", body: "Lorem ipsum..." },
    { title: "What’s included", body: "Lorem ipsum..." },
    { title: "Standards and suitability", body: "Lorem ipsum..." },
  ],

  steps: [
    { title: "Enquire / refer", description: "Lorem ipsum..." },
    { title: "Match", description: "Lorem ipsum..." },
    { title: "Place", description: "Lorem ipsum..." },
    { title: "Manage", description: "Lorem ipsum..." },
  ],

  faqs: [
    { q: "Do you support urgent placements?", a: "Lorem ipsum..." },
    { q: "What information do you need to assess availability?", a: "Lorem ipsum..." },
    { q: "Can you support individuals and families?", a: "Lorem ipsum..." },
  ],

  finalCta: {
    eyebrow: "Next steps",
    title: "Let’s discuss your requirements",
    body: "Lorem ipsum...",
  },
}

export default function Page() {
  return <ServicePage config={CONFIG} textVariant="light" />
}
