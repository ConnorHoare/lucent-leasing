"use client"

import { useState } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const data = {
      name:              formData.get("name"),
      email:             formData.get("email"),
      message:           formData.get("message"),
      marketingConsent:  formData.get("marketingConsent") === "on",
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body:   JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to send")
      setSuccess(true)
      e.currentTarget.reset()
    } catch {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-white/10 bg-white/2 p-7 sm:p-9"
    >
      {/* Subtle top glow inside the card */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-6">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-name"
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40"
          >
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-[14px] font-light text-white placeholder-white/20 outline-none transition-colors focus:border-white/25 focus:bg-white/5"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-email"
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40"
          >
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@organisation.co.uk"
            className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-[14px] font-light text-white placeholder-white/20 outline-none transition-colors focus:border-white/25 focus:bg-white/5"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-message"
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40"
          >
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us what you need…"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-[14px] font-light text-white placeholder-white/20 outline-none transition-colors focus:border-white/25 focus:bg-white/5"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8" aria-hidden="true" />

        {/* Privacy notice */}
        <p className="text-[12px] font-light leading-relaxed text-white/30">
          By submitting this form you agree to our{" "}
          <a
            href="/privacy-policy"
            className="text-white/50 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/70"
          >
            Privacy Policy
          </a>{" "}
          and consent to us contacting you regarding your enquiry.
        </p>

        {/* Marketing consent */}
        <label className="flex cursor-pointer items-start gap-3">
          <div className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              name="marketingConsent"
              className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-white/3 transition-colors checked:border-white/40 checked:bg-white/10 focus:outline-none"
            />
            {/* Custom tick */}
            <svg
              className="pointer-events-none absolute hidden h-2.5 w-2.5 text-white peer-checked:block"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[12px] font-light leading-relaxed text-white/30">
            I agree to receive occasional updates and information from Lucent Leases
            about housing services and opportunities. I understand I can unsubscribe at any time.
          </p>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {loading ? (
            <>
              <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>

        {/* Feedback */}
        {success && (
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/4 px-4 py-3">
            <svg className="h-3.5 w-3.5 shrink-0 text-white/60" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[13px] font-light text-white/60">Your message has been sent successfully.</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/3 px-4 py-3">
            <svg className="h-3.5 w-3.5 shrink-0 text-white/40" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="text-[13px] font-light text-white/50">{error}</p>
          </div>
        )}

      </div>
    </form>
  )
}