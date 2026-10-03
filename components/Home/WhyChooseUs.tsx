
import { BookOpenCheck, FlaskConical, HeartHandshake, Users } from "lucide-react";
import SectionTitle from "../SectionTitle";

const benefits = [
  {
    icon: BookOpenCheck,
    title: "Academic Learning",
    text: "Structured learning opportunities and academic development.",
  },
  {
    icon: FlaskConical,
    title: "Practical Learning",
    text: "Explore laboratory and practical learning opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Care Values",
    text: "Understand empathy, responsibility and patient-centered care.",
  },
  {
    icon: Users,
    title: "Student Community",
    text: "Participate in educational activities and student experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our Learning Approach"
          title="A Learning Environment for Future Healthcare Professionals"
          description="Discover the academic, practical and personal development opportunities available to students."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-7 transition hover:border-teal-200 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#103d68] text-white">
                  <Icon size={27} />
                </div>
                <h3 className="text-lg font-bold text-[#103d68]">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}