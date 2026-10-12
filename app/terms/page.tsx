import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — Corrige Tes Cours",
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Conditions"
        title="Conditions d'utilisation"
        description="Les règles qui encadrent l'usage de Corrige Tes Cours. En créant un compte, tu les acceptes."
      />
      <section className="py-24">
        <article className="w-full max-w-[760px] mx-auto px-6 flex flex-col gap-8 [&_h2]:font-serif [&_h2]:font-semibold [&_h2]:text-[22px] [&_h2]:text-[#141219] dark:[&_h2]:text-[#f3f0e9] [&_h2]:mt-4 [&_p]:text-[16px] [&_p]:leading-[1.75] [&_p]:text-[#413d4a] dark:[&_p]:text-[#cdc7d8] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:text-[16px] [&_li]:text-[#413d4a] dark:[&_li]:text-[#cdc7d8]">
          <h2>1. Objet</h2>
          <p>
            Corrige Tes Cours est un service d&apos;aide à l&apos;étude. Il
            propose des résumés, quiz, flashcards et un assistant IA à partir
            des documents que tu importes.
          </p>

          <h2>2. Compte utilisateur</h2>
          <ul>
            <li>Tu dois avoir au moins 16 ans pour créer un compte.</li>
            <li>
              Tu es responsable de la confidentialité de ton mot de passe.
            </li>
            <li>Un compte est personnel. Ne le partage pas.</li>
            <li>
              Nous pouvons suspendre un compte en cas d&apos;abus manifeste.
            </li>
          </ul>

          <h2>3. Contenus importés</h2>
          <ul>
            <li>
              Tu garantis détenir les droits sur les documents que tu importes.
            </li>
            <li>Nous les utilisons uniquement pour te fournir le service.</li>
            <li>Tu peux supprimer tes documents à tout moment.</li>
          </ul>

          <h2>4. Résultats générés par IA</h2>
          <p>
            Nos outils utilisent des modèles d&apos;intelligence artificielle.
            Les résultats sont des aides à l&apos;étude et peuvent contenir des
            erreurs. Tu restes responsable de la vérification des informations
            importantes avec tes cours officiels.
          </p>

          <h2>5. Forfaits et paiement</h2>
          <ul>
            <li>Le forfait gratuit reste gratuit sans limite de durée.</li>
            <li>
              Le forfait Étudiant+ est facturé mensuellement ou annuellement.
            </li>
            <li>
              Les paiements sont non remboursables, sauf erreur de notre part.
            </li>
            <li>
              Tu peux annuler à tout moment ; l&apos;accès reste actif
              jusqu&apos;à la fin de la période payée.
            </li>
          </ul>

          <h2>6. Usage interdit</h2>
          <ul>
            <li>
              Utiliser le service pour du harcèlement ou du contenu illégal.
            </li>
            <li>Tenter de contourner les limitations techniques.</li>
            <li>Extraire massivement des données (scraping).</li>
            <li>Revendre l&apos;accès sans autorisation écrite.</li>
          </ul>

          <h2>7. Responsabilité</h2>
          <p>
            Le service est fourni « tel quel ». Nous ne garantissons pas une
            disponibilité sans interruption ni l&apos;absence totale
            d&apos;erreurs dans les contenus générés.
          </p>

          <h2>8. Modification des conditions</h2>
          <p>
            Nous pouvons mettre à jour ces conditions. En cas de changement
            important, tu seras notifié par email ou sur la plateforme.
          </p>

          <h2>9. Droit applicable</h2>
          <p>
            Ces conditions sont régies par le droit camerounais. Les tribunaux
            compétents sont ceux de Yaoundé.
          </p>

          <h2>10. Contact</h2>
          <p>Pour toute question : legal@corrigetescours.com</p>
        </article>
      </section>
    </PageLayout>
  );
}
