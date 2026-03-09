import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400">

            <div className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-5">

                {/* COMPANY */}
                <div className="md:col-span-2">
                    <h3 className="text-white font-semibold mb-4">
                        Lucent Leases
                    </h3>

                    <p className="text-sm leading-relaxed mb-6">
                        Lucent Leases provides safe, well-managed housing across the South Coast,
                        working closely with councils, landlords, and residents. Our team delivers
                        dependable housing solutions that prioritise resident wellbeing while
                        supporting local authorities in addressing urgent housing needs.
                    </p>

                    <div className="space-y-2 text-sm">
                        <p>
                            <span className="text-zinc-500">Phone:</span>{" "}
                            <a href="tel:02392007075" className="hover:text-white transition">
                                02392 007075
                            </a>
                        </p>

                        <p>
                            <span className="text-zinc-500">Email:</span>{" "}
                            <a href="mailto:hello@lucentleases.co.uk" className="hover:text-white transition">
                                hello@lucentleases.co.uk
                            </a>
                        </p>
                    </div>

                    <div className="pt-2 text-sm">
                        <Link href="/privacy-policy" className="hover:text-white transition">
                            Privacy Policy
                        </Link>
                    </div>

                    

                </div>

                {/* ABOUT */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        About Us
                    </h4>

                    <ul className="space-y-3 text-sm">

                        <li>
                            <Link href="/about#who-we-are" className="hover:text-white transition">
                                Who We Are
                            </Link>
                        </li>

                        <li>
                            <Link href="/about#our-team" className="hover:text-white transition">
                                Our Team
                            </Link>
                        </li>

                        <li>
                            <Link href="/about#purpose-values" className="hover:text-white transition">
                                Our Purpose & Values
                            </Link>
                        </li>

                        <li>
                            <Link href="/about#strategy" className="hover:text-white transition">
                                Our Strategy
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* WHAT WE DO */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        What We Do
                    </h4>

                    <ul className="space-y-3 text-sm">

                        <li>
                            <Link href="/what-we-do#nightly-self-contained" className="hover:text-white transition">
                                Nightly Self-Contained
                            </Link>
                        </li>

                        <li>
                            <Link href="/what-we-do#active-opportunities" className="hover:text-white transition">
                                Active Opportunities Pathway
                            </Link>
                        </li>

                        <li>
                            <Link href="/what-we-do#supported-shared" className="hover:text-white transition">
                                Supported Shared Accommodation
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Partnerships
                    </h4>

                    <ul className="space-y-3 text-sm">

                        <li>
                            <Link href="/services-for-councils" className="hover:text-white transition">
                                Services for Councils
                            </Link>
                        </li>

                        <li>
                            <Link href="/services-for-councils#partnership-approach" className="hover:text-white transition">
                                Partnership Approach
                            </Link>
                        </li>

                        <li>
                            <Link href="/services-for-councils#supporting-placements" className="hover:text-white transition">
                                Supporting Placements
                            </Link>
                        </li>

                        <li>
                            <Link href="/landlord-partners" className="hover:text-white transition">
                                Landlord Partners
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="hover:text-white transition">
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>

            {/* BOTTOM BAR */}

            <div className="border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">

                    <p>
                        © {new Date().getFullYear()} Lucent Leases. All rights reserved.
                    </p>

                    <p className="mt-2 md:mt-0">
                        Housing services across the South Coast
                    </p>

                </div>
            </div>

        </footer>
    )
}

export default Footer