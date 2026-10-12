import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales — Corrige Tes Cours",
};

export default function LegalPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Mentions légales"
        title="Informations légales"
        description="Éditeur, hébergement, propriété intellectuelle et coordonnées."
      />
      <LegalContent>
        <h2>Éditeur du site</h2>
        <p>
          <strong>Corrige Tes Cours</strong>
          <br />
          Service numérique d&apos;aide à l&apos;étude
          <br />
          Yaoundé, Cameroun
          <br />
          Contact : hello@corrigetescours.com
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé sur des serveurs situés dans l&apos;Union
          européenne et aux États-Unis, via des prestataires reconnus.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          logos, interfaces) est la propriété exclusive de Corrige Tes Cours,
          sauf mention contraire. Toute reproduction sans autorisation écrite
          est interdite.
        </p>
        <p>
          Les cours et documents importés par les utilisateurs restent leur
          propriété. Nous ne les utilisons que pour fournir le service demandé.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Corrige Tes Cours met tout en œuvre pour assurer l&apos;exactitude des
          contenus générés par IA, mais ne peut garantir l&apos;absence
          d&apos;erreurs. Les résumés, quiz et guides produits sont des aides à
          l&apos;étude et ne remplacent pas le travail personnel ni les cours
          dispensés par les enseignants.
        </p>

        <h2>Litiges</h2>
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité. À
          défaut, les tribunaux compétents seront ceux de Yaoundé, Cameroun.
        </p>

        <h2>Contact</h2>
        <p>Pour toute question : hello@corrigetescours.com</p>
      </LegalContent>
    </PageLayout>
  );
}

function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24">
      <article className="w-full max-w-[760px] mx-auto px-6 flex flex-col gap-8 [&_h2]:font-serif [&_h2]:font-semibold [&_h2]:text-[22px] [&_h2]:text-[#141219] dark:[&_h2]:text-[#f3f0e9] [&_h2]:mt-4 [&_p]:text-[16px] [&_p]:leading-[1.75] [&_p]:text-[#413d4a] dark:[&_p]:text-[#cdc7d8]">
        {children}
      </article>
    </section>
  );
}
