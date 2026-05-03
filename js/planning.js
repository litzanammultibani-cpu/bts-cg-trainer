// Planning de révision — génère un planning hebdomadaire jusqu'à la date d'examen

const PLANNING = {
  STORAGE_KEY: "btscg_planning",

  // Charge configuration utilisateur
  charger() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "{}");
    } catch { return {}; }
  },

  sauvegarder(config) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
  },

  // Génère un planning entre aujourd'hui et la date d'examen
  // Heures hebdo demandées par défaut : 20h
  genererPlanning({ dateExamen, heuresHebdo = 20, niveau = "debutant" }) {
    const aujourdhui = new Date();
    const examen = new Date(dateExamen);
    const semaines = Math.floor((examen - aujourdhui) / (7 * 24 * 60 * 60 * 1000));

    if (semaines < 4) return { erreur: "Date d'examen trop proche (moins d'un mois)." };

    // Répartition selon coefficients de l'examen
    // Coefficients : E1.1 (4) E1.2 (3) E2 (3) E3 (6) E4.1 (9) E4.2 (4) E5 (5) E6 (5)
    // Total = 39
    const repartition = {
      "P1": { coef: 9, semaineDebut: 0, blocs: ["P1"] }, // E4.1 (P1-P4)
      "P2": { coef: 9, semaineDebut: 0, blocs: ["P2"] },
      "P3": { coef: 9, semaineDebut: 0, blocs: ["P3"] },
      "P4": { coef: 9, semaineDebut: 0, blocs: ["P4"] },
      "P5": { coef: 5, semaineDebut: 0, blocs: ["P5"] }, // E5
      "P6": { coef: 5, semaineDebut: 0, blocs: ["P6"] },
      "P7": { coef: 4, semaineDebut: 0, blocs: ["P7"] }, // transversal E4.2 + E5
      "E1.1": { coef: 4, semaineDebut: 0, blocs: ["E1.1"] },
      "E1.2": { coef: 3, semaineDebut: 0, blocs: ["E1.2"] },
      "E2": { coef: 3, semaineDebut: 0, blocs: ["E2"] },
      "E3": { coef: 6, semaineDebut: 0, blocs: ["E3"] },
      "Annales": { coef: 5, semaineDebut: 0, blocs: ["annales"] }, // dernier mois
      "Passeport": { coef: 5, semaineDebut: 0, blocs: ["passeport"] } // tout au long
    };

    // Plan sur la durée
    // Phase 1 (premiers 60%) : apprendre les processus dans l'ordre
    // Phase 2 (30% suivant) : approfondir, passer en pratique
    // Phase 3 (10% final = ~3 sem) : annales + révisions
    const phases = [];
    const sP1Fin = Math.floor(semaines * 0.10);
    const sP2Fin = Math.floor(semaines * 0.20);
    const sP3Fin = Math.floor(semaines * 0.30);
    const sP4Fin = Math.floor(semaines * 0.40);
    const sP5Fin = Math.floor(semaines * 0.50);
    const sP6Fin = Math.floor(semaines * 0.58);
    const sP7Fin = Math.floor(semaines * 0.65);
    const sGeneraleFin = Math.floor(semaines * 0.80);
    const sAnnalesFin = semaines - 1;

    phases.push({ debut: 0, fin: sP1Fin, focus: "P1 + Passeport", description: "Maîtriser les opérations courantes (factures, TVA, règlements, lettrage)" });
    phases.push({ debut: sP1Fin, fin: sP2Fin, focus: "P2 + Passeport", description: "Inventaire, amortissements, comptes annuels" });
    phases.push({ debut: sP2Fin, fin: sP3Fin, focus: "P3 + E2 maths", description: "Fiscalité (TVA, IS, CFE) + débuter les maths fi" });
    phases.push({ debut: sP3Fin, fin: sP4Fin, focus: "P4", description: "Paie, charges sociales, DSN" });
    phases.push({ debut: sP4Fin, fin: sP5Fin, focus: "P5 + E1.1 culture gé", description: "Coûts, budgets, écarts + commencer culture gé" });
    phases.push({ debut: sP5Fin, fin: sP6Fin, focus: "P6 + E2 maths", description: "Analyse financière (SIG, CAF, ratios)" });
    phases.push({ debut: sP6Fin, fin: sP7Fin, focus: "P7 + E1.2 anglais", description: "SI comptable + démarrer l'anglais" });
    phases.push({ debut: sP7Fin, fin: sGeneraleFin, focus: "E1, E2, E3", description: "Matières générales et CEJM" });
    phases.push({ debut: sGeneraleFin, fin: sAnnalesFin, focus: "Annales", description: "Faire toutes les annales corrigées disponibles" });
    phases.push({ debut: sAnnalesFin, fin: semaines, focus: "Révisions finales", description: "Synthèses, fiches, repos avant l'épreuve" });

    // Génère les semaines détaillées
    const semainesDetail = [];
    for (let i = 0; i < semaines; i++) {
      const dateSemaine = new Date(aujourdhui);
      dateSemaine.setDate(dateSemaine.getDate() + i * 7);
      const phase = phases.find(p => i >= p.debut && i < p.fin) || phases[phases.length - 1];

      semainesDetail.push({
        numero: i + 1,
        dateDebut: dateSemaine.toISOString().slice(0, 10),
        focus: phase.focus,
        description: phase.description,
        objectifs: this._genererObjectifs(phase.focus, heuresHebdo)
      });
    }

    return {
      semainesTotal: semaines,
      heuresHebdo,
      heuresTotal: semaines * heuresHebdo,
      dateExamen,
      phases,
      semainesDetail
    };
  },

  _genererObjectifs(focus, heures) {
    const obj = [];
    const heuresParTache = Math.floor(heures / 4);

    if (focus.includes("P1")) {
      obj.push(`📚 Étudier 2-3 cours de P1 dans l'app (${heuresParTache}h)`);
      obj.push(`✏️ Faire 4-6 opérations sur les entreprises fictives (${heuresParTache}h)`);
      obj.push(`📝 1 fiche de Passeport Professionnel (${heuresParTache}h)`);
    } else if (focus.includes("P2")) {
      obj.push(`📚 Étudier 2-3 cours de P2 (${heuresParTache}h)`);
      obj.push(`🔢 Pratiquer le calculateur d'amortissement linéaire/dégressif (${heuresParTache}h)`);
      obj.push(`📊 Construire un bilan + CR à partir d'une balance (${heuresParTache}h)`);
    } else if (focus.includes("P3")) {
      obj.push(`📚 Étudier 2 cours de P3 (TVA, IS) (${heuresParTache}h)`);
      obj.push(`🧮 Pratiquer les calculs IS et CA3 (${heuresParTache}h)`);
      obj.push(`📺 Vidéo YouTube CRCF/Comptalia sur la liasse fiscale (${heuresParTache}h)`);
    } else if (focus.includes("P4")) {
      obj.push(`📚 Étudier les cours de P4 (paie, DSN) (${heuresParTache}h)`);
      obj.push(`💰 Reconstituer 5 bulletins de paie (${heuresParTache}h)`);
      obj.push(`📺 Vidéo URSSAF sur les déclarations (${heuresParTache}h)`);
    } else if (focus.includes("P5")) {
      obj.push(`📚 Étudier les cours de P5 (coûts, budgets) (${heuresParTache}h)`);
      obj.push(`🔢 Calculer SR + écarts sur 3 cas (${heuresParTache}h)`);
      obj.push(`📊 Bâtir un budget de trésorerie sur 6 mois (${heuresParTache}h)`);
    } else if (focus.includes("P6")) {
      obj.push(`📚 Étudier les cours de P6 (SIG, CAF, ratios) (${heuresParTache}h)`);
      obj.push(`📈 Calculer SIG + ratios + diagnostic sur 2 entreprises (${heuresParTache}h)`);
      obj.push(`🔍 Lire un rapport annuel d'une entreprise cotée (${heuresParTache}h)`);
    } else if (focus.includes("P7")) {
      obj.push(`📚 Étudier les cours de P7 (SQL, tableurs) (${heuresParTache}h)`);
      obj.push(`💻 Pratiquer SQL sur SQLfiddle ou DBFiddle (${heuresParTache}h)`);
      obj.push(`📊 Construire un TCD + macro VBA simple (${heuresParTache}h)`);
    } else if (focus.includes("E1.1")) {
      obj.push(`📰 Lire un article par jour sur le thème national (${heuresParTache}h)`);
      obj.push(`✏️ S'entraîner à 1 synthèse de 4 documents (${heuresParTache}h)`);
    } else if (focus.includes("E1.2")) {
      obj.push(`🎧 1 podcast en anglais sur l'économie (${heuresParTache}h)`);
      obj.push(`📖 Lire un article Wall Street Journal / FT (${heuresParTache}h)`);
      obj.push(`🗣️ Préparer un pitch oral en anglais (${heuresParTache}h)`);
    } else if (focus.includes("E2")) {
      obj.push(`📚 Maths fi : intérêts composés, annuités (${heuresParTache}h)`);
      obj.push(`📊 Stats : lois normale, binomiale (${heuresParTache}h)`);
    } else if (focus.includes("E3")) {
      obj.push(`📚 1 thème CEJM (économie/droit/management) (${heuresParTache}h)`);
      obj.push(`📰 Actualité économique (Les Echos, Le Monde Éco) (${heuresParTache}h)`);
    } else if (focus.includes("Annales")) {
      obj.push(`📝 Faire 1 sujet E4.1 en conditions réelles (4h30)`);
      obj.push(`✅ Auto-correction avec le corrigé`);
      obj.push(`📋 Refaire les exercices ratés`);
    } else if (focus.includes("Révisions")) {
      obj.push(`📋 Relire les fiches de synthèse`);
      obj.push(`🔢 Refaire les calculatrices clés`);
      obj.push(`😴 Repos avant l'épreuve`);
    } else {
      obj.push(`📚 ${heuresParTache}h de cours dans l'app sur le thème ${focus}`);
      obj.push(`✏️ ${heuresParTache}h de pratique`);
      obj.push(`📺 ${heuresParTache}h de vidéos YouTube`);
    }

    return obj;
  }
};
