import { ServicePage } from "@/components/Service/ServicePage"
import type { ServiceConfig } from "@/components/Service/types"

export const CONFIG: ServiceConfig = {
  slug: "active-opportunities-pathway",
  eyebrow: "Service",
  title: "Active opportunities pathway",
  intro:
    "A stable, temporary home with tailored, practical support—helping residents build skills, regain confidence, and take clear steps toward independence and permanent accommodation.",
  heroImage: {
    src: "/images/services/active-opportunities-pathway.jpg",
    alt: "Active opportunities pathway accommodation and support",
  },

  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: {
    label: "Email hello@lucentleases.co.uk",
    href: "mailto:hello@lucentleases.co.uk",
  },

  chips: ["Pathway to independence", "Partner-led support", "Stable & well-managed homes"],

  highlights: [
    {
      title: "Stability to move forward",
      description:
        "A reliable, temporary place to live so residents can focus on improving their circumstances and planning next steps.",
    },
    {
      title: "Tailored guidance and resources",
      description:
        "We work closely with councils and partner organisations to shape support around each individual’s needs and goals.",
    },
    {
      title: "Practical progress, not just housing",
      description:
        "Support to access training, employment opportunities, welfare guidance, and local services—helping residents build life skills and momentum.",
    },
    {
      title: "Safe, well-managed accommodation",
      description:
        "Clear communication, consistent standards, and responsive management—so residents feel secure while they rebuild.",
    },
  ],

  sections: [
    {
      title: "Overview",
      body:
        "The Active Opportunities Pathway provides residents with a stable temporary home, creating the foundations needed to take meaningful steps toward independence. With housing secured, residents can focus on developing life skills, improving wellbeing, and preparing for a move into permanent accommodation.",
    },
    {
      title: "How support works",
      body:
        "We collaborate with councils and partner organisations to tailor the pathway to each resident. Support is practical and outcomes-focused—helping residents access the guidance and resources that make progress possible, while maintaining a safe and well-managed home environment.",
    },
    {
      title: "What residents can be supported with",
      body:
        "• Accessing training and skills development\n" +
        "• Exploring employment and volunteering opportunities\n" +
        "• Welfare support guidance and signposting\n" +
        "• Connecting with local services and partner organisations\n" +
        "• Building everyday life skills and routines",
    },
  ],

  steps: [
    {
      title: "Enquire / refer",
      description:
        "Share the resident’s circumstances, goals, and any key considerations so we can assess suitability.",
    },
    {
      title: "Stabilise",
      description:
        "Secure a safe, reliable home and establish clear expectations—creating a settled base for progress.",
    },
    {
      title: "Support plan",
      description:
        "Work with councils and partners to align practical support (skills, welfare, training, employment pathways).",
    },
    {
      title: "Move on",
      description:
        "Help residents prepare for permanent accommodation with confidence, skills, and a clearer direction.",
    },
  ],

  faqs: [
    {
      q: "Who is the Active Opportunities Pathway suitable for?",
      a: "It’s ideal for residents who need temporary accommodation and would benefit from stability plus practical, tailored support to move toward independence and longer-term housing.",
    },
    {
      q: "How is support tailored to each resident?",
      a: "We work closely with councils and partner organisations to align guidance and resources to the resident’s needs—such as training, employment pathways, welfare guidance, and local services.",
    },
    {
      q: "Is this a supported accommodation service?",
      a: "The pathway combines stable temporary housing with practical assistance and coordinated signposting through councils and partners, so residents can access the right help while living in a safe, well-managed home.",
    },
  ],

  finalCta: {
    eyebrow: "Next steps",
    title: "Help residents move forward with stability and support",
    body:
      "Tell us what you need and the outcomes you’re working toward. We’ll explore suitability, confirm options, and coordinate a pathway that supports real progress toward independence.",
  },
}



export default function Page() {
  return <ServicePage config={CONFIG} textVariant="light" />
}
