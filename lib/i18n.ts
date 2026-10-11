import type { Language } from "./language-context";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      about: "À propos",
      login: "Se connecter",
      signup: "Créer un compte",
    },
    hero: {
      chip: "Pensé pour les campus d'Afrique francophone",
      title1: "Tes cours,",
      title2: "résumés et compris.",
      subtitle:
        "Dépose un PDF, un Word ou une photo de ton polycopié. Tu obtiens un résumé clair, des quiz corrigés et un carnet de révision — avec Tariq pour t'expliquer ce qui bloque.",
      ctaPrimary: "Commencer gratuitement",
      ctaSecondary: "Voir la démo",
      meta: "Sans carte bancaire. Ton premier résumé est prêt en deux minutes.",
      stat1: "étudiants inscrits",
      stat2: "cours résumés",
      stat3: "de satisfaction",
    },
    features: {
      eyebrow: "Fonctionnalités",
      title: "Tout ce qu'il faut, du polycopié à l'examen",
      subtitle:
        "Six outils simples, qui s'enchaînent sans que tu aies à t'organiser toi-même.",
    },
    steps: {
      eyebrow: "Le parcours",
      title: "Trois étapes, puis tu révises",
    },
    tariq: {
      eyebrow: "Assistant d'étude",
      title: "Tariq, ton tuteur patient",
    },
    pricing: {
      eyebrow: "Tarifs",
      title: "Moins cher qu'une pile de photocopies",
      monthly: "Mensuel",
      yearly: "Annuel",
      yearlyBadge: "deux mois offerts",
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "Ce qu'en disent les étudiants",
    },
    cta: {
      title: "Prêt à reprendre tes révisions en main ?",
      subtitle: "Dépose ton premier cours ce soir, révise-le dès demain matin.",
      button: "Commencer maintenant",
      note: "Gratuit, sans carte bancaire.",
    },
    footer: {
      tagline:
        "Des outils d'étude simples et respectueux de ton temps, pour les étudiants des universités d'Afrique francophone.",
      product: "Produit",
      resources: "Ressources",
      legal: "Légal",
      copyright: "© 2025 Corrige Tes Cours. Tous droits réservés.",
      madeIn: "Conçu à Yaoundé, Cameroun",
    },
  },

  en: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      about: "About",
      login: "Log in",
      signup: "Sign up",
    },
    hero: {
      chip: "Built for French-speaking African campuses",
      title1: "Your courses,",
      title2: "summarized and understood.",
      subtitle:
        "Drop a PDF, a Word file or a photo of your lecture notes. You get a clear summary, graded quizzes and a revision notebook — with Tariq to explain what's blocking you.",
      ctaPrimary: "Start for free",
      ctaSecondary: "See the demo",
      meta: "No credit card. Your first summary in two minutes.",
      stat1: "students enrolled",
      stat2: "courses summarized",
      stat3: "satisfaction rate",
    },
    features: {
      eyebrow: "Features",
      title: "Everything you need, from handout to exam",
      subtitle:
        "Six simple tools that chain together without you having to organize anything.",
    },
    steps: {
      eyebrow: "The journey",
      title: "Three steps, then you revise",
    },
    tariq: {
      eyebrow: "Study assistant",
      title: "Tariq, your patient tutor",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Cheaper than a stack of photocopies",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlyBadge: "two months free",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What students say",
    },
    cta: {
      title: "Ready to take your revision back in hand?",
      subtitle: "Drop your first course tonight, revise it tomorrow morning.",
      button: "Start now",
      note: "Free, no credit card.",
    },
    footer: {
      tagline:
        "Simple, time-respecting study tools for students at French-speaking African universities.",
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      copyright: "© 2025 Corrige Tes Cours. All rights reserved.",
      madeIn: "Made in Yaoundé, Cameroon",
    },
  },
} as const;

export function useT(lang: Language) {
  return translations[lang];
}
