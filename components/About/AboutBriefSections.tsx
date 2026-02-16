import React from "react"
import AboutEditorialSection from "./AboutEditorialSection"

type Props = {
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

export const AboutWhoWeAre = ({ textVariant = "light", background = { colorValue: "#000000" } }: Props) => (
  <AboutEditorialSection
    id="who-we-are"
    eyebrow="About Us"
    title="Who We Are"
    textVariant={textVariant}
    background={background}
    paragraphs={[
      "At Lucent Leases, our core beliefs guide everything we do. They shape how we work with councils, support our residents, and manage our team.",
      "We are committed to helping people in vulnerable situations regain stability and confidence, while providing solutions that reduce reliance on local authorities. We approach every placement with care and respect, ensuring that everyone has a safe and welcoming home.",
      "We listen carefully to the needs of councils and partners, creating tailored housing responses that work in practice. We take a proactive approach, managing properties professionally and always looking for ways to provide added value.",
      "Our focus is on the well-being of residents as well as the satisfaction of our partners — we aim to provide more than just accommodation, offering support, guidance, and reliability at every stage.",
    ]}
  />
)

export const AboutOurTeam = ({ textVariant = "light", background = { colorValue: "#000000" } }: Props) => (
  <AboutEditorialSection
    id="our-team"
    eyebrow="About Us"
    title="Our Team"
    textVariant={textVariant}
    background={background}
    paragraphs={[
      "Our team consists of experienced housing professionals who are dedicated to supporting both residents and partner councils. From property managers to support coordinators, each team member brings expertise in housing management, welfare, and compliance.",
      "We work closely with local authorities to ensure smooth placements and responsive communication, while maintaining a compassionate approach for residents. Our team regularly visits properties, helping to resolve issues early and ensuring that every home is safe, well-maintained, and supportive.",
    ]}
  />
)

export const AboutPurposeValues = ({ textVariant = "light", background = { colorValue: "#000000" } }: Props) => (
  <AboutEditorialSection
    id="our-purpose-and-values"
    eyebrow="About Us"
    title="Our Purpose & Values"
    textVariant={textVariant}
    background={background}
    paragraphs={[
      "At Lucent Leases, we believe that when vulnerable people have a safe, supportive home and the right guidance, they can become more independent and less reliant on local authorities. That belief shapes everything we do.",
      "We work in partnership with local councils and other organisations to provide high-quality, secure homes for those in need. Every situation is unique, so we focus on delivering the right property quickly, ensuring residents are well looked after. Whether it’s temporary accommodation or supported shared housing, every property is maintained to the same high standards and benefits from a 24/7 maintenance service to resolve any issues promptly.",
      "Equally important is the practical support we provide. Simple things that many of us take for granted—such as bedding, laundry, reminders for appointments, or connecting residents with the right support services—make a significant difference. Our experienced team visits residents regularly, helping to resolve minor issues early and maintaining a safe, harmonious environment.",
      "With years of specialist housing experience, Lucent Leases knows that being proactive, delivering high standards, and offering a little extra care works. By looking after our residents, we ensure our partners, councils, and communities are supported too.",
    ]}
  />
)

export const AboutOurStrategy = ({ textVariant = "light", background = { colorValue: "#000000" } }: Props) => (
  <AboutEditorialSection
    id="our-strategy"
    eyebrow="About Us"
    title="Our Strategy"
    textVariant={textVariant}
    background={background}
    paragraphs={[
      "Our strategy focuses on growing Lucent Leases’ services along the South Coast while maintaining exceptional standards of housing and support. We aim to build strong, lasting partnerships with councils and other organisations, ensuring our homes meet urgent housing needs without compromising quality or care.",
      "We prioritize compliance, safety, and welfare in every placement, while continuously improving our services to respond to the evolving needs of residents and local authorities. Our growth is guided by professionalism, accountability, and a commitment to supporting communities through high-quality housing solutions.",
    ]}
  />
)
