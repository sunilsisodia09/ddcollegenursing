
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../SectionTitle";

const images = [
  { src: "/images/gallery/campus-1.jpg", alt: "College campus" },
  { src: "/images/gallery/lab-1.jpg", alt: "Learning laboratory" },
  { src: "/images/gallery/students-1.jpg", alt: "Student activities" },
  { src: "/images/gallery/library-1.jpg", alt: "Library and study space" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Photo Gallery"
          title="A Glimpse of College Life"
          description="Explore photographs of the campus, learning facilities and student activities."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((item) => (
            <Link
              key={item.src}
              href="/gallery"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092743]/70 to-transparent opacity-70 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-sm font-bold text-white">
                {item.alt}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/gallery" className="inline-flex items-center gap-2 rounded-lg bg-[#103d68] px-6 py-3 font-bold text-white hover:bg-[#0a2e50]">
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}