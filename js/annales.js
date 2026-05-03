// Annales — sujets types BTS CG inspirés du format officiel, avec corrigés détaillés
// Ces sujets sont des reconstitutions pédagogiques (pas la copie de sujets officiels)

const ANNALES = [
  {
    id: "A1",
    epreuve: "E4.1",
    intitule: "SARL Distrib'Express — Étude de cas (P1 + P2 + P3)",
    duree: "4h30",
    coefficient: 9,
    contexte: `
La SARL Distrib'Express est une entreprise de distribution de matériel informatique située à Bordeaux, créée en 2018 (capital 50 000 €).
Elle compte 12 salariés et réalise un CA HT annuel de 2,4 M€.
Régime de TVA : réel normal mensuel. Exercice clos le 31/12/2024.
Vous êtes stagiaire et le chef comptable vous confie plusieurs travaux.
    `,
    parties: [
      {
        titre: "Partie 1 — Opérations courantes (P1)",
        questions: [
          {
            num: "1.1",
            enonce: "Le 15/12/2024, la SARL achète chez Tech Suppliers (UE - Allemagne) pour 4 200 € HT de marchandises. Le fournisseur facture HT car la livraison intracommunautaire est exonérée. Comptabilisez la facture (TVA 20%).",
            corrige: `
<table class="ecriture">
<tr><td>607</td><td>Achats marchandises</td><td>4 200</td><td></td></tr>
<tr><td>445662</td><td>TVA déductible intracom</td><td>840</td><td></td></tr>
<tr><td>4452</td><td>TVA due intracommunautaire</td><td></td><td>840</td></tr>
<tr><td>401</td><td>Fournisseur Tech Suppliers</td><td></td><td>4 200</td></tr>
</table>
<p><strong>Justification :</strong> Auto-liquidation. La TVA est portée à la fois en déductible (445662) et en due (4452). Effet net = 0 sur la trésorerie.</p>`
          },
          {
            num: "1.2",
            enonce: "Le 18/12, vente à un client de 8 000 € HT, TVA 20%, escompte de règlement de 2% accordé pour paiement comptant. Le client paie immédiatement par virement. Comptabilisez (la TVA s'applique sur le HT après escompte).",
            corrige: `
<p>HT après escompte : 8 000 × (1 − 0,02) = 7 840 €. TVA = 7 840 × 20% = 1 568 €. TTC = 9 408 €. Brut TTC sans escompte = 9 600 €. Différence (escompte) = 160 €.</p>
<table class="ecriture">
<tr><td>512</td><td>Banque (TTC encaissé)</td><td>9 408</td><td></td></tr>
<tr><td>665</td><td>Escompte accordé</td><td>160</td><td></td></tr>
<tr><td>707</td><td>Ventes HT brut</td><td></td><td>8 000</td></tr>
<tr><td>445710</td><td>TVA collectée</td><td></td><td>1 568</td></tr>
</table>`
          },
          {
            num: "1.3",
            enonce: "Le 20/12, le client SAS Numérix règle par chèque la facture FV-2024-301 de 3 600 € TTC du 25/11. Comptabilisez et expliquez le lettrage à effectuer.",
            corrige: `
<table class="ecriture">
<tr><td>512</td><td>Banque</td><td>3 600</td><td></td></tr>
<tr><td>411</td><td>Client Numérix</td><td></td><td>3 600</td></tr>
</table>
<p><strong>Lettrage :</strong> dans le compte 411 Numérix, on associe la facture FV-2024-301 (3 600 € au débit) avec ce règlement (3 600 € au crédit) en leur attribuant la même lettre (par exemple "G"). Les deux écritures sont alors marquées comme soldées entre elles.</p>`
          }
        ]
      },
      {
        titre: "Partie 2 — Travaux d'inventaire (P2)",
        questions: [
          {
            num: "2.1",
            enonce: "Au 31/12, vous comptez le stock final de marchandises : 28 000 €. Le stock initial figurait au bilan d'ouverture pour 35 000 €. Passez les écritures de variation de stock.",
            corrige: `
<table class="ecriture">
<tr><th colspan="4">Annulation du stock initial :</th></tr>
<tr><td>6037</td><td>Variation des stocks de marchandises</td><td>35 000</td><td></td></tr>
<tr><td>370</td><td>Stocks de marchandises</td><td></td><td>35 000</td></tr>
<tr><th colspan="4">Constatation du stock final :</th></tr>
<tr><td>370</td><td>Stocks de marchandises</td><td>28 000</td><td></td></tr>
<tr><td>6037</td><td>Variation des stocks de marchandises</td><td></td><td>28 000</td></tr>
</table>
<p>Effet net du compte 6037 = +35 000 − 28 000 = +7 000 € au débit (charge), car le stock a diminué de 7 000 € → COGS augmenté.</p>`
          },
          {
            num: "2.2",
            enonce: "L'entreprise détient un véhicule utilitaire acquis le 01/04/2022 pour 18 000 € HT, amorti en linéaire sur 5 ans. Calculez l'amortissement 2024 et passez l'écriture.",
            corrige: `
<p>Taux = 100 / 5 = 20%. Annuité pleine = 18 000 × 20% = 3 600 €.</p>
<p>L'année 2024 est une année complète (mise en service le 01/04/2022, donc 2024 = 3e année, complète) → annuité = 3 600 €.</p>
<table class="ecriture">
<tr><td>68112</td><td>DAP immobilisations corporelles</td><td>3 600</td><td></td></tr>
<tr><td>2818</td><td>Amortissements matériel de transport</td><td></td><td>3 600</td></tr>
</table>`
          },
          {
            num: "2.3",
            enonce: "Un client a une créance de 4 800 € TTC (TVA 20%, soit 4 000 € HT). Il est jugé douteux et l'on estime à 60% le risque de non-recouvrement. Passez les écritures.",
            corrige: `
<table class="ecriture">
<tr><th colspan="4">Reclassement en client douteux :</th></tr>
<tr><td>416</td><td>Clients douteux</td><td>4 800</td><td></td></tr>
<tr><td>411</td><td>Clients</td><td></td><td>4 800</td></tr>
<tr><th colspan="4">Constitution de la dépréciation (60% du HT) :</th></tr>
<tr><td>68174</td><td>Dotation aux dépréciations sur créances</td><td>2 400</td><td></td></tr>
<tr><td>491</td><td>Dépréciation des comptes clients</td><td></td><td>2 400</td></tr>
</table>
<p>La dépréciation se calcule sur le HT (4 000 × 60% = 2 400). La TVA sera récupérée si la créance devient définitivement irrécouvrable.</p>`
          }
        ]
      },
      {
        titre: "Partie 3 — Fiscalité (P3)",
        questions: [
          {
            num: "3.1",
            enonce: "Au 31/12/2024, le résultat comptable est de 95 000 €. Vous identifiez : amendes 800 €, TVS 1 200 €, amortissement excédentaire véhicule de tourisme 600 €, reprise de provision antérieurement réintégrée 500 €. Calculez le résultat fiscal.",
            corrige: `
<p>Résultat fiscal = Résultat comptable + Réintégrations − Déductions</p>
<ul>
<li>Réintégrations : amendes 800 + TVS 1 200 + amort excédentaire 600 = <strong>2 600</strong></li>
<li>Déductions : reprise de provision (déjà réintégrée à l'origine) 500</li>
</ul>
<p>Résultat fiscal = 95 000 + 2 600 − 500 = <strong>97 100 €</strong></p>`
          },
          {
            num: "3.2",
            enonce: "Sachant que la SARL Distrib'Express est éligible au taux PME (CA &lt; 10M€, capital libéré et détenu par personnes physiques), calculez l'IS dû.",
            corrige: `
<p>Application du barème :</p>
<ul>
<li>Tranche à 15% : 42 500 × 15% = <strong>6 375 €</strong></li>
<li>Tranche à 25% : (97 100 − 42 500) × 25% = 54 600 × 25% = <strong>13 650 €</strong></li>
<li>IS total = 6 375 + 13 650 = <strong>20 025 €</strong></li>
</ul>
<p>Écriture :</p>
<table class="ecriture">
<tr><td>695</td><td>IS</td><td>20 025</td><td></td></tr>
<tr><td>444</td><td>État - IS</td><td></td><td>20 025</td></tr>
</table>`
          }
        ]
      }
    ]
  },

  {
    id: "A2",
    epreuve: "E5",
    intitule: "SARL Lumitech — Analyse de gestion et financière (P5 + P6)",
    duree: "30 min oral",
    coefficient: 5,
    contexte: `
La SARL Lumitech fabrique des luminaires haut de gamme. Elle vous communique ses comptes 2024.
CA HT : 1 800 000 €. CV : 1 080 000 €. CF : 540 000 €. Résultat d'exploitation : 180 000 €.
Bilan : actif total 1 200 000 €, capitaux propres 600 000 €, dettes financières 300 000 €, BFR 200 000 €.
    `,
    parties: [
      {
        titre: "Partie 1 — Analyse coûts (P5)",
        questions: [
          {
            num: "1.1",
            enonce: "Calculez la MCV, le taux de MCV, le seuil de rentabilité et le point mort.",
            corrige: `
<ul>
<li>MCV = 1 800 000 − 1 080 000 = <strong>720 000 €</strong></li>
<li>Taux MCV = 720 000 / 1 800 000 = <strong>40%</strong></li>
<li>Résultat = 720 000 − 540 000 = <strong>180 000 €</strong> (correspond au RE donné)</li>
<li>Seuil de rentabilité = 540 000 / 0,40 = <strong>1 350 000 €</strong></li>
<li>Point mort = (1 350 000 / 1 800 000) × 12 = <strong>9 mois</strong> = atteint fin septembre</li>
<li>Marge de sécurité = 1 800 000 − 1 350 000 = 450 000 €</li>
<li>Indice de sécurité = 450 000 / 1 800 000 = 25%</li>
</ul>`
          },
          {
            num: "1.2",
            enonce: "Calculez le levier opérationnel et commentez le risque économique.",
            corrige: `
<p>Levier opérationnel = MCV / Résultat = 720 000 / 180 000 = <strong>4</strong></p>
<p><strong>Lecture :</strong> une variation de 1% du CA fait varier le résultat de 4%. C'est un levier élevé qui révèle un <strong>risque économique substantiel</strong> : si l'activité chute de 25%, le résultat tombe à 0 (ce qui correspond au seuil de rentabilité).</p>
<p>Recommandation : surveiller le carnet de commandes, diversifier la clientèle, ou réduire la part des CF (sous-traiter, locations courtes plutôt que possession d'actifs).</p>`
          }
        ]
      },
      {
        titre: "Partie 2 — Analyse financière (P6)",
        questions: [
          {
            num: "2.1",
            enonce: "Calculez la rentabilité économique (Re), la rentabilité financière (Rf) et l'effet de levier (en supposant IS 25% et coût de la dette 4% avant IS).",
            corrige: `
<ul>
<li>Capitaux investis = 600 000 + 300 000 = 900 000 €</li>
<li>RE après IS = 180 000 × (1 − 0,25) = 135 000 €</li>
<li><strong>Re = 135 000 / 900 000 = 15%</strong></li>
<li>Charges d'intérêts = 300 000 × 4% = 12 000 €</li>
<li>Résultat net = (180 000 − 12 000) × 0,75 = 126 000 €</li>
<li><strong>Rf = 126 000 / 600 000 = 21%</strong></li>
<li>Coût de la dette après IS = 4% × 0,75 = 3%</li>
<li>Effet de levier = (Re − i) × D/CP = (15% − 3%) × (300/600) = 12% × 0,5 = 6%</li>
<li>Vérification : Rf = Re + 6% = 21% ✓</li>
</ul>`
          },
          {
            num: "2.2",
            enonce: "L'entreprise envisage un investissement de 200 000 € financé soit par fonds propres soit par dette. Quel impact sur Re et Rf si l'investissement génère 30 000 € de RE supplémentaire ?",
            corrige: `
<p><strong>Scénario fonds propres :</strong></p>
<ul>
<li>Capitaux investis = 1 100 000. Re = (135 000 + 30 000 × 0,75) / 1 100 000 = 157 500 / 1 100 000 = 14,32%</li>
<li>Rf = 157 500 / 800 000 = 19,7% (légère baisse)</li>
</ul>
<p><strong>Scénario dette :</strong></p>
<ul>
<li>Re reste similaire</li>
<li>Charges d'intérêts supplémentaires = 200 000 × 4% = 8 000</li>
<li>Résultat net = (210 000 − 20 000) × 0,75 = 142 500</li>
<li>Rf = 142 500 / 600 000 = 23,75% (augmentation)</li>
</ul>
<p><strong>Conclusion :</strong> tant que Re &gt; coût de la dette, le financement par dette amplifie la Rf. Mais attention au risque (volatilité, contraintes bancaires).</p>`
          }
        ]
      }
    ]
  },

  {
    id: "A3",
    epreuve: "E4.1",
    intitule: "SAS Atelier des Saveurs — Paie + écritures sociales (P4)",
    duree: "45 min",
    coefficient: 9,
    contexte: `
La SAS Atelier des Saveurs (restaurant gastronomique) emploie 18 salariés. En février 2025, un cuisinier (non-cadre) a un brut mensuel de 2 800 €. Statut : non-cadre, pas d'ancienneté pour réduction.
    `,
    parties: [
      {
        titre: "Calcul de paie",
        questions: [
          {
            num: "1",
            enonce: "Calculez le net imposable, le net avant impôt et le coût employeur (utilisez les taux standards 2025 : cotisations salariales ~22%, patronales ~42%).",
            corrige: `
<ul>
<li>Brut : 2 800,00 €</li>
<li>Cotisations salariales (~22%) : 616 €</li>
<li>Net avant impôt = 2 800 − 616 = <strong>2 184 €</strong></li>
<li>Net imposable (réintégration CSG/CRDS non déd. ~2,9% × 98,25% × brut) : ~2 184 + 80 = <strong>~2 264 €</strong></li>
<li>Cotisations patronales (~42%) : 1 176 €</li>
<li>Coût employeur total = 2 800 + 1 176 = <strong>3 976 €</strong></li>
</ul>`
          },
          {
            num: "2",
            enonce: "Passez les écritures comptables de paie pour ce salarié.",
            corrige: `
<table class="ecriture">
<tr><td>641</td><td>Salaires bruts</td><td>2 800</td><td></td></tr>
<tr><td>645</td><td>Charges patronales</td><td>1 176</td><td></td></tr>
<tr><td>421</td><td>Personnel - net à payer</td><td></td><td>2 184</td></tr>
<tr><td>431</td><td>Sécurité sociale (sal + pat)</td><td></td><td>~ 1 200</td></tr>
<tr><td>437</td><td>Autres organismes (retraite, chômage, formation)</td><td></td><td>~ 592</td></tr>
</table>
<p>Au moment du paiement du salarié : 421 / 512 (2 184 / 2 184).<br>
À l'URSSAF : 431 / 512 etc.</p>`
          },
          {
            num: "3",
            enonce: "Si le salarié est en arrêt maladie 5 jours en février (avec maintien de salaire à 90% par convention, IJ Sécu 35 €/jour à partir du 4e jour, subrogation), expliquez l'impact comptable.",
            corrige: `
<ul>
<li>Brut maintenu = 2 800 (90% de 2 800 si arrêt &lt; mois → on continue d'appliquer le taux selon convention)</li>
<li>IJ versées par la Sécu pour 2 jours indemnisés (jour 4 et 5 si carence 3 jours) = 35 × 2 = 70 €</li>
<li>Subrogation : l'employeur perçoit ces 70 €</li>
</ul>
<table class="ecriture">
<tr><th colspan="4">Réception des IJ par l'employeur :</th></tr>
<tr><td>512</td><td>Banque</td><td>70</td><td></td></tr>
<tr><td>4387</td><td>Sécu - IJ à recevoir</td><td></td><td>70</td></tr>
</table>
<p>Le salarié perçoit son net normal. L'employeur récupère les IJ pour compenser.</p>`
          }
        ]
      }
    ]
  }
];
