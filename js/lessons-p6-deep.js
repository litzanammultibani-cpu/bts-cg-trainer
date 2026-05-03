// P6 approfondi — analyse financière

LESSONS.push(
  {
    id: "L73", processus: "P6", titre: "Rentabilité économique vs financière (effet de levier)", duree_min: 22,
    contenu: `
<h3>1. Deux rentabilités, deux logiques</h3>
<table class="table">
  <tr><th></th><th>Rentabilité économique (Re)</th><th>Rentabilité financière (Rf)</th></tr>
  <tr><td>Mesure</td><td>Performance des actifs</td><td>Performance pour l'actionnaire</td></tr>
  <tr><td>Numérateur</td><td>Résultat d'exploitation après IS</td><td>Résultat net</td></tr>
  <tr><td>Dénominateur</td><td>Capitaux investis (CP + Dettes financières)</td><td>Capitaux propres seuls</td></tr>
</table>

<h3>2. Formules</h3>
<div class="encadre">
  <p><strong>Re = Résultat d'exploitation × (1 − IS) / (Capitaux propres + Dettes fin.)</strong></p>
  <p><strong>Rf = Résultat net / Capitaux propres</strong></p>
</div>

<h3>3. Effet de levier — la formule</h3>
<div class="encadre">
  <p><strong>Rf = Re + (Re − i) × D/CP</strong></p>
  <ul>
    <li>i = coût de la dette après IS</li>
    <li>D/CP = ratio d'endettement</li>
  </ul>
</div>

<h3>4. Lecture</h3>
<ul>
  <li>Si <strong>Re &gt; i</strong> : l'endettement <strong>augmente</strong> Rf → effet de levier <strong>positif</strong>. C'est ce que cherchent les actionnaires (booster la Rf).</li>
  <li>Si <strong>Re &lt; i</strong> : l'endettement <strong>dégrade</strong> Rf → effet de <strong>massue</strong>. Dangereux.</li>
  <li>Si <strong>Re = i</strong> : neutre.</li>
</ul>

<h3>5. Exemple chiffré</h3>
<p>Entreprise A : CP 1 000, dettes 0, REX 200, IS 25%.</p>
<ul>
  <li>RN = 200 × 75% = 150</li>
  <li>Re = 150 / 1 000 = 15%</li>
  <li>Rf = 150 / 1 000 = 15%</li>
</ul>
<p>Entreprise B (même structure d'actifs, mais 500 financés par dette à 5%) : CP 500, dettes 500.</p>
<ul>
  <li>REX = 200 (idem)</li>
  <li>− Intérêts dette = 500 × 5% = 25</li>
  <li>Résultat avant IS = 175. IS = 43,75. RN = 131,25</li>
  <li>Re = 150 / 1 000 = 15% (idem A)</li>
  <li>Rf = 131,25 / 500 = <strong>26,25%</strong></li>
  <li>Effet de levier = (15% − 5% × 75%) × 1 = 11,25 ajouté → 26,25% ✓</li>
</ul>
<p>L'entreprise B a la même rentabilité économique mais une <strong>rentabilité financière supérieure</strong> grâce à l'endettement.</p>

<h3>6. Limites</h3>
<ul>
  <li>L'endettement augmente le risque (volatilité du résultat)</li>
  <li>Au-delà d'un certain seuil, les banques exigent des garanties supplémentaires ou refusent</li>
  <li>Si Re chute (récession), le levier se transforme en massue</li>
</ul>

<h3>7. À retenir pour BTS</h3>
<div class="encadre">
  <p>L'arbitrage <strong>fonds propres / dette</strong> est central en stratégie financière. Les sujets BTS demandent souvent de calculer Re et Rf, puis d'analyser l'effet de levier et conclure sur le risque pris.</p>
</div>
    `,
    quiz: [
      { question: "Re = 12%, coût de la dette i = 4% (après IS), D/CP = 1. Rentabilité financière Rf ?", choix: ["8%", "16%", "20%", "12%"], reponse: 2, explication: "Rf = Re + (Re − i) × D/CP = 12 + (12 − 4) × 1 = 20%. L'endettement amplifie." }
    ]
  },

  {
    id: "L74", processus: "P6", titre: "Tableau de flux de trésorerie OEC", duree_min: 22,
    contenu: `
<h3>1. Différence avec le tableau de financement PCG</h3>
<table class="table">
  <tr><th>Tableau de financement (PCG)</th><th>Tableau des flux (OEC)</th></tr>
  <tr><td>Approche bilancielle (variations de postes)</td><td>Approche par flux (encaissements/décaissements)</td></tr>
  <tr><td>3 catégories : ressources, emplois, BFR</td><td>3 catégories : <strong>exploitation, investissement, financement</strong></td></tr>
  <tr><td>Pratique française traditionnelle</td><td>Standard international (proche IFRS)</td></tr>
</table>

<h3>2. Structure du tableau OEC</h3>
<pre>
A — Flux de trésorerie liés à l'activité (exploitation)
    Résultat net
  + Dotations aux amortissements et provisions (non décaissables)
  − Reprises sur amortissements et provisions
  + VNC immo cédées
  − Plus-values de cession
  − Augmentation du BFR
  + Diminution du BFR
                                    = Flux de trésorerie d'exploitation (FTE)

B — Flux de trésorerie liés aux opérations d'investissement
  − Acquisitions d'immobilisations
  + Cessions d'immobilisations (prix encaissé)
                                    = FTI (souvent négatif)

C — Flux de trésorerie liés aux opérations de financement
  + Augmentation de capital
  − Dividendes versés
  + Nouveaux emprunts
  − Remboursements d'emprunts
                                    = FTF

D — Variation de trésorerie nette = A + B + C
+ Trésorerie au 1er janvier
= Trésorerie au 31 décembre  ✓ (à rapprocher de la variation comptable)
</pre>

<h3>3. Lecture du tableau</h3>
<ul>
  <li><strong>FTE positif</strong> : l'exploitation génère du cash, c'est sain</li>
  <li><strong>FTE négatif</strong> : signal d'alerte (sauf jeune entreprise en croissance)</li>
  <li><strong>FTI négatif</strong> : on investit. Bon signe si justifié</li>
  <li><strong>FTF négatif</strong> : remboursement de dette / dividendes — possible si FTE assez fort</li>
  <li><strong>FTF positif</strong> : recours à du financement externe</li>
</ul>

<h3>4. Profils typiques</h3>
<table class="table">
  <tr><th>Profil</th><th>FTE</th><th>FTI</th><th>FTF</th></tr>
  <tr><td>Entreprise mature en bonne santé</td><td>+ (gros)</td><td>− (modeste)</td><td>− (rembours, dividendes)</td></tr>
  <tr><td>Startup en croissance</td><td>− ou faible</td><td>− (fort)</td><td>+ (levée fonds)</td></tr>
  <tr><td>Entreprise en difficulté</td><td>−</td><td>0 ou faible</td><td>+ (emprunt pour survivre)</td></tr>
  <tr><td>Entreprise en déclin</td><td>+ (faible)</td><td>+ (cession actifs)</td><td>− (rembours)</td></tr>
</table>

<h3>5. Pourquoi c'est crucial</h3>
<p>Le compte de résultat peut afficher un bénéfice malgré une trésorerie qui s'effondre (cas classique : croissance non financée → BFR explose). Le tableau de flux révèle cette réalité.</p>
    `,
    quiz: [
      { question: "Les 3 catégories du tableau OEC sont :", choix: ["Ressources, emplois, BFR", "Exploitation, investissement, financement", "Court terme, moyen terme, long terme", "Actif, passif, hors bilan"], reponse: 1, explication: "OEC : exploitation (ce que génère l'activité), investissement (ce qu'on dépense en CAPEX), financement (apports/dette/dividendes)." }
    ]
  },

  {
    id: "L75", processus: "P6", titre: "Cotation Banque de France et notation", duree_min: 12,
    contenu: `
<h3>1. La cotation Banque de France</h3>
<p>La BdF attribue à chaque entreprise une <strong>cote</strong> qui synthétise sa capacité à honorer ses engagements financiers à 3 ans. Très consultée par les banques pour décider d'octroyer du crédit.</p>

<h3>2. Échelle</h3>
<table class="table">
  <tr><th>Cote</th><th>Signification</th></tr>
  <tr><td><strong>3++</strong></td><td>Capacité excellente</td></tr>
  <tr><td><strong>3+</strong></td><td>Très forte</td></tr>
  <tr><td><strong>3</strong></td><td>Forte</td></tr>
  <tr><td><strong>4+</strong></td><td>Assez forte</td></tr>
  <tr><td><strong>4</strong></td><td>Acceptable</td></tr>
  <tr><td><strong>5+</strong></td><td>Assez faible</td></tr>
  <tr><td><strong>5</strong></td><td>Faible</td></tr>
  <tr><td><strong>6</strong></td><td>Très faible</td></tr>
  <tr><td><strong>7</strong></td><td>Au moins un incident de paiement</td></tr>
  <tr><td><strong>8</strong></td><td>Procédure collective</td></tr>
  <tr><td><strong>P</strong></td><td>Procédure de redressement / liquidation</td></tr>
</table>

<h3>3. Critères pris en compte</h3>
<ul>
  <li>Performance financière (rentabilité, structure financière)</li>
  <li>Qualité de la gouvernance et de l'environnement</li>
  <li>Incidents de paiement</li>
  <li>Endettement et capacité de remboursement</li>
  <li>Croissance du CA et de la VA</li>
</ul>

<h3>4. Conséquences pratiques</h3>
<ul>
  <li>Les <strong>cotes 3++ à 4+</strong> sont éligibles au refinancement BCE — les banques préfèrent prêter à ces entreprises</li>
  <li>Une cote &gt; 5 rend l'accès au crédit plus difficile et plus cher</li>
  <li>Une cote 7 ou 8 = crédit quasi impossible</li>
</ul>

<h3>5. Notations privées</h3>
<p>Pour les grandes entreprises : <strong>Moody's, S&P, Fitch</strong> attribuent des notes (AAA, AA, A, BBB, BB...). En dessous de BBB- = "junk bond" / spéculatif.</p>

<h3>6. À retenir pour BTS</h3>
<p>Quand un sujet demande un diagnostic financier, conclure par : "L'entreprise présente des indicateurs cohérents avec une cote BdF de l'ordre de X. Elle devrait/ne devrait pas avoir de difficulté à obtenir un financement bancaire."</p>
    `,
    quiz: [
      { question: "Une cote Banque de France 3+ correspond à :", choix: ["Une situation très critique", "Une procédure collective", "Une capacité très forte à honorer ses engagements", "Un défaut de paiement"], reponse: 2, explication: "L'échelle va de 3++ (excellent) à 8 (procédure collective). 3+ = très bonne." }
    ]
  },

  {
    id: "L76", processus: "P6", titre: "Diagnostic financier : méthode complète", duree_min: 22,
    contenu: `
<h3>1. Les 4 axes d'un diagnostic</h3>
<table class="table">
  <tr><th>Axe</th><th>Question</th><th>Outils</th></tr>
  <tr><td>1. Activité</td><td>Comment évolue le CA ? La marge ?</td><td>Évolution CA, MC, VA, taux de marge</td></tr>
  <tr><td>2. Profitabilité</td><td>L'entreprise est-elle rentable ?</td><td>SIG, EBE, RN, ratios de rentabilité</td></tr>
  <tr><td>3. Structure financière</td><td>Comment sont financés les actifs ?</td><td>Bilan fonctionnel, FRNG, BFR, autonomie</td></tr>
  <tr><td>4. Trésorerie et liquidité</td><td>L'entreprise peut-elle payer ses dettes ?</td><td>TN, ratios liquidité, tableau de flux</td></tr>
</table>

<h3>2. Plan d'analyse type</h3>
<ol>
  <li><strong>Présentation</strong> : secteur, taille, contexte économique</li>
  <li><strong>Étude de l'activité</strong> : croissance du CA sur 3 ans, dynamisme par produit</li>
  <li><strong>Étude de la profitabilité</strong> : SIG complets, ratio de marge, comparaison sectorielle</li>
  <li><strong>Étude de l'équilibre financier</strong> : bilan fonctionnel, FRNG/BFR/TN, ratios autonomie/endettement</li>
  <li><strong>Étude de la trésorerie</strong> : tableau de flux, capacité de remboursement, liquidité</li>
  <li><strong>Synthèse</strong> : forces, faiblesses, opportunités, risques</li>
  <li><strong>Recommandations</strong> : leviers d'amélioration concrets</li>
</ol>

<h3>3. Repères sectoriels typiques</h3>
<table class="table">
  <tr><th>Indicateur</th><th>Industrie</th><th>Distribution</th><th>Services</th></tr>
  <tr><td>Marge nette</td><td>3-8%</td><td>1-3%</td><td>5-15%</td></tr>
  <tr><td>BFR / CA en jours</td><td>30-60 j</td><td>−15 à 0 j (BFR négatif)</td><td>10-30 j</td></tr>
  <tr><td>Autonomie financière</td><td>30-50%</td><td>20-40%</td><td>40-60%</td></tr>
  <tr><td>Délai client</td><td>45-90 j</td><td>5-15 j</td><td>30-60 j</td></tr>
</table>

<h3>4. Conclusion type d'un diagnostic</h3>
<div class="encadre">
  <p><strong>Forces :</strong> rentabilité supérieure à la moyenne sectorielle, croissance du CA dynamique, autonomie financière confortable.<br>
  <strong>Faiblesses :</strong> BFR en hausse, délai clients élevé, trésorerie tendue.<br>
  <strong>Recommandations :</strong>
  <ul>
    <li>Mettre en place une politique de relance plus rigoureuse</li>
    <li>Négocier des délais fournisseurs plus longs</li>
    <li>Étudier l'affacturage pour libérer du cash</li>
    <li>Renégocier la part variable des charges fixes</li>
  </ul></p>
</div>

<h3>5. Pour le BTS — sujets E5</h3>
<p>L'épreuve E5 (oral 30 min, coef 5) inclut souvent un diagnostic financier d'entreprise. Mémorise le plan en 4 axes et les ratios standards. Toujours conclure avec des <strong>recommandations actionnables</strong>, pas juste un constat.</p>
    `,
    quiz: [
      { question: "Quel est le 1er axe d'un diagnostic financier complet ?", choix: ["Trésorerie", "Profitabilité", "Activité (croissance, marge)", "Endettement"], reponse: 2, explication: "On commence toujours par l'activité (CA, marge) avant d'analyser la profitabilité, la structure et la trésorerie." }
    ]
  }
);
