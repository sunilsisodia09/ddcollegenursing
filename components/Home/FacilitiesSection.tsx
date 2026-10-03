
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";

const facilities = [
  { title: "Learning Laboratories", image: "/images/facilities/lab.webp" },
  { title: "Campus Infrastructure", image: "/images/campus/building.jpg" },
  { title: "Library & Study Areas", image: "/images/campus/lib.jpg" },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Campus Resources"
          title="Explore Our Facilities"
          description="Learn more about campus spaces and educational resources. Add verified photographs of the college's actual facilities."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article key={facility.title} className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 bg-slate-200">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-6">
                <h3 className="text-lg font-bold text-[#103d68]">{facility.title}</h3>
                <ArrowRight className="shrink-0 text-teal-600" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-[#103d68] px-6 py-3 font-bold text-white hover:bg-[#0a2e50]">
            View Infrastructure <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}