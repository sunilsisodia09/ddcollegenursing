"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  desktop: string;
  mobile: string;
  alt: string;
};

type ResponsiveImageSliderProps = {
  slides: Slide[];
  interval?: number;
};

export default function ResponsiveImageSlider({
  slides,
  interval = 4000,
}: ResponsiveImageSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop / Laptop Image */}
      <div className="relative hidden h-[450px] w-full lg:block xl:h-[550px]">
        <Image
          key={`desktop-${current}`}
          src={slide.desktop}
          alt={slide.alt}
          fill
          priority={current === 0}
          className="object-cover transition-opacity duration-700"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Mobile Image */}
      <div className="relative block h-[500px] w-full sm:h-[600px] lg:hidden">
        <Image
          key={`mobile-${current}`}
          src={slide.mobile}
          alt={slide.alt}
          fill
          priority={current === 0}
          className="object-cover transition-opacity duration-700"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-yellow-400"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev + 1) % slides.length)
            }
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}