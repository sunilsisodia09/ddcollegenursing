import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life | Divya Drishti College of Nursing",
  description:
    "Explore campus life, facilities, activities and student experiences at Divya Drishti College of Nursing.",
};

export default function CampusLifePage() {
  return (
    <main>
      <section className="min-h-screen py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold">
            Campus Life
          </h1>

          <p className="mt-4">
            Discover campus life at Divya Drishti College of Nursing.
          </p>
        </div>
      </section>
    </main>
  );
}