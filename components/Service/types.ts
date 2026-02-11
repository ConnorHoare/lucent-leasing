export type Cta = { label: string; href: string }
export type FAQ = { q: string; a: string }

export type ServiceConfig = {
  slug: string
  eyebrow: string
  title: string
  intro: string
  heroImage?: { src: string; alt: string }

  primaryCta: Cta
  secondaryCta: Cta

  chips?: string[]
  highlights: { title: string; description: string }[]
  sections: { title: string; body: string }[]
  steps: { title: string; description: string }[]
  faqs: FAQ[]

  finalCta?: {
    eyebrow?: string
    title: string
    body: string
  }
}

export type TextVariant = "dark" | "light"

export type SectionBackground = {
  src?: string
  alt?: string
  overlayStrength?: number // 0–100
  objectClassName?: string
  colorClassName?: string
  colorValue?: string
}
