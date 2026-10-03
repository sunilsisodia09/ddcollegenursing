"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  GraduationCap,
  Library,
  Microscope,
  Users,
} from "lucide-react";

const departments = [
  {
    title: "Department of Management",
    shortTitle: "Management",
    description:
      "Develop business knowledge, leadership skills and professional capabilities through a practical and industry-oriented learning environment.",
    icon: Building2,
    courses: [
      "Bachelor of Business Administration",
      "Master of Business Administration",
      "Other Management Programmes",
    ],
  },
  {
    title: "Department of Computer Applications",
    shortTitle: "Computer Applications",
    description:
      "Build strong foundations in programming, software development, databases, computer applications and emerging technologies.",
    icon: FlaskConical,
    courses: [
      "Bachelor of Computer Applications",
      "Master of Computer Applications",
      "Computer & IT Programmes",
    ],
  },
  {
    title: "Department of Commerce",
    shortTitle: "Commerce",
    description:
      "Gain a strong understanding of accounting, finance, business, economics and modern commercial practices.",
    icon: BookOpen,
    courses: [
      "Bachelor of Commerce",
      "Master of Commerce",
      "Commerce & Finance Programmes",
    ],
  },
  {
    title: "Department of Science",
    shortTitle: "Science",
    description:
      "Explore scientific concepts through classroom learning, laboratory work, practical exposure and academic development.",
    icon: Microscope,
    courses: [
      "Bachelor of Science",
      "Science Programmes",
      "Laboratory-Based Learning",
    ],
  },
];

const academicFeatures = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Learn with faculty members focused on academic development, practical understanding and student support.",
  },
  {
    icon: FlaskConical,
    title: "Practical Learning",
    description:
      "Academic learning is supported through practical activities, laboratory work and application-based education.",
  },
  {
    icon: Library,
    title: "Learning Resources",
    description:
      "Students can access academic resources that support classroom learning, assignments and self-study.",
  },
  {
    icon: GraduationCap,
    title: "Career Focus",
    description:
      "Academic programmes are designed to help students develop knowledge and skills relevant to further studies and careers.",
  },
];

const academicProcess = [
  {
    number: "01",
    title: "Foundation",
    text: "Build strong fundamentals through structured classroom learning.",
  },
  {
    number: "02",
    title: "Application",
    text: "Apply academic concepts through practical activities and projects.",
  },
  {
    number: "03",
    title: "Development",
    text: "Develop communication, analytical and professional skills.",
  },
  {
    number: "04",
    title: "Career",
    text: "Prepare for higher education, professional opportunities and future goals.",
  },
];

const faqs = [
  {
    question: "Which departments are available at the college?",
    answer:
      "The academic structure includes departments such as Management, Computer Applications, Commerce and Science. Programme availability may vary according to the academic session.",
  },
  {
    question: "How can I know which course is right for me?",
    answer:
      "Students should consider their academic background, interests and career goals. The college admission team can also provide programme-specific guidance.",
  },
  {
    question: "Does the college provide practical learning?",
    answer:
      "Academic programmes include practical and application-oriented learning wherever applicable, helping students connect classroom concepts with real-world situations.",
  },
  {
    question: "Can I enquire about a specific department?",
    answer:
      "Yes. You can contact the college or submit an admission enquiry to receive information about a particular department or programme.",
  },
];

export default function AcademicsPage() {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const ActiveIcon = departments[activeDepartment].icon;

  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.90) 45%, rgba(5,8,22,.58) 100%), url('/images/academics/academics-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.16),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <GraduationCap size={17} />
              Academic Excellence
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Academics That
              <span className="block text-[#f4b400]">
                Shape Your Future
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore our departments, programmes and learning opportunities
              designed to build knowledge, practical skills and professional
              confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#departments"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Explore Departments
                <ArrowRight size={18} />
              </a>

              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Admissions 2026–27
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK STATS
      ========================================================= */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(5,8,22,0.12)] lg:grid-cols-4">
          <div className="border-b border-gray-100 p-6 text-center sm:border-r lg:border-b-0">
            <p className="text-3xl font-black text-[#050816]">4+</p>
            <p className="mt-1 text-sm font-semibold text-gray-500">
              Academic Departments
            </p>
          </div>

          <div className="border-b border-gray-100 p-6 text-center lg:border-b-0 lg:border-r">
            <p className="text-3xl font-black text-[#d99e00]">20+</p>
            <p className="mt-1 text-sm font-semibold text-gray-500">
              Academic Programmes
            </p>
          </div>

          <div className="border-r border-gray-100 p-6 text-center sm:border-b-0">
            <p className="text-3xl font-black text-[#050816]">100%</p>
            <p className="mt-1 text-sm font-semibold text-gray-500">
              Learning Focus
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-black text-[#d99e00]">2026–27</p>
            <p className="mt-1 text-sm font-semibold text-gray-500">
              Admissions Open
            </p>
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
              OUR ACADEMIC APPROACH
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              Learn. Apply.
              <span className="block text-[#d99e00]">Grow.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Education is more than completing a syllabus. Our academic
              approach focuses on developing subject knowledge, practical
              understanding, communication skills and the confidence students
              need for their next step.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Through structured academic programmes and supportive learning
              environments, students are encouraged to participate, explore
              ideas and develop professionally.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Structured Curriculum",
                "Practical Exposure",
                "Student Development",
                "Career Preparation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#d99e00]"
                  />
                  <span className="text-sm font-bold text-[#111827]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/academics/academic-learning.jpg"
                alt="Students learning at college"
                className="h-[330px] w-full object-cover sm:h-[430px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <BookOpen size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Academic Philosophy
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Knowledge with Practical Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DEPARTMENTS
      ========================================================= */}
      <section
        id="departments"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ACADEMIC DEPARTMENTS
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Explore Our Departments
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Discover academic disciplines and programmes designed to support
              different interests, strengths and career aspirations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[330px_1fr]">
            {/* Department Navigation */}
            <div className="space-y-3">
              {departments.map((department, index) => {
                const Icon = department.icon;
                const active = activeDepartment === index;

                return (
                  <button
                    key={department.title}
                    type="button"
                    onClick={() => setActiveDepartment(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-[#f4b400] bg-[#050816] text-white shadow-lg"
                        : "border-gray-200 bg-white text-[#111827] hover:border-[#f4b400]/50 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        active
                          ? "bg-[#f4b400] text-[#050816]"
                          : "bg-[#050816]/5 text-[#050816]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold ${
                          active ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Department
                      </p>

                      <p className="mt-1 font-bold">
                        {department.shortTitle}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className={`ml-auto shrink-0 ${
                        active ? "text-[#f4b400]" : "text-gray-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Department Details */}
            <div className="rounded-3xl bg-[#050816] p-7 text-white shadow-xl sm:p-9 lg:p-10">
              <div className="flex flex-col justify-between gap-6 sm:flex-row">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4b400] text-[#050816]">
                  <ActiveIcon size={31} />
                </div>

                <span className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Academic Department
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-extrabold sm:text-3xl">
                {departments[activeDepartment].title}
              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                {departments[activeDepartment].description}
              </p>

              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#f5c542]">
                  Programmes / Areas
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {departments[activeDepartment].courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#f4b400]"
                      />
                      <span className="text-sm font-semibold text-gray-200">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/admission"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Enquire About Admissions
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACADEMIC FEATURES
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
              LEARNING EXPERIENCE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              More Than Classroom Learning
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Students need more than theoretical knowledge. Our academic
              environment encourages practical understanding, professional
              development and continuous learning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {academicFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#f4b400]/15 text-[#b98600]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#050816]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#f4b400] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACADEMIC JOURNEY
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              STUDENT JOURNEY
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Learning to Career
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Develop academic knowledge and practical skills step by step
              throughout your college journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {academicProcess.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4b400] text-sm font-black text-[#050816]">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITIES
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/academics/lab.jpg"
              alt="College laboratory"
              className="h-48 w-full rounded-2xl object-cover sm:h-60"
            />

            <img
              src="/images/academics/classroom.jpg"
              alt="College classroom"
              className="mt-8 h-48 w-full rounded-2xl object-cover sm:h-60"
            />

            <img
              src="/images/academics/library.jpg"
              alt="College library"
              className="-mt-8 h-48 w-full rounded-2xl object-cover sm:h-60"
            />

            <img
              src="/images/academics/students.jpg"
              alt="College students"
              className="h-48 w-full rounded-2xl object-cover sm:h-60"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ACADEMIC ENVIRONMENT
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              An Environment Designed
              <span className="block text-[#d99e00]">
                for Learning & Growth
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              A productive academic environment combines knowledgeable
              faculty, appropriate learning resources, practical exposure and
              opportunities for students to develop their professional skills.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Modern learning spaces",
                "Practical and laboratory exposure",
                "Academic resources",
                "Collaborative student environment",
                "Professional skill development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#d99e00]"
                  />
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#050816] px-6 py-3.5 font-bold text-white transition hover:bg-[#111827]"
            >
              Contact College
              <ArrowRight size={18} />
            </Link>
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
              ACADEMIC FAQ
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Find answers to some common academic questions.
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
          CTA
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f4b400] px-7 py-12 sm:px-10 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#050816]/60">
                Admissions Open 2026–27
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Choose Your Programme. Build Your Future.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#050816]/70">
                Explore our academic programmes and take the first step towards
                your educational and professional goals.
              </p>
            </div>

            <Link
              href="/admission"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#050816] px-7 py-4 font-bold text-white transition hover:bg-[#111827]"
            >
              Apply for Admission
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}