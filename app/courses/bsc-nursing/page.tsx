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
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Phone,
  Stethoscope,
  Users,
} from "lucide-react";

const studyAreas = [
  "Fundamentals of Nursing",
  "Medical-Surgical Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
  "Mental Health Nursing",
  "Maternal & Newborn Nursing",
];

const practicalAreas = [
  "Nursing Skill Laboratory",
  "Clinical Practice",
  "Patient Care Procedures",
  "Community Health Activities",
  "Health Assessment",
  "Emergency Care Skills",
];

const careerOptions = [
  "Staff Nurse",
  "Clinical Nurse",
  "Community Health Nurse",
  "Hospital Nurse",
  "Nursing Assistant",
  "Healthcare Support Roles",
];

const faqs = [
  {
    question: "What is the duration of B.Sc Nursing?",
    answer:
      "B.Sc Nursing is a four-year undergraduate nursing programme designed to provide academic knowledge, practical nursing skills and clinical learning experience.",
  },
  {
    question: "What does the B.Sc Nursing programme focus on?",
    answer:
      "The programme focuses on nursing theory, patient care, clinical practice, community health, healthcare procedures and professional development.",
  },
  {
    question: "Does the programme include practical training?",
    answer:
      "Yes. Students receive practical exposure through nursing skill laboratories, demonstrations, clinical learning and supervised patient-care activities.",
  },
  {
    question: "What career opportunities are available after B.Sc Nursing?",
    answer:
      "Graduates can explore nursing and healthcare roles in hospitals, clinics, community healthcare settings and other healthcare organisations, subject to applicable requirements.",
  },
  {
    question: "Can students pursue higher studies after B.Sc Nursing?",
    answer:
      "Yes. Graduates may pursue postgraduate nursing education and other relevant higher-study or professional-development opportunities according to eligibility requirements.",
  },
];

export default function BScNursingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <Image
          src="/images/courses/bsc-nursing/nursing-bg.jpg"
          alt="B.Sc Nursing programme"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-semibold text-[#f5c542] backdrop-blur-sm">
              <Stethoscope className="h-4 w-4" />
              Undergraduate Healthcare Programme
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              B.Sc Nursing
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Build a strong foundation in nursing science, patient care,
              clinical practice and community healthcare through a
              professionally focused undergraduate programme.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-[#f4b400]/20 transition hover:bg-[#f5c542]"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Contact College
                <Phone className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-4 border-b border-slate-200 p-6 sm:border-r lg:border-b-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b78300]">
              <Clock3 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Duration
              </p>
              <p className="mt-1 font-bold text-slate-900">
                4 Years
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b78300]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Level
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Undergraduate
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-slate-200 p-6 sm:border-r lg:border-b-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b78300]">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Field
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Nursing & Healthcare
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b78300]">
              <Hospital className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Learning
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Academic + Practical
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative min-h-[400px] overflow-hidden rounded-3xl">
            <Image
              src="/images/courses/bsc-nursing/nursing-main.jpg"
              alt="B.Sc Nursing students and healthcare learning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              About The Programme
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Learn Nursing With Knowledge, Skills & Compassion
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The B.Sc Nursing programme is designed to develop students with
              a strong understanding of nursing science, healthcare practices,
              patient care and professional responsibilities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The programme combines classroom learning with practical
              development so that students can progressively build confidence
              in nursing procedures, communication, assessment and patient
              care.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Strong foundation in nursing sciences",
                "Practical nursing skill development",
                "Clinical and community-oriented learning",
                "Professional communication and patient care",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d69e00]" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          STUDY AREAS
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              Academic Areas
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Core Areas of Study
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Students develop knowledge across important areas of nursing,
              healthcare and patient-centred practice.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studyAreas.map((area, index) => (
              <div
                key={area}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/60 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 font-bold text-[#a97400]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {area}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Academic understanding and practical development in this
                      important area of nursing education.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CURRICULUM / LEARNING
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              Learning Experience
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From Classroom Concepts to Practical Skills
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Nursing education requires both theoretical understanding and
              practical confidence. The programme is structured to help
              students connect classroom concepts with real-world healthcare
              situations.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Academic Learning",
                  text: "Build a strong foundation in nursing science and healthcare concepts.",
                },
                {
                  icon: Microscope,
                  title: "Skill Development",
                  text: "Practise important nursing procedures and healthcare skills.",
                },
                {
                  icon: Users,
                  title: "Professional Development",
                  text: "Develop communication, teamwork and patient-care abilities.",
                },
                {
                  icon: Hospital,
                  title: "Clinical Exposure",
                  text: "Understand healthcare environments through practical and clinical learning.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b78300]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/images/courses/bsc-nursing/nursing-lab.jpg"
              alt="Nursing practical and laboratory learning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-slate-950/75 p-5 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <div className="flex items-center gap-3">
                <Microscope className="h-6 w-6 text-[#f5c542]" />

                <div>
                  <p className="font-bold">
                    Practical Learning
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Skill development through structured practical learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PRACTICAL AREAS
      ========================================================= */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5c542]">
                Practical Development
              </span>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Build Confidence Through Practice
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Students can progressively develop practical knowledge and
                professional confidence through structured nursing activities
                and healthcare-focused learning.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3 font-bold text-slate-950 transition hover:bg-[#f5c542]"
              >
                Enquire Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {practicalAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f5c542]" />
                  <span className="font-medium text-slate-200">
                    {area}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENT EXPERIENCE
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              Student Development
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              More Than a Classroom Education
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Nursing education also involves communication, teamwork,
              professional ethics, empathy and responsibility towards patients
              and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400]/15 text-[#b78300]">
                <HeartPulse className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Compassionate Care
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Develop an understanding of patient-centred care,
                communication and professional responsibility.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400]/15 text-[#b78300]">
                <Users className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Teamwork
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build communication and collaboration skills needed in
                healthcare environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400]/15 text-[#b78300]">
                <GraduationCap className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Professional Growth
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Prepare for continued learning and professional development
                in the healthcare sector.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative min-h-[450px] overflow-hidden rounded-3xl">
            <Image
              src="/images/courses/bsc-nursing/nursing-career.jpg"
              alt="Nursing career opportunities"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              Career Pathways
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Opportunities in Healthcare
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              B.Sc Nursing graduates can explore nursing and healthcare
              opportunities across hospitals, clinics, community healthcare
              settings and other healthcare organisations, depending on
              applicable eligibility and registration requirements.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {careerOptions.map((career) => (
                <div
                  key={career}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d69e00]" />
                  <span className="text-sm font-semibold text-slate-700">
                    {career}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Career roles and eligibility may vary according to applicable
              regulations, registration requirements and employer criteria.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          HIGHER STUDIES
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-[#f4b400] p-8 sm:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900/70">
                  Continue Learning
                </span>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-slate-950 sm:text-4xl">
                  Build Your Future With Continuous Learning
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-slate-800">
                  After completing undergraduate nursing education, students
                  may explore postgraduate studies, specialised learning and
                  professional development opportunities according to their
                  interests and eligibility.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-[#f5c542]">
                <GraduationCap className="h-10 w-10" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5c542]">
              Admission
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Start Your B.Sc Nursing Journey
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Connect with the college admission team for current eligibility,
              documents, application procedure, fee details and admission
              availability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4b400] text-slate-950 font-extrabold">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Enquire
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Contact the admission team and confirm current programme
                requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4b400] text-slate-950 font-extrabold">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Apply
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Submit the admission application and required information
                through the college admission process.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4b400] text-slate-950 font-extrabold">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Complete Admission
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Complete document verification and other formalities as
                instructed by the college.
              </p>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-7 py-3.5 font-bold text-slate-950 transition hover:bg-[#f5c542]"
            >
              Go to Admission Page
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#b78300]">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#b78300] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">
                      <p className="leading-7 text-slate-600">
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
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 to-slate-800 px-6 py-12 text-center text-white sm:px-10 sm:py-16">

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4b400] text-slate-950">
              <Stethoscope className="h-8 w-8" />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
              Ready to Explore B.Sc Nursing?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Get in touch with the admission team to learn about the current
              admission process, eligibility and programme details.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-7 py-3.5 font-bold text-slate-950 transition hover:bg-[#f5c542]"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                View All Courses
                <BookOpen className="h-5 w-5" />
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}