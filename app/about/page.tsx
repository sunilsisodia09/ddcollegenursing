"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Student Focused",
    description:
      "Creating a learning environment that supports academic, personal and professional development.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Encouraging knowledge, practical learning, skill development and continuous improvement.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Building a positive academic community where students and faculty can learn and grow together.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Responsibility",
    description:
      "Promoting discipline, integrity, respect and responsibility throughout the educational journey.",
  },
];

const values = [
  {
    icon: Target,
    title: "Academic Excellence",
    description:
      "Maintaining a strong focus on quality teaching, learning and continuous academic development.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging curiosity, creativity, practical learning and new approaches to education.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Promoting honesty, discipline, accountability and ethical conduct within the college community.",
  },
  {
    icon: HeartHandshake,
    title: "Student Development",
    description:
      "Supporting students in developing confidence, communication, professional skills and character.",
  },
];

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong academic foundations through classroom learning and guidance.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Strengthen practical skills, communication, confidence and professional awareness.",
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Participate in academic, cultural, practical and co-curricular activities.",
  },
  {
    number: "04",
    title: "Progress",
    description:
      "Prepare for higher education, professional opportunities and responsible citizenship.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.88) 50%, rgba(5,8,22,.55) 100%), url('/images/about/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <Building2 size={17} />
              About Divya Drishti College
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Students
              <span className="block text-[#f4b400]">
                Through Education
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Discover Divya Drishti College of Nursing & Medical Science,
              our educational approach, values and commitment towards student
              development and professional growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#about-college"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Explore Our College
                <ArrowRight size={18} />
              </a>

              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Admissions Open
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK STATS
      ========================================================= */}
      <section className="relative z-10 -mt-12 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl md:grid-cols-4">

          <div className="border-b border-r border-gray-200 p-6 text-center md:border-b-0">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              25+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              Years of Experience
            </p>
          </div>

          <div className="border-b border-gray-200 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              8000+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              Students
            </p>
          </div>

          <div className="border-r border-gray-200 p-6 text-center">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              300+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              Faculty & Staff
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              9+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              Academic Departments
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          ABOUT COLLEGE
      ========================================================= */}
      <section
        id="about-college"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/about/about-college.jpg"
                alt="Divya Drishti College campus"
                className="h-[360px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Award size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Our Commitment
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Education • Skills • Values
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* CONTENT */}
          <div>

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ABOUT THE COLLEGE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              A Place to Learn,
              <span className="block text-[#d99e00]">
                Grow & Prepare for the Future
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Divya Drishti College of Nursing & Medical Science is committed
              to creating an educational environment where students can
              develop knowledge, practical skills, confidence and professional
              awareness.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The college focuses on providing students with opportunities to
              learn through academic instruction, practical exposure,
              professional guidance and participation in a range of
              educational activities.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Our approach combines education with values, discipline and
              responsibility to help students prepare for their future
              academic and professional journeys.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Student-focused education",
                "Practical learning",
                "Professional development",
                "Values-based education",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
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
          HIGHLIGHTS
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              WHY CHOOSE OUR COLLEGE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              An Environment Designed for Growth
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We aim to provide students with an environment that supports
              learning, development, confidence and professional preparation.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
                >

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b98600]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#050816]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          MISSION + VISION
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              OUR DIRECTION
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Vision & Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Our vision and mission provide direction to our educational
              approach and institutional development.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* VISION */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                <Target size={28} />
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

              <Link
                href="/vision-mission"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#f5c542]"
              >
                Read More
                <ChevronRight size={18} />
              </Link>

            </div>

            {/* MISSION */}
            <div className="rounded-3xl border border-[#f4b400]/20 bg-[#f4b400]/10 p-7 sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                <BookOpen size={28} />
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

              <Link
                href="/vision-mission"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#f5c542]"
              >
                Read More
                <ChevronRight size={18} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          OUR VALUES
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              OUR VALUES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              What We Stand For
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our values shape the way we teach, learn, collaborate and
              contribute to the academic community.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
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
          STUDENT JOURNEY
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* CONTENT */}
            <div>

              <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
                STUDENT JOURNEY
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
                From Learning to
                <span className="block text-[#d99e00]">
                  Professional Growth
                </span>
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We believe that a student's college experience should help
                build both academic knowledge and the skills required for
                future opportunities.
              </p>

              <div className="mt-8 space-y-4">

                {journey.map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#050816] text-sm font-black text-[#f4b400]">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#050816]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* IMAGE */}
            <div className="relative">

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/about/student-life.jpg"
                  alt="Students at Divya Drishti College"
                  className="h-[380px] w-full object-cover sm:h-[540px]"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#050816]/95 p-6 text-white backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                    <GraduationCap size={24} />
                  </div>

                  <div>
                    <p className="font-extrabold">
                      Learn. Grow. Achieve.
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Preparing students for tomorrow.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS / INSTITUTION
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/about/campus.jpg"
                alt="Divya Drishti College campus"
                className="h-[350px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-[#050816] p-6 text-white shadow-xl sm:left-8 sm:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Landmark size={24} />
                </div>

                <div>
                  <p className="font-extrabold">
                    A Growing Academic Community
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Learning, collaboration and development.
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div>

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              OUR CAMPUS
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              A Place Where
              <span className="block text-[#d99e00]">
                Learning Comes Alive
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A positive educational environment plays an important role in
              student development. Our campus is designed to support academic
              learning, practical activities, interaction and student
              engagement.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Through academic spaces, learning resources and student
              activities, we aim to create an environment where students can
              make the most of their college experience.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Academic learning spaces",
                "Practical learning environment",
                "Student activities",
                "Supportive faculty environment",
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

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#050816] px-6 py-3.5 font-bold text-white transition hover:bg-[#111827]"
            >
              Visit Our Campus
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          LEADERSHIP LINK
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-3xl bg-[#050816] text-white">

            <div className="grid lg:grid-cols-[1fr_0.8fr]">

              <div className="p-7 sm:p-10 lg:p-14">

                <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
                  LEADERSHIP
                </span>

                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  Guided by Vision,
                  <span className="block text-[#f4b400]">
                    Driven by Responsibility
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-gray-400">
                  Strong institutions are built through responsible leadership,
                  academic direction and a shared commitment to student
                  development.
                </p>

                <Link
                  href="/leadership"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
                >
                  Meet Our Leadership
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="relative min-h-[300px]">

                <img
                  src="/images/about/leadership.jpg"
                  alt="College leadership"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-transparent" />

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f4b400] px-7 py-12 sm:px-10 lg:px-14">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#050816]/60">
                Admissions Open 2026–27
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Start Your Journey With Divya Drishti College
              </h2>

              <p className="mt-4 leading-7 text-[#050816]/70">
                Explore our programmes and take the next step towards your
                educational and professional goals.
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