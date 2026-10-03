"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#050816]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="DD College Campus"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-[#050816]/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">
            Admissions Open 2026–27
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Shape Your Future
            <span className="mt-2 block text-yellow-400">
              With the Right Education
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 lg:text-lg">
            Discover quality education, modern facilities, experienced
            faculty and career-focused programs designed to help you
            build a successful future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-[#050816] transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 sm:text-base"
            >
              Apply Now
            </Link>

            <Link
              href="/courses"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:text-base"
            >
              Explore Courses
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-200 sm:text-sm">
            <span>25+ Years of Excellence</span>

            <span className="hidden text-yellow-400 sm:block">•</span>

            <span>9+ Departments</span>

            <span className="hidden text-yellow-400 sm:block">•</span>

            <span>8000+ Students</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}