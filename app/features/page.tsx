import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";
import { FeaturesGrid } from "@/components/public/FeaturesGrid";
import { TariqChat } from "@/components/public/TariqChat";
import { Steps } from "@/components/public/Steps";
import { FinalCTA } from "@/components/public/FinalCTA";

export const metadata: Metadata = {
  title: "Fonctionnalités — Corrige Tes Cours",
  description:
    "Import PDF & Word, quiz corrigés, assistant Tariq, flashcards, suivi des progrès et guides d'étude : tout pour réussir tes examens.",
};

export default function FeaturesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Fonctionnalités"
        title="Tout ce dont tu as besoin pour réussir"
        description="Six outils pensés pour les étudiants d'Afrique francophone, qui s'enchaînent naturellement du polycopié à l'examen."
      />
      <FeaturesGrid />
      <Steps />
      <TariqChat />
      <FinalCTA />
    </PageLayout>
  );
}
