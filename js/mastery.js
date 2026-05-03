// Système de progression (scaffolding fade)
// L'utilisateur coche les compétences qu'il maîtrise -> l'app retire les aides correspondantes

const COMPETENCES = [
  { id: "M1", titre: "Identifier les comptes du PCG concernés", description: "Trouver soi-même le numéro de compte (ex: 401 vs 411)" },
  { id: "M2", titre: "Décider du sens (débit / crédit)", description: "Savoir quel compte va au débit et lequel va au crédit" },
  { id: "M3", titre: "Calculer la TVA (HT, TVA, TTC)", description: "Décomposer un TTC en HT + TVA, ou inversement" },
  { id: "M4", titre: "Saisir une écriture d'achat", description: "Écriture complète : 6/2, 445660, 401" },
  { id: "M5", titre: "Saisir une écriture de vente", description: "Écriture complète : 411, 7, 445710" },
  { id: "M6", titre: "Saisir un règlement", description: "Solder 401 ou 411 contre 512 / 530" },
  { id: "M7", titre: "Lettrer un compte de tiers", description: "Associer factures et règlements pour identifier les impayés" },
  { id: "M8", titre: "Vérifier l'équilibre débit = crédit", description: "Contrôler qu'une écriture est équilibrée sans aide visuelle" }
];

const Mastery = {
  STORAGE_KEY: "btscg_mastery",

  charger() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return this._defaut();
      const obj = JSON.parse(raw);
      // S'assurer que toutes les compétences sont présentes
      COMPETENCES.forEach(c => {
        if (!(c.id in obj)) obj[c.id] = false;
      });
      return obj;
    } catch (e) {
      return this._defaut();
    }
  },

  _defaut() {
    const obj = {};
    COMPETENCES.forEach(c => { obj[c.id] = false; });
    return obj;
  },

  sauvegarder(state) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  },

  estMaitrise(competenceId) {
    return this.charger()[competenceId] === true;
  },

  basculer(competenceId) {
    const state = this.charger();
    state[competenceId] = !state[competenceId];
    this.sauvegarder(state);
    return state[competenceId];
  },

  // Niveau d'aide à afficher pour une opération donnée
  niveauAide(operation) {
    const m = this.charger();
    return {
      suggererCompte: !m.M1,           // proposer le compte dans la dropdown
      preremplirSens: !m.M2,            // mettre au débit/crédit automatiquement
      afficherCalculTVA: !m.M3,         // panneau d'aide TVA
      preremplirEcriture: !m.M4 && !m.M5, // pré-remplir tout (mode débutant)
      verifierEquilibreAuto: !m.M8     // alerter en temps réel sur les déséquilibres
    };
  },

  pourcentage() {
    const state = this.charger();
    const total = COMPETENCES.length;
    const acquis = COMPETENCES.filter(c => state[c.id]).length;
    return Math.round((acquis / total) * 100);
  }
};
