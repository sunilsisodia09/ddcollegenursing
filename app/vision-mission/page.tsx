"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Eye,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const missionPoints = [
  "Provide quality education in a supportive academic environment.",
  "Encourage practical learning, professional skills and innovation.",
  "Promote discipline, ethics, responsibility and integrity.",
  "Support the academic, personal and professional development of students.",
  "Create opportunities for students to become confident and responsible professionals.",
  "Encourage meaningful engagement with society and the wider community.",
];

const visionValues = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Encouraging high standards of teaching, learning and continuous academic improvement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    description:
      "Promoting curiosity, practical learning, new ideas and a continuous learning mindset.",
  },
  {
    icon: HeartHandshake,
    title: "Human Values",
    description:
      "Developing students with integrity, compassion, discipline and respect for others.",
  },
  {
    icon: Users,
    title: "Student Development",
    description:
      "Supporting students in developing confidence, communication, skills and professional awareness.",
  },
];

const commitments = [
  "Student-centred education",
  "Qualified and dedicated faculty",
  "Practical and experiential learning",
  "Professional and career development",
  "Ethical and responsible education",
  "Continuous institutional improvement",
];

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.90) 48%, rgba(5,8,22,.55) 100%), url('/images/vision-mission/vision-mission-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <Target size={17} />
              Our Vision & Mission
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Vision That Inspires.
              <span className="block text-[#f4b400]">
                Mission That Guides.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Our vision and mission provide the foundation for creating a
              meaningful educational experience focused on knowledge,
              character, skills and professional growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Explore Our Vision
                <ArrowRight size={18} />
              </a>

              <a
                href="#mission"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Our Mission
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              OUR PHILOSOPHY
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Education Beyond
              <span className="block text-[#d99e00]">
                The Classroom
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Education is more than academic knowledge. It is about helping
              students develop the confidence, skills, values and awareness
              needed to move forward in their personal and professional lives.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Our vision and mission guide our efforts towards creating an
              environment where students can learn with purpose, develop
              practical skills and prepare themselves for future opportunities.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Knowledge with purpose",
                "Learning through experience",
                "Values and responsible citizenship",
                "Professional growth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#d99e00]"
                  />

                  <span className="font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/vision-mission/vision-main.jpg"
                alt="Students learning at Divya Drishti College"
                className="h-[350px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Award size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Our Educational Approach
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Knowledge • Skills • Values
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          VISION
      ========================================================= */}
      <section
        id="vision"
        className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-[0.8fr_1.2fr]">

            {/* ICON / IMAGE */}
            <div className="relative min-h-[350px] lg:min-h-[550px]">

              <img
                src="/images/vision-mission/vision.jpg"
                alt="Vision of Divya Drishti College"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

              <div className="absolute bottom-8 left-7">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                  <Eye size={28} />
                </div>

                <p className="text-sm font-semibold text-[#f5c542]">
                  OUR VISION
                </p>

                <h3 className="mt-1 text-3xl font-extrabold">
                  Looking Towards the Future
                </h3>

              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 sm:p-10 lg:p-14">

              <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f5c542]">
                Vision Statement
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                To Build an Educational Environment
                <span className="block text-[#f4b400]">
                  That Creates Future Leaders
                </span>
              </h2>

              <p className="mt-7 leading-8 text-gray-400">
                Our vision is to contribute towards an educational environment
                where students are encouraged to pursue knowledge, develop
                professional competence and grow into responsible individuals.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                We aspire to create a learning community that values academic
                excellence, innovation, ethical conduct, practical skills and
                meaningful contribution to society.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">

                {[
                  "Academic excellence",
                  "Professional competence",
                  "Innovation and creativity",
                  "Responsible citizenship",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#f4b400]"
                    />

                    <span className="text-sm font-semibold text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section
        id="mission"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* CONTENT */}
          <div className="order-2 lg:order-1">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              OUR MISSION
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Turning Vision Into
              <span className="block text-[#d99e00]">
                Meaningful Action
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our mission is to provide students with opportunities to acquire
              knowledge, develop practical skills and build the values required
              for personal and professional growth.
            </p>

            <div className="mt-8 space-y-4">

              {missionPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#f4b400]/50 hover:shadow-md"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4b400]/15 text-sm font-extrabold text-[#b98600]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-sm font-semibold leading-7 text-gray-700">
                    {point}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2">

            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">

              <img
                src="/images/vision-mission/mission.jpg"
                alt="Mission of Divya Drishti College"
                className="h-[380px] w-full object-cover sm:h-[560px]"
              />

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              OUR CORE VALUES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Values That Shape Our Community
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our values influence the way we teach, learn, collaborate and
              contribute to the wider community.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {visionValues.map((value) => {
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
          COMMITMENT
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="relative">

            <div className="overflow-hidden rounded-3xl">

              <img
                src="/images/vision-mission/mission-campus.jpg"
                alt="College campus and students"
                className="h-[350px] w-full object-cover sm:h-[480px]"
              />

            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#050816]/95 p-6 text-white backdrop-blur">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <p className="font-extrabold">
                    Committed to Excellence
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Learning, values and continuous development.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div>

            <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
              OUR COMMITMENT
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              Creating an Environment
              <span className="block text-[#d99e00]">
                Where Students Can Grow
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We believe that students need more than classroom instruction.
              They need an environment that supports curiosity, confidence,
              discipline, communication, practical skills and professional
              awareness.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
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

            <Link
              href="/academics"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#050816] px-6 py-3.5 font-bold text-white transition hover:bg-[#111827]"
            >
              Explore Academics
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          VISION + MISSION SUMMARY
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            {/* VISION CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                <Eye size={28} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#f5c542]">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Inspiring Knowledge,
                <span className="block text-[#f4b400]">
                  Skills & Leadership
                </span>
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                To create an educational environment that encourages academic
                excellence, professional competence, innovation, values and
                responsible citizenship.
              </p>

            </div>

            {/* MISSION CARD */}
            <div className="rounded-3xl border border-[#f4b400]/20 bg-[#f4b400]/10 p-7 sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                <Target size={28} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#f5c542]">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Education With
                <span className="block text-[#f4b400]">
                  Purpose & Responsibility
                </span>
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                To provide quality education and opportunities that help
                students develop knowledge, practical skills, confidence,
                character and professional competence.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f4b400] px-7 py-12 sm:px-10 lg:px-14">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#050816]/60">
                Admissions Open 2026–27
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Build Your Future With Purpose
              </h2>

              <p className="mt-4 leading-7 text-[#050816]/70">
                Explore our programmes and discover an academic environment
                designed to support your learning and professional journey.
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