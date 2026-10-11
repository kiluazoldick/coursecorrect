import { Navbar } from "@/components/public/Navbar";
import { Hero } from "@/components/public/Hero";
import { FeaturesGrid } from "@/components/public/FeaturesGrid";
import { Steps } from "@/components/public/Steps";
import { TariqChat } from "@/components/public/TariqChat";
import { Pricing } from "@/components/public/Pricing";
import { Testimonials } from "@/components/public/Testimonials";
import { FinalCTA } from "@/components/public/FinalCTA";
import { Footer } from "@/components/public/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#15131c] text-[#413d4a] dark:text-[#cdc7d8]">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <Steps />
      <TariqChat />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
