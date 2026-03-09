import PageHeader from "@/components/About/PageHeader"
export default function UnsubscribePage() {
  return (
    <main className="bg-zinc-950 text-white">

      <PageHeader
        eyebrow="Unsubscribe"
        title="Email Preferences"
        intro="If you would like to stop receiving updates from Lucent Leases, please contact us using the details below."
        textVariant="light"
        background={{ colorClassName: "bg-black" }}
      />

      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center">

          <p className="text-zinc-300 mb-6">
            If you no longer wish to receive marketing communications
            from Lucent Leases, please send an email to:
          </p>

          <p className="text-lg font-medium">
            hello@lucentleases.co.uk
          </p>

          <p className="text-zinc-400 mt-6">
            Please include the email address you would like removed
            from future communications.
          </p>

        </div>
      </section>

    </main>
  )
}