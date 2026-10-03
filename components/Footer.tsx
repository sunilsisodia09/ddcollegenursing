
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "About College", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Academics", href: "/academics" },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const programs = [
  { label: "BCA", href: "/courses/bca" },
  { label: "MCA", href: "/courses/mca" },
  { label: "BBA", href: "/courses/bba" },
  { label: "MBA", href: "/courses/mba" },
  { label: "B.Com", href: "/courses/bcom" },
  { label: "B.Sc.", href: "/courses/bsc" },
];

/* ---------------- SOCIAL ICONS ---------------- */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.3 3.8-6.3 3.8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.5 8.1H3.2V21h3.3V8.1ZM4.9 3A2 2 0 1 0 5 7a2 2 0 0 0-.1-4ZM21 13.6c0-3.9-2.1-5.8-5-5.8-2.3 0-3.3 1.3-3.9 2.2V8.1H8.8V21h3.3v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h3.3l.2-7.4Z" />
    </svg>
  );
}

/* ---------------- FOOTER ---------------- */

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        {/* College Information */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white p-1">
              <Image
                src="/images/campus/college.png"
                alt="D.D. College Dehradun Logo"
                fill
                priority
                className="object-contain"
                sizes="84px"
              />
            </div>

            <div>
              <h6 className="text-xl font-extrabold uppercase leading-tight text-white">
                Divya Drishti College of Nursing and Medical Science
              </h6>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#f4b400]">
                Dehradun
              </p>
            </div>
          </Link>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            Divya Drishti College of Nursing and Medical Science is committed to providing quality
            education, professional development and a supportive learning
            environment for students.
          </p>

          <Link
            href="/admission"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f4b400] px-5 py-3 font-bold text-slate-950 transition hover:bg-[#f5c542]"
          >
            Apply Now
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-[#f4b400]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Our Programs
          </h3>

          <ul className="space-y-3">
            {programs.map((program) => (
              <li key={program.href}>
                <Link
                  href={program.href}
                  className="text-sm text-slate-300 transition hover:text-[#f4b400]"
                >
                  {program.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm text-slate-300">

            {/* Address */}
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-1 shrink-0 text-[#f4b400]"
                size={19}
              />

              <span>
                Divya Drishti College of Nursing and Medical Science,
                <br />
                Dehradun, Uttarakhand, India
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone
                className="shrink-0 text-[#f4b400]"
                size={19}
              />

              <a
                href="tel:+919368395093"
                className="transition hover:text-[#f4b400]"
              >
                +91 93683 95093
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <Mail
                className="mt-1 shrink-0 text-[#f4b400]"
                size={19}
              />

              <a
                href="mailto:info@example.com"
                className="break-all transition hover:text-[#f4b400]"
              >
                ddesociety18@gmail.com
              </a>
            </li>

          </ul>

          {/* Social Media */}
          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-white">
              Follow Us
            </p>

            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D.D. College on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#f4b400] hover:bg-[#f4b400] hover:text-slate-950"
              >
                <FacebookIcon />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D.D. College on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#f4b400] hover:bg-[#f4b400] hover:text-slate-950"
              >
                <InstagramIcon />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D.D. College on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#f4b400] hover:bg-[#f4b400] hover:text-slate-950"
              >
                <YoutubeIcon />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D.D. College on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#f4b400] hover:bg-[#f4b400] hover:text-slate-950"
              >
                <LinkedinIcon />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Admission Strip */}
      <div className="border-y border-white/10 bg-[#0b1120]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold text-[#f4b400]">
              Admissions Open 2026–27
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Start your journey with Divya Drishti College of Nursing and Medical Science.
            </p>
          </div>

          <Link
            href="/admission"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#f4b400] px-5 py-2.5 text-sm font-bold text-[#f4b400] transition hover:bg-[#f4b400] hover:text-slate-950"
          >
            Apply for Admission
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Divya Drishti College of Nursing and Medical Science, Dehradun
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#f4b400]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#f4b400]"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

