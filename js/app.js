// Application principale - logique UI et routage

const App = {
  state: {
    currentSection: "dashboard",
    currentBusiness: null,
    currentOperation: null,
    currentLesson: null
  },

  init() {
    this.attacherNavigation();
    this.afficherDashboard();
  },

  attacherNavigation() {
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        this.naviguer(el.dataset.nav);
      });
    });
  },

  naviguer(section, params = {}) {
    this.state.currentSection = section;
    document.querySelectorAll("[data-nav]").forEach(el => {
      el.classList.toggle("actif", el.dataset.nav === section);
    });

    switch (section) {
      case "dashboard": this.afficherDashboard(); break;
      case "cours": this.afficherCours(params.lessonId, params.filtre); break;
      case "entreprises": this.afficherEntreprises(); break;
      case "saisie": this.afficherSaisie(params.businessId, params.operationId); break;
      case "comptabilite": this.afficherComptabilite(params.businessId); break;
      case "competences": this.afficherCompetences(); break;
      case "calculs": this.afficherCalculs(params.outil); break;
      case "passeport": this.afficherPasseport(params.ficheId); break;
      case "annales": this.afficherAnnales(params.annalesId); break;
      case "ressources": this.afficherRessources(); break;
      case "planning": this.afficherPlanning(); break;
      case "sauvegarde": this.afficherSauvegarde(); break;
      default: this.afficherDashboard();
    }
  },

  // ============== DASHBOARD ==============
  afficherDashboard() {
    const lessonsDone = Storage.chargerLessonsTerminees();
    const totalLessons = LESSONS.length;
    const masteryPct = Mastery.pourcentage();

    let nbEcritures = 0;
    Object.keys(BUSINESSES).forEach(id => {
      nbEcritures += Storage.chargerEcritures(id).length;
    });

    const html = `
      <h1>Tableau de bord</h1>
      <p class="lead">Bienvenue dans votre formation BTS Comptabilité et Gestion. Travaillez à votre rythme, l'application s'adapte à votre niveau.</p>

      <div class="cards">
        <div class="card">
          <div class="card-stat">${lessonsDone.length} / ${totalLessons}</div>
          <div class="card-label">Cours étudiés</div>
          <button class="btn-link" data-go="cours">Continuer le cours →</button>
        </div>
        <div class="card">
          <div class="card-stat">${nbEcritures}</div>
          <div class="card-label">Écritures saisies</div>
          <button class="btn-link" data-go="entreprises">Pratiquer →</button>
        </div>
        <div class="card">
          <div class="card-stat">${masteryPct} %</div>
          <div class="card-label">Compétences maîtrisées</div>
          <button class="btn-link" data-go="competences">Mes compétences →</button>
        </div>
      </div>

      <h2>Le programme couvert</h2>
      <div class="cards">
        <div class="card"><strong>P1</strong> · Opérations commerciales<br><small>Factures, TVA, règlements, lettrage</small></div>
        <div class="card"><strong>P2</strong> · Production information financière<br><small>Inventaire, amortissements, comptes annuels</small></div>
        <div class="card"><strong>P3</strong> · Obligations fiscales<br><small>TVA, IS, CFE/CVAE</small></div>
        <div class="card"><strong>P4</strong> · Relations sociales<br><small>Paie, DSN, congés</small></div>
        <div class="card"><strong>P5</strong> · Analyse et prévision<br><small>Coûts, budgets, écarts</small></div>
        <div class="card"><strong>P6</strong> · Analyse financière<br><small>SIG, CAF, ratios</small></div>
        <div class="card"><strong>P7</strong> · SI comptable<br><small>SQL, dématérialisation, ERP</small></div>
        <div class="card"><strong>E1.1 / E1.2 / E2 / E3</strong><br><small>Culture gé, anglais, maths, CEJM</small></div>
      </div>

      <h2>Comment progresser</h2>
      <ol class="numerotee">
        <li>Lire les <strong>cours</strong> dans l'ordre des processus (P1 → P7) puis matières générales.</li>
        <li>Faire les <strong>quiz</strong> à la fin de chaque cours.</li>
        <li>Pratiquer sur une <strong>entreprise fictive</strong> en saisissant les écritures du mois.</li>
        <li>Utiliser les <strong>calculatrices</strong> pour amortissements, paie, IS, SIG, etc.</li>
        <li>Cocher les <strong>compétences acquises</strong> → l'app retire les aides automatiques (mode examen).</li>
        <li>Constituer votre <strong>passeport professionnel</strong> au fil de l'eau pour l'épreuve E6.</li>
      </ol>

      <div class="encadre">
        <strong>Astuce :</strong> au début, l'application <strong>vous guide</strong> (suggestions de comptes, calcul TVA automatique, débit/crédit pré-remplis). Au fur et à mesure que vous cochez les compétences acquises dans <em>Mes compétences</em>, elle retire ces aides pour vous mettre en conditions d'examen.
      </div>
    `;
    this.rendre(html);
    document.querySelectorAll("[data-go]").forEach(b => {
      b.addEventListener("click", () => this.naviguer(b.dataset.go));
    });
  },

  // ============== COURS ==============
  afficherCours(lessonId, filtre) {
    if (lessonId) return this.afficherUneLesson(lessonId);

    const lessonsDone = Storage.chargerLessonsTerminees();
    const groupes = {
      P1: { titre: "P1 · Opérations commerciales", desc: "Factures, TVA, règlements, lettrage" },
      P2: { titre: "P2 · Production de l'information financière", desc: "Inventaire, amortissements, comptes annuels" },
      P3: { titre: "P3 · Obligations fiscales", desc: "TVA, IS, CFE/CVAE" },
      P4: { titre: "P4 · Relations sociales", desc: "Paie, DSN, congés" },
      P5: { titre: "P5 · Analyse et prévision", desc: "Coûts, budgets, écarts" },
      P6: { titre: "P6 · Analyse financière", desc: "SIG, CAF, ratios, bilan fonctionnel" },
      P7: { titre: "P7 · Système d'information comptable", desc: "Contrôle interne, SQL, dématérialisation" },
      "E1.1": { titre: "E1.1 · Culture générale", desc: "Synthèse + écriture personnelle" },
      "E1.2": { titre: "E1.2 · Anglais", desc: "Vocabulaire pro et oral" },
      E2: { titre: "E2 · Mathématiques appliquées", desc: "Maths fi, stats, probas" },
      E3: { titre: "E3 · CEJM", desc: "Économie, droit, management" }
    };

    const filtres = Object.keys(groupes);
    const filtresHtml = `
      <div class="filtres-cours">
        <button class="chip ${!filtre ? 'actif' : ''}" data-f="">Tous</button>
        ${filtres.map(f => `<button class="chip ${filtre === f ? 'actif' : ''}" data-f="${f}">${f}</button>`).join("")}
      </div>
    `;

    const lessonsAffichees = filtre ? LESSONS.filter(l => l.processus === filtre) : LESSONS;
    const parGroupe = {};
    lessonsAffichees.forEach(l => {
      if (!parGroupe[l.processus]) parGroupe[l.processus] = [];
      parGroupe[l.processus].push(l);
    });

    let groupesHtml = "";
    Object.keys(groupes).forEach(p => {
      if (!parGroupe[p] || !parGroupe[p].length) return;
      groupesHtml += `
        <section class="groupe-cours">
          <h2>${groupes[p].titre}</h2>
          <p class="meta">${groupes[p].desc}</p>
          <ul class="lesson-list">
            ${parGroupe[p].map(l => {
              const fait = lessonsDone.includes(l.id);
              return `
                <li class="lesson-item ${fait ? 'termine' : ''}" data-lesson="${l.id}">
                  <span class="lesson-id">${l.id}</span>
                  <span class="lesson-titre">${l.titre}</span>
                  <span class="lesson-meta">${l.duree_min} min ${fait ? "✓" : ""}</span>
                </li>
              `;
            }).join("")}
          </ul>
        </section>
      `;
    });

    const html = `
      <h1>Cours du BTS CG</h1>
      <p class="lead">${LESSONS.length} cours répartis sur les 7 processus + matières générales. Chaque cours se termine par un quiz.</p>
      ${filtresHtml}
      ${groupesHtml || '<p class="vide">Aucun cours dans ce filtre.</p>'}
    `;
    this.rendre(html);
    document.querySelectorAll(".lesson-item").forEach(el => {
      el.addEventListener("click", () => this.afficherUneLesson(el.dataset.lesson));
    });
    document.querySelectorAll("[data-f]").forEach(b => {
      b.addEventListener("click", () => this.naviguer("cours", { filtre: b.dataset.f || null }));
    });
  },

  afficherUneLesson(id) {
    const lesson = getLesson(id);
    if (!lesson) return this.afficherCours();

    this.state.currentLesson = id;
    const idx = LESSONS.findIndex(l => l.id === id);
    const precedent = idx > 0 ? LESSONS[idx - 1] : null;
    const suivant = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;

    const html = `
      <div class="breadcrumb"><a href="#" data-back-cours>← Retour aux cours</a></div>
      <h1>${lesson.id} — ${lesson.titre}</h1>
      <p class="meta">Processus ${lesson.processus} · ${lesson.duree_min} min de lecture</p>
      <div class="lesson-content">${lesson.contenu}</div>

      <div class="quiz-zone" id="quizZone">
        <h2>Quiz de fin de cours</h2>
        <p>Répondez aux questions pour valider votre compréhension.</p>
        <div id="quizContent"></div>
      </div>

      <div class="navigation-cours">
        ${precedent ? `<button class="btn" data-prev="${precedent.id}">← ${precedent.id}</button>` : '<span></span>'}
        ${suivant ? `<button class="btn" data-next="${suivant.id}">${suivant.id} →</button>` : '<span></span>'}
      </div>
    `;
    this.rendre(html);

    document.querySelector("[data-back-cours]")?.addEventListener("click", e => {
      e.preventDefault();
      this.afficherCours();
    });
    document.querySelector("[data-prev]")?.addEventListener("click", e => {
      this.afficherUneLesson(e.target.dataset.prev);
    });
    document.querySelector("[data-next]")?.addEventListener("click", e => {
      this.afficherUneLesson(e.target.dataset.next);
    });

    this.afficherQuiz(lesson);
  },

  afficherQuiz(lesson) {
    const zone = document.getElementById("quizContent");
    if (!zone || !lesson.quiz) return;
    const reponses = {};

    const html = lesson.quiz.map((q, i) => `
      <div class="quiz-question" data-q="${i}">
        <p class="q-text"><strong>${i + 1}. ${q.question}</strong></p>
        <div class="q-choix">
          ${q.choix.map((c, j) => `
            <label class="choix">
              <input type="radio" name="q${i}" value="${j}">
              <span>${c}</span>
            </label>
          `).join("")}
        </div>
        <div class="q-feedback" id="fb-${i}"></div>
      </div>
    `).join("") + `
      <button class="btn btn-primary" id="validerQuiz">Valider mes réponses</button>
      <div id="quizResult"></div>
    `;
    zone.innerHTML = html;

    document.getElementById("validerQuiz").addEventListener("click", () => {
      let correctes = 0;
      lesson.quiz.forEach((q, i) => {
        const choisi = document.querySelector(`input[name="q${i}"]:checked`);
        const fb = document.getElementById(`fb-${i}`);
        if (!choisi) {
          fb.innerHTML = '<span class="erreur">Veuillez choisir une réponse.</span>';
          return;
        }
        const idx = Number(choisi.value);
        if (idx === q.reponse) {
          correctes++;
          fb.innerHTML = `<span class="correct">✓ Correct.</span> ${q.explication}`;
        } else {
          fb.innerHTML = `<span class="erreur">✗ Mauvaise réponse.</span> Bonne réponse : <strong>${q.choix[q.reponse]}</strong>. ${q.explication}`;
        }
        reponses[i] = idx;
      });
      const total = lesson.quiz.length;
      Storage.sauvegarderQuizResultat(lesson.id, { correctes, total, reponses });
      const result = document.getElementById("quizResult");
      result.innerHTML = `<div class="encadre ${correctes === total ? 'success' : 'partial'}">
        Score : ${correctes} / ${total}
        ${correctes === total ? "<br><strong>Parfait !</strong> Cours marqué comme étudié." : "<br>Relisez les passages que vous n'avez pas validés."}
      </div>`;
      if (correctes === total) Storage.marquerLessonTerminee(lesson.id);
    });
  },

  // ============== ENTREPRISES ==============
  afficherEntreprises() {
    const items = listBusinesses().map(b => {
      const ecritures = Storage.chargerEcritures(b.id);
      const business = getBusiness(b.id);
      const operationsRestantes = business.operations.length - ecritures.length;
      return `
        <div class="entreprise-card">
          <h3>${b.nom}</h3>
          <p class="meta">${b.forme} · ${b.activite}</p>
          <p>${b.description}</p>
          <p class="progress">${b.nb_operations - operationsRestantes} / ${b.nb_operations} opérations traitées</p>
          <div class="card-actions">
            <button class="btn btn-primary" data-pratiquer="${b.id}">Pratiquer</button>
            <button class="btn" data-comptabilite="${b.id}">Voir la comptabilité</button>
          </div>
        </div>
      `;
    }).join("");

    const html = `
      <h1>Entreprises fictives</h1>
      <p class="lead">Chaque entreprise propose un mois d'opérations à enregistrer. Choisissez celle sur laquelle vous voulez travailler.</p>
      <div class="entreprises-grid">${items}</div>
    `;
    this.rendre(html);
    document.querySelectorAll("[data-pratiquer]").forEach(b => {
      b.addEventListener("click", () => this.naviguer("saisie", { businessId: b.dataset.pratiquer }));
    });
    document.querySelectorAll("[data-comptabilite]").forEach(b => {
      b.addEventListener("click", () => this.naviguer("comptabilite", { businessId: b.dataset.comptabilite }));
    });
  },

  // ============== SAISIE ==============
  afficherSaisie(businessId, operationId) {
    const business = getBusiness(businessId);
    if (!business) return this.afficherEntreprises();

    this.state.currentBusiness = businessId;
    const ecritures = Storage.chargerEcritures(businessId);
    const operations = business.operations.map(op => {
      const fait = ecritures.some(e => e.operation_id === op.id);
      return { ...op, fait };
    });

    if (!operationId) {
      const prochaine = operations.find(o => !o.fait);
      operationId = prochaine ? prochaine.id : operations[0].id;
    }
    const operation = operations.find(o => o.id === operationId);
    this.state.currentOperation = operationId;

    const sidebarHtml = operations.map(op => `
      <li class="op-item ${op.fait ? 'fait' : ''} ${op.id === operationId ? 'actif' : ''}" data-op="${op.id}">
        <span class="op-date">${this.formaterDate(op.date)}</span>
        <span class="op-type">${this.libellerType(op.type)}</span>
        ${op.fait ? '<span class="op-check">✓</span>' : ''}
      </li>
    `).join("");

    const html = `
      <div class="breadcrumb"><a href="#" data-back-ent>← Entreprises</a> / ${business.nom}</div>
      <div class="saisie-layout">
        <aside class="saisie-sidebar">
          <h3>Opérations du mois</h3>
          <ul class="op-list">${sidebarHtml}</ul>
          <button class="btn btn-block" data-comptabilite="${businessId}">📊 Voir comptabilité</button>
        </aside>
        <main class="saisie-main" id="saisieMain"></main>
      </div>
    `;
    this.rendre(html);

    document.querySelector("[data-back-ent]").addEventListener("click", e => {
      e.preventDefault();
      this.naviguer("entreprises");
    });
    document.querySelectorAll(".op-item").forEach(el => {
      el.addEventListener("click", () => {
        this.naviguer("saisie", { businessId, operationId: el.dataset.op });
      });
    });
    document.querySelectorAll("[data-comptabilite]").forEach(b => {
      b.addEventListener("click", () => this.naviguer("comptabilite", { businessId: b.dataset.comptabilite }));
    });

    this.afficherFormulaireSaisie(business, operation);
  },

  afficherFormulaireSaisie(business, operation) {
    const main = document.getElementById("saisieMain");
    const aide = Mastery.niveauAide(operation);
    const dejaSaisie = Storage.chargerEcritures(business.id).find(e => e.operation_id === operation.id);

    const docHtml = this.afficherDocument(operation);
    const nbLignes = Math.max(operation.ecriture_attendue.length, 3);

    let lignesHtml = "";
    for (let i = 0; i < nbLignes; i++) {
      const attendue = operation.ecriture_attendue[i];
      const saisieExistante = dejaSaisie?.lignes[i];
      const valeurCompte = saisieExistante?.compte || (aide.preremplirEcriture && attendue ? attendue.compte : "");
      const valeurLibelle = saisieExistante?.libelle || (aide.preremplirEcriture && attendue ? attendue.libelle : "");
      const valeurDebit = saisieExistante?.debit || (aide.preremplirEcriture && attendue ? attendue.debit : "");
      const valeurCredit = saisieExistante?.credit || (aide.preremplirEcriture && attendue ? attendue.credit : "");

      const suggestionCompte = aide.suggererCompte && attendue ?
        `<small class="hint">💡 ${attendue.compte} — ${PCG[attendue.compte]?.libelle || ""}</small>` : "";

      lignesHtml += `
        <tr class="ligne-saisie">
          <td>
            <input type="text" class="input-compte" data-l="${i}" data-f="compte" value="${valeurCompte}" placeholder="ex: 401000" maxlength="6">
            ${suggestionCompte}
          </td>
          <td>
            <input type="text" class="input-libelle" data-l="${i}" data-f="libelle" value="${valeurLibelle}" placeholder="Libellé">
          </td>
          <td>
            <input type="number" class="input-montant" data-l="${i}" data-f="debit" value="${valeurDebit || ""}" placeholder="0,00" step="0.01" min="0">
          </td>
          <td>
            <input type="number" class="input-montant" data-l="${i}" data-f="credit" value="${valeurCredit || ""}" placeholder="0,00" step="0.01" min="0">
          </td>
        </tr>
      `;
    }

    const aideTVAHtml = aide.afficherCalculTVA ? `
      <div class="aide-tva">
        <h4>💡 Aide calcul TVA</h4>
        <div class="tva-calc">
          <input type="number" id="tvaHT" placeholder="HT" step="0.01">
          <input type="number" id="tvaTTC" placeholder="TTC" step="0.01">
          <select id="tvaTaux">
            <option value="20">20%</option>
            <option value="10">10%</option>
            <option value="5.5">5,5%</option>
            <option value="2.1">2,1%</option>
          </select>
          <button class="btn btn-small" id="btnCalcTVA">Calculer</button>
        </div>
        <div id="tvaResultat"></div>
      </div>
    ` : "";

    main.innerHTML = `
      <div class="op-header">
        <h2>${this.libellerType(operation.type)} — ${this.formaterDate(operation.date)}</h2>
        ${dejaSaisie ? '<span class="badge badge-success">Déjà saisie</span>' : ''}
      </div>

      <div class="document-box">
        <h3>📄 Document</h3>
        ${docHtml}
      </div>

      ${aideTVAHtml}

      <div class="saisie-form">
        <h3>Votre écriture comptable</h3>
        <table class="ecriture-table">
          <thead>
            <tr>
              <th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th>
            </tr>
          </thead>
          <tbody>${lignesHtml}</tbody>
          <tfoot>
            <tr>
              <td colspan="2"><strong>Totaux</strong></td>
              <td id="totalDebit">0,00</td>
              <td id="totalCredit">0,00</td>
            </tr>
          </tfoot>
        </table>

        <div class="actions">
          <button class="btn btn-primary" id="btnValider">Valider l'écriture</button>
          ${dejaSaisie ? '<button class="btn btn-danger" id="btnSupprimer">Supprimer</button>' : ''}
          <button class="btn btn-secondary" id="btnAide">${aide.preremplirEcriture ? "Cacher la solution" : "Voir la solution"}</button>
        </div>

        <div id="resultatValidation"></div>
        <div id="solutionAide" class="solution-cachee"></div>
      </div>
    `;

    // Calcul totaux en direct
    const recalculer = () => {
      let td = 0, tc = 0;
      document.querySelectorAll(".ligne-saisie").forEach(tr => {
        const d = Number(tr.querySelector('[data-f="debit"]').value) || 0;
        const c = Number(tr.querySelector('[data-f="credit"]').value) || 0;
        td += d; tc += c;
      });
      document.getElementById("totalDebit").textContent = Accounting.formaterEuro(td);
      document.getElementById("totalCredit").textContent = Accounting.formaterEuro(tc);
      const tdEl = document.getElementById("totalDebit");
      const tcEl = document.getElementById("totalCredit");
      const equilibre = Math.abs(td - tc) < 0.005;
      tdEl.classList.toggle("desequilibre", !equilibre && td > 0);
      tcEl.classList.toggle("desequilibre", !equilibre && tc > 0);
    };
    document.querySelectorAll(".ecriture-table input").forEach(i => i.addEventListener("input", recalculer));
    recalculer();

    // Calcul TVA
    document.getElementById("btnCalcTVA")?.addEventListener("click", () => {
      const ht = document.getElementById("tvaHT").value;
      const ttc = document.getElementById("tvaTTC").value;
      const taux = document.getElementById("tvaTaux").value;
      const r = Accounting.calculerTVA({ ht, ttc, taux });
      const out = document.getElementById("tvaResultat");
      if (!r) { out.textContent = "Saisissez HT ou TTC."; return; }
      out.innerHTML = `<strong>HT</strong> ${Accounting.formaterEuro(r.ht)} · <strong>TVA ${r.taux}%</strong> ${Accounting.formaterEuro(r.tva)} · <strong>TTC</strong> ${Accounting.formaterEuro(r.ttc)}`;
    });

    // Solution
    document.getElementById("btnAide").addEventListener("click", () => {
      const zone = document.getElementById("solutionAide");
      if (zone.classList.contains("solution-cachee")) {
        zone.innerHTML = `
          <h4>Solution attendue</h4>
          <table class="ecriture-table">
            <thead><tr><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr></thead>
            <tbody>
              ${operation.ecriture_attendue.map(l => `
                <tr>
                  <td>${l.compte}</td>
                  <td>${l.libelle}</td>
                  <td>${l.debit ? Accounting.formaterEuro(l.debit) : ""}</td>
                  <td>${l.credit ? Accounting.formaterEuro(l.credit) : ""}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <p class="explication">${operation.explication}</p>
        `;
        zone.classList.remove("solution-cachee");
      } else {
        zone.classList.add("solution-cachee");
        zone.innerHTML = "";
      }
    });

    // Validation
    document.getElementById("btnValider").addEventListener("click", () => {
      const lignes = [];
      document.querySelectorAll(".ligne-saisie").forEach((tr, i) => {
        const compte = tr.querySelector('[data-f="compte"]').value.trim();
        const libelle = tr.querySelector('[data-f="libelle"]').value.trim();
        const debit = Number(tr.querySelector('[data-f="debit"]').value) || 0;
        const credit = Number(tr.querySelector('[data-f="credit"]').value) || 0;
        if (compte || libelle || debit || credit) {
          lignes.push({ compte, libelle, debit, credit });
        }
      });

      const validation = Accounting.validerEcriture(lignes);
      const compare = Accounting.comparerAttendu(lignes, operation.ecriture_attendue);
      const zone = document.getElementById("resultatValidation");

      if (!validation.valide) {
        zone.className = "encadre erreur-box";
        zone.innerHTML = `<strong>L'écriture comporte des erreurs :</strong><ul>${validation.erreurs.map(e => `<li>${e}</li>`).join("")}</ul>`;
        return;
      }

      if (compare.correct) {
        zone.className = "encadre success-box";
        zone.innerHTML = `<strong>✓ Bravo, écriture correcte !</strong><br>${operation.explication}`;
        Storage.sauvegarderEcriture(business.id, {
          operation_id: operation.id,
          date: operation.date,
          libelle_general: this.libellerType(operation.type),
          lignes,
          validee_le: new Date().toISOString()
        });
        setTimeout(() => this.afficherSaisie(business.id), 1500);
      } else {
        zone.className = "encadre erreur-box";
        zone.innerHTML = `
          <strong>Écriture équilibrée mais qui ne correspond pas exactement à l'attendu :</strong>
          <ul>${compare.diff.map(d => `<li>${d}</li>`).join("")}</ul>
          <p>Astuce : vous pouvez cliquer sur "Voir la solution" pour comparer.</p>
        `;
      }
    });

    // Suppression
    document.getElementById("btnSupprimer")?.addEventListener("click", () => {
      if (confirm("Supprimer l'écriture saisie pour cette opération ?")) {
        Storage.supprimerEcriture(business.id, operation.id);
        this.afficherSaisie(business.id, operation.id);
      }
    });
  },

  afficherDocument(operation) {
    const doc = operation.document;
    if (operation.type === "facture_achat" || operation.type === "facture_vente") {
      const tiers = doc.fournisseur || doc.client;
      const tiersLabel = doc.fournisseur ? "Fournisseur" : "Client";
      return `
        <div class="facture">
          <div class="facture-entete">
            <div><strong>${tiersLabel} :</strong> ${tiers}</div>
            <div><strong>N° :</strong> ${doc.numero}</div>
          </div>
          <table class="facture-lignes">
            <thead><tr><th>Description</th><th>HT</th><th>TVA</th></tr></thead>
            <tbody>
              ${doc.lignes.map(l => `
                <tr>
                  <td>${l.description}</td>
                  <td>${Accounting.formaterEuro(l.ht)}</td>
                  <td>${l.tva_taux}%</td>
                </tr>
              `).join("")}
            </tbody>
            <tfoot>
              <tr><td>Total HT</td><td colspan="2">${Accounting.formaterEuro(doc.total_ht)}</td></tr>
              <tr><td>TVA</td><td colspan="2">${Accounting.formaterEuro(doc.total_tva)}</td></tr>
              <tr class="total"><td><strong>Total TTC</strong></td><td colspan="2"><strong>${Accounting.formaterEuro(doc.total_ttc)}</strong></td></tr>
            </tfoot>
          </table>
          <div class="facture-pied"><em>${doc.mode_reglement}</em></div>
        </div>
      `;
    }
    if (operation.type === "vente_caisse") {
      return `
        <div class="recette">
          <p><strong>${doc.libelle}</strong></p>
          <p>Total TTC : <strong>${Accounting.formaterEuro(doc.ventes_ttc)}</strong></p>
          <p>Taux TVA : ${doc.tva_taux} %</p>
          <p>Mode : ${doc.mode_reglement}</p>
        </div>
      `;
    }
    if (operation.type === "reglement_fournisseur" || operation.type === "reglement_client") {
      return `
        <div class="reglement">
          <p><strong>${doc.libelle}</strong></p>
          <p>Montant : <strong>${Accounting.formaterEuro(doc.montant)}</strong></p>
          <p>Mode : ${doc.mode_reglement}</p>
        </div>
      `;
    }
    return `<pre>${JSON.stringify(doc, null, 2)}</pre>`;
  },

  // ============== COMPTABILITÉ ==============
  afficherComptabilite(businessId) {
    businessId = businessId || this.state.currentBusiness;
    const business = getBusiness(businessId);
    if (!business) return this.afficherEntreprises();

    const ecritures = Storage.chargerEcritures(businessId);
    const journal = Accounting.construireJournal(ecritures);
    const grandLivre = Accounting.construireGrandLivre(business.balance_ouverture, ecritures);
    const balance = Accounting.construireBalance(grandLivre);

    const html = `
      <div class="breadcrumb"><a href="#" data-back-ent>← Entreprises</a> / ${business.nom} / Comptabilité</div>
      <h1>Comptabilité — ${business.nom}</h1>
      <p class="lead">${ecritures.length} écriture(s) saisie(s) sur ${business.operations.length} opérations.</p>

      <div class="tabs">
        <button class="tab actif" data-tab="journal">Journal</button>
        <button class="tab" data-tab="grandlivre">Grand livre</button>
        <button class="tab" data-tab="balance">Balance</button>
      </div>

      <div id="tabContent"></div>
      <div class="actions" style="margin-top:2rem;">
        <button class="btn btn-primary" data-pratiquer="${businessId}">← Continuer la saisie</button>
      </div>
    `;
    this.rendre(html);

    document.querySelector("[data-back-ent]").addEventListener("click", e => {
      e.preventDefault();
      this.naviguer("entreprises");
    });
    document.querySelector("[data-pratiquer]").addEventListener("click", e => {
      this.naviguer("saisie", { businessId: e.target.dataset.pratiquer });
    });

    const afficherTab = (tab) => {
      const zone = document.getElementById("tabContent");
      document.querySelectorAll(".tab").forEach(t => t.classList.toggle("actif", t.dataset.tab === tab));

      if (tab === "journal") {
        zone.innerHTML = journal.length === 0 ?
          "<p class='vide'>Aucune écriture saisie pour le moment.</p>" :
          `<table class="table journal">
            <thead><tr><th>Date</th><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr></thead>
            <tbody>
              ${journal.map(e => e.lignes.map((l, i) => `
                <tr class="${i === 0 ? 'ecriture-debut' : ''}">
                  <td>${i === 0 ? this.formaterDate(e.date) : ''}</td>
                  <td>${l.compte}</td>
                  <td>${l.libelle || ''}</td>
                  <td>${l.debit ? Accounting.formaterEuro(l.debit) : ''}</td>
                  <td>${l.credit ? Accounting.formaterEuro(l.credit) : ''}</td>
                </tr>
              `).join("")).join("")}
            </tbody>
          </table>`;
      } else if (tab === "grandlivre") {
        zone.innerHTML = grandLivre.map(c => `
          <div class="compte-box">
            <h4>${c.numero} — ${c.libelle}</h4>
            <table class="table">
              <thead><tr><th>Date</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr></thead>
              <tbody>
                ${c.mouvements.map(m => `
                  <tr class="${m.source === 'ouverture' ? 'ouverture' : ''}">
                    <td>${m.date === 'Ouverture' ? 'Ouv.' : this.formaterDate(m.date)}</td>
                    <td>${m.libelle}</td>
                    <td>${m.debit ? Accounting.formaterEuro(m.debit) : ''}</td>
                    <td>${m.credit ? Accounting.formaterEuro(m.credit) : ''}</td>
                  </tr>
                `).join("")}
                <tr class="totaux">
                  <td colspan="2"><strong>Solde ${c.sens === 'debit' ? 'débiteur' : c.sens === 'credit' ? 'créditeur' : 'nul'}</strong></td>
                  <td>${c.sens === 'debit' ? Accounting.formaterEuro(c.solde) : ''}</td>
                  <td>${c.sens === 'credit' ? Accounting.formaterEuro(-c.solde) : ''}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `).join("");
      } else {
        zone.innerHTML = `<table class="table balance">
          <thead><tr><th>N°</th><th>Libellé</th><th>Total débit</th><th>Total crédit</th><th>Solde débiteur</th><th>Solde créditeur</th></tr></thead>
          <tbody>
            ${balance.lignes.map(l => `
              <tr>
                <td>${l.numero}</td>
                <td>${l.libelle}</td>
                <td>${l.totalDebit ? Accounting.formaterEuro(l.totalDebit) : ''}</td>
                <td>${l.totalCredit ? Accounting.formaterEuro(l.totalCredit) : ''}</td>
                <td>${l.soldeDebit ? Accounting.formaterEuro(l.soldeDebit) : ''}</td>
                <td>${l.soldeCredit ? Accounting.formaterEuro(l.soldeCredit) : ''}</td>
              </tr>
            `).join("")}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"><strong>Totaux</strong></td>
              <td><strong>${Accounting.formaterEuro(balance.totaux.debit)}</strong></td>
              <td><strong>${Accounting.formaterEuro(balance.totaux.credit)}</strong></td>
              <td><strong>${Accounting.formaterEuro(balance.totaux.soldeDebit)}</strong></td>
              <td><strong>${Accounting.formaterEuro(balance.totaux.soldeCredit)}</strong></td>
            </tr>
          </tfoot>
        </table>`;
      }
    };
    document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => afficherTab(t.dataset.tab)));
    afficherTab("journal");
  },

  // ============== COMPÉTENCES ==============
  afficherCompetences() {
    const state = Mastery.charger();
    const items = COMPETENCES.map(c => `
      <li class="competence-item">
        <label>
          <input type="checkbox" data-comp="${c.id}" ${state[c.id] ? 'checked' : ''}>
          <div class="comp-content">
            <strong>${c.id} · ${c.titre}</strong>
            <small>${c.description}</small>
          </div>
        </label>
      </li>
    `).join("");

    const html = `
      <h1>Mes compétences</h1>
      <p class="lead">Cochez ce que vous maîtrisez. À chaque case cochée, l'application retire l'aide correspondante dans les exercices pour vous mettre en conditions d'examen.</p>
      <div class="encadre">
        <strong>Comment l'utiliser ?</strong><br>
        Au début, laissez tout décoché. Faites les exercices avec toutes les aides. Quand vous sentez qu'une compétence est acquise (vous n'avez plus besoin de l'aide), cochez-la. Vous pouvez décocher si nécessaire.
      </div>
      <ul class="competence-list">${items}</ul>
    `;
    this.rendre(html);

    document.querySelectorAll("[data-comp]").forEach(cb => {
      cb.addEventListener("change", () => {
        Mastery.basculer(cb.dataset.comp);
      });
    });
  },

  // ============== CALCULS ==============
  afficherCalculs(outil) {
    if (!outil) {
      const outils = [
        { id: "amort-lin", titre: "Amortissement linéaire", desc: "Calcule l'annuité et le tableau d'amortissement", processus: "P2" },
        { id: "amort-deg", titre: "Amortissement dégressif", desc: "Calcul avec coefficient et bascule en linéaire", processus: "P2" },
        { id: "tva-ca3", titre: "Calcul TVA / CA3", desc: "TVA collectée − déductible = à décaisser", processus: "P3" },
        { id: "is", titre: "Impôt sur les sociétés (IS)", desc: "Calcul avec taux PME 15% / normal 25%", processus: "P3" },
        { id: "paie", titre: "Paie simplifiée", desc: "Du brut au net, charges patronales", processus: "P4" },
        { id: "sr", titre: "Seuil de rentabilité", desc: "MCV, SR, point mort, levier opérationnel", processus: "P5" },
        { id: "sig", titre: "Soldes Intermédiaires de Gestion", desc: "Marge, VA, EBE, résultats", processus: "P6" },
        { id: "frng", titre: "Bilan fonctionnel (FRNG, BFR, TN)", desc: "Diagnostic financier", processus: "P6" },
        { id: "interets", titre: "Intérêts composés", desc: "Capitalisation, valeur acquise", processus: "E2" },
        { id: "emprunt", titre: "Tableau d'amortissement d'emprunt", desc: "Annuités constantes", processus: "E2" }
      ];
      const html = `
        <h1>Calculatrices comptables</h1>
        <p class="lead">Tous les calculs récurrents du BTS CG en accès direct. Idéal pour vérifier vos calculs ou explorer un cas.</p>
        <div class="entreprises-grid">
          ${outils.map(o => `
            <div class="entreprise-card" data-outil="${o.id}">
              <h3>${o.titre}</h3>
              <p class="meta">Processus ${o.processus}</p>
              <p>${o.desc}</p>
              <div class="card-actions"><button class="btn btn-primary">Ouvrir</button></div>
            </div>
          `).join("")}
        </div>
      `;
      this.rendre(html);
      document.querySelectorAll("[data-outil]").forEach(el => {
        el.addEventListener("click", () => this.naviguer("calculs", { outil: el.dataset.outil }));
      });
      return;
    }

    const formes = {
      "amort-lin": this.formCalcAmortLin,
      "amort-deg": this.formCalcAmortDeg,
      "tva-ca3": this.formCalcTVA,
      "is": this.formCalcIS,
      "paie": this.formCalcPaie,
      "sr": this.formCalcSR,
      "sig": this.formCalcSIG,
      "frng": this.formCalcFRNG,
      "interets": this.formCalcInterets,
      "emprunt": this.formCalcEmprunt
    };
    const fn = formes[outil];
    if (!fn) return this.naviguer("calculs");
    fn.call(this);
  },

  _wrapCalc(titre, formHtml, calculFn) {
    const html = `
      <div class="breadcrumb"><a href="#" data-back-calculs>← Calculatrices</a></div>
      <h1>${titre}</h1>
      <div class="card">
        ${formHtml}
        <button class="btn btn-primary" id="btnCalculer">Calculer</button>
      </div>
      <div id="resultatCalcul"></div>
    `;
    this.rendre(html);
    document.querySelector("[data-back-calculs]").addEventListener("click", e => {
      e.preventDefault();
      this.naviguer("calculs");
    });
    document.getElementById("btnCalculer").addEventListener("click", () => {
      try {
        calculFn();
      } catch (e) {
        document.getElementById("resultatCalcul").innerHTML = `<div class="encadre erreur-box">Erreur : ${e.message}</div>`;
      }
    });
  },

  formCalcAmortLin() {
    this._wrapCalc("Amortissement linéaire", `
      <label>Valeur d'origine (€) : <input type="number" id="vo" step="0.01" value="12000"></label>
      <label>Durée (années) : <input type="number" id="duree" value="5"></label>
      <label>Date de mise en service : <input type="date" id="dms" value="2024-04-01"></label>
    `, () => {
      const vo = Number(document.getElementById("vo").value);
      const duree = Number(document.getElementById("duree").value);
      const dms = document.getElementById("dms").value;
      const r = Calculs.amortissementLineaire(vo, duree, dms);
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Tableau d'amortissement</h3>
        <p>Taux : <strong>${r.taux} %</strong> · Annuité pleine : <strong>${Calculs.formaterEuro(r.annuiteAnnuelle)}</strong></p>
        <table class="table">
          <thead><tr><th>Année</th><th>Base</th><th>Mois</th><th>Annuité</th><th>Cumul</th><th>VNC</th></tr></thead>
          <tbody>
            ${r.tableau.map(l => `
              <tr><td>${l.annee}</td><td>${Calculs.formaterEuro(l.base)}</td><td>${l.nbMois}</td><td>${Calculs.formaterEuro(l.annuite)}</td><td>${Calculs.formaterEuro(l.cumul)}</td><td>${Calculs.formaterEuro(l.vnc)}</td></tr>
            `).join("")}
          </tbody>
        </table>
      `;
    });
  },

  formCalcAmortDeg() {
    this._wrapCalc("Amortissement dégressif", `
      <label>Valeur d'origine (€) : <input type="number" id="vo" step="0.01" value="50000"></label>
      <label>Durée (années) : <input type="number" id="duree" value="5"></label>
      <label>Date de mise en service : <input type="date" id="dms" value="2024-01-01"></label>
    `, () => {
      const r = Calculs.amortissementDegressif(
        Number(document.getElementById("vo").value),
        Number(document.getElementById("duree").value),
        document.getElementById("dms").value
      );
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Tableau d'amortissement dégressif</h3>
        <p>Coefficient : <strong>${r.coefficient}</strong> · Taux dégressif : <strong>${r.tauxDegressif} %</strong></p>
        <table class="table">
          <thead><tr><th>Année</th><th>Méthode</th><th>Taux</th><th>Annuité</th><th>Cumul</th><th>VNC</th></tr></thead>
          <tbody>
            ${r.tableau.map(l => `
              <tr><td>${l.annee}</td><td>${l.methode}</td><td>${l.taux} %</td><td>${Calculs.formaterEuro(l.annuite)}</td><td>${Calculs.formaterEuro(l.cumul)}</td><td>${Calculs.formaterEuro(l.vnc)}</td></tr>
            `).join("")}
          </tbody>
        </table>
      `;
    });
  },

  formCalcTVA() {
    this._wrapCalc("Calcul TVA / CA3 mensuelle", `
      <label>CA HT à 20% : <input type="number" id="ca20" step="0.01" value="20000"></label>
      <label>CA HT à 10% : <input type="number" id="ca10" step="0.01" value="0"></label>
      <label>CA HT à 5,5% : <input type="number" id="ca55" step="0.01" value="0"></label>
      <label>TVA déductible ABS : <input type="number" id="tvaAbs" step="0.01" value="2400"></label>
      <label>TVA déductible immo : <input type="number" id="tvaImmo" step="0.01" value="0"></label>
      <label>Crédit antérieur : <input type="number" id="credit" step="0.01" value="0"></label>
    `, () => {
      const r = Calculs.tvaCA3({
        caHT20: Number(document.getElementById("ca20").value),
        caHT10: Number(document.getElementById("ca10").value),
        caHT55: Number(document.getElementById("ca55").value),
        tvaDedAbs: Number(document.getElementById("tvaAbs").value),
        tvaDedImmo: Number(document.getElementById("tvaImmo").value),
        creditAnterieur: Number(document.getElementById("credit").value)
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Résultat</h3>
        <table class="table">
          <tr><td>TVA collectée 20%</td><td>${Calculs.formaterEuro(r.tvaCol20)}</td></tr>
          <tr><td>TVA collectée 10%</td><td>${Calculs.formaterEuro(r.tvaCol10)}</td></tr>
          <tr><td>TVA collectée 5,5%</td><td>${Calculs.formaterEuro(r.tvaCol55)}</td></tr>
          <tr><td><strong>Total TVA collectée</strong></td><td><strong>${Calculs.formaterEuro(r.tvaCollecteeTotal)}</strong></td></tr>
          <tr><td>TVA déductible totale</td><td>−${Calculs.formaterEuro(r.tvaDeductibleTotal)}</td></tr>
          <tr><td>Crédit antérieur</td><td>−${Calculs.formaterEuro(r.creditAnterieur)}</td></tr>
        </table>
        <div class="encadre ${r.tvaADecaisser > 0 ? '' : 'success'}">
          <strong>${r.detail}</strong>
        </div>
      `;
    });
  },

  formCalcIS() {
    this._wrapCalc("Calcul de l'IS", `
      <label>Résultat fiscal (€) : <input type="number" id="rf" step="0.01" value="80000"></label>
      <label><input type="checkbox" id="pme" checked> PME éligible au taux réduit (CA &lt; 10 M€, capital libéré, détention 75%)</label>
    `, () => {
      const r = Calculs.calculIS({
        resultatFiscal: Number(document.getElementById("rf").value),
        pme: document.getElementById("pme").checked
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>IS dû</h3>
        <p class="card-stat">${Calculs.formaterEuro(r.is)}</p>
        <p>${r.detail}</p>
      `;
    });
  },

  formCalcPaie() {
    this._wrapCalc("Paie simplifiée", `
      <label>Salaire brut mensuel (€) : <input type="number" id="brut" step="0.01" value="2500"></label>
      <label>Statut :
        <select id="statut">
          <option value="non_cadre">Non-cadre</option>
          <option value="cadre">Cadre</option>
        </select>
      </label>
    `, () => {
      const r = Calculs.paieSimplifiee({
        brut: Number(document.getElementById("brut").value),
        statut: document.getElementById("statut").value
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Décomposition paie</h3>
        <table class="table">
          <tr><td>Brut</td><td>${Calculs.formaterEuro(r.brut)}</td></tr>
          <tr><td>− Cotisations salariales déductibles (~${r.detailTaux.salarial}%)</td><td>−${Calculs.formaterEuro(r.cotisSalDeductibles)}</td></tr>
          <tr><td>+ CSG/CRDS non déductible (réintégrée pour le net imposable)</td><td>+${Calculs.formaterEuro(r.cotisCsgNonDed)}</td></tr>
          <tr><td><strong>Net imposable</strong></td><td><strong>${Calculs.formaterEuro(r.netImposable)}</strong></td></tr>
          <tr><td>− Total cotisations salariales</td><td>−${Calculs.formaterEuro(r.totalCotisSal)}</td></tr>
          <tr><td><strong>Net avant impôt</strong></td><td><strong>${Calculs.formaterEuro(r.netAvantImpot)}</strong></td></tr>
          <tr><td>Cotisations patronales (~${r.detailTaux.patronal}%)</td><td>${Calculs.formaterEuro(r.cotisPat)}</td></tr>
          <tr><td><strong>Coût total employeur</strong></td><td><strong>${Calculs.formaterEuro(r.coutEmployeur)}</strong></td></tr>
        </table>
        <p class="meta">Calcul approximatif à but pédagogique. Pour un calcul exact, voir un logiciel de paie agréé.</p>
      `;
    });
  },

  formCalcSR() {
    this._wrapCalc("Seuil de rentabilité", `
      <label>Chiffre d'affaires (€) : <input type="number" id="ca" step="0.01" value="500000"></label>
      <label>Charges variables (€) : <input type="number" id="cv" step="0.01" value="300000"></label>
      <label>Charges fixes (€) : <input type="number" id="cf" step="0.01" value="120000"></label>
    `, () => {
      const r = Calculs.seuilRentabilite({
        ca: Number(document.getElementById("ca").value),
        chargesVariables: Number(document.getElementById("cv").value),
        chargesFixes: Number(document.getElementById("cf").value)
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Résultat</h3>
        <table class="table">
          <tr><td>Marge sur coût variable</td><td>${Calculs.formaterEuro(r.mcv)}</td></tr>
          <tr><td>Taux de MCV</td><td>${r.tauxMCV} %</td></tr>
          <tr><td><strong>Seuil de rentabilité</strong></td><td><strong>${Calculs.formaterEuro(r.sr)}</strong></td></tr>
          <tr><td>Résultat</td><td>${Calculs.formaterEuro(r.resultat)}</td></tr>
          <tr><td>Marge de sécurité</td><td>${Calculs.formaterEuro(r.margeSecurite)} (${r.indiceSecurite}%)</td></tr>
          <tr><td>Point mort</td><td>${r.pointMortMois} mois</td></tr>
          <tr><td>Levier opérationnel</td><td>${r.levierOp}</td></tr>
        </table>
      `;
    });
  },

  formCalcSIG() {
    this._wrapCalc("Soldes Intermédiaires de Gestion", `
      <div class="grille-deux">
        <label>Ventes marchandises : <input type="number" id="ventesMarchandises" step="0.01" value="500000"></label>
        <label>Coût d'achat marchandises vendues : <input type="number" id="coutAchatMarchandises" step="0.01" value="300000"></label>
        <label>Production vendue : <input type="number" id="productionVendue" step="0.01" value="0"></label>
        <label>Production stockée : <input type="number" id="productionStockee" step="0.01" value="0"></label>
        <label>Production immobilisée : <input type="number" id="productionImmobilisee" step="0.01" value="0"></label>
        <label>Achats matières + variation : <input type="number" id="achatsMatieres" step="0.01" value="0"></label>
        <label>Variation stocks (mat. premières) : <input type="number" id="variationStocks" step="0.01" value="0"></label>
        <label>Autres charges externes (61, 62) : <input type="number" id="autresChargesExternes" step="0.01" value="50000"></label>
        <label>Subventions d'exploitation : <input type="number" id="subventionsExploitation" step="0.01" value="0"></label>
        <label>Impôts et taxes (63) : <input type="number" id="impotsTaxes" step="0.01" value="8000"></label>
        <label>Charges de personnel (64) : <input type="number" id="chargesPersonnel" step="0.01" value="100000"></label>
        <label>Dotations aux amortissements : <input type="number" id="dotationsAmort" step="0.01" value="15000"></label>
        <label>Produits financiers (76) : <input type="number" id="produitsFinanciers" step="0.01" value="0"></label>
        <label>Charges financières (66) : <input type="number" id="chargesFinancieres" step="0.01" value="3000"></label>
        <label>Produits exceptionnels : <input type="number" id="produitsExceptionnels" step="0.01" value="0"></label>
        <label>Charges exceptionnelles : <input type="number" id="chargesExceptionnelles" step="0.01" value="0"></label>
        <label>Participation salariés : <input type="number" id="participation" step="0.01" value="0"></label>
        <label>IS : <input type="number" id="is" step="0.01" value="6000"></label>
        <label>Reprises sur provisions : <input type="number" id="reprisesProvisions" step="0.01" value="0"></label>
        <label>Autres produits expl : <input type="number" id="autresProduitsExpl" step="0.01" value="0"></label>
        <label>Autres charges expl : <input type="number" id="autresChargesExpl" step="0.01" value="0"></label>
        <label>Dotations aux provisions : <input type="number" id="dotationsProv" step="0.01" value="0"></label>
      </div>
    `, () => {
      const champs = ["ventesMarchandises","coutAchatMarchandises","productionVendue","productionStockee","productionImmobilisee","achatsMatieres","variationStocks","autresChargesExternes","subventionsExploitation","impotsTaxes","chargesPersonnel","dotationsAmort","produitsFinanciers","chargesFinancieres","produitsExceptionnels","chargesExceptionnelles","participation","is","reprisesProvisions","autresProduitsExpl","autresChargesExpl","dotationsProv"];
      const donnees = {};
      champs.forEach(c => donnees[c] = Number(document.getElementById(c).value) || 0);
      const r = Calculs.calculSIG(donnees);
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>SIG calculés</h3>
        <table class="table">
          <tr><td>Marge commerciale</td><td>${Calculs.formaterEuro(r.margeCommerciale)}</td></tr>
          <tr><td>Production de l'exercice</td><td>${Calculs.formaterEuro(r.productionExercice)}</td></tr>
          <tr><td><strong>Valeur ajoutée</strong></td><td><strong>${Calculs.formaterEuro(r.valeurAjoutee)}</strong></td></tr>
          <tr><td><strong>EBE</strong></td><td><strong>${Calculs.formaterEuro(r.ebe)}</strong></td></tr>
          <tr><td>Résultat d'exploitation</td><td>${Calculs.formaterEuro(r.resultatExploitation)}</td></tr>
          <tr><td>Résultat courant</td><td>${Calculs.formaterEuro(r.resultatCourant)}</td></tr>
          <tr><td>Résultat exceptionnel</td><td>${Calculs.formaterEuro(r.resultatExceptionnel)}</td></tr>
          <tr><td><strong>Résultat net</strong></td><td><strong>${Calculs.formaterEuro(r.resultatNet)}</strong></td></tr>
        </table>
        <h4>Ratios</h4>
        <p>Taux de marge commerciale : ${r.ratios.tauxMarge} % · Taux de VA : ${r.ratios.tauxVA} % · Taux d'EBE : ${r.ratios.tauxEBE} %</p>
      `;
    });
  },

  formCalcFRNG() {
    this._wrapCalc("Bilan fonctionnel — FRNG, BFR, TN", `
      <div class="grille-deux">
        <label>Ressources stables (capitaux propres + provisions + amortissements + dettes financières) : <input type="number" id="rs" step="0.01" value="200000"></label>
        <label>Emplois stables (immo brutes) : <input type="number" id="es" step="0.01" value="150000"></label>
        <label>Actif circulant exploitation (stocks + créances clients) : <input type="number" id="ace" step="0.01" value="80000"></label>
        <label>Actif circulant hors exploitation : <input type="number" id="ache" step="0.01" value="5000"></label>
        <label>Dettes circulantes exploitation (fournisseurs + dettes sociales et fiscales d'exploitation) : <input type="number" id="dce" step="0.01" value="40000"></label>
        <label>Dettes circulantes hors exploitation : <input type="number" id="dche" step="0.01" value="10000"></label>
        <label>Trésorerie active (disponibilités) : <input type="number" id="ta" step="0.01" value="20000"></label>
        <label>Trésorerie passive (concours bancaires) : <input type="number" id="tp" step="0.01" value="5000"></label>
      </div>
    `, () => {
      const r = Calculs.calculFRNG_BFR({
        ressourcesStables: Number(document.getElementById("rs").value),
        emploisStables: Number(document.getElementById("es").value),
        ace: Number(document.getElementById("ace").value),
        ache: Number(document.getElementById("ache").value),
        dce: Number(document.getElementById("dce").value),
        dche: Number(document.getElementById("dche").value),
        tresActive: Number(document.getElementById("ta").value),
        tresPassive: Number(document.getElementById("tp").value)
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Résultat</h3>
        <div class="cards">
          <div class="card"><div class="card-stat">${Calculs.formaterEuro(r.frng)}</div><div class="card-label">FRNG</div></div>
          <div class="card"><div class="card-stat">${Calculs.formaterEuro(r.bfr)}</div><div class="card-label">BFR</div></div>
          <div class="card"><div class="card-stat">${Calculs.formaterEuro(r.tn)}</div><div class="card-label">Trésorerie nette</div></div>
        </div>
        <p class="meta">Vérification (FRNG = BFR + TN) : <strong>${r.verification}</strong></p>
      `;
    });
  },

  formCalcInterets() {
    this._wrapCalc("Intérêts composés", `
      <label>Capital initial (€) : <input type="number" id="capital" step="0.01" value="10000"></label>
      <label>Taux annuel (%) : <input type="number" id="taux" step="0.01" value="3"></label>
      <label>Durée (années) : <input type="number" id="duree" value="5"></label>
    `, () => {
      const r = Calculs.interetsComposes({
        capital: Number(document.getElementById("capital").value),
        tauxAnnuel: Number(document.getElementById("taux").value),
        dureeAnnees: Number(document.getElementById("duree").value)
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Résultat</h3>
        <table class="table">
          <tr><td>Capital initial</td><td>${Calculs.formaterEuro(r.capital)}</td></tr>
          <tr><td>Taux annuel</td><td>${r.tauxAnnuel} %</td></tr>
          <tr><td>Durée</td><td>${r.dureeAnnees} an(s)</td></tr>
          <tr><td><strong>Valeur acquise</strong></td><td><strong>${Calculs.formaterEuro(r.valeurAcquise)}</strong></td></tr>
          <tr><td>Intérêts cumulés</td><td>${Calculs.formaterEuro(r.interets)}</td></tr>
        </table>
      `;
    });
  },

  formCalcEmprunt() {
    this._wrapCalc("Tableau d'amortissement d'emprunt (annuités constantes)", `
      <label>Montant emprunté (€) : <input type="number" id="capital" step="0.01" value="100000"></label>
      <label>Taux annuel (%) : <input type="number" id="taux" step="0.01" value="3.5"></label>
      <label>Durée (années) : <input type="number" id="duree" value="10"></label>
    `, () => {
      const r = Calculs.annuiteEmprunt({
        capital: Number(document.getElementById("capital").value),
        tauxAnnuel: Number(document.getElementById("taux").value),
        dureeAnnees: Number(document.getElementById("duree").value)
      });
      document.getElementById("resultatCalcul").innerHTML = `
        <h3>Annuité constante : ${Calculs.formaterEuro(r.annuite)}</h3>
        <table class="table">
          <thead><tr><th>Période</th><th>Annuité</th><th>Intérêt</th><th>Amortissement</th><th>CRD</th></tr></thead>
          <tbody>
            ${r.tableau.map(l => `
              <tr><td>${l.periode}</td><td>${Calculs.formaterEuro(l.annuite)}</td><td>${Calculs.formaterEuro(l.interet)}</td><td>${Calculs.formaterEuro(l.amortissement)}</td><td>${Calculs.formaterEuro(l.crd)}</td></tr>
            `).join("")}
          </tbody>
        </table>
      `;
    });
  },

  // ============== PASSEPORT PROFESSIONNEL ==============
  afficherPasseport(ficheId) {
    if (ficheId) return this.afficherFichePasseport(ficheId);

    const fiches = PASSEPORT.listerFiches();
    const couverture = PASSEPORT.couvertureProcessus();

    const couvertureHtml = Object.keys(couverture).map(p => {
      const c = couverture[p];
      return `
        <div class="card">
          <div class="card-stat">${c.pct}%</div>
          <div class="card-label">${p} — ${c.nb_fiches} fiche(s)</div>
        </div>
      `;
    }).join("");

    const fichesHtml = fiches.length === 0 ? '<p class="vide">Aucune fiche encore. Cliquez sur "Nouvelle fiche" pour démarrer.</p>' :
      `<ul class="lesson-list">
        ${fiches.map(f => `
          <li class="lesson-item" data-fiche="${f.id}">
            <span class="lesson-id">${f.date}</span>
            <span class="lesson-titre">${f.titre}</span>
            <span class="lesson-meta">${(f.processus_couverts || []).join(", ")}</span>
          </li>
        `).join("")}
      </ul>`;

    const html = `
      <h1>Passeport Professionnel</h1>
      <p class="lead">Pour l'épreuve <strong>E6</strong> (coef 5), vous devez présenter un dossier de fiches de situations professionnelles couvrant les 7 processus. C'est l'épreuve la plus piégeuse pour les candidats libres : préparez-la dès le début de votre apprentissage.</p>

      <h2>Couverture des processus</h2>
      <div class="cards">${couvertureHtml}</div>

      <h2>Mes fiches</h2>
      <div class="actions">
        <button class="btn btn-primary" id="btnNouvelle">+ Nouvelle fiche</button>
        <button class="btn" id="btnExporter">📥 Exporter en Markdown</button>
      </div>
      ${fichesHtml}
    `;
    this.rendre(html);

    document.getElementById("btnNouvelle").addEventListener("click", () => {
      const fiche = PASSEPORT.enregistrerFiche({
        titre: "Nouvelle fiche", date: new Date().toISOString().slice(0, 10),
        contexte: "", missions: [], outils: [], processus_couverts: [], competences: [], auto_evaluation: ""
      });
      this.naviguer("passeport", { ficheId: fiche.id });
    });
    document.getElementById("btnExporter").addEventListener("click", () => {
      const md = PASSEPORT.exporterMarkdown();
      const blob = new Blob([md], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `passeport-pro-${new Date().toISOString().slice(0, 10)}.md`;
      a.click();
      URL.revokeObjectURL(url);
    });
    document.querySelectorAll("[data-fiche]").forEach(el => {
      el.addEventListener("click", () => this.afficherFichePasseport(el.dataset.fiche));
    });
  },

  afficherFichePasseport(ficheId) {
    const fiches = PASSEPORT.listerFiches();
    const fiche = fiches.find(f => f.id === ficheId);
    if (!fiche) return this.naviguer("passeport");

    const competencesHtml = Object.keys(PASSEPORT.COMPETENCES_REFERENTIEL).map(p => `
      <details>
        <summary><strong>${p}</strong></summary>
        ${PASSEPORT.COMPETENCES_REFERENTIEL[p].map(c => {
          const code = c.split(" ")[0];
          const checked = (fiche.competences || []).includes(code) ? 'checked' : '';
          return `<label class="choix"><input type="checkbox" data-comp="${code}" ${checked}> ${c}</label>`;
        }).join("")}
      </details>
    `).join("");

    const html = `
      <div class="breadcrumb"><a href="#" data-back-pp>← Passeport</a></div>
      <h1>Édition de fiche</h1>
      <div class="card">
        <label>Titre : <input type="text" id="f-titre" value="${this.escape(fiche.titre)}"></label>
        <label>Date : <input type="date" id="f-date" value="${fiche.date || ''}"></label>

        <h3>Processus couverts</h3>
        <div class="filtres-cours">
          ${["P1","P2","P3","P4","P5","P6","P7"].map(p => `
            <label class="chip"><input type="checkbox" data-proc="${p}" ${(fiche.processus_couverts || []).includes(p) ? 'checked' : ''}> ${p}</label>
          `).join("")}
        </div>

        <h3>Contexte</h3>
        <textarea id="f-contexte" rows="4">${this.escape(fiche.contexte)}</textarea>

        <h3>Missions réalisées (une par ligne)</h3>
        <textarea id="f-missions" rows="6">${(fiche.missions || []).join("\n")}</textarea>

        <h3>Outils utilisés (un par ligne)</h3>
        <textarea id="f-outils" rows="3">${(fiche.outils || []).join("\n")}</textarea>

        <h3>Compétences mobilisées (cocher dans le référentiel)</h3>
        ${competencesHtml}

        <h3>Auto-évaluation</h3>
        <textarea id="f-eval" rows="4">${this.escape(fiche.auto_evaluation)}</textarea>

        <div class="actions">
          <button class="btn btn-primary" id="btnSave">💾 Enregistrer</button>
          <button class="btn btn-danger" id="btnDelete">🗑 Supprimer</button>
        </div>
      </div>
    `;
    this.rendre(html);

    document.querySelector("[data-back-pp]").addEventListener("click", e => {
      e.preventDefault();
      this.naviguer("passeport");
    });
    document.getElementById("btnSave").addEventListener("click", () => {
      fiche.titre = document.getElementById("f-titre").value;
      fiche.date = document.getElementById("f-date").value;
      fiche.contexte = document.getElementById("f-contexte").value;
      fiche.missions = document.getElementById("f-missions").value.split("\n").map(s => s.trim()).filter(Boolean);
      fiche.outils = document.getElementById("f-outils").value.split("\n").map(s => s.trim()).filter(Boolean);
      fiche.auto_evaluation = document.getElementById("f-eval").value;
      fiche.processus_couverts = Array.from(document.querySelectorAll("[data-proc]:checked")).map(c => c.dataset.proc);
      fiche.competences = Array.from(document.querySelectorAll("[data-comp]:checked")).map(c => c.dataset.comp);
      PASSEPORT.enregistrerFiche(fiche);
      alert("Fiche enregistrée.");
      this.naviguer("passeport");
    });
    document.getElementById("btnDelete").addEventListener("click", () => {
      if (confirm("Supprimer cette fiche ?")) {
        PASSEPORT.supprimerFiche(fiche.id);
        this.naviguer("passeport");
      }
    });
  },

  escape(s) {
    return (s || "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[m]);
  },

  // ============== ANNALES ==============
  afficherAnnales(annalesId) {
    if (annalesId) return this.afficherUneAnnale(annalesId);
    const html = `
      <h1>Annales corrigées</h1>
      <p class="lead">Sujets types BTS CG (E4.1, E5) avec corrigés détaillés. Inspirés du format officiel.</p>
      <div class="encadre">
        <strong>Conseil</strong> : à 1-2 mois de l'examen, fais ces sujets <em>en conditions réelles</em> (chronométré, sans regarder le corrigé), puis auto-corrige-toi. Identifie tes faiblesses et reviens dessus dans les cours.
      </div>
      <ul class="lesson-list">
        ${ANNALES.map(a => `
          <li class="lesson-item" data-annale="${a.id}">
            <span class="lesson-id">${a.epreuve}</span>
            <span class="lesson-titre">${a.intitule}</span>
            <span class="lesson-meta">Coef ${a.coefficient} · ${a.duree}</span>
          </li>
        `).join("")}
      </ul>
      <h2>Plus d'annales (sources externes gratuites)</h2>
      <p>Pour t'entraîner avec les vrais sujets passés des sessions précédentes :</p>
      <ul>
        <li><a href="https://www.crcf-edu.fr/" target="_blank" rel="noopener">CRCF-edu.fr</a> — Centre national de ressources avec sujets officiels</li>
        <li><a href="https://siec.education.fr/candidats/docutheque/" target="_blank" rel="noopener">SIEC</a> — Sujets officiels Île-de-France</li>
        <li><a href="https://www.sujetexamen.com/bts/comptabilite-gestion" target="_blank" rel="noopener">Sujets-examens.com</a> — Annales gratuites</li>
      </ul>
    `;
    this.rendre(html);
    document.querySelectorAll("[data-annale]").forEach(el => {
      el.addEventListener("click", () => this.afficherUneAnnale(el.dataset.annale));
    });
  },

  afficherUneAnnale(id) {
    const a = ANNALES.find(x => x.id === id);
    if (!a) return this.naviguer("annales");
    let partiesHtml = "";
    a.parties.forEach(p => {
      partiesHtml += `<h2>${p.titre}</h2>`;
      p.questions.forEach(q => {
        const qid = `${id}-${q.num}`;
        partiesHtml += `
          <div class="card">
            <h3>Question ${q.num}</h3>
            <p>${q.enonce}</p>
            <details>
              <summary><strong>Voir le corrigé</strong></summary>
              <div class="corrige">${q.corrige}</div>
            </details>
          </div>
        `;
      });
    });
    const html = `
      <div class="breadcrumb"><a href="#" data-back-annales>← Annales</a></div>
      <h1>${a.intitule}</h1>
      <p class="meta">Épreuve ${a.epreuve} · Coefficient ${a.coefficient} · Durée ${a.duree}</p>
      <div class="encadre">
        <strong>Contexte :</strong>
        <p style="white-space:pre-line;">${a.contexte}</p>
      </div>
      ${partiesHtml}
    `;
    this.rendre(html);
    document.querySelector("[data-back-annales]").addEventListener("click", e => {
      e.preventDefault();
      this.naviguer("annales");
    });
  },

  // ============== RESSOURCES ==============
  afficherRessources() {
    let blocsHtml = "";
    Object.keys(RESSOURCES).forEach(key => {
      const bloc = RESSOURCES[key];
      blocsHtml += `
        <section class="groupe-cours">
          <h2>${bloc.titre}</h2>
          <p class="meta">${bloc.description}</p>
          <ul class="lesson-list">
            ${bloc.items.map(it => `
              <li class="lesson-item">
                <span class="lesson-id">${it.type}</span>
                <span class="lesson-titre"><a href="${it.url}" target="_blank" rel="noopener">${it.nom}</a></span>
                <span class="lesson-meta">↗</span>
              </li>
            `).join("")}
          </ul>
        </section>
      `;
    });
    const html = `
      <h1>Ressources externes</h1>
      <p class="lead">Tous les liens utiles pour ta formation BTS CG : sources officielles, cours gratuits, YouTube, annales, outils professionnels.</p>
      <div class="encadre">
        <strong>Important :</strong> cette app est un outil de synthèse et d'entraînement. Pour la profondeur, complète avec les ressources ci-dessous — surtout les vidéos YouTube (Stéphanie Goujon notamment) et les PDFs CRCF.
      </div>
      ${blocsHtml}
    `;
    this.rendre(html);
  },

  // ============== PLANNING ==============
  afficherPlanning() {
    const config = PLANNING.charger();
    const html = `
      <h1>Planning de révision</h1>
      <p class="lead">Configure ton planning personnalisé jusqu'à la date de l'examen.</p>

      <div class="card">
        <label>Date de l'examen :
          <input type="date" id="dateExamen" value="${config.dateExamen || ''}" />
        </label>
        <label>Heures de travail par semaine :
          <input type="number" id="heuresHebdo" value="${config.heuresHebdo || 20}" min="5" max="60" />
        </label>
        <label>Niveau de départ :
          <select id="niveau">
            <option value="debutant" ${config.niveau === 'debutant' ? 'selected' : ''}>Débutant complet</option>
            <option value="intermediaire" ${config.niveau === 'intermediaire' ? 'selected' : ''}>Intermédiaire (notions de base)</option>
            <option value="avance" ${config.niveau === 'avance' ? 'selected' : ''}>Avancé (besoin d'approfondissement)</option>
          </select>
        </label>
        <button class="btn btn-primary" id="btnGenerer">Générer / mettre à jour le planning</button>
      </div>

      <div id="planningResultat"></div>
    `;
    this.rendre(html);

    const generer = () => {
      const dateExamen = document.getElementById("dateExamen").value;
      const heuresHebdo = Number(document.getElementById("heuresHebdo").value);
      const niveau = document.getElementById("niveau").value;
      if (!dateExamen) {
        document.getElementById("planningResultat").innerHTML = '<div class="encadre erreur-box">Choisis d\'abord une date d\'examen.</div>';
        return;
      }
      PLANNING.sauvegarder({ dateExamen, heuresHebdo, niveau });
      const p = PLANNING.genererPlanning({ dateExamen, heuresHebdo, niveau });
      if (p.erreur) {
        document.getElementById("planningResultat").innerHTML = `<div class="encadre erreur-box">${p.erreur}</div>`;
        return;
      }
      const phasesHtml = p.phases.map(ph => `
        <li><strong>Semaines ${ph.debut + 1} à ${ph.fin}</strong> (${ph.fin - ph.debut} sem) — <strong>${ph.focus}</strong> : ${ph.description}</li>
      `).join("");
      const semainesHtml = p.semainesDetail.map(s => `
        <details>
          <summary><strong>Semaine ${s.numero}</strong> (à partir du ${this.formaterDate(s.dateDebut)}) — ${s.focus}</summary>
          <p class="meta">${s.description}</p>
          <ul>${s.objectifs.map(o => `<li>${o}</li>`).join("")}</ul>
        </details>
      `).join("");
      document.getElementById("planningResultat").innerHTML = `
        <div class="cards">
          <div class="card"><div class="card-stat">${p.semainesTotal}</div><div class="card-label">semaines</div></div>
          <div class="card"><div class="card-stat">${p.heuresTotal}</div><div class="card-label">heures total</div></div>
          <div class="card"><div class="card-stat">${p.heuresHebdo}</div><div class="card-label">h/semaine</div></div>
        </div>
        <h2>Plan d'ensemble (phases)</h2>
        <ul>${phasesHtml}</ul>
        <h2>Programme détaillé semaine par semaine</h2>
        ${semainesHtml}
      `;
    };
    document.getElementById("btnGenerer").addEventListener("click", generer);
    if (config.dateExamen) generer();
  },

  // ============== SAUVEGARDE ==============
  afficherSauvegarde() {
    const html = `
      <h1>Sauvegarde et restauration</h1>
      <p class="lead">Vos données sont stockées dans votre navigateur (localStorage). Pour les conserver à long terme ou les transférer sur un autre appareil, exportez-les dans un fichier.</p>

      <div class="card">
        <h3>📥 Exporter ma progression</h3>
        <p>Télécharge un fichier JSON contenant toutes vos écritures, vos résultats de quiz et vos compétences.</p>
        <button class="btn btn-primary" id="btnExport">Télécharger ma sauvegarde</button>
      </div>

      <div class="card">
        <h3>📤 Importer une sauvegarde</h3>
        <p>Recharger un fichier exporté précédemment. Cela remplacera votre progression actuelle.</p>
        <input type="file" id="fichierImport" accept=".json">
        <button class="btn" id="btnImport">Importer</button>
      </div>

      <div class="card danger">
        <h3>🗑 Tout réinitialiser</h3>
        <p>Supprime toutes vos données. À utiliser uniquement si vous voulez recommencer à zéro.</p>
        <button class="btn btn-danger" id="btnReset">Réinitialiser</button>
      </div>
    `;
    this.rendre(html);

    document.getElementById("btnExport").addEventListener("click", () => {
      const data = Storage.exporterTout();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bts-cg-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("btnImport").addEventListener("click", () => {
      const f = document.getElementById("fichierImport").files[0];
      if (!f) { alert("Choisissez un fichier d'abord."); return; }
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          Storage.importerTout(JSON.parse(ev.target.result));
          alert("Sauvegarde importée. La page va se recharger.");
          location.reload();
        } catch (e) {
          alert("Erreur : " + e.message);
        }
      };
      reader.readAsText(f);
    });

    document.getElementById("btnReset").addEventListener("click", () => {
      if (confirm("Êtes-vous sûr ? Toutes vos données seront supprimées définitivement.")) {
        Storage.reset();
        alert("Données effacées.");
        location.reload();
      }
    });
  },

  // ============== HELPERS ==============
  rendre(html) {
    document.getElementById("contenu").innerHTML = html;
    window.scrollTo(0, 0);
  },

  formaterDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  },

  libellerType(type) {
    return {
      "facture_achat": "Facture d'achat",
      "facture_vente": "Facture de vente",
      "vente_caisse": "Recette caisse",
      "reglement_fournisseur": "Règlement fournisseur",
      "reglement_client": "Encaissement client"
    }[type] || type;
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
