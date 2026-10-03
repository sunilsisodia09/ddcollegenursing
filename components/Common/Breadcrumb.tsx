
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" aria-label="Home" className="inline-flex items-center gap-1 hover:text-[#103d68]">
            <Home size={16} /> Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            <ChevronRight size={15} />
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#103d68]">{item.label}</Link>
            ) : (
              <span aria-current={index === items.length - 1 ? "page" : undefined} className={index === items.length - 1 ? "font-semibold text-[#103d68]" : ""}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}