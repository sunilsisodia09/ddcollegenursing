"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const programs = [
  {
    title: "B.Sc. Nursing",
    duration: "4 Years",
    eligibility: "10+2 with PCB & English",
    description:
      "Build a strong foundation in nursing science, clinical practice, patient care and healthcare management.",
  },
  {
    title: "GNM Nursing",
    duration: "3 Years",
    eligibility: "10+2 or equivalent",
    description:
      "Develop professional nursing skills with academic learning, practical training and clinical exposure.",
  },
  {
    title: "ANM Nursing",
    duration: "2 Years",
    eligibility: "10+2 or equivalent",
    description:
      "A focused nursing programme designed to develop essential healthcare and community nursing skills.",
  },
  {
    title: "Paramedical Courses",
    duration: "As per Programme",
    eligibility: "Programme specific",
    description:
      "Explore healthcare-oriented programmes designed to prepare students for professional support roles.",
  },
];

const admissionSteps = [
  {
    number: "01",
    title: "Submit Enquiry",
    description:
      "Fill out the admission enquiry form with your basic academic and contact details.",
  },
  {
    number: "02",
    title: "Counselling",
    description:
      "Our admission team will contact you and guide you regarding courses, eligibility and admission requirements.",
  },
  {
    number: "03",
    title: "Document Verification",
    description:
      "Submit the required documents for verification according to the selected programme.",
  },
  {
    number: "04",
    title: "Admission Confirmation",
    description:
      "Complete the required admission formalities and secure your seat for the academic session.",
  },
];

const documents = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate",
  "Transfer / Migration Certificate",
  "Aadhaar Card / Valid ID Proof",
  "Passport Size Photographs",
  "Category Certificate, if applicable",
  "Medical Fitness Certificate",
  "Other documents as required by the programme",
];

const faqs = [
  {
    question: "When does admission for the 2026–27 session begin?",
    answer:
      "Admissions for the 2026–27 academic session are open. Contact the admission team for current seat availability, eligibility and programme-specific requirements.",
  },
  {
    question: "Which nursing programmes are available?",
    answer:
      "The college offers programmes including B.Sc. Nursing, GNM Nursing and ANM Nursing. Paramedical programmes may also be available depending on the academic session.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can submit the enquiry form on this page. The admission team can then guide you through the programme selection, document verification and admission process.",
  },
  {
    question: "What documents are required?",
    answer:
      "Generally, students need their 10th and 12th certificates/marksheets, identity proof, photographs and other programme-specific documents.",
  },
  {
    question: "Can I contact the college before applying?",
    answer:
      "Yes. Students and parents are encouraged to contact the admission team for counselling and programme-related information before completing the admission process.",
  },
];

export default function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.91) 45%, rgba(5,8,22,.60) 100%), url('/images/admission/admission-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.16),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-semibold text-[#f5c542]">
              <GraduationCap size={17} />
              Admissions Open 2026–27
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Begin Your Journey
              <span className="block text-[#f4b400]">Towards a Brighter Future</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Take the first step towards a rewarding career in healthcare.
              Explore programmes, understand the admission process and connect
              with our admission team today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#application-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Apply Now
                <ArrowRight size={19} />
              </a>

              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programmes
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f4b400]" />
                Professional Education
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f4b400]" />
                Practical Learning
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f4b400]" />
                Career-Focused Programmes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(5,8,22,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 border-b border-gray-100 p-6 sm:border-r lg:border-b-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#d99e00]">
              <GraduationCap size={24} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Session
              </p>
              <p className="mt-1 font-bold text-[#050816]">2026–27</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-100 p-6 lg:border-b-0 lg:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050816]/5 text-[#050816]">
              <FileText size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Application
              </p>
              <p className="mt-1 font-bold text-[#050816]">Now Open</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-100 p-6 sm:border-r sm:border-b-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#d99e00]">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Guidance
              </p>
              <p className="mt-1 font-bold text-[#050816]">Admission Support</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050816]/5 text-[#050816]">
              <Clock3 size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Enquiry
              </p>
              <p className="mt-1 font-bold text-[#050816]">Get in Touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ADMISSIONS 2026–27
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Your Career in Healthcare
              <span className="block text-[#d99e00]">Starts Here</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              At Divya Drishti College of Nursing & Medical Science, students
              can pursue professional education with a focus on academic
              knowledge, practical learning, clinical exposure and overall
              development.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Choose the programme that matches your career goals and take the
              next step towards becoming a skilled healthcare professional.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Experienced Faculty",
                "Practical Learning",
                "Clinical Exposure",
                "Student Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#d99e00]"
                  />
                  <span className="font-semibold text-[#111827]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/admission/admission-campus.jpg"
                alt="Divya Drishti College Campus"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-white/60 bg-white p-5 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <GraduationCap size={25} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    Academic Session
                  </p>
                  <p className="text-lg font-extrabold text-[#050816]">
                    Admissions Open 2026–27
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMMES
      ========================================================= */}
      <section
        id="programmes"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              CHOOSE YOUR PROGRAMME
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Programmes Available
            </h2>

            <p className="mt-4 text-gray-600">
              Explore our professional healthcare programmes and choose the
              course aligned with your academic background and career goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f4b400]/10 transition group-hover:bg-[#f4b400]/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#050816] text-[#f4b400]">
                      <GraduationCap size={24} />
                    </div>

                    <span className="text-sm font-extrabold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#050816]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-bold text-[#111827]">
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-gray-500">Eligibility</span>
                      <span className="max-w-[60%] text-right font-bold text-[#111827]">
                        {program.eligibility}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#application-form"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b98600] transition group-hover:gap-3"
                  >
                    Enquire Now
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ELIGIBILITY
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
              ELIGIBILITY
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Know Before You Apply
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Eligibility requirements may vary according to the programme and
              applicable academic or regulatory requirements. Students should
              confirm the latest requirements with the admission office before
              completing the application.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Applicants should meet the educational qualification required for the selected programme.",
                "Programme-specific subject requirements may apply.",
                "Required documents must be submitted during the admission process.",
                "Final admission is subject to applicable college and programme requirements.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#d99e00]"
                  />
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#050816] p-7 text-white shadow-xl sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
              <ShieldCheck size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold">
              Need Help Choosing a Course?
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Not sure which programme is right for you? Connect with the
              admission team for guidance regarding eligibility, course
              structure and the application process.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Phone className="text-[#f4b400]" size={21} />
                <div>
                  <p className="text-xs text-gray-400">Call Admission Office</p>
                  <p className="font-bold">+91 XXXXX XXXXX</p>
                </div>
              </a>

              <a
                href="mailto:info@divyadrishticollege.com"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Mail className="text-[#f4b400]" size={21} />
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="break-all font-bold">
                    info@divyadrishticollege.com
                  </p>
                </div>
              </a>
            </div>

            <a
              href="#application-form"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-5 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
            >
              Get Admission Guidance
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              ADMISSION PROCESS
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Four Simple Steps
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Our admission process is designed to make your application
              journey simple and easy to understand.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-white/10 lg:block" />

            {admissionSteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4b400] text-sm font-black text-[#050816]">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENTS
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
                DOCUMENT CHECKLIST
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
                Keep Your Documents Ready
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Keeping your academic and identification documents ready can
                help make the admission process smoother.
              </p>

              <div className="mt-7 rounded-2xl bg-[#050816] p-6 text-white">
                <div className="flex gap-4">
                  <FileText className="mt-1 shrink-0 text-[#f4b400]" size={24} />

                  <div>
                    <h3 className="font-bold">Important</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      The exact document requirements may vary by programme.
                      Please confirm the final checklist with the college
                      admission office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {documents.map((document, index) => (
                <div
                  key={document}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#f4b400]/50 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b400]/15 text-sm font-bold text-[#b98600]">
                    {index + 1}
                  </div>

                  <span className="text-sm font-semibold leading-6 text-gray-700">
                    {document}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION FORM
      ========================================================= */}
      <section
        id="application-form"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
                APPLY / ENQUIRE
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
                Start Your Admission Journey
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Submit your details and our admission team can get in touch
                with you regarding your preferred programme.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <UserRound className="mt-0.5 shrink-0 text-[#d99e00]" size={22} />
                  <div>
                    <h3 className="font-bold text-[#050816]">
                      Personal Guidance
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Get assistance with your programme and admission
                      enquiry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <FileText className="mt-0.5 shrink-0 text-[#d99e00]" size={22} />
                  <div>
                    <h3 className="font-bold text-[#050816]">
                      Application Support
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Understand the next steps after submitting your enquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-[0_15px_50px_rgba(5,8,22,0.10)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-[#050816]">
                  Admission Enquiry Form
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Course Interested In *
                    </label>

                    <select
                      id="course"
                      name="course"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    >
                      <option value="" disabled>
                        Select a programme
                      </option>
                      <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                      <option value="GNM Nursing">GNM Nursing</option>
                      <option value="ANM Nursing">ANM Nursing</option>
                      <option value="Paramedical Courses">
                        Paramedical Courses
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="qualification"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Highest Qualification
                    </label>

                    <input
                      id="qualification"
                      name="qualification"
                      type="text"
                      placeholder="e.g. 12th / Graduate"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Message / Query
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#f4b400] focus:bg-white focus:ring-4 focus:ring-[#f4b400]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#050816] px-6 py-4 font-bold text-white transition hover:bg-[#111827] sm:w-auto"
                >
                  Submit Enquiry
                  <Send size={18} />
                </button>

                {submitted && (
                  <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Thank you!</p>
                      <p className="mt-1">
                        Your admission enquiry has been submitted
                        successfully. Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#050816] lg:grid-cols-2">
          <div className="p-7 text-white sm:p-10 lg:p-14">
            <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              VISIT OUR CAMPUS
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Connect With Us
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Have questions about admissions, programmes or eligibility?
              Reach out to the college and get the information you need.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f4b400]">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    College Address
                  </p>
                  <p className="mt-1 font-semibold">
                    Divya Drishti College
                    <br />
                    Dehradun, Uttarakhand, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f4b400]">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    Admission Enquiry
                  </p>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="mt-1 block font-semibold hover:text-[#f4b400]"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f4b400]">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:info@divyadrishticollege.com"
                    className="mt-1 block break-all font-semibold hover:text-[#f4b400]"
                  >
                    info@divyadrishticollege.com
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
            >
              Contact College
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="min-h-[300px] lg:min-h-full">
            <iframe
              title="Divya Drishti College Location"
              src="https://www.google.com/maps?q=Dehradun,Uttarakhand&output=embed"
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Find answers to some common questions about the admission
              process.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#050816]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#b98600] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6">
                      <p className="text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
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
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f4b400] px-7 py-12 sm:px-10 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#050816]/60">
                Admissions Open 2026–27
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Take the First Step Towards Your Healthcare Career
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#050816]/70">
                Submit your enquiry today and connect with the admission team
                for programme and application guidance.
              </p>
            </div>

            <a
              href="#application-form"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#050816] px-7 py-4 font-bold text-white transition hover:bg-[#111827]"
            >
              Apply Now
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}