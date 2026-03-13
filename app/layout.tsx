import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavbarTest from "@/components/navigation/NavbarTest";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Lucent Leases",
    template: "%s | Lucent Leases",
  },
  description:
    "Lucent Leases provides high-quality temporary accommodation and housing solutions for local authorities across the UK, supporting residents with safe, well-managed homes.",

  keywords: [
    "temporary accommodation",
    "supported housing",
    "local authority housing",
    "housing solutions",
    "UK housing provider",
    "Lucent Leases",
    "council housing support",
  ],

  authors: [{ name: "Lucent Leases" }],
  creator: "Lucent Leases",
  publisher: "Lucent Leases",

  metadataBase: new URL("https://lucentleases.co.uk"),

  openGraph: {
    title: "Lucent Leases",
    description:
      "Providing reliable temporary accommodation and housing solutions for local authorities and residents across the UK.",
    url: "https://lucentleases.co.uk",
    siteName: "Lucent Leases",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucent Leases Housing Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucent Leases",
    description:
      "Reliable temporary accommodation and housing solutions for UK local authorities.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarTest />
        {children}
        <Footer />
      </body>
    </html>
  );
}
