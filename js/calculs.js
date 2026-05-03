// Calculatrices comptables : amortissements, SIG, ratios, paie, IS, SR, TVA

const Calculs = {
  // ============== AMORTISSEMENTS ==============
  amortissementLineaire(valeurOrigine, dureeAns, dateMiseEnService, anneeArretee = null) {
    const taux = 100 / dureeAns;
    const dateMES = new Date(dateMiseEnService);
    const anneeMES = dateMES.getFullYear();
    const moisMES = dateMES.getMonth() + 1; // 1-12
    const jourMES = dateMES.getDate();

    const tableau = [];
    let cumul = 0;
    let restantAmortir = valeurOrigine;

    for (let i = 0; i < dureeAns + 1; i++) {
      const annee = anneeMES + i;
      let nbMois;
      if (i === 0) {
        // Première année : prorata du jour au 31/12
        nbMois = (12 - moisMES) + (jourMES === 1 ? 1 : (30 - jourMES + 1) / 30);
        nbMois = +(((12 - moisMES + 1) - (jourMES - 1) / 30)).toFixed(4);
      } else if (i === dureeAns) {
        // Dernière année : reste pour boucler
        nbMois = (moisMES - 1) + (jourMES - 1) / 30;
      } else {
        nbMois = 12;
      }
      let annuite = +((valeurOrigine * taux / 100) * (nbMois / 12)).toFixed(2);
      if (annuite > restantAmortir) annuite = +restantAmortir.toFixed(2);
      cumul += annuite;
      restantAmortir = +(valeurOrigine - cumul).toFixed(2);
      tableau.push({
        annee,
        base: valeurOrigine,
        taux,
        nbMois: +nbMois.toFixed(2),
        annuite,
        cumul: +cumul.toFixed(2),
        vnc: +restantAmortir.toFixed(2)
      });
      if (restantAmortir <= 0.01) break;
    }
    return { methode: "lineaire", taux, tableau, annuiteAnnuelle: +(valeurOrigine * taux / 100).toFixed(2) };
  },

  amortissementDegressif(valeurOrigine, dureeAns, dateMiseEnService) {
    const tauxLineaire = 100 / dureeAns;
    let coef;
    if (dureeAns <= 4) coef = 1.25;
    else if (dureeAns <= 6) coef = 1.75;
    else coef = 2.25;
    const tauxDegressif = +(tauxLineaire * coef).toFixed(2);

    const dateMES = new Date(dateMiseEnService);
    const anneeMES = dateMES.getFullYear();
    const moisMES = dateMES.getMonth() + 1;

    const tableau = [];
    let vnc = valeurOrigine;
    let cumul = 0;

    for (let i = 0; i < dureeAns + 1; i++) {
      const annee = anneeMES + i;
      const dureeRestante = dureeAns - i;
      const tauxLineaireResiduel = dureeRestante > 0 ? 100 / dureeRestante : 100;
      const tauxApplique = Math.max(tauxDegressif, tauxLineaireResiduel);
      const methodeAnnee = tauxApplique === tauxDegressif ? "dégressif" : "linéaire (bascule)";

      let nbMois = 12;
      if (i === 0) nbMois = 12 - moisMES + 1; // dégressif compté en mois entiers à partir du mois de mise en service

      let annuite = +(vnc * tauxApplique / 100 * (nbMois / 12)).toFixed(2);
      if (annuite > vnc) annuite = +vnc.toFixed(2);
      cumul += annuite;
      vnc = +(vnc - annuite).toFixed(2);

      tableau.push({ annee, base: +vnc.toFixed(2) + annuite, taux: tauxApplique, methode: methodeAnnee, nbMois, annuite, cumul: +cumul.toFixed(2), vnc: +vnc.toFixed(2) });
      if (vnc <= 0.01) break;
    }
    return { methode: "degressif", tauxDegressif, coefficient: coef, tableau };
  },

  // ============== SIG ==============
  calculSIG(donnees) {
    const v = (k) => Number(donnees[k]) || 0;

    const margeCommerciale = v("ventesMarchandises") - v("coutAchatMarchandises");
    const productionExercice = v("productionVendue") + v("productionStockee") + v("productionImmobilisee");
    const consoTiers = v("achatsMatieres") + v("variationStocks") + v("autresChargesExternes");
    const valeurAjoutee = margeCommerciale + productionExercice - consoTiers;
    const ebe = valeurAjoutee + v("subventionsExploitation") - v("impotsTaxes") - v("chargesPersonnel");
    const resExpl = ebe + v("autresProduitsExpl") + v("reprisesProvisions") - v("dotationsAmort") - v("dotationsProv") - v("autresChargesExpl");
    const resCourant = resExpl + v("produitsFinanciers") - v("chargesFinancieres");
    const resExceptionnel = v("produitsExceptionnels") - v("chargesExceptionnelles");
    const resAvantImpot = resCourant + resExceptionnel - v("participation");
    const resNet = resAvantImpot - v("is");

    return {
      margeCommerciale,
      productionExercice,
      valeurAjoutee,
      ebe,
      resultatExploitation: resExpl,
      resultatCourant: resCourant,
      resultatExceptionnel: resExceptionnel,
      resultatNet: resNet,
      ratios: {
        tauxMarge: v("ventesMarchandises") ? +(margeCommerciale / v("ventesMarchandises") * 100).toFixed(2) : 0,
        tauxVA: (v("ventesMarchandises") + v("productionVendue")) ? +(valeurAjoutee / (v("ventesMarchandises") + v("productionVendue")) * 100).toFixed(2) : 0,
        tauxEBE: (v("ventesMarchandises") + v("productionVendue")) ? +(ebe / (v("ventesMarchandises") + v("productionVendue")) * 100).toFixed(2) : 0
      }
    };
  },

  // ============== CAF ==============
  calculCAF({ resultatNet, dotationsAmort, reprisesAmort = 0, vncImmoCedees = 0, prixCessionImmo = 0, subventionsViree = 0 }) {
    return +(resultatNet + dotationsAmort - reprisesAmort + vncImmoCedees - prixCessionImmo - subventionsViree).toFixed(2);
  },

  // ============== BILAN FONCTIONNEL ==============
  calculFRNG_BFR({ ressourcesStables, emploisStables, ace, ache, dce, dche, tresActive, tresPassive }) {
    const frng = ressourcesStables - emploisStables;
    const bfr = (ace + ache) - (dce + dche);
    const tn = tresActive - tresPassive;
    return {
      frng, bfr, tn,
      verification: Math.abs(frng - (bfr + tn)) < 0.01 ? "OK" : "Erreur (FRNG ≠ BFR + TN)"
    };
  },

  // ============== SEUIL DE RENTABILITÉ ==============
  seuilRentabilite({ ca, chargesVariables, chargesFixes }) {
    const mcv = ca - chargesVariables;
    const tauxMCV = ca ? mcv / ca : 0;
    const sr = tauxMCV ? +(chargesFixes / tauxMCV).toFixed(2) : null;
    const resultat = mcv - chargesFixes;
    const margeSecurite = sr !== null ? +(ca - sr).toFixed(2) : null;
    const indiceSecurite = sr !== null && ca ? +((ca - sr) / ca * 100).toFixed(2) : null;
    const pointMortMois = sr !== null && ca ? +((sr / ca) * 12).toFixed(2) : null;
    const levierOp = resultat ? +(mcv / resultat).toFixed(2) : null;
    return { mcv, tauxMCV: +(tauxMCV * 100).toFixed(2), sr, resultat, margeSecurite, indiceSecurite, pointMortMois, levierOp };
  },

  // ============== PAIE SIMPLIFIÉE ==============
  // Approximations pédagogiques — pas un substitut à un logiciel de paie réel
  paieSimplifiee({ brut, statut = "non_cadre" }) {
    const taux = {
      maladie_sal: 0,
      vieillesse_plaf_sal: 6.90,
      vieillesse_deplaf_sal: 0.40,
      agirc_arrco_t1_sal: statut === "cadre" ? 3.15 : 3.15,
      agff_ceg_sal: 0.86,
      apec_sal: statut === "cadre" ? 0.024 : 0,
      csg_deductible: 6.80,
      csg_crds_non_ded: 2.90,

      maladie_pat: 7.00,
      vieillesse_plaf_pat: 8.55,
      vieillesse_deplaf_pat: 1.90,
      agirc_arrco_t1_pat: 4.72,
      agff_ceg_pat: 1.29,
      af_pat: 5.25,
      chomage_pat: 4.05,
      at_pat: 1.00,
      formation_pat: 1.00
    };
    const sumPct = (...keys) => keys.reduce((s, k) => s + taux[k], 0);

    const brutNum = Number(brut);
    const tauxSalDeductible = sumPct("maladie_sal","vieillesse_plaf_sal","vieillesse_deplaf_sal","agirc_arrco_t1_sal","agff_ceg_sal","apec_sal","csg_deductible");
    const cotisSalDeductibles = +(brutNum * tauxSalDeductible / 100).toFixed(2);
    const cotisCsgNonDed = +(brutNum * 0.9825 * taux.csg_crds_non_ded / 100).toFixed(2);
    const totalCotisSal = +(cotisSalDeductibles + cotisCsgNonDed).toFixed(2);
    const netImposable = +(brutNum - cotisSalDeductibles + cotisCsgNonDed).toFixed(2);
    const netAvantImpot = +(brutNum - totalCotisSal).toFixed(2);

    const tauxPat = sumPct("maladie_pat","vieillesse_plaf_pat","vieillesse_deplaf_pat","agirc_arrco_t1_pat","agff_ceg_pat","af_pat","chomage_pat","at_pat","formation_pat");
    const cotisPat = +(brutNum * tauxPat / 100).toFixed(2);
    const coutEmployeur = +(brutNum + cotisPat).toFixed(2);

    return {
      brut: brutNum,
      cotisSalDeductibles,
      cotisCsgNonDed,
      totalCotisSal,
      netImposable,
      netAvantImpot,
      cotisPat,
      coutEmployeur,
      detailTaux: {
        salarial: +tauxSalDeductible.toFixed(2),
        patronal: +tauxPat.toFixed(2)
      }
    };
  },

  // ============== IS ==============
  calculIS({ resultatFiscal, pme = true }) {
    const r = Number(resultatFiscal);
    if (r <= 0) return { is: 0, detail: "Résultat fiscal négatif → pas d'IS, déficit reportable" };
    const seuilPME = 42500;
    if (pme && r <= seuilPME) {
      return { is: +(r * 0.15).toFixed(2), detail: `${r} × 15% (taux PME)` };
    }
    if (pme) {
      const trancheReduite = +(seuilPME * 0.15).toFixed(2);
      const trancheNormale = +((r - seuilPME) * 0.25).toFixed(2);
      return {
        is: +(trancheReduite + trancheNormale).toFixed(2),
        detail: `42 500 × 15% = ${trancheReduite} + ${r - seuilPME} × 25% = ${trancheNormale}`
      };
    }
    return { is: +(r * 0.25).toFixed(2), detail: `${r} × 25% (taux normal)` };
  },

  // ============== TVA À DÉCAISSER ==============
  tvaCA3({ caHT20 = 0, caHT10 = 0, caHT55 = 0, tvaDedAbs = 0, tvaDedImmo = 0, creditAnterieur = 0 }) {
    const tvaCol20 = +(caHT20 * 0.20).toFixed(2);
    const tvaCol10 = +(caHT10 * 0.10).toFixed(2);
    const tvaCol55 = +(caHT55 * 0.055).toFixed(2);
    const tvaCollecteeTotal = +(tvaCol20 + tvaCol10 + tvaCol55).toFixed(2);
    const tvaDeductibleTotal = +(tvaDedAbs + tvaDedImmo).toFixed(2);
    const solde = +(tvaCollecteeTotal - tvaDeductibleTotal - creditAnterieur).toFixed(2);
    return {
      tvaCol20, tvaCol10, tvaCol55, tvaCollecteeTotal,
      tvaDeductibleTotal,
      creditAnterieur,
      tvaADecaisser: solde > 0 ? solde : 0,
      creditTVAReporter: solde < 0 ? -solde : 0,
      detail: solde > 0 ? `À payer : ${solde} €` : `Crédit reportable : ${-solde} €`
    };
  },

  // ============== INTÉRÊTS COMPOSÉS ==============
  interetsComposes({ capital, tauxAnnuel, dureeAnnees }) {
    const t = tauxAnnuel / 100;
    const valeurAcquise = capital * Math.pow(1 + t, dureeAnnees);
    const interets = valeurAcquise - capital;
    return {
      capital,
      tauxAnnuel,
      dureeAnnees,
      valeurAcquise: +valeurAcquise.toFixed(2),
      interets: +interets.toFixed(2)
    };
  },

  // ============== ANNUITÉ EMPRUNT ==============
  annuiteEmprunt({ capital, tauxAnnuel, dureeAnnees }) {
    const t = tauxAnnuel / 100;
    const n = dureeAnnees;
    const a = capital * t / (1 - Math.pow(1 + t, -n));

    const tableau = [];
    let crd = capital;
    for (let i = 1; i <= n; i++) {
      const interet = +(crd * t).toFixed(2);
      const amort = +(a - interet).toFixed(2);
      crd = +(crd - amort).toFixed(2);
      tableau.push({ periode: i, annuite: +a.toFixed(2), interet, amortissement: amort, crd: Math.max(0, crd) });
    }
    return { annuite: +a.toFixed(2), tableau };
  },

  formaterEuro(montant) {
    if (montant === null || montant === undefined) return "—";
    return Number(montant).toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
  }
};
