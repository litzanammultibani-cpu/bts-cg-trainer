// Entreprises fictives pour s'entraîner
// Chaque entreprise contient : informations légales, balance d'ouverture, et les opérations du mois à enregistrer

const BUSINESSES = {
  "cafe-trocadero": {
    nom: "Café Le Trocadéro",
    forme: "SARL",
    siret: "812 345 678 00012",
    activite: "Café - Restaurant",
    adresse: "12 rue du Trocadéro, 75016 Paris",
    capital: 10000,
    regime_tva: "Réel normal",
    description: "Petit café-restaurant parisien. Ventes en espèces principalement, quelques fournisseurs, loyer mensuel.",

    // Balance d'ouverture au 01/01
    balance_ouverture: {
      "101000": { debit: 0, credit: 10000 },
      "164000": { debit: 0, credit: 15000 },
      "215400": { debit: 18000, credit: 0 },
      "281540": { debit: 0, credit: 3600 },
      "370000": { debit: 2400, credit: 0 },
      "401000": { debit: 0, credit: 1850 },
      "512000": { debit: 8550, credit: 0 },
      "530000": { debit: 1500, credit: 0 }
    },

    // Opérations du mois - le stagiaire doit les passer en écritures
    operations: [
      {
        id: "op1",
        date: "2024-03-02",
        type: "facture_achat",
        document: {
          fournisseur: "Brasserie Heineken France",
          numero: "F-2024-0312",
          lignes: [
            { description: "Bières pression - 2 fûts 30L", ht: 240.00, tva_taux: 20 },
            { description: "Sodas assortis - carton x24", ht: 60.00, tva_taux: 20 }
          ],
          total_ht: 300.00,
          total_tva: 60.00,
          total_ttc: 360.00,
          mode_reglement: "À 30 jours"
        },
        ecriture_attendue: [
          { compte: "607000", libelle: "Achat marchandises Heineken", debit: 300.00, credit: 0 },
          { compte: "445660", libelle: "TVA déductible 20%", debit: 60.00, credit: 0 },
          { compte: "401000", libelle: "Fournisseur Heineken F-2024-0312", debit: 0, credit: 360.00 }
        ],
        explication: "Achat de marchandises destinées à être revendues : compte 607. La TVA payée au fournisseur est récupérable : 445660. La dette envers le fournisseur passe au crédit de 401."
      },
      {
        id: "op2",
        date: "2024-03-05",
        type: "vente_caisse",
        document: {
          libelle: "Recettes journalières du 05/03",
          ventes_ttc: 450.00,
          tva_taux: 10,
          mode_reglement: "Espèces"
        },
        ecriture_attendue: [
          { compte: "530000", libelle: "Recettes caisse 05/03", debit: 450.00, credit: 0 },
          { compte: "706000", libelle: "Ventes restauration HT", debit: 0, credit: 409.09 },
          { compte: "445710", libelle: "TVA collectée 10%", debit: 0, credit: 40.91 }
        ],
        explication: "Restauration sur place = TVA à 10%. HT = TTC / 1,10 = 450 / 1,10 = 409,09 €. TVA = 450 - 409,09 = 40,91 €."
      },
      {
        id: "op3",
        date: "2024-03-08",
        type: "reglement_fournisseur",
        document: {
          libelle: "Règlement par virement de la facture F-2024-0312 Heineken",
          montant: 360.00,
          mode_reglement: "Virement bancaire"
        },
        ecriture_attendue: [
          { compte: "401000", libelle: "Règlement Heineken F-2024-0312", debit: 360.00, credit: 0 },
          { compte: "512000", libelle: "Virement bancaire", debit: 0, credit: 360.00 }
        ],
        explication: "On solde la dette fournisseur (débit 401) en sortant l'argent de la banque (crédit 512). Aucune TVA, l'écriture de TVA a déjà été faite à la facture."
      },
      {
        id: "op4",
        date: "2024-03-10",
        type: "facture_achat",
        document: {
          fournisseur: "EDF Pro",
          numero: "EDF-MARS-2024",
          lignes: [
            { description: "Électricité période 01/02-28/02", ht: 180.00, tva_taux: 20 }
          ],
          total_ht: 180.00,
          total_tva: 36.00,
          total_ttc: 216.00,
          mode_reglement: "Prélèvement à 15 jours"
        },
        ecriture_attendue: [
          { compte: "606800", libelle: "Électricité février 2024", debit: 180.00, credit: 0 },
          { compte: "445660", libelle: "TVA déductible 20%", debit: 36.00, credit: 0 },
          { compte: "401000", libelle: "Fournisseur EDF Pro", debit: 0, credit: 216.00 }
        ],
        explication: "L'électricité n'est pas une marchandise revendue : elle va en charge externe (606800 ou 606100). La TVA est déductible. La dette envers EDF est à payer."
      },
      {
        id: "op5",
        date: "2024-03-15",
        type: "vente_caisse",
        document: {
          libelle: "Recettes journalières du 15/03",
          ventes_ttc: 612.00,
          tva_taux: 10,
          mode_reglement: "Espèces + CB déposées en banque"
        },
        ecriture_attendue: [
          { compte: "512000", libelle: "Recettes 15/03 (CB)", debit: 612.00, credit: 0 },
          { compte: "706000", libelle: "Ventes restauration HT", debit: 0, credit: 556.36 },
          { compte: "445710", libelle: "TVA collectée 10%", debit: 0, credit: 55.64 }
        ],
        explication: "TTC 612 / 1,10 = 556,36 HT. TVA = 612 - 556,36 = 55,64. Encaissement bancaire car CB."
      },
      {
        id: "op6",
        date: "2024-03-31",
        type: "facture_achat",
        document: {
          fournisseur: "SCI Trocadéro",
          numero: "LOY-MARS-2024",
          lignes: [
            { description: "Loyer commercial mars 2024", ht: 1500.00, tva_taux: 20 }
          ],
          total_ht: 1500.00,
          total_tva: 300.00,
          total_ttc: 1800.00,
          mode_reglement: "Prélèvement immédiat"
        },
        ecriture_attendue: [
          { compte: "613200", libelle: "Loyer mars 2024", debit: 1500.00, credit: 0 },
          { compte: "445660", libelle: "TVA déductible 20%", debit: 300.00, credit: 0 },
          { compte: "401000", libelle: "Fournisseur SCI Trocadéro", debit: 0, credit: 1800.00 }
        ],
        explication: "Loyer = compte 613200 (locations immobilières). TVA récupérable car bail commercial soumis à TVA. À payer = dette fournisseur."
      }
    ]
  },

  "atelier-dupont": {
    nom: "Atelier Dupont",
    forme: "SARL",
    siret: "523 456 789 00021",
    activite: "Plomberie - Chauffage",
    adresse: "8 rue des Artisans, 69003 Lyon",
    capital: 7500,
    regime_tva: "Réel normal",
    description: "Artisan plombier. Travaille pour particuliers et entreprises. Factures avec acomptes, achats de matériel.",

    balance_ouverture: {
      "101000": { debit: 0, credit: 7500 },
      "164000": { debit: 0, credit: 8000 },
      "218200": { debit: 22000, credit: 0 },
      "281820": { debit: 0, credit: 5500 },
      "411000": { debit: 3240, credit: 0 },
      "401000": { debit: 0, credit: 980 },
      "512000": { debit: 4200, credit: 0 },
      "530000": { debit: 350, credit: 0 },
      "445710": { debit: 0, credit: 540 },
      "445660": { debit: 196, credit: 0 },
      "419100": { debit: 0, credit: 600 }
    },

    operations: [
      {
        id: "op1",
        date: "2024-03-04",
        type: "facture_achat",
        document: {
          fournisseur: "Cedeo Plomberie",
          numero: "CD-2024-1847",
          lignes: [
            { description: "Tuyaux PER 16mm - 50m", ht: 145.00, tva_taux: 20 },
            { description: "Raccords assortis", ht: 85.00, tva_taux: 20 }
          ],
          total_ht: 230.00,
          total_tva: 46.00,
          total_ttc: 276.00,
          mode_reglement: "30 jours fin de mois"
        },
        ecriture_attendue: [
          { compte: "601000", libelle: "Achat fournitures Cedeo CD-2024-1847", debit: 230.00, credit: 0 },
          { compte: "445660", libelle: "TVA déductible 20%", debit: 46.00, credit: 0 },
          { compte: "401000", libelle: "Fournisseur Cedeo CD-2024-1847", debit: 0, credit: 276.00 }
        ],
        explication: "Pour un plombier, le matériel posé chez le client est traité en achats stockés (601) ou marchandises selon l'analyse. Ici on utilise 601 car ce sont des matières premières (transformées dans la prestation)."
      },
      {
        id: "op2",
        date: "2024-03-07",
        type: "facture_vente",
        document: {
          client: "Mme Lefèvre Sylvie",
          numero: "FV-2024-024",
          lignes: [
            { description: "Remplacement chauffe-eau - main d'œuvre", ht: 320.00, tva_taux: 10 },
            { description: "Chauffe-eau 200L Atlantic", ht: 480.00, tva_taux: 10 }
          ],
          total_ht: 800.00,
          total_tva: 80.00,
          total_ttc: 880.00,
          mode_reglement: "Chèque à réception"
        },
        ecriture_attendue: [
          { compte: "411000", libelle: "Cliente Lefèvre FV-2024-024", debit: 880.00, credit: 0 },
          { compte: "706000", libelle: "Prestation plomberie HT", debit: 0, credit: 800.00 },
          { compte: "445710", libelle: "TVA collectée 10%", debit: 0, credit: 80.00 }
        ],
        explication: "Travaux d'amélioration du logement de + 2 ans = TVA à 10%. Le matériel posé suit le taux de la prestation. La créance client va au débit de 411."
      },
      {
        id: "op3",
        date: "2024-03-12",
        type: "reglement_client",
        document: {
          libelle: "Encaissement chèque Mme Lefèvre FV-2024-024",
          montant: 880.00,
          mode_reglement: "Chèque déposé en banque"
        },
        ecriture_attendue: [
          { compte: "512000", libelle: "Encaissement Lefèvre FV-2024-024", debit: 880.00, credit: 0 },
          { compte: "411000", libelle: "Solde Lefèvre FV-2024-024", debit: 0, credit: 880.00 }
        ],
        explication: "Encaissement = entrée en banque (débit 512) qui solde la créance client (crédit 411). À lettrer ensuite avec la facture op2."
      },
      {
        id: "op4",
        date: "2024-03-18",
        type: "facture_vente",
        document: {
          client: "SARL BatirPro",
          numero: "FV-2024-025",
          lignes: [
            { description: "Installation sanitaires bureaux - lot complet", ht: 4500.00, tva_taux: 20 }
          ],
          total_ht: 4500.00,
          total_tva: 900.00,
          total_ttc: 5400.00,
          mode_reglement: "Acompte 600€ déjà reçu (cf. compte 419100), solde à 30 jours"
        },
        ecriture_attendue: [
          { compte: "411000", libelle: "Client BatirPro FV-2024-025", debit: 4800.00, credit: 0 },
          { compte: "419100", libelle: "Solde acompte BatirPro", debit: 600.00, credit: 0 },
          { compte: "706000", libelle: "Prestation plomberie HT", debit: 0, credit: 4500.00 },
          { compte: "445710", libelle: "TVA collectée 20%", debit: 0, credit: 900.00 }
        ],
        explication: "Local professionnel = TVA 20%. L'acompte reçu (419100 au crédit dans la balance d'ouverture) est soldé au débit, la créance client n'est que du solde restant : 5400 - 600 = 4800."
      }
    ]
  }
};

function getBusiness(id) {
  return BUSINESSES[id] ? { id, ...BUSINESSES[id] } : null;
}

function listBusinesses() {
  return Object.entries(BUSINESSES).map(([id, b]) => ({
    id,
    nom: b.nom,
    forme: b.forme,
    activite: b.activite,
    description: b.description,
    nb_operations: b.operations.length
  }));
}
