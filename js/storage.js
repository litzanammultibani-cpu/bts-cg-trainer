// Sauvegarde / chargement / export / import de la progression utilisateur

const Storage = {
  PREFIX: "btscg_",

  // Toutes les écritures saisies par l'utilisateur, par entreprise
  ecrituresKey(businessId) { return `${this.PREFIX}ecritures_${businessId}`; },
  // Quiz résolus
  quizKey() { return `${this.PREFIX}quiz`; },
  // Lessons complétées
  lessonsKey() { return `${this.PREFIX}lessons`; },
  // Lettrages
  lettrageKey(businessId) { return `${this.PREFIX}lettrage_${businessId}`; },

  chargerEcritures(businessId) {
    try {
      const raw = localStorage.getItem(this.ecrituresKey(businessId));
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  },

  sauvegarderEcriture(businessId, ecriture) {
    const ecritures = this.chargerEcritures(businessId);
    const idx = ecritures.findIndex(e => e.operation_id === ecriture.operation_id);
    if (idx >= 0) {
      ecritures[idx] = ecriture;
    } else {
      ecritures.push(ecriture);
    }
    localStorage.setItem(this.ecrituresKey(businessId), JSON.stringify(ecritures));
  },

  supprimerEcriture(businessId, operationId) {
    const ecritures = this.chargerEcritures(businessId).filter(e => e.operation_id !== operationId);
    localStorage.setItem(this.ecrituresKey(businessId), JSON.stringify(ecritures));
  },

  chargerLessonsTerminees() {
    try {
      const raw = localStorage.getItem(this.lessonsKey());
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  },

  marquerLessonTerminee(lessonId) {
    const list = this.chargerLessonsTerminees();
    if (!list.includes(lessonId)) list.push(lessonId);
    localStorage.setItem(this.lessonsKey(), JSON.stringify(list));
  },

  chargerQuizResultats() {
    try {
      const raw = localStorage.getItem(this.quizKey());
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  },

  sauvegarderQuizResultat(lessonId, resultats) {
    const all = this.chargerQuizResultats();
    all[lessonId] = resultats;
    localStorage.setItem(this.quizKey(), JSON.stringify(all));
  },

  exporterTout() {
    const data = {
      version: 1,
      exporte_le: new Date().toISOString(),
      mastery: Mastery.charger(),
      lessons_terminees: this.chargerLessonsTerminees(),
      quiz_resultats: this.chargerQuizResultats(),
      ecritures: {}
    };
    Object.keys(BUSINESSES).forEach(id => {
      data.ecritures[id] = this.chargerEcritures(id);
    });
    return data;
  },

  importerTout(data) {
    if (!data || data.version !== 1) {
      throw new Error("Fichier de sauvegarde invalide ou version non supportée.");
    }
    if (data.mastery) Mastery.sauvegarder(data.mastery);
    if (data.lessons_terminees) localStorage.setItem(this.lessonsKey(), JSON.stringify(data.lessons_terminees));
    if (data.quiz_resultats) localStorage.setItem(this.quizKey(), JSON.stringify(data.quiz_resultats));
    if (data.ecritures) {
      Object.entries(data.ecritures).forEach(([id, ecritures]) => {
        localStorage.setItem(this.ecrituresKey(id), JSON.stringify(ecritures));
      });
    }
  },

  reset() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.PREFIX))
      .forEach(k => localStorage.removeItem(k));
    localStorage.removeItem(Mastery.STORAGE_KEY);
  }
};
