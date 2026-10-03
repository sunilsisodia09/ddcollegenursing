
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section className="bg-[#092743] px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12 lg:flex-row">
        <div className="flex items-start gap-4">
          <div className="hidden rounded-xl bg-yellow-400 p-4 text-[#103d68] sm:block">
            <GraduationCap size={35} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
              Start Your Journey
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Explore Admission Opportunities
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Review available programs, eligibility requirements and the
              application process before submitting your enquiry.
            </p>
          </div>
        </div>

        <Link
          href="/admission"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-400 px-7 py-4 font-extrabold text-slate-950 transition hover:bg-yellow-300"
        >
          Apply Now <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
}