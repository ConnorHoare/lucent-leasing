import PageHeader from "@/components/About/PageHeader"
import React from "react"


const highlights = [
  {
    title: "Reliable Housing Solutions",
    description:
      "We provide councils with access to safe, well-managed homes across the South Coast, ensuring residents are placed quickly and appropriately.",
  },
  {
    title: "Fast Placement Process",
    description:
      "Our team acts quickly when housing is required, helping local authorities place residents in suitable accommodation without unnecessary delays.",
  },
  {
    title: "Proactive Property Management",
    description:
      "We regularly inspect and maintain properties to identify and resolve issues early, ensuring homes remain safe and comfortable.",
  },
  {
    title: "Resident Support",
    description:
      "Alongside housing, we support residents in building independence, helping reduce long-term reliance on council resources.",
  },
]

const steps = [
  {
    title: "Referral",
    description:
      "Councils submit resident referrals so our team can quickly assess housing needs and identify suitable properties.",
  },
  {
    title: "Placement",
    description:
      "We arrange the placement and move-in process, ensuring residents settle safely and comfortably into their new homes.",
  },
  {
    title: "Ongoing Management",
    description:
      "Our team manages the property and maintains communication with both residents and councils.",
  },
  {
    title: "Support & Stability",
    description:
      "Residents receive practical support that helps them build confidence and independence over time.",
  },
]

const page = () => {
  return (
    <main className="bg-zinc-950 text-white">

      {/* HEADER */}
      <PageHeader
        eyebrow="Partnership"
        title="Services for Councils"
        intro="At Lucent Leases, we provide local authorities with dependable housing solutions that are safe, well-managed, and tailored to residents’ needs. Every situation is unique, so we act quickly to place individuals in properties that suit them while ensuring they receive the support necessary to feel secure and settled."
        textVariant="light"
        background={{
          src: "/images/lucent-images/13.jpeg",
          alt: "Housing solutions for councils",
          overlayStrength: 40,
        }}
        chips={[
          "Local Authority Partnerships",
          "South Coast Coverage",
          "Managed Housing",
          "Resident Support",
        ]}
      />

      {/* HIGHLIGHTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
            >
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Dependable Housing for Local Authorities
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Lucent Leases acts as a ready and trustworthy partner in addressing housing
              challenges. We offer councils fast access to a wide range of quality homes
              across the South Coast, helping ensure residents are placed in safe and
              suitable accommodation when they need it most.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Our dedicated team regularly checks on properties and resolves potential
              issues early so that small concerns do not become major problems. All homes
              are maintained to strict standards, minimising disruption for residents and
              unexpected costs for councils.
            </p>
          </div>

          <div id="partnership-approach" className="scroll-mt-28">
            <h2 className="text-3xl font-semibold mb-6">
              Partnership Approach
            </h2>

            <p className="text-zinc-300 leading-relaxed">
              Lucent Leases works hand-in-hand with local authorities to deliver housing
              solutions that fit both resident needs and council priorities. We build
              strong collaborative relationships based on open communication,
              transparency, and trust.
            </p>

            <p className="text-zinc-300 leading-relaxed mt-4">
              By understanding the challenges faced by each council, we tailor our
              services to provide practical and effective housing solutions that make
              a real difference for residents and communities alike.
            </p>
          </div>

          <div id="supporting-placements" className="scroll-mt-28">
            <h2 className="text-3xl font-semibold mb-6">
              Supporting Placements
            </h2>

            <p className="text-zinc-300 leading-relaxed">
              We guide councils through every stage of the placement process. From the
              initial referral through to move-in and ongoing support, our team stays
              closely involved to ensure the transition into housing is smooth and
              well managed.
            </p>

            <p className="text-zinc-300 leading-relaxed mt-4">
              Through proactive communication and regular check-ins, we ensure residents
              receive the support they need while councils can have confidence that
              each placement is carefully managed and monitored.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            Our Placement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {steps.map((step, i) => (
              <div key={i}>
                <div className="text-zinc-500 text-sm mb-2">
                  Step {i + 1}
                </div>

                <h3 className="font-medium text-lg mb-3">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Work With Lucent Leases
          </h2>

          <p className="text-zinc-400 mb-10">
            If your council is looking for dependable housing solutions across the
            South Coast, our team is ready to help.
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