// Hub Ressources externes — sources officielles gratuites + chaînes YouTube
// Toutes les ressources sont validées et gratuites (sauf mention payante explicite)

const RESSOURCES = {
  // Référentiel et programmes officiels
  officiels: {
    titre: "Programme et référentiel officiels",
    description: "Documents officiels gratuits, à connaître par cœur",
    items: [
      { nom: "Référentiel BTS CG (PDF officiel, 80 pages)", url: "https://enqdip.sup.adc.education.fr/bts/referentiel/BTS_ComptabiliteGestion.pdf", type: "PDF" },
      { nom: "Arrêté du 8 juillet 2024 (dernière modification)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049926350", type: "Texte officiel" },
      { nom: "Arrêté fondateur du 3 novembre 2014", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000029830287/", type: "Texte officiel" },
      { nom: "Bulletin Officiel n°46 du 11/12/2014", url: "https://www.education.gouv.fr/bo/14/Hebdo46/MENS1424911A.htm", type: "Page web" },
      { nom: "Onisep — fiche BTS CG (présentation, débouchés)", url: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-comptabilite-et-gestion", type: "Page web" }
    ]
  },

  // Cours en ligne gratuits
  cours: {
    titre: "Cours et fiches gratuits",
    description: "Plateformes pédagogiques avec cours téléchargeables",
    items: [
      { nom: "CRCF-EDU (Centre de Ressources Comptabilité-Finance) — référence", url: "https://www.crcf-edu.fr/", type: "Plateforme" },
      { nom: "CRCF — Documents de référence BTS CG", url: "https://www.crcf-edu.fr/documents-de-reference-en-bts-cg/", type: "Page" },
      { nom: "CRCF — Sujets de la circulaire nationale (annales officielles)", url: "https://www.crcf-edu.fr/", type: "Annales" },
      { nom: "AideBTSCG — synthèses par processus", url: "https://aidebtscg.fr/", type: "Site" },
      { nom: "Compta-Online — programme et corrigés", url: "https://www.compta-online.com/programme-bts-cg-ao5709", type: "Site" },
      { nom: "Maxicours BTS CG (extraits gratuits)", url: "https://www.maxicours.com/se/cours/bts-cg/", type: "Site" }
    ]
  },

  // YouTube
  youtube: {
    titre: "Chaînes YouTube spécialisées",
    description: "Cours filmés, exercices corrigés en vidéo. Gratuit, beaucoup de contenu BTS CG",
    items: [
      { nom: "Stéphanie Goujon (cours BTS CG complets)", url: "https://www.youtube.com/@StephanieGoujon", type: "Chaîne YouTube" },
      { nom: "Nathalie Mlynarski (P1, P2, P3 surtout)", url: "https://www.youtube.com/results?search_query=Nathalie+Mlynarski+BTS+CG", type: "Recherche" },
      { nom: "Comptalia (extraits gratuits, payant pour le reste)", url: "https://www.youtube.com/@comptalia", type: "Chaîne" },
      { nom: "Charles Aymes — Comptabilité et gestion", url: "https://www.youtube.com/results?search_query=Charles+Aymes+BTS+CG", type: "Recherche" },
      { nom: "Recherche YouTube générale BTS CG", url: "https://www.youtube.com/results?search_query=BTS+CG+cours+complet", type: "Recherche" }
    ]
  },

  // Annales et corrigés
  annales: {
    titre: "Annales et sujets corrigés",
    description: "Sujets des sessions précédentes (E4.1, E4.2, E5, E6) avec corrigés",
    items: [
      { nom: "SIEC — Documenthèque (Île-de-France) sujets BTS CG", url: "https://siec.education.fr/candidats/docutheque/", type: "Plateforme" },
      { nom: "Sujets-Examens.com — BTS CG (gratuit)", url: "https://www.sujetexamen.com/bts/comptabilite-gestion", type: "Site" },
      { nom: "Studyrama BTS CG sujets et corrigés", url: "https://www.studyrama.com/formations/diplomes/bts/bts-cg-comptabilite-et-gestion", type: "Site" },
      { nom: "ANNABAC BTS (annales gratuites)", url: "https://www.annabac.com/", type: "Site" },
      { nom: "ENCG-Formation — déroulé examen candidat libre", url: "https://www.encg-formation.com/deroule-examen-bts-cg/", type: "Guide" }
    ]
  },

  // Outils pratiques
  outils: {
    titre: "Outils pratiques pour comptable",
    description: "Outils gratuits utilisables en entreprise et à l'examen",
    items: [
      { nom: "Plan Comptable Général (PCG) en ligne", url: "https://www.plancomptable.com/", type: "Référence" },
      { nom: "URSSAF — taux de cotisations en vigueur", url: "https://www.urssaf.fr/portail/home/taux-et-baremes.html", type: "Référence" },
      { nom: "Service-Public.fr — fiches entreprises (TVA, IS, paie)", url: "https://entreprendre.service-public.fr/", type: "Site officiel" },
      { nom: "Impôts.gouv.fr — Espace pro et formulaires", url: "https://www.impots.gouv.fr/professionnel", type: "Site officiel" },
      { nom: "Net-entreprises.fr (DSN, déclarations)", url: "https://www.net-entreprises.fr/", type: "Site officiel" },
      { nom: "VIES — vérification n° TVA intracom", url: "https://ec.europa.eu/taxation_customs/vies/", type: "Outil" },
      { nom: "Insee — taux d'inflation, indices", url: "https://www.insee.fr/fr/statistiques/series/", type: "Stats" }
    ]
  },

  // Inscription et formation candidat libre
  candidatLibre: {
    titre: "Pour les candidats libres",
    description: "Inscription, expérience pro, dispositifs de formation",
    items: [
      { nom: "Inscription BTS candidat libre — Service Public", url: "https://www.service-public.fr/particuliers/vosdroits/F162", type: "Procédure" },
      { nom: "CNED BTS CG (formation officielle distante)", url: "https://www.cned.fr/inscription/btscg", type: "Formation payante reconnue" },
      { nom: "Mon Compte Formation (CPF) — financer une formation", url: "https://www.moncompteformation.gouv.fr/", type: "Financement" },
      { nom: "France Compétences — Répertoire National des Certifications (RNCP)", url: "https://www.francecompetences.fr/recherche/rncp/", type: "Référentiel" }
    ]
  },

  // Manuels recommandés
  manuels: {
    titre: "Manuels (payants)",
    description: "Si tu peux investir : la référence absolue",
    items: [
      { nom: "Manuel Foucher BTS CG (7 tomes par processus)", url: "https://www.editions-foucher.fr/", type: "Manuel scolaire" },
      { nom: "Nathan Technique BTS CG", url: "https://www.nathan.fr/", type: "Manuel scolaire" },
      { nom: "Hachette Technique BTS CG", url: "https://www.hachette-education.com/", type: "Manuel scolaire" },
      { nom: "Vuibert BTS CG", url: "https://www.vuibert.fr/", type: "Manuel scolaire" },
      { nom: "Dunod — Aide-mémoires comptables", url: "https://www.dunod.com/", type: "Manuel scolaire" },
      { nom: "Conseil : Vinted / Leboncoin pour les manuels d'occasion (-50%)", url: "https://www.vinted.fr/catalog?search_text=BTS+CG+Foucher", type: "Occasion" }
    ]
  },

  // Forums et communautés
  communaute: {
    titre: "Communautés et entraide",
    description: "Pour poser des questions, échanger entre candidats",
    items: [
      { nom: "Reddit r/etudiants (entraide francophone)", url: "https://www.reddit.com/r/etudiants/", type: "Forum" },
      { nom: "Compta-Online forum", url: "https://www.compta-online.com/forum", type: "Forum" },
      { nom: "Discord BTS CG (rechercher serveurs publics)", url: "https://discord.com/", type: "Discord" },
      { nom: "Facebook groupes BTS CG candidats libres", url: "https://www.facebook.com/search/groups/?q=BTS%20CG%20candidat%20libre", type: "Facebook" }
    ]
  }
};
