// Plan Comptable Général - Liste des comptes utilisés
// Référence : PCG 2024

const PCG = {
  // Classe 1 - Comptes de capitaux
  "101000": { libelle: "Capital", classe: 1, sens: "credit", type: "bilan_passif" },
  "106000": { libelle: "Réserves", classe: 1, sens: "credit", type: "bilan_passif" },
  "120000": { libelle: "Résultat de l'exercice (bénéfice)", classe: 1, sens: "credit", type: "bilan_passif" },
  "129000": { libelle: "Résultat de l'exercice (perte)", classe: 1, sens: "debit", type: "bilan_passif" },
  "164000": { libelle: "Emprunts auprès des établissements de crédit", classe: 1, sens: "credit", type: "bilan_passif" },

  // Classe 2 - Comptes d'immobilisations
  "213000": { libelle: "Constructions", classe: 2, sens: "debit", type: "bilan_actif" },
  "215400": { libelle: "Matériel industriel", classe: 2, sens: "debit", type: "bilan_actif" },
  "218200": { libelle: "Matériel de transport", classe: 2, sens: "debit", type: "bilan_actif" },
  "218300": { libelle: "Matériel de bureau et informatique", classe: 2, sens: "debit", type: "bilan_actif" },
  "218400": { libelle: "Mobilier", classe: 2, sens: "debit", type: "bilan_actif" },
  "281300": { libelle: "Amortissements des constructions", classe: 2, sens: "credit", type: "bilan_actif" },
  "281540": { libelle: "Amortissements du matériel industriel", classe: 2, sens: "credit", type: "bilan_actif" },
  "281830": { libelle: "Amortissements matériel de bureau et informatique", classe: 2, sens: "credit", type: "bilan_actif" },

  // Classe 3 - Comptes de stocks
  "310000": { libelle: "Matières premières", classe: 3, sens: "debit", type: "bilan_actif" },
  "370000": { libelle: "Stocks de marchandises", classe: 3, sens: "debit", type: "bilan_actif" },

  // Classe 4 - Comptes de tiers
  "401000": { libelle: "Fournisseurs", classe: 4, sens: "credit", type: "bilan_passif" },
  "411000": { libelle: "Clients", classe: 4, sens: "debit", type: "bilan_actif" },
  "419100": { libelle: "Clients - avances et acomptes reçus sur commandes", classe: 4, sens: "credit", type: "bilan_passif" },
  "421000": { libelle: "Personnel - rémunérations dues", classe: 4, sens: "credit", type: "bilan_passif" },
  "431000": { libelle: "Sécurité sociale", classe: 4, sens: "credit", type: "bilan_passif" },
  "437000": { libelle: "Autres organismes sociaux", classe: 4, sens: "credit", type: "bilan_passif" },
  "445510": { libelle: "TVA à décaisser", classe: 4, sens: "credit", type: "bilan_passif" },
  "445620": { libelle: "TVA déductible sur immobilisations", classe: 4, sens: "debit", type: "bilan_actif" },
  "445660": { libelle: "TVA déductible sur autres biens et services", classe: 4, sens: "debit", type: "bilan_actif" },
  "445670": { libelle: "Crédit de TVA à reporter", classe: 4, sens: "debit", type: "bilan_actif" },
  "445710": { libelle: "TVA collectée", classe: 4, sens: "credit", type: "bilan_passif" },

  // Classe 5 - Comptes financiers
  "512000": { libelle: "Banque", classe: 5, sens: "debit", type: "bilan_actif" },
  "530000": { libelle: "Caisse", classe: 5, sens: "debit", type: "bilan_actif" },

  // Classe 6 - Comptes de charges
  "601000": { libelle: "Achats stockés - matières premières", classe: 6, sens: "debit", type: "charge" },
  "606300": { libelle: "Fournitures d'entretien et de petit équipement", classe: 6, sens: "debit", type: "charge" },
  "606400": { libelle: "Fournitures administratives", classe: 6, sens: "debit", type: "charge" },
  "606800": { libelle: "Autres matières et fournitures", classe: 6, sens: "debit", type: "charge" },
  "607000": { libelle: "Achats de marchandises", classe: 6, sens: "debit", type: "charge" },
  "613200": { libelle: "Locations immobilières", classe: 6, sens: "debit", type: "charge" },
  "615500": { libelle: "Entretien et réparations sur biens mobiliers", classe: 6, sens: "debit", type: "charge" },
  "616000": { libelle: "Primes d'assurances", classe: 6, sens: "debit", type: "charge" },
  "622600": { libelle: "Honoraires", classe: 6, sens: "debit", type: "charge" },
  "623100": { libelle: "Annonces et insertions", classe: 6, sens: "debit", type: "charge" },
  "626000": { libelle: "Frais postaux et de télécommunications", classe: 6, sens: "debit", type: "charge" },
  "627000": { libelle: "Services bancaires et assimilés", classe: 6, sens: "debit", type: "charge" },
  "641000": { libelle: "Rémunérations du personnel", classe: 6, sens: "debit", type: "charge" },
  "645000": { libelle: "Charges de sécurité sociale et de prévoyance", classe: 6, sens: "debit", type: "charge" },
  "661000": { libelle: "Charges d'intérêts", classe: 6, sens: "debit", type: "charge" },
  "681120": { libelle: "Dotations aux amortissements des immobilisations corporelles", classe: 6, sens: "debit", type: "charge" },

  // Classe 7 - Comptes de produits
  "706000": { libelle: "Prestations de services", classe: 7, sens: "credit", type: "produit" },
  "707000": { libelle: "Ventes de marchandises", classe: 7, sens: "credit", type: "produit" },
  "708500": { libelle: "Ports et frais accessoires facturés", classe: 7, sens: "credit", type: "produit" },
  "765000": { libelle: "Escomptes obtenus", classe: 7, sens: "credit", type: "produit" },
  "791000": { libelle: "Transferts de charges d'exploitation", classe: 7, sens: "credit", type: "produit" }
};

// Taux de TVA en France
const TAUX_TVA = {
  normal: 20.0,
  intermediaire: 10.0,
  reduit: 5.5,
  particulier: 2.1,
  zero: 0.0
};

// Recherche simple
function chercherCompte(query) {
  const q = query.toLowerCase().trim();
  return Object.entries(PCG)
    .filter(([num, info]) =>
      num.startsWith(q) ||
      info.libelle.toLowerCase().includes(q)
    )
    .map(([num, info]) => ({ numero: num, ...info }));
}

function getCompte(numero) {
  return PCG[numero] ? { numero, ...PCG[numero] } : null;
}
