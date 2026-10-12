import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";

export const metadata: Metadata = {
  title: "Confidentialité — Corrige Tes Cours",
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Ce que nous collectons, pourquoi, comment nous le protégeons et comment tu peux exercer tes droits."
      />
      <section className="py-24">
        <article className="w-full max-w-[760px] mx-auto px-6 flex flex-col gap-8 [&_h2]:font-serif [&_h2]:font-semibold [&_h2]:text-[22px] [&_h2]:text-[#141219] dark:[&_h2]:text-[#f3f0e9] [&_h2]:mt-4 [&_p]:text-[16px] [&_p]:leading-[1.75] [&_p]:text-[#413d4a] dark:[&_p]:text-[#cdc7d8] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:text-[16px] [&_li]:text-[#413d4a] dark:[&_li]:text-[#cdc7d8]">
          <h2>Données que nous collectons</h2>
          <ul>
            <li>Compte : nom, adresse email, mot de passe chiffré.</li>
            <li>
              Contenu : les cours que tu importes et les documents générés.
            </li>
            <li>
              Usage : pages vues, actions sur la plateforme, appareil et
              navigateur.
            </li>
            <li>
              Paiement : géré par nos prestataires ; nous ne stockons pas tes
              numéros de carte.
            </li>
          </ul>

          <h2>Pourquoi nous les collectons</h2>
          <ul>
            <li>Fournir le service (résumés, quiz, chat, flashcards).</li>
            <li>
              Améliorer la qualité des réponses IA et de l&apos;interface.
            </li>
            <li>Assurer la sécurité de ton compte et prévenir les abus.</li>
            <li>Te contacter uniquement pour des informations importantes.</li>
          </ul>

          <h2>Partage de données</h2>
          <p>
            Nous ne vendons jamais tes données. Nous les partageons uniquement
            avec des prestataires techniques nécessaires (hébergement, paiement,
            envoi d&apos;emails), dans le cadre de contrats stricts de
            confidentialité.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Tes données sont conservées tant que ton compte est actif. Si tu
            supprimes ton compte, tes cours et documents sont supprimés sous 30
            jours.
          </p>

          <h2>Tes droits</h2>
          <ul>
            <li>Accéder à tes données personnelles.</li>
            <li>Corriger toute information inexacte.</li>
            <li>Supprimer ton compte et tes contenus.</li>
            <li>Exporter tes données dans un format lisible.</li>
            <li>T&apos;opposer au traitement marketing à tout moment.</li>
          </ul>

          <h2>Sécurité</h2>
          <p>
            Toutes les communications sont chiffrées (HTTPS). Les mots de passe
            sont hachés avec bcrypt. Les accès internes sont limités et
            journalisés.
          </p>

          <h2>Contact</h2>
          <p>Pour exercer tes droits : privacy@corrigetescours.com</p>
        </article>
      </section>
    </PageLayout>
  );
}
