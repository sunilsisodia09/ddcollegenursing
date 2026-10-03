"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  Stethoscope,
  Users,
} from "lucide-react";

const programmes = [
  {
    title: "GNM Nursing",
    subtitle: "General Nursing & Midwifery",
    description:
      "Develop professional nursing knowledge, practical skills, patient-care abilities and community-health awareness through structured nursing education.",
    icon: Stethoscope,
    href: "/courses/gnm-nursing",
    image: "/images/medical-science/gnm-nursing.jpg",
    tag: "Nursing",
  },
  {
    title: "D.Pharma",
    subtitle: "Diploma in Pharmacy",
    description:
      "Build foundational knowledge in pharmaceutical sciences, medicines, dispensing, drug handling and professional pharmacy practice.",
    icon: Pill,
    href: "/courses/d-pharma",
    image: "/images/medical-science/d-pharma.jpg",
    tag: "Pharmacy",
  },
];

const facilities = [
  {
    icon: FlaskConical,
    title: "Practical Laboratories",
    description:
      "Practical learning environments that help students connect academic concepts with professional applications.",
  },
  {
    icon: Stethoscope,
    title: "Nursing Skill Development",
    description:
      "Students develop essential nursing procedures, communication and patient-care skills.",
  },
  {
    icon: Microscope,
    title: "Scientific Learning",
    description:
      "A learning approach focused on scientific concepts, observation, analysis and practical understanding.",
  },
  {
    icon: BookOpen,
    title: "Academic Resources",
    description:
      "Students can use academic resources and learning support to strengthen their subject knowledge.",
  },
];

const learningPoints = [
  "Foundation of healthcare and pharmaceutical sciences",
  "Practical and skill-based learning",
  "Patient care and professional communication",
  "Clinical and community-oriented learning",
  "Laboratory-based academic exposure",
  "Professional ethics and responsibility",
];

const careerPaths = [
  "Hospital & Healthcare Services",
  "Nursing Care",
  "Community Healthcare",
  "Pharmacy Services",
  "Medical & Healthcare Organisations",
  "Clinical Support Services",
  "Pharmaceutical Sector",
  "Further Professional Education",
];

const faqs = [
  {
    question: "Which programmes are offered under Health Sciences?",
    answer:
      "D.D. College currently lists GNM Nursing and D.Pharma under its Department of Health Sciences.",
  },
  {
    question: "What is GNM Nursing?",
    answer:
      "GNM stands for General Nursing and Midwifery. It prepares students with nursing knowledge, practical skills and patient-care training.",
  },
  {
    question: "What is D.Pharma?",
    answer:
      "D.Pharma is a Diploma in Pharmacy programme focused on pharmaceutical sciences, medicines, dispensing and pharmacy-related professional knowledge.",
  },
  {
    question: "Does Health Sciences include practical learning?",
    answer:
      "Yes. Health-science education combines academic learning with practical and skill-oriented training appropriate to the programme.",
  },
  {
    question: "What career areas can students explore?",
    answer:
      "Depending on the programme, graduates can explore opportunities in hospitals, healthcare organisations, nursing services, pharmacies, pharmaceutical organisations and related professional fields.",
  },
  {
    question: "Can students continue their education after completing these programmes?",
    answer:
      "Students may explore higher education or specialised professional programmes subject to the eligibility requirements applicable to their chosen course.",
  },
];

export default function MedicalSciencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#050816]">
        <Image
          src="/images/medical-science/medical-science-bg.jpg"
          alt="Health Sciences at D.D. College"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#050816]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/85 to-[#050816]/30" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5c542]/40 bg-[#f5c542]/10 px-4 py-2 text-sm font-semibold text-[#f5c542] backdrop-blur-sm">
              <HeartPulse className="h-4 w-4" />
              Department of Health Sciences
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Medical &{" "}
              <span className="text-[#f5c542]">Health Sciences</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Build a meaningful career in healthcare through professional
              education, practical learning, scientific knowledge and
              skill-based training at D.D. College.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5c542] px-7 py-4 font-bold text-[#050816] shadow-lg transition hover:bg-[#ffd866]"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Programmes
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <HeartPulse className="mb-3 h-6 w-6 text-[#f5c542]" />

                <p className="text-sm text-slate-300">
                  Academic Area
                </p>

                <p className="mt-1 font-bold text-white">
                  Health Sciences
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <GraduationCap className="mb-3 h-6 w-6 text-[#f5c542]" />

                <p className="text-sm text-slate-300">
                  Programmes
                </p>

                <p className="mt-1 font-bold text-white">
                  GNM & D.Pharma
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <Hospital className="mb-3 h-6 w-6 text-[#f5c542]" />

                <p className="text-sm text-slate-300">
                  Learning
                </p>

                <p className="mt-1 font-bold text-white">
                  Practical & Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFORMATION
      ========================================================= */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-slate-200 p-6 sm:border-r lg:border-b-0">
            <HeartPulse className="mb-3 h-7 w-7 text-[#103d68]" />

            <p className="text-sm text-slate-500">
              Department
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#092743]">
              Health Sciences
            </h3>
          </div>

          <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
            <GraduationCap className="mb-3 h-7 w-7 text-[#103d68]" />

            <p className="text-sm text-slate-500">
              GNM Nursing
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#092743]">
              Nursing Programme
            </h3>
          </div>

          <div className="border-b border-slate-200 p-6 sm:border-r lg:border-b-0">
            <Pill className="mb-3 h-7 w-7 text-[#103d68]" />

            <p className="text-sm text-slate-500">
              D.Pharma
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#092743]">
              Pharmacy Programme
            </h3>
          </div>

          <div className="p-6">
            <FlaskConical className="mb-3 h-7 w-7 text-[#103d68]" />

            <p className="text-sm text-slate-500">
              Learning
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#092743]">
              Practical Focus
            </h3>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/medical-science/medical-science-main.jpg"
              alt="Health Sciences students at D.D. College"
              width={1000}
              height={750}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#050816]/85 p-5 text-white backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#f5c542] p-3 text-[#050816]">
                  <HeartPulse className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-bold">
                    Healthcare-Focused Education
                  </p>

                  <p className="text-sm text-slate-300">
                    Knowledge + Practical Skills + Professional Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#103d68]">
              Health Sciences
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#092743] sm:text-4xl lg:text-5xl">
              Prepare for a Future in Healthcare
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              D.D. College&apos;s Department of Health Sciences provides
              professional programmes designed around healthcare,
              nursing and pharmaceutical education.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              The current academic listing includes{" "}
              <strong>GNM Nursing</strong> and{" "}
              <strong>D.Pharma</strong> under Health Sciences. The
              programmes combine academic understanding with practical
              and professional learning.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Professional education",
                "Practical learning",
                "Healthcare knowledge",
                "Skill development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#103d68]" />

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMMES
      ========================================================= */}
      <section
        id="programmes"
        className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#103d68]">
              Our Programmes
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092743] sm:text-4xl">
              Health Sciences Programmes
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore the healthcare-focused programmes currently listed
              by D.D. College.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <div
                  key={programme.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={programme.image}
                      alt={programme.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-[#f5c542] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#050816]">
                        {programme.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                      <div className="rounded-xl bg-[#103d68] p-3">
                        <Icon className="h-6 w-6 text-[#f5c542]" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-extrabold">
                          {programme.title}
                        </h3>

                        <p className="text-sm text-slate-200">
                          {programme.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-8">
                    <p className="leading-7 text-slate-600">
                      {programme.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={programme.href}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#103d68] px-5 py-3.5 font-bold text-white transition hover:bg-[#092743]"
                      >
                        View Programme
                        <ArrowRight className="h-5 w-5" />
                      </Link>

                      <Link
                        href="/admission"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#103d68] px-5 py-3.5 font-bold text-[#103d68] transition hover:bg-[#103d68] hover:text-white"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING
      ========================================================= */}
      <section className="overflow-hidden bg-[#050816] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#f5c542]">
              Learning Approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Learn With Knowledge, Practice & Professional Skills
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Healthcare professionals need more than textbook knowledge.
              Students need a combination of scientific understanding,
              practical skills, communication and professional
              responsibility.
            </p>

            <div className="mt-8 space-y-4">
              {learningPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f5c542]" />

                  <p className="leading-7 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/medical-science/medical-lab.jpg"
              alt="Health Sciences laboratory"
              width={1000}
              height={750}
              className="h-[380px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#050816]/90 p-6 text-white backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#f5c542] p-3 text-[#050816]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-bold">
                    Practical Learning
                  </p>

                  <p className="text-sm text-slate-300">
                    Connect concepts with professional applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITIES
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#103d68]">
              Academic Environment
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092743] sm:text-4xl">
              Learning & Skill Development
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A professional learning environment helps students develop
              academic knowledge and practical understanding.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#103d68] text-[#f5c542] transition group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#092743]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER
      ========================================================= */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/medical-science/healthcare-career.jpg"
              alt="Healthcare career"
              width={1000}
              height={750}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#050816]/90 p-6 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#f5c542]">
                Healthcare Careers
              </p>

              <p className="mt-2 text-lg font-bold">
                Learn Today. Serve Tomorrow.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#103d68]">
              Career Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092743] sm:text-4xl">
              Build a Career That Makes a Difference
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Health Sciences can open professional pathways across
              hospitals, healthcare organisations, nursing services,
              pharmacies and pharmaceutical sectors.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {careerPaths.map((career) => (
                <div
                  key={career}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#103d68]" />

                  <span className="font-medium text-slate-700">
                    {career}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENT DEVELOPMENT
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#103d68] p-8 text-white sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5c542] text-[#050816]">
                  <Users className="h-7 w-7" />
                </div>

                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Develop Professional Confidence
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-blue-100">
                  Healthcare education is about developing responsible,
                  knowledgeable and skilled professionals. Along with
                  academic learning, students can develop communication,
                  teamwork, discipline and professional ethics.
                </p>
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5c542] px-7 py-4 font-bold text-[#050816] transition hover:bg-[#ffd866]"
              >
                Explore All Courses
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#f5c542]">
              Admissions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Start Your Health Sciences Journey
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Take the next step towards professional education in
              nursing or pharmacy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Explore Programme",
                text: "Choose the Health Sciences programme that matches your academic and career goals.",
              },
              {
                number: "02",
                title: "Submit Enquiry",
                text: "Contact the admission team or submit your admission enquiry online.",
              },
              {
                number: "03",
                title: "Begin Your Journey",
                text: "Complete the applicable admission process and start your academic journey.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5c542] font-extrabold text-[#050816]">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/admission"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f5c542] px-8 py-4 font-bold text-[#050816] transition hover:bg-[#ffd866]"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#103d68]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092743] sm:text-4xl">
              Health Sciences FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#092743]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#103d68] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#103d68] to-[#092743] px-6 py-14 text-center sm:px-10 lg:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f5c542]/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <HeartPulse className="mx-auto h-14 w-14 text-[#f5c542]" />

            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Your Healthcare Career Starts Here
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Explore GNM Nursing and D.Pharma at D.D. College and take
              the next step towards your professional future.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5c542] px-8 py-4 font-bold text-[#050816] transition hover:bg-[#ffd866]"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Contact College
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}