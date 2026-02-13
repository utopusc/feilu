"use client";

import { Globe } from "@/components/ui/globe";
import { BlurFade } from "@/components/ui/blur-fade";
import type { COBEOptions } from "cobe";

const SF_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 2,
  baseColor: [0.15, 0.15, 0.25],
  markerColor: [0.145, 0.388, 0.921],
  glowColor: [0.1, 0.1, 0.2],
  markers: [{ location: [37.7749, -122.4194], size: 0.12 }],
};

export function SanFrancisco() {
  return (
    <section id="location" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Globe */}
          <div className="relative mx-auto aspect-square w-full max-w-[400px]">
            <Globe config={SF_GLOBE_CONFIG} />
          </div>

          {/* Text */}
          <BlurFade delay={0.2} inView>
            <div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Dream Location:{" "}
                <span className="text-blue-500">San Francisco</span>
              </h2>
              <p className="mb-6 text-gray-400">
                San Francisco is where I want to build my career and life. The
                city offers everything I&apos;m looking for.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">🌉</span>
                  <span>
                    <strong className="text-white">Diverse Culture</strong> — A
                    melting pot of people, food, and experiences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">🍜</span>
                  <span>
                    <strong className="text-white">Amazing Food Scene</strong> —
                    Perfect for my culinary passion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">👥</span>
                  <span>
                    <strong className="text-white">Great Coworkers</strong> —
                    Collaborative and supportive healthcare community
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">💰</span>
                  <span>
                    <strong className="text-white">Strong Benefits</strong> —
                    Higher pay and great healthcare benefits in the Bay Area
                  </span>
                </li>
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
