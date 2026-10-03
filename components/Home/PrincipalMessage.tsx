
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="bg-[#103d68] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[280px_1fr]">
        <div className="relative mx-auto h-[300px] w-full max-w-[280px] overflow-hidden rounded-2xl border-4 border-white/20 bg-white/10">
          <Image
            src="/images/facilities/prin.webp"
            alt="College principal"
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>

        <div>
          <Quote className="mb-5 text-yellow-400" size={40} />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            Message from the Principal
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            A Commitment to Learning and Care
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
            Our educational vision is to support students in developing
            knowledge, practical understanding, professional responsibility
            and respect for people. We encourage every student to explore
            learning opportunities and prepare for their chosen career.
          </p>
          <p className="mt-6 font-bold text-white">Principal</p>
          <p className="text-sm text-slate-300">Divya Drishti College of Nursing & Medical Science</p>
          <Link href="#" className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-400 hover:text-yellow-300">
            Read More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}