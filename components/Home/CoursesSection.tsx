
import Link from "next/link";
import { ArrowUpRight, BookOpen, HeartPulse, Stethoscope } from "lucide-react";
import SectionTitle from "../SectionTitle";

const courses = [
  {
    title: "B.Sc. Nursing",
    description: "Explore nursing education, patient care principles and healthcare learning.",
    href: "/courses/bsc-nursing",
    icon: HeartPulse,
  },
  {
    title: "GNM",
    description: "Learn about general nursing and midwifery education and clinical practice.",
    href: "/courses/gnm",
    icon: BookOpen,
  },
  {
    title: "Medical Science",
    description: "Explore available medical science programs and academic opportunities.",
    href: "/courses/medical-science",
    icon: Stethoscope,
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Academic Programs"
          title="Explore Our Courses"
          description="Find a program that aligns with your educational interests and professional goals. Confirm current availability and eligibility with the college."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#103d68] transition group-hover:bg-yellow-400">
                  <Icon size={29} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#103d68]">
                  {course.title}
                </h3>

                <p className="mt-3 min-h-[80px] leading-7 text-slate-600">
                  {course.description}
                </p>

                <Link
                  href={course.href}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700 hover:text-[#103d68]"
                >
                  Explore Program <ArrowUpRight size={19} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}