
import { BookOpen, GraduationCap, HeartPulse, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "01", label: "Learning Community" },
  { icon: BookOpen, value: "Explore", label: "Academic Programs" },
  { icon: HeartPulse, value: "Care", label: "Healthcare Learning" },
  { icon: Users, value: "Grow", label: "Student Development" },
];

export default function Statistics() {
  return (
    <section className="bg-yellow-400 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="text-center">
              <Icon className="mx-auto mb-3 text-[#103d68]" size={32} />
              <p className="text-2xl font-extrabold text-[#103d68] sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}