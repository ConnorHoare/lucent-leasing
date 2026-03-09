import React from "react"

import ContactForm from "@/components/forms/ContactForm"
import PageHeader from "@/components/About/PageHeader"

const page = () => {
  return (
    <main className="bg-zinc-950 text-white">

      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro="Whether you are a council, landlord, or partner organisation, our team is here to help. Send us a message and we will respond as soon as possible."
        textVariant="light"
        background={{
          alt: "Contact Lucent Leases",
          overlayStrength: 40,
          colorClassName: "bg-black"
        }}
        chips={[
          "Council Partnerships",
          "Landlord Enquiries",
          "Property Opportunities",
          "General Enquiries"
        ]}
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* CONTACT INFO */}
          <div>

            <h2 className="text-3xl font-semibold mb-6">
              Contact Information
            </h2>

            <p className="text-zinc-400 mb-8">
              Our team is available to discuss housing placements,
              landlord partnerships, and property opportunities.
            </p>

            <div className="space-y-6 text-zinc-300">

              <div>
                <p className="text-sm text-zinc-500 mb-1">Email</p>
                <p>hello@lucentleases.co.uk</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500 mb-1">Areas Covered</p>
                <p>South Coast • Hampshire • Portsmouth • Southampton</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500 mb-1">Partnerships</p>
                <p>Local Authorities • Landlords • Housing Providers</p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <ContactForm />

        </div>
      </section>

    </main>
  )
}

export default page