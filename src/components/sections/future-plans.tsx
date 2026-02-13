"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const timelineSteps = [
  {
    icon: "🎓",
    title: "Job Corps",
    description: "Complete CMA training and certification",
  },
  {
    icon: "💼",
    title: "CMA Job",
    description: "Land first CMA position in San Francisco",
  },
  {
    icon: "💰",
    title: "Save Money",
    description: "Build financial stability and independence",
  },
  {
    icon: "✈️",
    title: "Travel USA",
    description: "Explore the country while building my career",
  },
];

export function FuturePlans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <section id="future" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
          Future <span className="text-blue-500">Plans</span>
        </h2>

        <div className="mb-16 text-center">
          <p className="text-xl font-semibold text-blue-400 sm:text-2xl">
            &ldquo;To help people through healthcare while exploring the world
            and following my passions.&rdquo;
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.title}
                ref={stepRefs[idx]}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Animated beams connecting the steps */}
          {stepRefs.slice(0, -1).map((fromRef, idx) => (
            <AnimatedBeam
              key={idx}
              containerRef={containerRef}
              fromRef={fromRef}
              toRef={stepRefs[idx + 1]}
              gradientStartColor="#2563eb"
              gradientStopColor="#0d9488"
              pathColor="rgba(255,255,255,0.1)"
              pathWidth={2}
              curvature={-30}
              duration={4}
              delay={idx * 0.5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
