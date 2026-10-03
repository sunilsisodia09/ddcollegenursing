
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="w-full overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="
          relative flex min-h-[390px] items-center
          bg-[#050816]
          bg-cover bg-center
          md:min-h-[430px]
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,8,22,.97) 0%, rgba(5,8,22,.88) 45%, rgba(5,8,22,.65) 100%), url('/images/contact/contact-bg.jpg')",
        }}
      >
        {/* Golden glow */}
        <div
          className="
            absolute -right-20 top-10
            h-72 w-72
            rounded-full
            bg-[#f4b400]/10
            blur-3xl
          "
        />

        <div
          className="
            relative z-10 mx-auto w-[calc(100%-30px)]
            max-w-[1180px]
            py-20
            md:w-[calc(100%-40px)]
            md:py-24
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-[#f5c542]/50
              bg-[#f5c542]/10
              px-4 py-2
              text-[10px]
              font-extrabold
              tracking-[2px]
              text-[#f5c542]
              sm:text-[11px]
            "
          >
            GET IN TOUCH
          </span>

          {/* Heading */}
          <h1
            className="
              mt-5
              max-w-[900px]
              text-[40px]
              font-extrabold
              leading-[1.05]
              tracking-[-1.5px]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              lg:tracking-[-2.5px]
            "
          >
            Contact{" "}
            <span className="text-[#f5c542]">
              DIVYA DRISHTI
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[650px]
              text-sm
              leading-7
              text-white/75
              sm:text-base
              md:text-[17px]
            "
          >
            Have questions about admissions, courses, campus
            facilities, or anything else? Our team is here to
            help you.
          </p>

          {/* Breadcrumb */}
          <div
            className="
              mt-6
              flex items-center gap-2.5
              text-xs
              text-white/60
              sm:text-sm
            "
          >
            <Link
              href="/"
              className="
                text-[#f5c542]
                transition-colors
                hover:text-white
              "
            >
              Home
            </Link>

            <span>/</span>

            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div
          className="
            mx-auto
            w-[calc(100%-30px)]
            max-w-[1180px]
            md:w-[calc(100%-40px)]
          "
        >
          {/* Section Heading */}
          <div className="mx-auto mb-10 max-w-[720px] text-center sm:mb-14">
            <span
              className="
                mb-3 block
                text-[10px]
                font-extrabold
                tracking-[2px]
                text-[#b98200]
                sm:text-[11px]
              "
            >
              CONTACT US
            </span>

            <h2
              className="
                text-[30px]
                font-bold
                leading-tight
                tracking-[-0.7px]
                text-[#050816]
                sm:text-4xl
                lg:text-5xl
              "
            >
              We’re Here to{" "}
              <strong className="text-[#f4b400]">
                Help You
              </strong>
            </h2>

            <p
              className="
                mx-auto mt-4
                max-w-[650px]
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              Connect with Divya Drishti College of Nursing &
              Medical Science for admissions, academic enquiries
              and campus information.
            </p>
          </div>

          {/* Contact Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {/* Location */}
            <div
              className="
                group flex min-h-[180px] gap-4
                rounded-2xl
                border border-gray-200
                bg-white
                p-5
                shadow-[0_8px_25px_rgba(5,8,22,0.04)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#f4b400]/50
                hover:shadow-[0_20px_45px_rgba(5,8,22,0.09)]
              "
            >
              <div
                className="
                  flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#f4b400]/10
                  text-[#b98200]
                  transition-all
                  duration-300
                  group-hover:bg-[#f4b400]
                  group-hover:text-black
                "
              >
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#050816]">
                  Visit Our Campus
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-gray-500">
                  Divya Drishti College of Nursing & Medical
                  Science
                  <br />
                  Dehradun, Uttarakhand, India
                </p>

                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 inline-flex
                    items-center gap-1.5
                    text-xs font-bold
                    text-[#a87400]
                    transition-all
                    hover:gap-2.5
                    hover:text-[#050816]
                  "
                >
                  Get Directions
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                group flex min-h-[180px] gap-4
                rounded-2xl
                border border-gray-200
                bg-white
                p-5
                shadow-[0_8px_25px_rgba(5,8,22,0.04)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#f4b400]/50
                hover:shadow-[0_20px_45px_rgba(5,8,22,0.09)]
              "
            >
              <div
                className="
                  flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#f4b400]/10
                  text-[#b98200]
                  transition-all
                  duration-300
                  group-hover:bg-[#f4b400]
                  group-hover:text-black
                "
              >
                <Phone size={24} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#050816]">
                  Call Us
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-gray-500">
                  Admission Enquiry
                  <br />
                  +91 XXXXX XXXXX
                </p>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="
                    mt-3 inline-flex
                    items-center gap-1.5
                    text-xs font-bold
                    text-[#a87400]
                    transition-all
                    hover:gap-2.5
                    hover:text-[#050816]
                  "
                >
                  Call Now
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className="
                group flex min-h-[180px] gap-4
                rounded-2xl
                border border-gray-200
                bg-white
                p-5
                shadow-[0_8px_25px_rgba(5,8,22,0.04)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#f4b400]/50
                hover:shadow-[0_20px_45px_rgba(5,8,22,0.09)]
              "
            >
              <div
                className="
                  flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#f4b400]/10
                  text-[#b98200]
                  transition-all
                  duration-300
                  group-hover:bg-[#f4b400]
                  group-hover:text-black
                "
              >
                <Mail size={24} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#050816]">
                  Email Us
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-gray-500">
                  General Enquiry
                  <br />
                  info@divyadrishticollege.com
                </p>

                <a
                  href="mailto:info@divyadrishticollege.com"
                  className="
                    mt-3 inline-flex
                    items-center gap-1.5
                    text-xs font-bold
                    text-[#a87400]
                    transition-all
                    hover:gap-2.5
                    hover:text-[#050816]
                  "
                >
                  Send Email
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div
              className="
                group flex min-h-[180px] gap-4
                rounded-2xl
                border border-gray-200
                bg-white
                p-5
                shadow-[0_8px_25px_rgba(5,8,22,0.04)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#f4b400]/50
                hover:shadow-[0_20px_45px_rgba(5,8,22,0.09)]
              "
            >
              <div
                className="
                  flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#f4b400]/10
                  text-[#b98200]
                  transition-all
                  duration-300
                  group-hover:bg-[#f4b400]
                  group-hover:text-black
                "
              >
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#050816]">
                  Working Hours
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-gray-500">
                  Monday – Saturday
                  <br />
                  9:00 AM – 5:00 PM
                </p>

                <span
                  className="
                    mt-3 inline-block
                    rounded-full
                    bg-green-50
                    px-2.5 py-1
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-green-700
                  "
                >
                  Admissions Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + MAP
      ===================================================== */}
      <section
        className="
          bg-gradient-to-b
          from-slate-50
          to-white
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-[calc(100%-30px)]
            max-w-[1180px]
            grid-cols-1
            gap-12
            md:w-[calc(100%-40px)]
            lg:grid-cols-[1.05fr_.95fr]
            lg:gap-16
          "
        >
          {/* =================================================
              FORM
          ================================================= */}
          <div>
            <div className="mb-7">
              <span
                className="
                  mb-3 block
                  text-[10px]
                  font-extrabold
                  tracking-[2px]
                  text-[#b98200]
                "
              >
                ENQUIRY FORM
              </span>

              <h2
                className="
                  text-[30px]
                  font-bold
                  leading-tight
                  tracking-[-0.7px]
                  text-[#050816]
                  sm:text-4xl
                "
              >
                Have a Question?
                <br />
                <strong className="text-[#f4b400]">
                  Send Us a Message
                </strong>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[570px]
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Fill out the form and our admission team will
                get back to you shortly.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-gray-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="
                      min-h-[50px]
                      w-full
                      rounded-[10px]
                      border border-gray-200
                      bg-white
                      px-4
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      hover:border-gray-300
                      focus:border-[#f4b400]
                      focus:bg-[#fffdf5]
                      focus:ring-4
                      focus:ring-[#f4b400]/10
                    "
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-gray-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="
                      min-h-[50px]
                      w-full
                      rounded-[10px]
                      border border-gray-200
                      bg-white
                      px-4
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      hover:border-gray-300
                      focus:border-[#f4b400]
                      focus:bg-[#fffdf5]
                      focus:ring-4
                      focus:ring-[#f4b400]/10
                    "
                  />
                </div>
              </div>

              {/* Email + Course */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-gray-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="
                      min-h-[50px]
                      w-full
                      rounded-[10px]
                      border border-gray-200
                      bg-white
                      px-4
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      hover:border-gray-300
                      focus:border-[#f4b400]
                      focus:bg-[#fffdf5]
                      focus:ring-4
                      focus:ring-[#f4b400]/10
                    "
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="course"
                    className="text-xs font-bold text-gray-700"
                  >
                    Course Interested In *
                  </label>

                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                    className="
                      min-h-[50px]
                      w-full
                      cursor-pointer
                      rounded-[10px]
                      border border-gray-200
                      bg-white
                      px-4
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      focus:border-[#f4b400]
                      focus:bg-[#fffdf5]
                      focus:ring-4
                      focus:ring-[#f4b400]/10
                    "
                  >
                    <option value="" disabled>
                      Select a course
                    </option>

                    <option value="bsc-nursing">
                      B.Sc. Nursing
                    </option>

                    <option value="gnm">
                      GNM Nursing
                    </option>

                    <option value="anm">
                      ANM
                    </option>

                    <option value="paramedical">
                      Paramedical Courses
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to know?"
                  className="
                    min-h-[50px]
                    w-full
                    rounded-[10px]
                    border border-gray-200
                    bg-white
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#f4b400]
                    focus:bg-[#fffdf5]
                    focus:ring-4
                    focus:ring-[#f4b400]/10
                  "
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-gray-700"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your enquiry here..."
                  required
                  className="
                    min-h-[140px]
                    w-full
                    resize-y
                    rounded-[10px]
                    border border-gray-200
                    bg-white
                    px-4 py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#f4b400]
                    focus:bg-[#fffdf5]
                    focus:ring-4
                    focus:ring-[#f4b400]/10
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-1
                  flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[9px]
                  bg-[#f4b400]
                  px-6
                  py-3
                  text-sm
                  font-extrabold
                  text-black
                  shadow-[0_7px_20px_rgba(244,180,0,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#f5c542]
                  hover:shadow-[0_12px_28px_rgba(244,180,0,0.27)]
                  sm:w-fit
                "
              >
                {submitted ? "Message Sent ✓" : "Send Enquiry"}

                {!submitted && <Send size={18} />}
              </button>

              {/* Success */}
              {submitted && (
                <div
                  className="
                    rounded-[9px]
                    border border-green-200
                    bg-green-50
                    px-4 py-3
                    text-xs
                    leading-6
                    text-green-700
                  "
                >
                  Thank you! Your enquiry has been submitted
                  successfully. Our team will contact you soon.
                </div>
              )}
            </form>
          </div>

          {/* =================================================
              MAP
          ================================================= */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-white
              p-4
              shadow-[0_18px_50px_rgba(5,8,22,0.07)]
              sm:p-6
            "
          >
            <div className="mb-5">
              <span
                className="
                  mb-3 block
                  text-[10px]
                  font-extrabold
                  tracking-[2px]
                  text-[#b98200]
                "
              >
                OUR LOCATION
              </span>

              <h3
                className="
                  text-[27px]
                  font-bold
                  leading-tight
                  tracking-[-0.7px]
                  text-[#050816]
                  sm:text-3xl
                "
              >
                Find Us{" "}
                <strong className="text-[#f4b400]">
                  on the Map
                </strong>
              </h3>
            </div>

            {/* Map */}
            <div
              className="
                h-[280px]
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-200
                sm:h-[350px]
                lg:h-[390px]
              "
            >
              <iframe
                title="Divya Drishti College Location"
                src="https://www.google.com/maps?q=Dehradun,Uttarakhand&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>

            {/* Address */}
            <div
              className="
                mt-4
                flex
                items-center
                gap-3
                border-t border-gray-100
                pt-4
              "
            >
              <div
                className="
                  flex
                  h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-[10px]
                  bg-[#f4b400]/10
                  text-[#b98200]
                "
              >
                <MapPin size={19} />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#050816]">
                  Divya Drishti College
                </h4>

                <p className="mt-0.5 text-xs text-gray-500">
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#050816] py-16 sm:py-20">
        {/* Decorative circles */}
        <div
          className="
            absolute
            -right-24
            -top-64
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#f4b400]/10
          "
        />

        <div
          className="
            absolute
            -bottom-52
            left-[5%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#f4b400]/5
          "
        />

        <div
          className="
            relative z-10
            mx-auto
            flex
            w-[calc(100%-30px)]
            max-w-[1180px]
            flex-col
            items-start
            gap-8
            md:w-[calc(100%-40px)]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-10
          "
        >
          <div>
            <span
              className="
                mb-3 block
                text-[10px]
                font-extrabold
                tracking-[2px]
                text-[#f5c542]
              "
            >
              START YOUR JOURNEY
            </span>

            <h2
              className="
                text-[30px]
                font-bold
                leading-tight
                tracking-[-0.7px]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Ready to Build Your
              <br />
              <strong className="text-[#f5c542]">
                Future in Healthcare?
              </strong>
            </h2>

            <p
              className="
                mt-4
                max-w-[600px]
                text-sm
                leading-7
                text-white/70
              "
            >
              Take the first step towards a rewarding career
              in nursing and medical sciences.
            </p>
          </div>

          <Link
            href="/admission"
            className="
              flex
              min-h-[51px]
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-[9px]
              bg-[#f4b400]
              px-6
              py-3.5
              text-sm
              font-extrabold
              text-black
              shadow-[0_8px_22px_rgba(244,180,0,0.18)]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-[#f5c542]
              hover:shadow-[0_13px_30px_rgba(244,180,0,0.25)]
              sm:w-fit
            "
          >
            Apply for Admission
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

