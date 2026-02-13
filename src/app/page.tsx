import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { CareerDetails } from "@/components/sections/career-details";
import { CareerFacts } from "@/components/sections/career-facts";
import { SanFrancisco } from "@/components/sections/san-francisco";
import { CareerStandards } from "@/components/sections/career-standards";
import { FuturePlans } from "@/components/sections/future-plans";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerDetails />
        <CareerFacts />
        <SanFrancisco />
        <CareerStandards />
        <FuturePlans />
      </main>
      <Footer />
    </>
  );
}
