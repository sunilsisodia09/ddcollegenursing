"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  {
    label: "About College",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Leadership", href: "/leadership" },
      { label: "Chairman", href: "/leadership/chairman" },
      // { label: "Principal", href: "/leadership/principal" },
      // { label: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
      // { label: "GNM", href: "/courses/gnm" },
      { label: "Medical Science", href: "/courses/medical-science" },
      // { label: "Faculty", href: "/faculty" },
    ],
  },
  // {
  //   label: "Campus Life",
  //   href: "/campus-life",
  //   children: [
  //     { label: "Campus Life", href: "/campus-life" },
  //     { label: "Facilities", href: "/facilities" },
  //     { label: "Gallery", href: "/gallery" },
  //   ],
  // },
  // { label: "News & Notices", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-md">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo + College Name */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          {/* Logo */}
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
            <Image
              src="/images/campus/college.png"
              alt="Divya Drishti College Logo"
              fill
              priority
              className="object-contain"
              sizes="124px"
            />
          </div>

          {/* College Name */}
          <div className="min-w-0">
            <span className="block text-sm font-extrabold leading-tight text-[#103d68] sm:text-lg">
              DIVYA DRISHTI
            </span>

            <span className="block max-w-[240px] text-[9px] font-semibold leading-tight text-slate-600 sm:max-w-none sm:text-xs">
              COLLEGE OF NURSING & MEDICAL SCIENCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#103d68]"
              >
                {item.label}

                {item.children && <ChevronDown size={15} />}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-2 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:pl-6 hover:text-[#103d68]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Apply Button */}
        <Link
          href="/admission"
          className="hidden shrink-0 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-300 lg:inline-flex"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-200 p-2 text-[#103d68] lg:hidden"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-slate-100">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 py-3 font-semibold text-slate-700"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label}`}
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu(
                        openMenu === item.label ? null : item.label
                      )
                    }
                    className="p-3 text-[#103d68]"
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.children && openMenu === item.label && (
                <div className="mb-3 ml-3 border-l-2 border-yellow-400 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMenu(null);
                      }}
                      className="block py-2.5 text-sm text-slate-600 transition hover:text-[#103d68]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Apply Button */}
          <Link
            href="/admission"
            onClick={() => {
              setMobileOpen(false);
              setOpenMenu(null);
            }}
            className="mt-4 block rounded-lg bg-yellow-400 px-5 py-3 text-center font-bold text-slate-900"
          >
            Apply for Admission
          </Link>
        </nav>
      )}
    </header>
  );
}