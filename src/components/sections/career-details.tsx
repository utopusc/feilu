"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";

const duties = [
  "Taking patient vitals (blood pressure, temperature, pulse)",
  "Drawing blood and collecting specimens",
  "Performing EKGs and basic lab tests",
  "Administering injections and medications",
  "Preparing patients for examinations",
  "Updating patient medical records",
  "Scheduling appointments and managing front desk",
  "Sterilizing medical instruments",
];

export function CareerDetails() {
  return (
    <section id="career" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inView>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Career <span className="text-blue-500">Details</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            What does a Certified Medical Assistant do day-to-day?
          </p>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-3">
          <BlurFade delay={0.15} inView>
            <MagicCard
              className="rounded-xl border border-white/10"
              gradientColor="#1e3a5f"
              gradientFrom="#2563eb"
              gradientTo="#0d9488"
            >
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-xl">
                  📋
                </div>
                <h3 className="mb-2 text-lg font-semibold text-blue-400">
                  Job Description
                </h3>
                <p className="text-sm text-gray-300">
                  CMAs perform clinical and administrative tasks in healthcare
                  settings. From taking vitals to drawing blood, performing EKGs,
                  and administering injections — every day is hands-on patient
                  care.
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <MagicCard
              className="rounded-xl border border-white/10"
              gradientColor="#1e3a5f"
              gradientFrom="#2563eb"
              gradientTo="#0d9488"
            >
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-xl">
                  🏢
                </div>
                <h3 className="mb-2 text-lg font-semibold text-blue-400">
                  Work Environment
                </h3>
                <p className="text-sm text-gray-300">
                  Fast-paced clinics, hospitals, and medical offices. Work
                  alongside doctors, nurses, and other healthcare pros as part of
                  a team dedicated to patient care.
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <MagicCard
              className="rounded-xl border border-white/10"
              gradientColor="#1e3a5f"
              gradientFrom="#2563eb"
              gradientTo="#0d9488"
            >
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-xl">
                  🛡️
                </div>
                <h3 className="mb-2 text-lg font-semibold text-blue-400">
                  Safety & Training
                </h3>
                <p className="text-sm text-gray-300">
                  Proper PPE usage, infection control, OSHA regulations, and
                  ongoing training ensure a safe workplace. Job Corps provides
                  the foundational training needed.
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        </div>

        {/* Animated Duties List */}
        <BlurFade delay={0.4} inView>
          <div className="mx-auto mt-12 max-w-xl">
            <h3 className="mb-6 text-center text-xl font-semibold text-gray-200">
              Daily Duties
            </h3>
            <AnimatedList delay={800} className="max-h-[400px]">
              {duties.map((duty, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-gray-300">{duty}</span>
                </div>
              ))}
            </AnimatedList>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
