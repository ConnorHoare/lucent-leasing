import PageHeader from "@/components/About/PageHeader"
import React from "react"


const page = () => {
  return (
    <main className="bg-zinc-950 text-white">

      {/* HEADER */}
      <PageHeader
        eyebrow="Landlords"
        title="Landlord Partners"
        intro="At Lucent Leases, we partner with landlords to provide well-managed, secure homes for residents in need. We handle all aspects of property management, including maintenance, compliance, and resident support, allowing landlords to enjoy a reliable and hassle-free experience."
        textVariant="light"
        background={{
          src: "/images/lucent-images/15.jpeg",
          alt: "Landlord partnerships",
          overlayStrength: 40,
        }}
        chips={[
          "Guaranteed Management",
          "South Coast Coverage",
          "Compliance & Maintenance",
          "Reliable Partnership",
        ]}
      />

      {/* HOW WE WORK */}
      <section id="how-we-work" className="scroll-mt-28 py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            How We Work
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">
            At Lucent Leases, we partner with landlords to provide well-managed,
            secure homes for residents in need. We handle all aspects of property
            management, including maintenance, compliance, and resident support,
            so landlords can enjoy a hassle-free experience.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            Our approach is tailored to each property, ensuring it meets our high
            standards while providing safe, reliable accommodation for residents.
            We work closely with landlords to maintain open communication, resolve
            issues promptly, and create a partnership that benefits both property
            owners and the communities we serve.
          </p>

        </div>
      </section>

      {/* WHERE WE WORK */}
      <section id="where-we-work" className="scroll-mt-28 py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Where We Work
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">
            Lucent Leases operates across the South Coast, providing housing
            solutions in areas where demand is highest. Our local knowledge
            allows us to match residents with suitable properties quickly and
            efficiently, ensuring every placement meets the needs of both
            residents and landlords.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            By maintaining strong connections with councils in every area,
            we ensure properties are used responsibly and effectively. This
            gives landlords confidence that their homes are managed
            professionally and safely at every stage.
          </p>

        </div>
      </section>

      {/* CONTACT LANDLORD TEAM */}
      <section
        id="landlord-contact"
        className="scroll-mt-28 py-24 border-t border-zinc-900"
      >
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Contact Our Landlord Partnership Team
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">
            Our Landlord Partnership Team is here to provide guidance, answer
            questions, and discuss potential opportunities for property owners.
            Whether you are interested in listing a property, learning about
            our management services, or understanding how we support residents,
            our team offers clear and responsive advice.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            Partnering with Lucent Leases ensures your property is cared for
            professionally while making a real difference in the lives of
            residents and supporting local authorities’ housing efforts.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Become a Landlord Partner
          </h2>

          <p className="text-zinc-400 mb-10">
            If you are a property owner looking for a reliable, fully managed
            partnership, our team would be happy to discuss how Lucent Leases
            can support you.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Contact Our Team
          </a>

        </div>
      </section>

    </main>
  )
}

export default page