"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const leadershipTeam = [
  {
    name: "Chairman",
    role: "Chairman, Divya Drishti College",
    image: "/images/leadership/chairman.jpg",
    description:
      "Providing strategic direction and supporting the institution's vision for quality education, student development and long-term growth.",
    icon: ShieldCheck,
  },
  {
    name: "Principal",
    role: "Principal",
    image: "/images/leadership/principal.jpg",
    description:
      "Leading academic activities, faculty coordination, student development and the overall academic environment of the institution.",
    icon: GraduationCap,
  },
  {
    name: "Academic Leadership",
    role: "Academic Administration",
    image: "/images/leadership/academic-head.jpg",
    description:
      "Supporting academic planning, curriculum implementation, departmental coordination and continuous improvement in teaching and learning.",
    icon: BookOpen,
  },
];

const values = [
  {
    icon: Target,
    title: "Academic Excellence",
    description:
      "Encouraging high standards of teaching, learning and continuous academic development.",
  },
  {
    icon: Users,
    title: "Student First",
    description:
      "Keeping student learning, development and overall growth at the centre of institutional activities.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Responsibility",
    description:
      "Promoting ethical conduct, accountability, discipline and respect across the college community.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging new ideas, practical learning and approaches that prepare students for a changing world.",
  },
];

const responsibilities = [
  "Strategic institutional planning",
  "Academic quality and development",
  "Faculty and departmental coordination",
  "Student welfare and development",
  "Industry and professional engagement",
  "Campus growth and infrastructure",
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.90) 48%, rgba(5,8,22,.58) 100%), url('/images/leadership/leadership-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.16),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <Users size={17} />
              Leadership & Vision
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Leadership That
              <span className="block text-[#f4b400]">
                Inspires Progress
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Meet the leadership behind Divya Drishti College of Nursing &
              Medical Science and discover the values guiding our academic
              community.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#leadership-team"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Meet Our Leadership
                <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact College
              </Link>
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
              OUR LEADERSHIP
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Building an Institution
              <span className="block text-[#d99e00]">
                Focused on the Future
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Strong educational institutions are built through clear vision,
              responsible leadership and a shared commitment to student
              development.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              At Divya Drishti College, the leadership team works towards
              creating an environment where students can learn, grow and
              prepare for their professional journey.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clear academic direction",
                "Student-focused development",
                "Responsible administration",
                "Continuous institutional improvement",
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
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/leadership/leadership-main.jpg"
                alt="Divya Drishti College leadership"
                className="h-[330px] w-full object-cover sm:h-[440px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Award size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Leadership Philosophy
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Vision • Responsibility • Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP TEAM
      ========================================================= */}
      <section
        id="leadership-team"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              LEADERSHIP TEAM
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Meet Our Leadership
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The leadership team provides direction across academic,
              administrative and institutional activities.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((leader) => {
              const Icon = leader.icon;

              return (
                <div
                  key={leader.name}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden bg-[#050816]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b98600]">
                      {leader.role}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-[#050816]">
                      {leader.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {leader.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#b98600]">
                      Leadership & Administration
                      <ChevronRight size={17} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAIRMAN MESSAGE
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-[#050816] text-white">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative min-h-[350px] lg:min-h-full">
                <img
                  src="/images/leadership/chairman.jpg"
                  alt="Chairman"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-sm font-semibold text-[#f5c542]">
                    Chairman
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold">
                    Message from the Chairman
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-14">
                <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f5c542]">
                  Chairman&apos;s Message
                </span>

                <blockquote className="mt-7 text-xl font-semibold leading-9 text-white sm:text-2xl">
                &quot;Education creates opportunities, develops character and
                  empowers students to contribute meaningfully to society.&quot;
                </blockquote>

                <div className="mt-7 h-px w-16 bg-[#f4b400]" />

                <p className="mt-7 leading-8 text-gray-400">
                  Our aim is to provide students with an educational
                  environment that combines academic learning with discipline,
                  values, practical understanding and professional development.
                </p>

                <p className="mt-4 leading-8 text-gray-400">
                  We remain committed to strengthening the institution and
                  creating opportunities that help students prepare for their
                  future with confidence and responsibility.
                </p>

                <div className="mt-8">
                  <p className="font-bold text-white">Chairman</p>
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
          PRINCIPAL MESSAGE
      ========================================================= */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full bg-[#050816]/5 px-4 py-2 text-sm font-bold text-[#050816]">
              PRINCIPAL&apos;S MESSAGE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl">
              Learning With Purpose,
              <span className="block text-[#d99e00]">
                Growing With Confidence
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our academic environment is focused on helping students develop
              strong subject knowledge, professional skills and a responsible
              attitude towards their future careers.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We encourage students to participate actively in academic and
              co-curricular activities, ask questions, develop new skills and
              make the most of their college experience.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-[#f4b400] bg-white p-6 shadow-sm">
              <p className="font-semibold leading-7 text-[#050816]">
                &quot;Every student has the potential to learn, grow and create a
                meaningful future. Our responsibility is to provide the
                environment and guidance that helps them move forward.&quot;
              </p>

              <p className="mt-4 text-sm font-bold text-[#b98600]">
                — Principal
              </p>
            </div>

            <Link
              href="/academics"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#050816] px-6 py-3.5 font-bold text-white transition hover:bg-[#111827]"
            >
              Explore Academics
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/leadership/principal.jpg"
                alt="Principal"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />
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
              OUR VALUES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Principles That Guide Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our leadership approach is built around values that support
              students, faculty and the wider academic community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#f4b400]/50 hover:shadow-xl"
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
              LEADERSHIP RESPONSIBILITIES
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Working Together for
              <span className="block text-[#d99e00]">
                Institutional Growth
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Effective leadership involves coordination across academic,
              administrative and student-focused activities. Our leadership
              structure works towards maintaining a positive and productive
              educational environment.
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

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/leadership/leadership-team.jpg"
                alt="College leadership team"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#050816]/95 p-6 text-white backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <Users size={24} />
                </div>

                <div>
                  <p className="font-extrabold">
                    One Institution. One Vision.
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Working together for student success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT LEADERSHIP
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
                For academic, admission or institutional enquiries, connect
                with the college team.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <Phone size={19} className="text-[#f4b400]" />
                  <span className="text-sm font-semibold">
                    +91 XXXXX XXXXX
                  </span>
                </a>

                <a
                  href="mailto:info@divyadrishticollege.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <Mail size={19} className="text-[#f4b400]" />
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
                Be Part of Our Academic Community
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