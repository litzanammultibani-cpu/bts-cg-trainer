// Passeport Professionnel — générateur de fiches de situations professionnelles pour l'épreuve E6
// Format : compétences mobilisées + contexte + missions + outils + auto-évaluation

const PASSEPORT = {
  STORAGE_KEY: "btscg_passeport",

  // Référentiel des compétences par processus (extrait simplifié, BO 2014/2024)
  COMPETENCES_REFERENTIEL: {
    P1: [
      "1.1 Préparer la prise en charge des opérations comptables",
      "1.2 Vérifier la conformité des pièces et des écritures",
      "1.3 Comptabiliser les opérations courantes (achats, ventes, règlements, lettrage)",
      "1.4 Réaliser les rapprochements bancaires et lettrer les comptes de tiers",
      "1.5 Mettre en œuvre les procédures de relance et de recouvrement"
    ],
    P2: [
      "2.1 Organiser et gérer les opérations d'inventaire",
      "2.2 Comptabiliser les amortissements, dépréciations et provisions",
      "2.3 Effectuer les régularisations (CCA, PCA, FNP, FAR)",
      "2.4 Établir les comptes annuels (bilan, compte de résultat, annexe)",
      "2.5 Affecter le résultat de l'exercice"
    ],
    P3: [
      "3.1 Établir et télétransmettre les déclarations de TVA",
      "3.2 Calculer le résultat fiscal et l'impôt sur les bénéfices",
      "3.3 Établir les déclarations relatives aux impôts directs et indirects",
      "3.4 Réaliser une veille fiscale"
    ],
    P4: [
      "4.1 Préparer la formalisation et le suivi du contrat de travail",
      "4.2 Établir les bulletins de paie",
      "4.3 Établir et télétransmettre les déclarations sociales (DSN)",
      "4.4 Réaliser une veille sociale et juridique RH"
    ],
    P5: [
      "5.1 Identifier et calculer les coûts (complets, variables, ABC)",
      "5.2 Élaborer et suivre les budgets",
      "5.3 Mesurer la performance par les écarts",
      "5.4 Concevoir et mettre à jour des tableaux de bord"
    ],
    P6: [
      "6.1 Calculer et interpréter les SIG et la CAF",
      "6.2 Élaborer le bilan fonctionnel et calculer les ratios",
      "6.3 Construire le tableau de financement / des flux de trésorerie",
      "6.4 Formuler un diagnostic financier"
    ],
    P7: [
      "7.1 Contribuer à la qualité du système d'information comptable",
      "7.2 Mettre en œuvre les procédures de contrôle interne",
      "7.3 Utiliser un PGI / un tableur / un SGBDR",
      "7.4 Participer à la dématérialisation des documents et flux"
    ]
  },

  charger() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "{}");
    } catch { return {}; }
  },

  sauvegarder(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Ajouter ou mettre à jour une fiche
  enregistrerFiche(fiche) {
    const all = this.charger();
    if (!all.fiches) all.fiches = [];
    if (fiche.id) {
      const idx = all.fiches.findIndex(f => f.id === fiche.id);
      if (idx >= 0) all.fiches[idx] = fiche;
      else all.fiches.push(fiche);
    } else {
      fiche.id = "F" + Date.now();
      all.fiches.push(fiche);
    }
    this.sauvegarder(all);
    return fiche;
  },

  supprimerFiche(id) {
    const all = this.charger();
    all.fiches = (all.fiches || []).filter(f => f.id !== id);
    this.sauvegarder(all);
  },

  listerFiches() {
    return (this.charger().fiches || []).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  },

  // Couverture des processus
  couvertureProcessus() {
    const fiches = this.listerFiches();
    const resultat = {};
    Object.keys(this.COMPETENCES_REFERENTIEL).forEach(p => {
      resultat[p] = { nb_fiches: 0, competences_couvertes: new Set() };
    });
    fiches.forEach(f => {
      (f.processus_couverts || []).forEach(p => {
        if (resultat[p]) {
          resultat[p].nb_fiches++;
          (f.competences || []).forEach(c => {
            if (c.startsWith(p[1])) resultat[p].competences_couvertes.add(c);
          });
        }
      });
    });
    Object.keys(resultat).forEach(p => {
      resultat[p].competences_couvertes = Array.from(resultat[p].competences_couvertes);
      resultat[p].pct = Math.round(resultat[p].competences_couvertes.length / this.COMPETENCES_REFERENTIEL[p].length * 100);
    });
    return resultat;
  },

  // Génère une fiche brouillon à partir d'une opération comptable réalisée dans l'app
  genererFicheDepuisOperation(businessId, operationId) {
    const business = getBusiness(businessId);
    if (!business) return null;
    const op = business.operations.find(o => o.id === operationId);
    if (!op) return null;

    const dateAujourdhui = new Date().toISOString().slice(0, 10);
    const titre = `${this.libellerType(op.type)} — ${business.nom}`;
    const competences = ["1.2", "1.3"];
    const processus = ["P1"];

    return {
      titre,
      date: dateAujourdhui,
      contexte: `Au sein de ${business.nom} (${business.forme}, ${business.activite}), j'ai été amené(e) à traiter la pièce comptable suivante.`,
      missions: [
        `Vérifier la conformité de la pièce justificative (${op.document.numero || "document " + op.id})`,
        `Identifier les comptes du PCG concernés`,
        `Calculer la TVA et les montants HT/TTC`,
        `Saisir l'écriture comptable dans le journal`,
        `Vérifier l'équilibre débit = crédit`
      ],
      outils: ["PGI / logiciel comptable", "Plan Comptable Général", "Tableur"],
      processus_couverts: processus,
      competences,
      auto_evaluation: "À compléter — points forts, difficultés rencontrées, axes d'amélioration."
    };
  },

  exporterMarkdown() {
    const fiches = this.listerFiches();
    if (!fiches.length) return "# Passeport Professionnel\n\n*Aucune fiche enregistrée pour le moment.*\n";

    let md = "# Passeport Professionnel — BTS Comptabilité et Gestion\n\n";
    md += `Généré le ${new Date().toLocaleDateString("fr-FR")}\n\n`;
    md += "## Sommaire des fiches\n\n";
    fiches.forEach((f, i) => {
      md += `${i + 1}. **${f.titre}** — ${f.date} — Processus: ${(f.processus_couverts || []).join(", ")}\n`;
    });
    md += "\n---\n\n";

    fiches.forEach((f, i) => {
      md += `## Fiche n°${i + 1} — ${f.titre}\n\n`;
      md += `**Date :** ${f.date}\n\n`;
      md += `**Processus couverts :** ${(f.processus_couverts || []).join(", ")}\n\n`;
      md += `**Compétences mobilisées :** ${(f.competences || []).join(", ")}\n\n`;
      md += `### Contexte\n${f.contexte || "—"}\n\n`;
      md += `### Missions réalisées\n`;
      (f.missions || []).forEach(m => md += `- ${m}\n`);
      md += `\n### Outils utilisés\n`;
      (f.outils || []).forEach(o => md += `- ${o}\n`);
      md += `\n### Auto-évaluation\n${f.auto_evaluation || "—"}\n\n---\n\n`;
    });

    return md;
  },

  libellerType(type) {
    return {
      "facture_achat": "Comptabilisation d'une facture d'achat",
      "facture_vente": "Comptabilisation d'une facture de vente",
      "vente_caisse": "Enregistrement d'une recette de caisse",
      "reglement_fournisseur": "Comptabilisation d'un règlement fournisseur",
      "reglement_client": "Comptabilisation d'un encaissement client"
    }[type] || "Traitement d'une opération comptable";
  }
};
