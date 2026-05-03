import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <Features />
      <Proof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
