
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type PageHeroProps = {
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export default function PageHero({
  title,
  description,
  image = "/images/hero/hero-1.jpg",
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#092743] px-5 py-20 sm:px-8 sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#092743] via-[#092743]/90 to-[#092743]/50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-yellow-400">
            <Home size={15} /> Home
          </Link>
          <ChevronRight size={15} />
          <span className="font-semibold text-yellow-400">{title}</span>
        </nav>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {description}
          </p>
        )}

        {breadcrumbs.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            {breadcrumbs.map((item, index) => (
              <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 && <ChevronRight size={14} />}
                {item.href ? (
                  <Link href={item.href} className="hover:text-yellow-400">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}