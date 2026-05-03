// Phase 3 — P3 : Gestion des obligations fiscales

LESSONS.push(
  {
    id: "L17", processus: "P3", titre: "Les régimes de TVA", duree_min: 12,
    contenu: `
<h3>1. Trois régimes principaux</h3>
<table class="table">
  <tr><th>Régime</th><th>Conditions (CA HT 2024)</th><th>Déclaration</th></tr>
  <tr><td><strong>Franchise en base</strong></td><td>Services ≤ 36 800 € · Ventes ≤ 91 900 €</td><td>Aucune (mention "TVA non applicable, art. 293 B")</td></tr>
  <tr><td><strong>Réel simplifié (RSI)</strong></td><td>Services 36 800 à 254 000 € · Ventes 91 900 à 840 000 €</td><td>2 acomptes (juillet/décembre) + 1 régularisation annuelle (CA12)</td></tr>
  <tr><td><strong>Réel normal (RN)</strong></td><td>Au-delà du RSI ou sur option</td><td>Mensuelle (CA3) ou trimestrielle si TVA &lt; 4 000 €/an</td></tr>
</table>

<h3>2. Le régime de référence en BTS : RN mensuel</h3>
<p>C'est le régime traité dans 90 % des sujets. Chaque mois, l'entreprise dépose une <strong>déclaration CA3</strong> au plus tard le 19/24 du mois suivant.</p>

<h3>3. Mécanisme</h3>
<div class="encadre">
  <p><strong>TVA collectée − TVA déductible = TVA à décaisser (ou crédit de TVA)</strong></p>
  <p>Si solde positif → 445510 (à payer à l'État)<br>
  Si solde négatif → 445670 (crédit à reporter ou à se faire rembourser)</p>
</div>
    `,
    quiz: [
      { question: "Une SARL services réalise 80 000 € HT/an. Quel régime par défaut ?", choix: ["Franchise en base", "Réel simplifié", "Réel normal", "Mini-réel"], reponse: 1, explication: "Pour les services entre 36 800 et 254 000 € → Réel simplifié (RSI). Au-dessus de 36 800 = sortie de la franchise." }
    ]
  },

  {
    id: "L18", processus: "P3", titre: "La déclaration CA3 pas à pas", duree_min: 25,
    contenu: `
<h3>1. À quoi sert la CA3 ?</h3>
<p>Le formulaire <strong>CA3 (cerfa n°3310)</strong> récapitule, pour le mois écoulé : les ventes, la TVA collectée, les achats donnant droit à déduction et la TVA déductible. Il calcule la TVA à payer (ou le crédit).</p>

<h3>2. Cadres principaux</h3>
<table class="table">
  <tr><th>Cadre</th><th>Contenu</th></tr>
  <tr><td><strong>A — Opérations imposables</strong></td><td>CA HT par taux (20 %, 10 %, 5,5 %, 2,1 %)</td></tr>
  <tr><td><strong>B — TVA brute</strong></td><td>= base × taux. Total = TVA collectée</td></tr>
  <tr><td><strong>C — TVA déductible</strong></td><td>Sur immobilisations (ligne 19) et sur autres biens et services (ligne 20)</td></tr>
  <tr><td><strong>D — Calcul</strong></td><td>TVA brute − TVA déductible − Crédit antérieur = TVA nette due (ligne 28) ou crédit (ligne 25)</td></tr>
</table>

<h3>3. Étape par étape</h3>
<ol>
  <li><strong>Sortir le grand livre du mois</strong> et identifier :
    <ul>
      <li>Mouvements créditeurs des comptes 707, 706, 701 (par taux) → ventes HT</li>
      <li>Mouvements crédit du compte 445710 → TVA collectée</li>
      <li>Mouvements débit du compte 445660 → TVA déductible sur ABS</li>
      <li>Mouvements débit du compte 445620 → TVA déductible sur immobilisations</li>
    </ul>
  </li>
  <li><strong>Reporter</strong> sur le formulaire :
    <ul>
      <li>Cadre A : ventes HT (ligne 01 = vtes biens, ligne 02 = vtes services... selon le cas, ventilation par taux en pratique sur le cadre B)</li>
      <li>Cadre B : TVA brute par taux</li>
      <li>Lignes 19 / 20 : TVA déductible immobilisations / ABS</li>
    </ul>
  </li>
  <li><strong>Calculer le solde</strong> (ligne 24 = TVA brute, ligne 23 = TVA déductible totale)</li>
  <li><strong>Reporter le crédit antérieur</strong> ligne 22 si applicable</li>
  <li>Si <strong>ligne 28 &gt; 0</strong> : à payer ; si <strong>ligne 25 &gt; 0</strong> : crédit reportable ou à rembourser (formulaire 3519)</li>
</ol>

<h3>4. Écriture comptable de liquidation</h3>
<p>À la fin du mois, on solde 445710 et 445660/445620 :</p>
<table class="ecriture">
  <tr><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>445710</td><td>TVA collectée du mois</td><td>5 000</td><td></td></tr>
  <tr><td>445660</td><td>TVA déductible ABS du mois</td><td></td><td>2 800</td></tr>
  <tr><td>445620</td><td>TVA déductible immo du mois</td><td></td><td>800</td></tr>
  <tr><td>445510</td><td>TVA à décaisser</td><td></td><td>1 400</td></tr>
</table>
<p>Si TVA déductible &gt; collectée : compte 445670 (crédit de TVA) au débit à la place.</p>

<h3>5. Le paiement</h3>
<p>Lors du télérèglement (sur impots.gouv.fr) :</p>
<table class="ecriture">
  <tr><td>445510</td><td>TVA à décaisser</td><td>1 400</td><td></td></tr>
  <tr><td>512</td><td>Banque</td><td></td><td>1 400</td></tr>
</table>
    `,
    quiz: [
      { question: "TVA collectée 6 000 €, TVA déductible ABS 3 200 €, TVA déductible immo 1 100 €. TVA à décaisser ?", choix: ["1 700 €", "2 800 €", "4 100 €", "10 300 €"], reponse: 0, explication: "6 000 − 3 200 − 1 100 = 1 700 € à payer." }
    ]
  },

  {
    id: "L19", processus: "P3", titre: "TVA : cas particuliers", duree_min: 18,
    contenu: `
<h3>1. Acquisitions intracommunautaires (UE)</h3>
<p>Achat à un fournisseur basé dans un pays UE, avec n° TVA intracom. Le fournisseur facture en HT. L'acheteur français doit <strong>auto-liquider</strong> la TVA :</p>
<table class="ecriture">
  <tr><td>607</td><td>Achats marchandises (HT)</td><td>1 000</td><td></td></tr>
  <tr><td>445660</td><td>TVA déductible 20%</td><td>200</td><td></td></tr>
  <tr><td>4452</td><td>TVA due intracom</td><td></td><td>200</td></tr>
  <tr><td>401</td><td>Fournisseur UE</td><td></td><td>1 000</td></tr>
</table>
<p>Sur la CA3 : ligne A2 (acquisitions intracom HT) + ligne B2 (TVA correspondante).</p>

<h3>2. Exportations hors UE</h3>
<p>Les exportations hors UE sont <strong>exonérées</strong> de TVA française (TVA = 0). Mention "Exonération art. 262 I du CGI" sur la facture. La TVA déductible des achats reste récupérable.</p>

<h3>3. Livraisons intracommunautaires</h3>
<p>Vente à un client UE avec n° TVA intracom valide : <strong>exonérée</strong> en France (le client autoliquide chez lui). Mention "Exonération art. 262 ter I du CGI". Cadre F1 de la CA3.</p>

<h3>4. Prorata de déduction</h3>
<p>Quand une entreprise réalise à la fois des opérations <strong>imposables</strong> et <strong>exonérées</strong> (ex : un cabinet médical qui vend aussi des produits) :</p>
<div class="encadre">
  <p><strong>Coefficient de déduction = Coefficient d'assujettissement × Coefficient de taxation × Coefficient d'admission</strong></p>
  <p>La TVA récupérable est plafonnée par ce coefficient.</p>
</div>

<h3>5. Cas où la TVA n'est pas déductible</h3>
<ul>
  <li>Véhicule de tourisme (sauf véhicule utilitaire)</li>
  <li>Carburant essence (récupération partielle 80 %, le diesel à 100 %)</li>
  <li>Cadeaux d'affaires &gt; 73 € TTC par bénéficiaire/an</li>
  <li>Dépenses de logement de la direction</li>
  <li>Frais de restaurant/spectacle pour la direction (sous certaines conditions)</li>
</ul>
    `,
    quiz: [
      { question: "Une entreprise française achète à un fournisseur allemand pour 2 000 € HT. Quel est le mécanisme TVA ?", choix: ["TVA allemande facturée 19%", "Pas de TVA, exonération totale", "Auto-liquidation : TVA 20% au débit ET au crédit", "TVA 5,5%"], reponse: 2, explication: "Acquisition intracom = auto-liquidation. Le fournisseur facture HT, l'acheteur français porte 20% en 445660 (déductible) ET 20% en 4452 (due). Effet net = 0 si TVA pleinement déductible." }
    ]
  },

  {
    id: "L20", processus: "P3", titre: "Le résultat fiscal", duree_min: 22,
    contenu: `
<h3>1. Principe</h3>
<p>Le <strong>résultat comptable</strong> n'est pas le <strong>résultat fiscal</strong>. Pour passer de l'un à l'autre, on applique des <strong>retraitements extra-comptables</strong> (déclarés sur la liasse fiscale, formulaire 2058-A) :</p>
<div class="encadre">
  <p><strong>Résultat fiscal = Résultat comptable + Réintégrations − Déductions</strong></p>
</div>

<h3>2. Réintégrations courantes (charges non déductibles)</h3>
<ul>
  <li><strong>Amendes et pénalités</strong> (sauf intérêts de retard sur l'IS)</li>
  <li><strong>TVS (Taxe sur les véhicules de société)</strong></li>
  <li><strong>Amortissements excédentaires</strong> sur véhicules de tourisme (plafonds : 18 300 €, 20 300 € si CO2 ≤ 50 g, ou 9 900 € si CO2 ≥ 165 g)</li>
  <li><strong>Cadeaux et réceptions excessifs</strong></li>
  <li><strong>Dons</strong> (mais bénéficient d'un crédit d'impôt mécénat)</li>
  <li><strong>Charges somptuaires</strong> (chasse, pêche, yachts...)</li>
  <li><strong>Provisions non déductibles fiscalement</strong></li>
  <li><strong>Rémunération exagérée des dirigeants</strong></li>
  <li><strong>Quote-part des frais et charges sur dividendes reçus</strong> (5 %)</li>
</ul>

<h3>3. Déductions courantes (produits non imposables ou abattements)</h3>
<ul>
  <li><strong>Dividendes</strong> sous régime mère-fille (95 % déductibles)</li>
  <li><strong>Plus-values à long terme</strong> sur titres de participation (taux réduit ou exonération sous conditions)</li>
  <li><strong>Reprises de provisions</strong> antérieurement réintégrées</li>
  <li><strong>Crédits d'impôt</strong> (CIR, mécénat...) — viennent en déduction de l'IS, pas du résultat fiscal</li>
</ul>

<h3>4. Exemple chiffré</h3>
<p>Résultat comptable 2024 = 80 000 €. Au cours de l'exercice :</p>
<ul>
  <li>2 000 € d'amendes routières (réintégrer)</li>
  <li>1 200 € de TVS (réintégrer)</li>
  <li>500 € d'amortissements excédentaires véhicule tourisme (réintégrer)</li>
  <li>3 000 € de dividendes reçus filiale (régime mère-fille → 95 % déductibles, soit 2 850 € à déduire)</li>
</ul>
<p>Résultat fiscal = 80 000 + 2 000 + 1 200 + 500 − 2 850 = <strong>80 850 €</strong></p>

<h3>5. Reports déficitaires</h3>
<p>Un déficit fiscal peut être :</p>
<ul>
  <li><strong>Reporté en avant</strong> sans limite de durée, mais imputable jusqu'à 1 M€ + 50 % de la fraction au-delà</li>
  <li><strong>Reporté en arrière</strong> (carry-back) sur le bénéfice de l'exercice précédent (option), dans la limite de 1 M€</li>
</ul>
    `,
    quiz: [
      { question: "Résultat comptable 50 000 €. Une amende de 1 500 € a été comptabilisée et 800 € de provision non déductible. Résultat fiscal ?", choix: ["47 700 €", "48 500 €", "52 300 €", "51 500 €"], reponse: 2, explication: "Amende et provision non déductibles à réintégrer : 50 000 + 1 500 + 800 = 52 300 €." }
    ]
  },

  {
    id: "L21", processus: "P3", titre: "L'impôt sur les sociétés (IS)", duree_min: 18,
    contenu: `
<h3>1. Taux applicables (2025)</h3>
<table class="table">
  <tr><th>Tranche</th><th>Taux</th><th>Conditions</th></tr>
  <tr><td>0 à 42 500 €</td><td><strong>15 %</strong></td><td>PME (CA HT &lt; 10 M€, capital libéré, détenu à 75% par personnes physiques)</td></tr>
  <tr><td>Au-delà ou non-PME</td><td><strong>25 %</strong></td><td>Taux normal pour toutes les sociétés</td></tr>
</table>

<h3>2. Calcul</h3>
<p>Exemple : SARL PME, résultat fiscal 2024 = 60 000 €.</p>
<ul>
  <li>Tranche à 15 % : 42 500 × 15 % = <strong>6 375 €</strong></li>
  <li>Tranche à 25 % : (60 000 − 42 500) × 25 % = 17 500 × 25 % = <strong>4 375 €</strong></li>
  <li>IS dû = <strong>10 750 €</strong></li>
</ul>

<h3>3. Acomptes (4 par an)</h3>
<p>L'IS est payé en 4 acomptes : <strong>15/03, 15/06, 15/09, 15/12</strong>. Chaque acompte = 25 % de l'IS de l'exercice précédent (ou de l'IS de l'exercice en cours si croissance attendue moindre).</p>

<h3>4. Liquidation</h3>
<p>Au plus tard le 15 mai N+1 (pour exercice clos au 31/12) :</p>
<ul>
  <li>Calcul de l'IS dû</li>
  <li>Imputation des acomptes versés</li>
  <li>Imputation des crédits d'impôt</li>
  <li>Solde positif = à payer ; solde négatif = excédent à rembourser ou imputer sur N+1</li>
</ul>

<h3>5. Comptabilisation</h3>
<p>Constatation de l'IS à la clôture :</p>
<table class="ecriture">
  <tr><td>695</td><td>Impôts sur les bénéfices</td><td>10 750</td><td></td></tr>
  <tr><td>444</td><td>État - IS</td><td></td><td>10 750</td></tr>
</table>
<p>Le compte 444 enregistre les acomptes (au débit) et l'IS dû (au crédit). Son solde au 31/12 indique ce qui reste à payer (créditeur) ou à se faire rembourser (débiteur).</p>

<h3>6. Crédits d'impôt notables</h3>
<ul>
  <li><strong>CIR (Crédit d'Impôt Recherche)</strong> : 30 % des dépenses de R&D jusqu'à 100 M€</li>
  <li><strong>CICE</strong> : supprimé en 2019 mais on le rencontre dans des annales anciennes</li>
  <li><strong>CIIC (Crédit d'Impôt Innovation)</strong> : 30 % de certaines dépenses pour les PME</li>
  <li><strong>Mécénat</strong> : 60 % des dons aux œuvres d'intérêt général</li>
</ul>
    `,
    quiz: [
      { question: "PME éligible au taux réduit, résultat fiscal 80 000 €. IS dû ?", choix: ["12 000 €", "15 750 €", "20 000 €", "10 375 €"], reponse: 1, explication: "42 500 × 15% = 6 375. (80 000 − 42 500) × 25% = 9 375. Total IS = 15 750 €." }
    ]
  },

  {
    id: "L22", processus: "P3", titre: "CET : CFE et CVAE", duree_min: 12,
    contenu: `
<h3>1. La CET (Contribution Économique Territoriale)</h3>
<p>La CET = <strong>CFE (Cotisation Foncière des Entreprises) + CVAE (Cotisation sur la Valeur Ajoutée)</strong>. C'est l'impôt local des entreprises, qui a remplacé la taxe professionnelle en 2010.</p>

<h3>2. CFE — Cotisation Foncière des Entreprises</h3>
<ul>
  <li><strong>Base</strong> : valeur locative cadastrale des biens passibles de taxe foncière utilisés par l'entreprise (locaux, terrains)</li>
  <li><strong>Taux</strong> : voté par la commune. Très variable (parfois 25 % à 30 %).</li>
  <li><strong>Cotisation minimum</strong> : entre 247 € et 7 533 € selon le CA (barème national)</li>
  <li><strong>Échéance</strong> : 15 décembre (acompte 50% au 15 juin si CFE &gt; 3 000 €)</li>
  <li><strong>Comptabilisation</strong> : compte 63511 (Contribution économique territoriale)</li>
</ul>

<h3>3. CVAE — Cotisation sur la Valeur Ajoutée</h3>
<p><strong>Important :</strong> la CVAE est en cours de suppression progressive (2024-2027). Pour 2024-2026 elle subsiste à taux réduit, suppression totale prévue en 2027.</p>
<ul>
  <li>Concerne les entreprises avec CA HT &gt; 500 000 €</li>
  <li>Taux progressif (max 0,28 % en 2024) appliqué à la valeur ajoutée</li>
  <li>Plafonnement de la CET à 1,438 % de la VA (en 2024)</li>
</ul>

<h3>4. Taxe sur les salaires</h3>
<p>Pour les entreprises <strong>non assujetties à la TVA</strong> (associations, banques, assurances...), la <strong>taxe sur les salaires</strong> remplace la déduction de TVA sur la masse salariale. Barème progressif (4,25 % à 13,60 %).</p>

<h3>5. Autres taxes assises sur les salaires</h3>
<ul>
  <li><strong>Taxe d'apprentissage</strong> (0,68 % de la masse salariale)</li>
  <li><strong>Participation à la formation professionnelle continue</strong> (1 % pour les ≥ 11 salariés)</li>
  <li><strong>Effort construction</strong> (0,45 % pour les ≥ 50 salariés)</li>
</ul>
<p>Toutes en compte 631 (Impôts sur rémunérations) ou 633 (Impôts directs et indirects sur rémunérations).</p>
    `,
    quiz: [
      { question: "La CET, c'est :", choix: ["CFE seule", "CVAE seule", "CFE + CVAE", "TVA + IS"], reponse: 2, explication: "CET = Contribution Économique Territoriale = CFE (foncière) + CVAE (valeur ajoutée). Remplace l'ex-taxe professionnelle." }
    ]
  }
);
