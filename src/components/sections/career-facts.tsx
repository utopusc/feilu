"use client";

import { BorderBeam } from "@/components/ui/border-beam";

const stats = [
  {
    label: "Average Salary",
    prefix: "$",
    value: "40",
    suffix: "k",
    sublabel: "starting pay",
    colorFrom: "#2563eb",
    colorTo: "#0d9488",
  },
  {
    label: "Top Salary",
    prefix: "$",
    value: "61",
    suffix: "k",
    sublabel: "with experience",
    colorFrom: "#0d9488",
    colorTo: "#2563eb",
  },
  {
    label: "Job Growth",
    prefix: "",
    value: "16",
    suffix: "%",
    sublabel: "much faster than average",
    colorFrom: "#2563eb",
    colorTo: "#7c3aed",
  },
  {
    label: "Projected Growth",
    prefix: "",
    value: "19",
    suffix: "%",
    sublabel: "by 2032",
    colorFrom: "#7c3aed",
    colorTo: "#2563eb",
  },
];

export function CareerFacts() {
  return (
    <section id="facts" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Career <span className="text-blue-500">Facts</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          The numbers behind a CMA career — strong pay and growing demand.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <BorderBeam
                colorFrom={stat.colorFrom}
                colorTo={stat.colorTo}
                size={80}
                duration={6}
                delay={idx}
              />
              <p className="mb-1 text-sm font-medium text-gray-400">
                {stat.label}
              </p>
              <div className="text-4xl font-bold text-white">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <p className="mt-1 text-xs text-gray-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
