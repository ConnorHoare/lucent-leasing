import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  try {

    const { name, email, message, marketingConsent } = await req.json()

    await resend.emails.send({
      from: "Lucent Leases <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission`,
      replyTo: email,

      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> <p>${message}</p></p>

        <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
        
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}