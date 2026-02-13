"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.1} inView>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Why These <span className="text-blue-500">Careers</span>?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Two passions drive my career goals — helping people through
            healthcare and expressing creativity through cooking.
          </p>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2">
          {/* CMA Card */}
          <BlurFade delay={0.2} inView>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8">
              <BorderBeam
                colorFrom="#2563eb"
                colorTo="#0d9488"
                size={120}
                duration={8}
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
                🏥
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-400">
                Certified Medical Assistant
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  Great entry into the healthcare field
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  Good pay and benefits
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  Helping people every day
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  Opportunities for advancement
                </li>
              </ul>
            </div>
          </BlurFade>

          {/* Culinary Card */}
          <BlurFade delay={0.3} inView>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8">
              <BorderBeam
                colorFrom="#0d9488"
                colorTo="#2563eb"
                size={120}
                duration={8}
                delay={2}
              />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-2xl">
                🍳
              </div>
              <h3 className="mb-3 text-xl font-semibold text-teal-400">
                Culinary Arts
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Passion for cooking and food
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Creative and hands-on career
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Always in demand
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Opportunity to open own restaurant
                </li>
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
