"use client"

import { useState } from "react"

export default function ContactForm() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      marketingConsent: formData.get("marketingConsent") === "on",
    }

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
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
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6"
    >

      <div>
        <label className="text-sm text-zinc-400">Name</label>
        <input
          name="name"
          required
          className="mt-2 w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="text-sm text-zinc-400">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="text-sm text-zinc-400">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white"
        />
      </div>

      <p className="text-xs text-zinc-500 leading-relaxed">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-white">
          Privacy Policy
        </a>{" "}
        and consent to us contacting you regarding your enquiry.
      </p>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="marketingConsent"
          className="mt-1"
        />

        <p className="text-xs text-zinc-500 leading-relaxed">
          I agree to receive occasional updates and information from Lucent
          Leases about housing services and opportunities. I understand I can
          unsubscribe at any time.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-400 text-sm">
          Your message has been sent successfully.
        </p>
      )}

      {error && (
        <p className="text-red-400 text-sm">
          {error}
        </p>
      )}

    </form>
  )
}