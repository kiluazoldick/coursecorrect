"use client";

import { useState } from "react";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Écris-nous"
        description="Une question, une suggestion, un bug ? Nous lisons chaque message."
      />

      <section className="py-24">
        <div className="w-full max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16">
          {/* Infos */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-serif font-semibold text-[20px] text-[#141219] dark:text-[#f3f0e9] mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@corrigetescours.com"
                className="text-[15.5px] text-[#7e55ff] dark:text-[#9d80ff] hover:underline underline-offset-3"
              >
                hello@corrigetescours.com
              </a>
              <p className="mt-2 text-[14.5px] text-[#6b6675] dark:text-[#a49db4]">
                Réponse sous 24h ouvrées.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-[20px] text-[#141219] dark:text-[#f3f0e9] mb-3">
                Support étudiant
              </h3>
              <a
                href="mailto:support@corrigetescours.com"
                className="text-[15.5px] text-[#7e55ff] dark:text-[#9d80ff] hover:underline underline-offset-3"
              >
                support@corrigetescours.com
              </a>
              <p className="mt-2 text-[14.5px] text-[#6b6675] dark:text-[#a49db4]">
                Pour les problèmes de compte ou d&apos;abonnement.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-[20px] text-[#141219] dark:text-[#f3f0e9] mb-3">
                Universités & partenariats
              </h3>
              <a
                href="mailto:partenariats@corrigetescours.com"
                className="text-[15.5px] text-[#7e55ff] dark:text-[#9d80ff] hover:underline underline-offset-3"
              >
                partenariats@corrigetescours.com
              </a>
              <p className="mt-2 text-[14.5px] text-[#6b6675] dark:text-[#a49db4]">
                Offres groupées pour établissements.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e6e1d6] dark:border-[#2c2836]">
              <p className="text-[14.5px] text-[#6b6675] dark:text-[#a49db4]">
                Basés à Yaoundé, Cameroun.
                <br />
                Nous travaillons à distance avec des étudiants dans toute
                l&apos;Afrique francophone.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#3fcc3b]/15 flex items-center justify-center mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-[#3fcc3b]"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-[24px] text-[#141219] dark:text-[#f3f0e9] mb-3">
                  Message envoyé
                </h3>
                <p className="text-[15.5px] text-[#6b6675] dark:text-[#a49db4]">
                  Nous te répondons sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                  label="Ton nom"
                  name="name"
                  type="text"
                  placeholder="Ex. Aïcha Mbarga"
                  required
                />
                <Input
                  label="Ton email"
                  name="email"
                  type="email"
                  placeholder="ton@email.com"
                  required
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-[14px] font-medium text-[#413d4a] dark:text-[#cdc7d8]"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full h-[48px] px-4 rounded-[8px] border border-[#e6e1d6] dark:border-[#2c2836] bg-white dark:bg-[#1c1926] text-[15.5px] text-[#141219] dark:text-[#f3f0e9] focus:outline-none focus:border-[#7e55ff] dark:focus:border-[#9d80ff]"
                  >
                    <option>Question générale</option>
                    <option>Problème technique</option>
                    <option>Abonnement & paiement</option>
                    <option>Partenariat université</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[14px] font-medium text-[#413d4a] dark:text-[#cdc7d8]"
                  >
                    Ton message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Explique-nous ta demande en quelques lignes..."
                    className="w-full px-4 py-3 rounded-[8px] border border-[#e6e1d6] dark:border-[#2c2836] bg-white dark:bg-[#1c1926] text-[15.5px] text-[#141219] dark:text-[#f3f0e9] placeholder:text-[#9a95a3] dark:placeholder:text-[#7a7488] focus:outline-none focus:border-[#7e55ff] dark:focus:border-[#9d80ff] resize-y"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" block>
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
