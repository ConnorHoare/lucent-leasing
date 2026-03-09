import PageHeader from "@/components/About/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-zinc-950 text-white">

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains how Lucent Leases collects, uses, and protects personal information when you interact with our website."
        textVariant="light"
        background={{
          colorClassName: "bg-black",
        }}
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-zinc-300 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>

            <p>
              Lucent Leases respects your privacy and is committed to protecting
              your personal information. This privacy policy explains how we
              collect, use, and safeguard the personal data you provide when
              contacting us through our website.
            </p>

            <p className="mt-4">
              This website is operated by Lucent Leases and complies with the
              requirements of the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>

            <p>
              When you submit an enquiry through our contact form, we may collect
              the following personal information:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The contents of your message</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Information
            </h2>

            <p>
              The information you provide is used to respond to your enquiry,
              provide assistance related to your request, and communicate with
              you about relevant services offered by Lucent Leases.
            </p>

            <p className="mt-4">
              If you choose to opt in, Lucent Leases may occasionally send
              information about housing services, partnership opportunities, or
              updates related to our work with councils, landlords, and
              communities.
            </p>

            <p className="mt-4">
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Marketing Communications
            </h2>

            <p>
              Where applicable, marketing communications are only sent where you
              have provided consent to receive them. Consent is optional and is
              provided through an opt-in checkbox when submitting forms on our
              website.
            </p>

            <p className="mt-4">
              You may withdraw your consent at any time by contacting us directly
              or by using the unsubscribe instructions provided in any marketing
              communication we send.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third-Party Services
            </h2>

            <p>
              Our contact form uses a third-party email delivery service to send
              enquiries to our team. This means your message may be processed by
              a secure email service provider in order for us to receive and
              respond to your enquiry.
            </p>

            <p className="mt-4">
              These providers process data only for the purpose of transmitting
              contact form messages and are required to maintain appropriate
              security standards. We take reasonable steps to ensure that any
              third-party service providers we use comply with applicable data
              protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Retention
            </h2>

            <p>
              We retain contact enquiries only for as long as necessary to
              respond to the request and maintain appropriate records of
              communications.
            </p>

            <p className="mt-4">
              If you have opted to receive marketing communications, your
              information may be retained for this purpose until you withdraw
              your consent or request removal from our communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Rights
            </h2>

            <p>
              Under UK data protection law, you have the right to request access
              to the personal data we hold about you, request correction of
              inaccurate data, request restriction of processing, or ask for your
              information to be deleted where appropriate.
            </p>

            <p className="mt-4">
              If you would like to exercise any of these rights, please contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact
            </h2>

            <p>
              If you have any questions about this privacy policy or how your
              data is handled, please contact us:
            </p>

            <div className="mt-4 space-y-2">
              <p>Email: hello@lucentleases.co.uk</p>
              <p>Phone: 02392 007075</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}