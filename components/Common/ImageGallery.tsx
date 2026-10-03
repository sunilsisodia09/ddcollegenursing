
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images?: GalleryImage[];
};

const defaultImages: GalleryImage[] = [
  { src: "/images/gallery/campus-1.jpg", alt: "College campus" },
  { src: "/images/gallery/lab-1.jpg", alt: "Learning laboratory" },
  { src: "/images/gallery/students-1.jpg", alt: "Student activities" },
  { src: "/images/gallery/library-1.jpg", alt: "Library and study space" },
  { src: "/images/gallery/campus-2.jpg", alt: "College building" },
  { src: "/images/gallery/events-1.jpg", alt: "College event" },
];

export default function ImageGallery({ images = defaultImages }: ImageGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  if (images.length === 0) {
    return <p className="py-10 text-center text-slate-500">No gallery images available.</p>;
  }

  function previous() {
    setSelected((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  }

  function next() {
    setSelected((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            onClick={() => setSelected(index)}
            aria-label={`View ${image.alt}`}
            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-left text-sm font-semibold text-white">
              {image.alt}
            </span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelected(null);
            if (event.key === "ArrowLeft") previous();
            if (event.key === "ArrowRight") next();
          }}
          tabIndex={-1}
          ref={(node) => node?.focus()}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={previous}
            className="absolute left-2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative h-[75vh] w-full max-w-5xl">
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>

          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white">
            {images[selected].alt} · {selected + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}