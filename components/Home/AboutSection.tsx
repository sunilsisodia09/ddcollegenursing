
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "../SectionTitle";

const highlights = [
  "Focus on theoretical and practical learning",
  "Student-centered educational environment",
  "Professional and academic development",
  "Learning opportunities in healthcare",
];

export default function AboutSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[460px]">
            <Image
              src="/images/campus/col.jpg"
              alt="Divya Drishti College campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-xl bg-yellow-400 p-5 shadow-xl sm:right-8 sm:p-7">
            <p className="text-2xl font-extrabold text-[#103d68]">Learn</p>
            <p className="text-sm font-semibold text-slate-800">Grow & Serve</p>
          </div>
        </div>

        <div className="pt-4 lg:pl-4">
          <SectionTitle
            eyebrow="About Our College"
            title="Education That Prepares You for Tomorrow"
            description="Discover educational opportunities at Divya Drishti College of Nursing & Medical Science. Learn more about our academic programs, learning environment and student experience."
            align="left"
          />

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-teal-600" size={21} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#103d68] px-6 py-3 font-bold text-white hover:bg-[#0a2e50]"
          >
            Discover Our College <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}