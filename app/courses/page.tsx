"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  Gavel,
  Leaf,
  Library,
  Microscope,
  Search,
  Stethoscope,
  Users,
  Scale,
  Dumbbell,
} from "lucide-react";
import { useMemo, useState } from "react";

type Course = {
  name: string;
  level: "UG" | "PG" | "Diploma";
};

type Department = {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  description: string;
  courses: Course[];
};

const departments: Department[] = [
  {
    id: "science",
    name: "Department of Science",
    shortName: "Science",
    icon: Microscope,
    description:
      "Explore undergraduate and postgraduate programmes across physical, mathematical and biological sciences.",
    courses: [
      { name: "B.Sc. (C.B.Z)", level: "UG" },
      { name: "B.Sc. (P.C.M)", level: "UG" },
      { name: "M.Sc. Physics", level: "PG" },
      { name: "M.Sc. Chemistry", level: "PG" },
      { name: "M.Sc. Mathematics", level: "PG" },
      { name: "M.Sc. Zoology", level: "PG" },
      { name: "M.Sc. Botany", level: "PG" },
    ],
  },
  {
    id: "agro-science",
    name: "Department of Agro Science",
    shortName: "Agro Science",
    icon: Leaf,
    description:
      "Programmes focused on agriculture, horticulture and modern agricultural practices.",
    courses: [
      { name: "B.Sc. Agriculture (Hons.)", level: "UG" },
      { name: "M.Sc. Horticulture", level: "PG" },
      { name: "M.Sc. Agronomy", level: "PG" },
    ],
  },
  {
    id: "health-sciences",
    name: "Department of Health Sciences",
    shortName: "Health Sciences",
    icon: Stethoscope,
    description:
      "Professional healthcare programmes designed to develop practical knowledge and skills.",
    courses: [
      { name: "GNM Nursing", level: "Diploma" },
      { name: "D.Pharma", level: "Diploma" },
    ],
  },
  {
    id: "commerce-management",
    name: "Department of Commerce & Management",
    shortName: "Commerce & Management",
    icon: BriefcaseBusiness,
    description:
      "Build foundations in commerce, business administration, management and finance.",
    courses: [
      { name: "B.Com", level: "UG" },
      { name: "B.Com (Hons.)", level: "UG" },
      { name: "BBA", level: "UG" },
      { name: "M.Com", level: "PG" },
    ],
  },
  {
    id: "humanities",
    name: "Department of Humanity & Social Sciences",
    shortName: "Humanities",
    icon: Library,
    description:
      "Develop critical thinking, communication, social understanding and academic knowledge.",
    courses: [
      { name: "B.A", level: "UG" },
      { name: "M.A. (English)", level: "PG" },
      { name: "M.A. (History)", level: "PG" },
      { name: "M.A. (Political Science)", level: "PG" },
    ],
  },
  {
    id: "law",
    name: "Department of Law",
    shortName: "Law",
    icon: Gavel,
    description:
      "Academic programmes focused on legal knowledge, reasoning and professional understanding.",
    courses: [
      { name: "B.A. L.L.B", level: "UG" },
      { name: "L.L.B", level: "UG" },
    ],
  },
  {
    id: "education",
    name: "Department of Education",
    shortName: "Education",
    icon: GraduationCap,
    description:
      "Professional education designed for students interested in teaching and educational practice.",
    courses: [
      { name: "B.Ed", level: "UG" },
    ],
  },
  {
    id: "computer-science",
    name: "Department of Computer Science",
    shortName: "Computer Science",
    icon: Code2,
    description:
      "Technology-focused programmes covering computer applications, information technology and computer science.",
    courses: [
      { name: "B.Sc. Computer Science", level: "UG" },
      { name: "BCA", level: "UG" },
      { name: "B.Sc. IT", level: "UG" },
    ],
  },
  {
    id: "yoga",
    name: "Department of Yoga",
    shortName: "Yoga",
    icon: Dumbbell,
    description:
      "Programmes focused on yoga studies, wellness, practice and academic understanding.",
    courses: [
      { name: "B.A. (Yoga)", level: "UG" },
      { name: "P.G. Diploma in Yoga", level: "PG" },
      { name: "M.A. (Yoga)", level: "PG" },
    ],
  },
];

const allCourses = departments.flatMap((department) =>
  department.courses.map((course) => ({
    ...course,
    department: department.name,
    departmentId: department.id,
    icon: department.icon,
  })),
);

export default function CoursesPage() {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [activeLevel, setActiveLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesDepartment =
        activeDepartment === "all" ||
        course.departmentId === activeDepartment;

      const matchesLevel =
        activeLevel === "All" || course.level === activeLevel;

      const matchesSearch =
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.department.toLowerCase().includes(search.toLowerCase());

      return matchesDepartment && matchesLevel && matchesSearch;
    });
  }, [activeDepartment, activeLevel, search]);

  const totalCourses = allCourses.length;

  const ugCourses = allCourses.filter(
    (course) => course.level === "UG",
  ).length;

  const pgCourses = allCourses.filter(
    (course) => course.level === "PG",
  ).length;

  const diplomaCourses = allCourses.filter(
    (course) => course.level === "Diploma",
  ).length;

  return (
    <main className="min-h-screen bg-white text-[#111827]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#050816]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.98) 0%, rgba(5,8,22,.90) 50%, rgba(5,8,22,.58) 100%), url('/images/courses/courses-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,180,0,.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b400]/40 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
              <BookOpen size={17} />
              Academic Programmes
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore All
              <span className="block text-[#f4b400]">
                Courses & Programmes
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Discover undergraduate, postgraduate and professional programmes
              offered across different academic departments at D.D. College,
              Dehradun.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
              >
                Explore Courses
                <ArrowRight size={18} />
              </a>

              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Apply Now
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative z-10 -mt-12 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl md:grid-cols-4">

          <div className="border-b border-r border-gray-200 p-6 text-center md:border-b-0">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              {totalCourses}+
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Listed Programmes
            </p>
          </div>

          <div className="border-b border-gray-200 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              {ugCourses}
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              UG Programmes
            </p>
          </div>

          <div className="border-r border-gray-200 p-6 text-center">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              {pgCourses}
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              PG Programmes
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-black text-[#050816] sm:text-4xl">
              {diplomaCourses}
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-500">
              Diploma Programmes
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
              FIND YOUR PROGRAMME
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#050816] sm:text-4xl lg:text-5xl">
              Choose a Course That
              <span className="block text-[#d99e00]">
                Fits Your Future
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              D.D. College offers programmes across science, agriculture,
              health sciences, commerce, management, humanities, law,
              education, computer science and yoga.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Browse the programmes below by department or use the search and
              level filters to find the course you are interested in.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Undergraduate programmes",
                "Postgraduate programmes",
                "Professional programmes",
                "Multiple academic departments",
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

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-[#050816] shadow-2xl">
              <img
                src="/images/courses/courses-main.jpg"
                alt="Students studying at D.D. College"
                className="h-[350px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Admissions
                  </p>

                  <p className="mt-1 font-extrabold text-[#050816]">
                    Explore • Choose • Apply
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          COURSES
      ========================================================= */}
      <section
        id="courses"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ALL PROGRAMMES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Find Your Course
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Search through the currently listed academic programmes and
              explore the department that matches your interests.
            </p>

          </div>

          {/* SEARCH */}
          <div className="mx-auto mt-10 max-w-2xl">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search course or department..."
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-5 text-sm font-medium text-gray-800 outline-none transition focus:border-[#f4b400] focus:ring-4 focus:ring-[#f4b400]/10"
              />

            </div>

          </div>

          {/* LEVEL FILTER */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">

            {["All", "UG", "PG", "Diploma"].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeLevel === level
                    ? "bg-[#050816] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#f4b400]"
                }`}
              >
                {level === "All"
                  ? "All Levels"
                  : level === "UG"
                    ? "Undergraduate"
                    : level === "PG"
                      ? "Postgraduate"
                      : "Diploma"}
              </button>
            ))}

          </div>

          {/* DEPARTMENT FILTER */}
          <div className="mt-8 overflow-x-auto pb-3">
            <div className="flex min-w-max justify-center gap-2">

              <button
                type="button"
                onClick={() => setActiveDepartment("all")}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                  activeDepartment === "all"
                    ? "bg-[#f4b400] text-[#050816]"
                    : "bg-white text-gray-600 shadow-sm hover:bg-[#f4b400]/10"
                }`}
              >
                All Departments
              </button>

              {departments.map((department) => {
                const Icon = department.icon;

                return (
                  <button
                    key={department.id}
                    type="button"
                    onClick={() => setActiveDepartment(department.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                      activeDepartment === department.id
                        ? "bg-[#f4b400] text-[#050816]"
                        : "bg-white text-gray-600 shadow-sm hover:bg-[#f4b400]/10"
                    }`}
                  >
                    <Icon size={16} />
                    {department.shortName}
                  </button>
                );
              })}

            </div>
          </div>

          {/* RESULTS */}
          <div className="mt-10">

            {filteredCourses.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {filteredCourses.map((course, index) => {
                  const Icon = course.icon;

                  return (
                    <div
                      key={`${course.name}-${course.department}-${index}`}
                      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/60 hover:shadow-xl"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#050816] text-[#f4b400] transition group-hover:bg-[#f4b400] group-hover:text-[#050816]">
                          <Icon size={23} />
                        </div>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            course.level === "UG"
                              ? "bg-blue-50 text-blue-700"
                              : course.level === "PG"
                                ? "bg-purple-50 text-purple-700"
                                : "bg-green-50 text-green-700"
                          }`}
                        >
                          {course.level}
                        </span>

                      </div>

                      <h3 className="mt-6 text-xl font-extrabold text-[#050816]">
                        {course.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-gray-500">
                        {course.department}
                      </p>

                      <div className="mt-6 h-px bg-gray-100" />

                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {course.level === "UG"
                            ? "Undergraduate"
                            : course.level === "PG"
                              ? "Postgraduate"
                              : "Diploma"}
                        </span>

                        <Link
                          href="/admission"
                          className="inline-flex items-center gap-1 text-sm font-bold text-[#b98600] transition hover:text-[#050816]"
                        >
                          Apply
                          <ChevronRight size={17} />
                        </Link>

                      </div>

                    </div>
                  );
                })}

              </div>
            ) : (
              <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
                  <Search size={28} />
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-[#050816]">
                  No course found
                </h3>

                <p className="mt-3 text-gray-500">
                  Try another course name, department or programme level.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveDepartment("all");
                    setActiveLevel("All");
                  }}
                  className="mt-6 rounded-xl bg-[#050816] px-6 py-3 font-bold text-white"
                >
                  Reset Filters
                </button>

              </div>
            )}

          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-[#050816]">
              {filteredCourses.length}
            </span>{" "}
            programme{filteredCourses.length !== 1 ? "s" : ""}
          </p>

        </div>
      </section>

      {/* =========================================================
          DEPARTMENTS
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#b98600]">
              ACADEMIC DEPARTMENTS
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#050816] sm:text-4xl">
              Explore Our Departments
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Discover the academic areas available at D.D. College.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <button
                  key={department.id}
                  type="button"
                  onClick={() => {
                    setActiveDepartment(department.id);
                    setSearch("");
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group text-left"
                >

                  <div className="h-full rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f4b400]/60 hover:shadow-xl">

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4b400]/15 text-[#b98600] transition group-hover:bg-[#f4b400] group-hover:text-[#050816]">
                        <Icon size={27} />
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition group-hover:bg-[#050816] group-hover:text-white">
                        <ArrowRight size={17} />
                      </span>

                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-[#050816]">
                      {department.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {department.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#b98600]">
                      {department.courses.length} programme
                      {department.courses.length !== 1 ? "s" : ""}
                      <ChevronRight size={17} />
                    </div>

                  </div>

                </button>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="bg-[#050816] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <span className="inline-flex rounded-full border border-[#f4b400]/30 bg-[#f4b400]/10 px-4 py-2 text-sm font-bold text-[#f5c542]">
                START YOUR JOURNEY
              </span>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Found Your Course?
                <span className="block text-[#f4b400]">
                  Take the Next Step.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                Explore the admission process, check the requirements and
                submit your enquiry to begin your admission journey.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Choose your preferred programme",
                  "Check admission requirements",
                  "Submit your application or enquiry",
                  "Connect with the admission team",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-sm font-black text-[#050816]">
                      {index + 1}
                    </div>

                    <span className="font-semibold text-gray-200">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4b400] px-6 py-3.5 font-bold text-[#050816] transition hover:bg-[#f5c542]"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/courses/admission.jpg"
                  alt="D.D. College students"
                  className="h-[350px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#050816]/95 p-6 backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4b400] text-[#050816]">
                    <GraduationCap size={24} />
                  </div>

                  <div>
                    <p className="font-extrabold text-white">
                      Admissions Open 2026–27
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Explore your academic opportunities.
                    </p>
                  </div>

                </div>

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
                D.D. COLLEGE DEHRADUN
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#050816] sm:text-4xl">
                Choose Your Course. Build Your Future.
              </h2>

              <p className="mt-4 leading-7 text-[#050816]/70">
                Explore programmes, connect with the college and take the next
                step towards your academic goals.
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