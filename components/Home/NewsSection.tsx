
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import SectionTitle from "../SectionTitle";

const news = [
  {
    date: "Admissions",
    title: "Admission Information",
    description: "Explore admission procedures and learn which documents may be required.",
    href: "/admission",
  },
  {
    date: "Academics",
    title: "Course Information",
    description: "Discover course details, eligibility requirements and academic options.",
    href: "/courses",
  },
  {
    date: "Announcements",
    title: "College Notices",
    description: "Visit the notices section for verified announcements and updates.",
    href: "/notices",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Stay Informed"
          title="Latest News & Updates"
          description="Check the college website for official admission information, academic updates and announcements."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-7 transition hover:border-teal-300 hover:shadow-lg">
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                {item.date === "Announcements" ? <FileText size={17} /> : <CalendarDays size={17} />}
                {item.date}
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#103d68]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-[#103d68] hover:text-teal-700">
                Read More <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}