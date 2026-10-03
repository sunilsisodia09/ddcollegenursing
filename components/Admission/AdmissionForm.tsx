
"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      course: String(formData.get("course") || ""),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry right now.");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Your enquiry could not be submitted. Please try again or contact the college directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <h2 className="text-2xl font-extrabold text-[#103d68]">
          Admission Enquiry
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Complete the form to enquire about available programs.
        </p>
      </div>

      {submitted && (
        <div role="status" className="flex items-start gap-2 rounded-lg bg-green-50 p-4 text-sm text-green-800">
          <CheckCircle2 className="shrink-0" size={20} />
          Enquiry submitted successfully.
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="admission-name" className="mb-2 block text-sm font-semibold text-slate-700">
          Student Name *
        </label>
        <input
          id="admission-name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="admission-email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email Address *
          </label>
          <input
            id="admission-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="admission-phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Mobile Number *
          </label>
          <input
            id="admission-phone"
            name="phone"
            type="tel"
            required
            minLength={10}
            maxLength={15}
            autoComplete="tel"
            placeholder="Enter mobile number"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="admission-course" className="mb-2 block text-sm font-semibold text-slate-700">
          Interested Program *
        </label>
        <select
          id="admission-course"
          name="course"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        >
          <option value="" disabled>Select a program</option>
          <option value="B.Sc. Nursing">B.Sc. Nursing</option>
          <option value="GNM">GNM</option>
          <option value="Medical Science">Medical Science</option>
          <option value="Other">Other / Need Guidance</option>
        </select>
      </div>

      <div>
        <label htmlFor="admission-message" className="mb-2 block text-sm font-semibold text-slate-700">
          Message (Optional)
        </label>
        <textarea
          id="admission-message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Tell us what you would like to know..."
          className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-4 font-extrabold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
        {!loading && <Send size={18} />}
      </button>

      <p className="text-xs leading-5 text-slate-500">
        By submitting, you agree to be contacted regarding your admission enquiry.
      </p>
    </form>
  );
}