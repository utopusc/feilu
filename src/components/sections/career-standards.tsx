"use client";

import { Marquee } from "@/components/ui/marquee";

const standards = [
  {
    title: "Workplace Relationships",
    icon: "🤝",
    description: "Building trust and teamwork with colleagues",
  },
  {
    title: "Communications",
    icon: "💬",
    description: "Clear and effective communication skills",
  },
  {
    title: "Personal Growth",
    icon: "🌱",
    description: "Continuous self-improvement and learning",
  },
  {
    title: "Interpersonal Skills",
    icon: "👥",
    description: "Connecting with patients and coworkers",
  },
  {
    title: "Info Management",
    icon: "📊",
    description: "Organizing and managing patient data",
  },
  {
    title: "Multicultural Awareness",
    icon: "🌍",
    description: "Respecting diverse backgrounds and cultures",
  },
  {
    title: "Independent Living",
    icon: "🏠",
    description: "Managing finances and personal responsibilities",
  },
  {
    title: "Career Planning",
    icon: "🎯",
    description: "Setting and achieving career milestones",
  },
];

function StandardCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <div className="mx-2 flex w-64 flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}

export function CareerStandards() {
  return (
    <section id="standards" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Career Success{" "}
          <span className="text-blue-500">Standards</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          The 8 Job Corps Career Success Standards that guide my professional
          development.
        </p>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {standards.map((standard) => (
              <StandardCard key={standard.title} {...standard} />
            ))}
          </Marquee>

          <Marquee pauseOnHover reverse className="mt-4 [--duration:30s]">
            {standards.map((standard) => (
              <StandardCard key={standard.title} {...standard} />
            ))}
          </Marquee>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a]" />
        </div>
      </div>
    </section>
  );
}
