"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Vision & Direction",
    description:
      "Providing clear institutional direction with a focus on academic growth, student development and long-term progress.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Supporting an educational environment that encourages knowledge, discipline, practical learning and professional development.",
  },
  {
    icon: HeartHandshake,
    title: "Student Development",
    description:
      "Encouraging students to build confidence, responsibility, professional skills and a positive attitude towards their future.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Responsibility",
    description:
      "Promoting responsible administration, ethical values, discipline and respect throughout the institution.",
  },
];

const responsibilities = [
  "Institutional vision and strategic direction",
  "Academic and educational development",
  "Student-focused institutional growth",
  "Infrastructure and campus development",
  "Faculty and administrative support",
  "Industry and professional engagement",
];

export default function ChairmanPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.90) 50%, rgba(5,8,22,.60) 100%), url('/images/leadership/chairman-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <ShieldCheck size={17} />
              Leadership
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Chairman
              <span className="block text-[#f4b400]">
                Divya Drishti College
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Leadership, vision and commitment towards building an
              institution focused on quality education, student development
              and professional growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#chairman-message"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Chairman&apos;s Message
                <ArrowRight size={18} />
              </a>

              <Link
                href="/leadership"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Leadership Team
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CHAIRMAN PROFILE
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/leadership/chairman.jpg"
                alt="Chairman of Divya Drishti College"
                className="h-[430px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Award size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Institutional Leadership
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Vision • Values • Progress
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ABOUT THE CHAIRMAN
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Leading With
              <span className="block text-[#d99e00]">
                Vision & Responsibility
              </span>
            </h2>

            {/* Replace with actual Chairman name */}
            <h3 className="mt-6 text-2xl font-extrabold text-[#050816]">
              Chairman
            </h3>

            <p className="mt-1 font-semibold text-[#b98600]">
              Divya Drishti College of Nursing & Medical Science
            </p>

            <p className="mt-6 text-base leading-8 text-gray-600">
              The Chairman provides strategic direction for the institution
              and supports its continued development as an environment where
              students can learn, grow and prepare for their professional
              journey.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The leadership approach focuses on creating a strong academic
              foundation while encouraging discipline, practical learning,
              professional development and responsible citizenship.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Academic development",
                "Student-focused growth",
                "Institutional excellence",
                "Professional development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#d99e00]"
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CHAIRMAN MESSAGE
      ========================================================= */}
      <section
        id="chairman-message"
        className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-[0.7fr_1.3fr]">

            {/* IMAGE */}
            <div className="relative min-h-[350px] lg:min-h-[620px]">
              <img
                src="/images/leadership/chairman.jpg"
                alt="Chairman"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

              <div className="absolute bottom-8 left-7">
                <p className="text-sm font-semibold text-[#f5c542]">
                  Chairman
                </p>

                <h3 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                  Divya Drishti College
                </h3>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="p-7 sm:p-10 lg:p-14">

              <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f5c542]">
                Chairman&apos;s Message
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                Education Is the Foundation
                <span className="block text-[#f4b400]">
                  of a Better Future
                </span>
              </h2>

              {/* Replace this with verified official message */}
              <blockquote className="mt-8 border-l-4 border-[#f4b400] pl-6 text-xl font-semibold leading-9 text-white sm:text-2xl">
                &quot;Education creates opportunities, develops character and
                empowers students to contribute meaningfully to society.&quot;
              </blockquote>

              <div className="mt-8 h-px w-16 bg-[#f4b400]" />

              <p className="mt-8 leading-8 text-gray-400">
                Our aim is to provide students with an educational environment
                that combines academic learning with discipline, values,
                practical understanding and professional development.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We remain committed to strengthening the institution and
                creating opportunities that help students prepare for their
                future with confidence, knowledge and responsibility.
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Users size={23} />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Chairman
                  </p>

                  <p className="mt-1 text-sm text-[#f5c542]">
                    Divya Drishti College
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP VALUES
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              LEADERSHIP VALUES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Principles That Guide Our Leadership
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The institution&apos;s leadership is focused on creating a strong
              academic environment and supporting students throughout their
              educational journey.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
                >

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b98600]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#050816]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBILITIES
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
              CHAIRMAN&apos;S ROLE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              Supporting Institutional
              <span className="block text-[#d99e00]">
                Growth & Development
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Institutional leadership involves supporting academic,
              administrative and developmental activities while keeping the
              long-term interests of students and the institution in focus.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {responsibilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >

                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#d99e00]"
                  />

                  <span className="text-sm font-semibold leading-6 text-gray-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/leadership/chairman-campus.jpg"
                alt="Divya Drishti College campus"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#050816]/95 p-6 text-white backdrop-blur">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <BookOpen size={24} />
                </div>

                <div>
                  <p className="font-extrabold">
                    Education With Purpose
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Building opportunities for students and communities.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#050816] p-7 text-white sm:p-10 lg:p-14">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
                CONNECT WITH US
              </span>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                Have a Question?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                For admission, academic or institutional enquiries, connect
                with the college team.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <Phone
                    size={19}
                    className="text-[#f4b400]"
                  />

                  <span className="text-sm font-semibold">
                    +91 XXXXX XXXXX
                  </span>
                </a>

                <a
                  href="mailto:info@divyadrishticollege.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <Mail
                    size={19}
                    className="text-[#f4b400]"
                  />

                  <span className="break-all text-sm font-semibold">
                    info@divyadrishticollege.com
                  </span>
                </a>

              </div>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-7 py-4 font-bold text-[#050816] transition hover:bg-[#f5c542]"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f4b400] px-7 py-12 sm:px-10 lg:px-14">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#050816]/60">
                Admissions Open 2026–27
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Begin Your Journey With Us
              </h2>

              <p className="mt-4 leading-7 text-[#050816]/70">
                Explore our academic programmes and take the next step towards
                your educational and professional goals.
              </p>

            </div>

            <Link
              href="/admission"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#050816] px-7 py-4 font-bold text-white transition hover:bg-[#111827]"
            >
              Apply Now
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}