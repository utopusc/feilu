"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#2563eb"
        size={0.6}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <AnimatedGradientText
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          colorFrom="#2563eb"
          colorTo="#0d9488"
          speed={1.5}
        >
          My Career Plan
        </AnimatedGradientText>

        <div className="h-16 flex items-center">
          <TypingAnimation
            className="text-2xl font-medium text-gray-300 sm:text-3xl"
            duration={80}
            words={["Fei Lu", "Certified Medical Assistant", "Future CMA"]}
            loop
          />
        </div>

        <p className="mt-2 max-w-md text-base text-gray-400 sm:text-lg">
          My journey through Job Corps to a career in healthcare
        </p>

        <ShimmerButton
          className="mt-6 text-base font-semibold"
          shimmerColor="#2563eb"
          background="rgba(37, 99, 235, 0.15)"
          onClick={scrollToAbout}
        >
          Explore My Plan
        </ShimmerButton>
      </div>
    </section>
  );
}
