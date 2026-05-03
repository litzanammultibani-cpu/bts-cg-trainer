// Moteur comptable : validation, journal, grand livre, balance

const Accounting = {
  // Vérifie qu'une écriture est équilibrée et valide
  validerEcriture(lignes) {
    const erreurs = [];
    if (!lignes || lignes.length < 2) {
      erreurs.push("Une écriture doit comporter au moins 2 lignes.");
      return { valide: false, erreurs };
    }

    let totalDebit = 0;
    let totalCredit = 0;

    lignes.forEach((ligne, i) => {
      const compte = (ligne.compte || "").trim();
      const debit = Number(ligne.debit) || 0;
      const credit = Number(ligne.credit) || 0;

      if (!compte) {
        erreurs.push(`Ligne ${i + 1} : numéro de compte manquant.`);
      } else if (!PCG[compte]) {
        erreurs.push(`Ligne ${i + 1} : compte ${compte} inconnu au PCG.`);
      }

      if (debit < 0 || credit < 0) {
        erreurs.push(`Ligne ${i + 1} : montants négatifs interdits.`);
      }
      if (debit > 0 && credit > 0) {
        erreurs.push(`Ligne ${i + 1} : on ne peut pas avoir un débit ET un crédit sur la même ligne.`);
      }
      if (debit === 0 && credit === 0) {
        erreurs.push(`Ligne ${i + 1} : montant manquant.`);
      }

      totalDebit += debit;
      totalCredit += credit;
    });

    const ecart = Math.abs(totalDebit - totalCredit);
    if (ecart > 0.005) {
      erreurs.push(`Écriture déséquilibrée : débit ${totalDebit.toFixed(2)} € ≠ crédit ${totalCredit.toFixed(2)} € (écart ${ecart.toFixed(2)} €).`);
    }

    return {
      valide: erreurs.length === 0,
      erreurs,
      totalDebit,
      totalCredit
    };
  },

  // Compare l'écriture saisie à l'écriture attendue (à un epsilon près)
  comparerAttendu(saisie, attendu) {
    const diff = [];
    const trier = arr => [...arr].sort((a, b) => (a.compte || "").localeCompare(b.compte || ""));
    const s = trier(saisie);
    const a = trier(attendu);

    if (s.length !== a.length) {
      diff.push(`Nombre de lignes : attendu ${a.length}, saisi ${s.length}.`);
      return { correct: false, diff };
    }

    for (let i = 0; i < s.length; i++) {
      const ls = s[i];
      const la = a[i];
      if (ls.compte !== la.compte) {
        diff.push(`Compte attendu : ${la.compte}, saisi : ${ls.compte || "(vide)"}.`);
        continue;
      }
      const ecartD = Math.abs((Number(ls.debit) || 0) - (Number(la.debit) || 0));
      const ecartC = Math.abs((Number(ls.credit) || 0) - (Number(la.credit) || 0));
      if (ecartD > 0.01) diff.push(`${la.compte} : débit attendu ${la.debit.toFixed(2)}, saisi ${(Number(ls.debit) || 0).toFixed(2)}.`);
      if (ecartC > 0.01) diff.push(`${la.compte} : crédit attendu ${la.credit.toFixed(2)}, saisi ${(Number(ls.credit) || 0).toFixed(2)}.`);
    }

    return { correct: diff.length === 0, diff };
  },

  // Construit le journal complet à partir des écritures saisies
  construireJournal(ecritures) {
    return ecritures
      .slice()
      .sort((a, b) => (a.date || "").localeCompare(b.date || ""))
      .map(e => ({
        date: e.date,
        operation_id: e.operation_id,
        libelle: e.libelle_general || "",
        lignes: e.lignes
      }));
  },

  // Construit le grand livre (toutes les écritures groupées par compte)
  construireGrandLivre(balanceOuverture, ecritures) {
    const comptes = {};

    Object.entries(balanceOuverture || {}).forEach(([num, sold]) => {
      comptes[num] = {
        numero: num,
        libelle: PCG[num]?.libelle || "Compte inconnu",
        mouvements: [{
          date: "Ouverture",
          libelle: "Solde d'ouverture",
          debit: sold.debit || 0,
          credit: sold.credit || 0,
          source: "ouverture"
        }],
        totalDebit: sold.debit || 0,
        totalCredit: sold.credit || 0
      };
    });

    ecritures.forEach(e => {
      e.lignes.forEach(l => {
        if (!comptes[l.compte]) {
          comptes[l.compte] = {
            numero: l.compte,
            libelle: PCG[l.compte]?.libelle || "Compte inconnu",
            mouvements: [],
            totalDebit: 0,
            totalCredit: 0
          };
        }
        const debit = Number(l.debit) || 0;
        const credit = Number(l.credit) || 0;
        comptes[l.compte].mouvements.push({
          date: e.date,
          libelle: l.libelle || e.libelle_general || "",
          debit, credit,
          source: "ecriture",
          operation_id: e.operation_id
        });
        comptes[l.compte].totalDebit += debit;
        comptes[l.compte].totalCredit += credit;
      });
    });

    Object.values(comptes).forEach(c => {
      c.solde = c.totalDebit - c.totalCredit;
      c.sens = c.solde > 0 ? "debit" : (c.solde < 0 ? "credit" : "nul");
    });

    return Object.values(comptes).sort((a, b) => a.numero.localeCompare(b.numero));
  },

  // Construit la balance des comptes
  construireBalance(grandLivre) {
    const totaux = { debit: 0, credit: 0, soldeDebit: 0, soldeCredit: 0 };
    const lignes = grandLivre.map(c => {
      const soldeDebit = c.solde > 0 ? c.solde : 0;
      const soldeCredit = c.solde < 0 ? -c.solde : 0;
      totaux.debit += c.totalDebit;
      totaux.credit += c.totalCredit;
      totaux.soldeDebit += soldeDebit;
      totaux.soldeCredit += soldeCredit;
      return {
        numero: c.numero,
        libelle: c.libelle,
        totalDebit: c.totalDebit,
        totalCredit: c.totalCredit,
        soldeDebit,
        soldeCredit
      };
    });
    return { lignes, totaux };
  },

  // Calcul rapide HT/TVA/TTC pour aider l'utilisateur
  calculerTVA({ ht, tva, ttc, taux }) {
    const t = Number(taux) / 100;
    if (ht !== undefined && ht !== null && ht !== "") {
      const htNum = Number(ht);
      const tvaNum = +(htNum * t).toFixed(2);
      return { ht: htNum, tva: tvaNum, ttc: +(htNum + tvaNum).toFixed(2), taux: Number(taux) };
    }
    if (ttc !== undefined && ttc !== null && ttc !== "") {
      const ttcNum = Number(ttc);
      const htNum = +(ttcNum / (1 + t)).toFixed(2);
      return { ht: htNum, tva: +(ttcNum - htNum).toFixed(2), ttc: ttcNum, taux: Number(taux) };
    }
    return null;
  },

  formaterEuro(montant) {
    if (montant === 0 || montant === null || montant === undefined) return "";
    return Number(montant).toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " €";
  }
};
