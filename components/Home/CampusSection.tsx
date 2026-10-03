
"use client";

import Image from "next/image";
import ResponsiveImageSlider from "../Common/ResponsiveImageSlider";

const campusSlides = [
  {
    desktop: "/images/campus/buil.jpg",
    mobile:"/images/campus/buil.jpg",
    alt: "Divya Drishti College Campus",
  },
  
];

export default function CampusSection() {
  return (
    <section className="relative m-0 w-full overflow-hidden p-0">

      {/* College Name Overlay */}
      <div className="absolute left-1/2 top-5 z-20 flex w-full -translate-x-1/2 flex-col items-center px-4 text-center sm:top-8 md:top-10 lg:top-12">

      
<h1
  className="
    mt-14
    text-5xl
    font-extrabold
    uppercase
    leading-none
    tracking-wide
    text-white
    drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]
    sm:mt-24
    sm:text-4xl
    md:mt-24
    md:text-5xl
    lg:mt-28
    lg:text-6xl
  "
>
  DIVYA DRISHTI
</h1>

        <h2
          className="
            mt-2
            top-35
            max-w-7xl
            text-base
            font-bold
            uppercase
            leading-tight
            tracking-wide
            text-white
            drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]
            sm:text-lg
            md:text-2xl
            lg:text-3xl
          "
        >
          COLLEGE OF NURSING &amp; MEDICAL SCIENCE
        </h2>

      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />

      {/* Campus Image Slider */}
      <div className="relative z-0">
        <ResponsiveImageSlider
          slides={campusSlides}
          interval={4000}
        />
      </div>

    </section>
  );
}