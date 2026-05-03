// P3 approfondi — fiscalité

LESSONS.push(
  {
    id: "L58", processus: "P3", titre: "TVA intracommunautaire : achats et ventes UE", duree_min: 22,
    contenu: `
<h3>1. Le principe de l'auto-liquidation</h3>
<p>Depuis 1993, à l'intérieur de l'UE, la TVA n'est plus payée à la frontière. Le mécanisme de l'<strong>auto-liquidation</strong> remplace la TVA douane :</p>
<ul>
  <li>Le <strong>vendeur UE</strong> facture HT au client français (avec mention "Exonération TVA - art. 262 ter I du CGI")</li>
  <li>L'<strong>acheteur français</strong> auto-liquide : il porte la TVA collectée ET la TVA déductible sur sa CA3 (effet net = 0 si pleinement déductible)</li>
</ul>

<h3>2. Conditions de l'exonération de TVA UE</h3>
<ol>
  <li>Acheteur et vendeur sont assujettis dans 2 États UE différents</li>
  <li>Le bien quitte physiquement la France (preuve de transport)</li>
  <li>Le client communique son n° de TVA intracom (à vérifier sur VIES)</li>
</ol>

<h3>3. Acquisition intracommunautaire — écriture</h3>
<p>Achat de marchandises chez un fournisseur allemand : 5 000 € HT.</p>
<table class="ecriture">
  <tr><td>607</td><td>Achats marchandises HT</td><td>5 000</td><td></td></tr>
  <tr><td>445662</td><td>TVA déductible intracom 20%</td><td>1 000</td><td></td></tr>
  <tr><td>4452</td><td>TVA due intracommunautaire</td><td></td><td>1 000</td></tr>
  <tr><td>401</td><td>Fournisseur Allemagne</td><td></td><td>5 000</td></tr>
</table>
<p><strong>Sur la CA3</strong> : ligne A2 (acquisitions intracom HT) + ligne B2 (TVA correspondante).</p>

<h3>4. Livraison intracommunautaire — écriture</h3>
<p>Vente à un client espagnol assujetti : 8 000 € HT, exonérée.</p>
<table class="ecriture">
  <tr><td>411</td><td>Client Espagne</td><td>8 000</td><td></td></tr>
  <tr><td>707</td><td>Ventes (exo intracom)</td><td></td><td>8 000</td></tr>
</table>
<p><strong>Sur la CA3</strong> : ligne F2 (livraisons intracom HT) — pas de TVA collectée.</p>
<p><strong>Obligation supplémentaire</strong> : remplir la <strong>DEB (Déclaration d'Échanges de Biens)</strong> mensuellement si total des LIC dépasse certains seuils.</p>

<h3>5. Prestations de services intracom</h3>
<p>Pour les services entre assujettis UE, le principe est la <strong>TVA dans le pays du preneur</strong> (B2B) :</p>
<ul>
  <li>Si tu factures un service à un client allemand assujetti : facture HT, exonéré en France, le client allemand auto-liquide</li>
  <li>Si tu reçois un service d'un prestataire italien : tu auto-liquides la TVA (445662 + 4452)</li>
</ul>

<h3>6. Cas particulier — vente à distance B2C UE (depuis 2021)</h3>
<p>Si un site e-commerce français vend à des particuliers UE pour plus de 10 000 €/an au total, il doit appliquer la <strong>TVA du pays du client</strong> et la déclarer via le <strong>guichet unique OSS</strong> (One-Stop Shop).</p>

<h3>7. Récap des comptes</h3>
<table class="table">
  <tr><th>Compte</th><th>Usage</th></tr>
  <tr><td>4452</td><td>TVA due intracommunautaire (au crédit, dette envers l'État)</td></tr>
  <tr><td>445662</td><td>TVA déductible sur acquisitions intracom (au débit)</td></tr>
  <tr><td>4453</td><td>TVA à régulariser (autres cas)</td></tr>
</table>
    `,
    quiz: [
      { question: "Une facture d'un fournisseur allemand pour 1 000 € HT. La TVA française à porter sur la CA3 :", choix: ["0 € (importation)", "200 € au crédit (collectée)", "200 € au débit ET 200 € au crédit (auto-liquidation)", "200 € en TVA douane"], reponse: 2, explication: "Auto-liquidation = la TVA est portée au crédit (445662 due) ET au débit (445662 déductible). Effet net = 0 si pleinement déductible." }
    ]
  },

  {
    id: "L59", processus: "P3", titre: "TVA : prorata et coefficient de déduction", duree_min: 18,
    contenu: `
<h3>1. Quand calculer un prorata ?</h3>
<p>Quand une entreprise a à la fois des opérations <strong>imposables à TVA</strong> et des opérations <strong>exonérées sans droit à déduction</strong> (ex : médicales, immobilières exonérées, financières).</p>

<h3>2. La formule officielle (3 coefficients)</h3>
<div class="encadre">
  <p><strong>Coefficient de déduction = Coef. assujettissement × Coef. taxation × Coef. admission</strong></p>
</div>
<table class="table">
  <tr><th>Coefficient</th><th>Question</th></tr>
  <tr><td><strong>Assujettissement</strong></td><td>Le bien est-il utilisé pour des opérations dans le champ de la TVA ?</td></tr>
  <tr><td><strong>Taxation</strong></td><td>Ces opérations sont-elles taxées ou exonérées ? (= ratio CA taxable / CA total)</td></tr>
  <tr><td><strong>Admission</strong></td><td>La TVA est-elle déductible légalement (ex : pas pour véhicule de tourisme) ?</td></tr>
</table>

<h3>3. Exemple — cabinet mixte</h3>
<p>Un cabinet réalise 70% de son CA en consultations médicales (exo) et 30% en vente de produits (taxable). Achat d'un ordinateur 1 200 € HT + 240 € TVA.</p>
<ul>
  <li>Coef. assujettissement = 1 (utilisé pour les 2 activités, dans le champ TVA)</li>
  <li>Coef. taxation = 30% (proportion d'activité taxable)</li>
  <li>Coef. admission = 1 (ordinateur, pas de restriction)</li>
  <li>Coef. déduction = 1 × 0,30 × 1 = <strong>0,30</strong></li>
  <li>TVA récupérable = 240 × 0,30 = <strong>72 €</strong></li>
  <li>TVA non récupérable (ajoutée au coût) = 168 €</li>
</ul>
<table class="ecriture">
  <tr><td>2183</td><td>Matériel informatique (HT + TVA non récup)</td><td>1 368</td><td></td></tr>
  <tr><td>445620</td><td>TVA déductible (récupérable)</td><td>72</td><td></td></tr>
  <tr><td>404</td><td>Fournisseur immo</td><td></td><td>1 440</td></tr>
</table>

<h3>4. Cas pratique : véhicule de tourisme</h3>
<p>Achat d'un véhicule de tourisme 25 000 € HT + 5 000 TVA.</p>
<ul>
  <li>Coef. admission = 0 (interdit pour véhicules de tourisme — sauf utilitaires, taxis, auto-écoles)</li>
  <li>Coef. déduction = 1 × 1 × 0 = 0</li>
  <li>TVA non récupérable, ajoutée au coût</li>
</ul>
<table class="ecriture">
  <tr><td>2182</td><td>Véhicule (TTC)</td><td>30 000</td><td></td></tr>
  <tr><td>404</td><td>Fournisseur immo</td><td></td><td>30 000</td></tr>
</table>

<h3>5. Régularisations annuelles et pluriannuelles</h3>
<p>Pour les <strong>immobilisations</strong>, le coef. de déduction est définitif s'il n'évolue pas de plus de 0,10 sur les 5 années qui suivent (20 ans pour les immeubles). Sinon, on régularise (ajustement à la TVA déduite initialement).</p>

<h3>6. Carburants — exception classique</h3>
<table class="table">
  <tr><th>Carburant</th><th>Véhicule utilitaire</th><th>Véhicule tourisme</th></tr>
  <tr><td>Gazole / superéthanol E85</td><td>100%</td><td>80%</td></tr>
  <tr><td>Essence</td><td>80%</td><td>80%</td></tr>
  <tr><td>GPL</td><td>100%</td><td>100%</td></tr>
  <tr><td>Électricité (recharge VE)</td><td>100%</td><td>100%</td></tr>
</table>
    `,
    quiz: [
      { question: "Une PME a 80% de CA exonéré et 20% taxable. Pour un achat ABS dans le champ, le coef. de déduction est :", choix: ["0,80", "0,20", "1,00", "0,50"], reponse: 1, explication: "Coef. taxation = ratio taxable / total = 0,20. Si assujettissement = 1 et admission = 1, coef. déduction = 0,20." }
    ]
  },

  {
    id: "L60", processus: "P3", titre: "Liasse fiscale 2050-2058 (vue pratique)", duree_min: 22,
    contenu: `
<h3>1. Qu'est-ce que la liasse fiscale ?</h3>
<p>Documents comptables et fiscaux annuels obligatoires (dépôt avant le 15 mai N+1 pour exercice civil), télétransmis via TDFC (Transfert de Données Fiscales et Comptables).</p>

<h3>2. Tableaux principaux</h3>
<table class="table">
  <tr><th>Tableau</th><th>Contenu</th></tr>
  <tr><td><strong>2050</strong></td><td>Bilan actif</td></tr>
  <tr><td><strong>2051</strong></td><td>Bilan passif</td></tr>
  <tr><td><strong>2052</strong></td><td>Compte de résultat (1ère partie)</td></tr>
  <tr><td><strong>2053</strong></td><td>Compte de résultat (suite)</td></tr>
  <tr><td><strong>2054</strong></td><td>Immobilisations</td></tr>
  <tr><td><strong>2055</strong></td><td>Amortissements</td></tr>
  <tr><td><strong>2056</strong></td><td>Provisions inscrites au bilan</td></tr>
  <tr><td><strong>2057</strong></td><td>État des échéances des créances et des dettes</td></tr>
  <tr><td><strong>2058-A</strong></td><td>Détermination du résultat fiscal (réintégrations / déductions) ⭐</td></tr>
  <tr><td><strong>2058-B</strong></td><td>Déficits, indemnités pour congés à payer, provisions non déductibles</td></tr>
  <tr><td><strong>2058-C</strong></td><td>Tableau d'affectation du résultat et renseignements divers</td></tr>
  <tr><td><strong>2059-A à F</strong></td><td>Plus et moins-values, abattements zones, suivi divers</td></tr>
</table>

<h3>3. Le 2058-A en détail</h3>
<p>C'est <strong>le</strong> tableau central. Il fait passer du résultat comptable au résultat fiscal.</p>
<pre>
Résultat comptable                                   ?

Réintégrations :
  Charges non déductibles (amendes, TVS, somptuaires)
  Amortissements véhicules excédentaires
  Provisions non déductibles
  Régularisation TVS / quote-part frais sur dividendes
  ...
                                  Total réintégrations  +
Déductions :
  Quote-part de subventions virée au CR
  Plus-values long terme (régime spécial)
  Dividendes mère-fille (95% déductibles)
  Reprises de provisions précédemment réintégrées
  ...
                                  Total déductions      -

= Résultat fiscal avant imputation déficits           ?
- Déficits antérieurs imputés                          ?
= Résultat fiscal imposable                            ?
</pre>

<h3>4. Le 2058-B — provisions non déductibles</h3>
<p>Les provisions doivent être ventilées :</p>
<ul>
  <li>Provisions <em>déductibles fiscalement</em> (litiges sérieux, créances douteuses identifiées)</li>
  <li>Provisions <em>non déductibles</em> (provisions pour propre assureur, provisions générales pour risques)</li>
</ul>
<p>Les non déductibles sont à réintégrer sur le 2058-A.</p>

<h3>5. Le 2058-C — affectation du résultat</h3>
<p>Récapitule la décision de l'AG : combien aux réserves, combien aux dividendes, combien en report à nouveau.</p>

<h3>6. Conseils pratiques BTS</h3>
<ul>
  <li>Les sujets BTS posent souvent une question sur le 2058-A : maîtriser les retraitements courants (amendes, TVS, amort véhicule excessif, dividendes mère-fille, quote-part subv.)</li>
  <li>Lire attentivement les libellés des cases : "amortissements excédentaires" ≠ "amortissements" globalement.</li>
  <li>Pour des plus-values long terme (titres de participation détenus +2 ans), régime spécial à 0% sous conditions, à passer en déduction.</li>
</ul>
    `,
    quiz: [
      { question: "Le tableau 2058-A sert à :", choix: ["Présenter le bilan", "Détailler les amortissements", "Passer du résultat comptable au résultat fiscal", "Affecter le résultat aux associés"], reponse: 2, explication: "Le 2058-A est LE tableau de retraitements (réintégrations + déductions). Le 2050/2051 = bilan, 2055 = amorts, 2058-C = affectation." }
    ]
  },

  {
    id: "L61", processus: "P3", titre: "BIC : entreprises individuelles", duree_min: 15,
    contenu: `
<h3>1. Qui est concerné ?</h3>
<p>Les <strong>BIC (Bénéfices Industriels et Commerciaux)</strong> concernent les commerçants, artisans, industriels exerçant en nom propre (entreprise individuelle, EIRL, EURL à l'IR). Pas pour les SARL/SAS qui sont à l'IS.</p>

<h3>2. Les régimes BIC</h3>
<table class="table">
  <tr><th>Régime</th><th>CA HT (2024)</th><th>Caractéristique</th></tr>
  <tr><td><strong>Micro-BIC</strong></td><td>Vtes ≤ 188 700 € · Services ≤ 77 700 €</td><td>Abattement forfaitaire (71% vente / 50% service / 34% bénéfices non commerciaux)</td></tr>
  <tr><td><strong>Réel simplifié</strong></td><td>Vtes ≤ 840 000 · Services ≤ 254 000</td><td>Bilan et compte de résultat allégés</td></tr>
  <tr><td><strong>Réel normal</strong></td><td>Au-delà ou option</td><td>Liasse fiscale complète</td></tr>
</table>

<h3>3. Le micro-BIC</h3>
<p>Pas de comptabilité d'engagement. On déclare le CA brut, l'administration applique l'abattement et l'impôt s'applique au résultat.</p>
<p>Exemple : artisan en services, CA 50 000 €. Bénéfice imposable forfaitaire = 50 000 × (1 − 0,50) = <strong>25 000 €</strong>. Imposé à l'IR aux taux du barème.</p>

<h3>4. Spécificités fiscales BIC en réel</h3>
<p>Différences avec une société à l'IS :</p>
<ul>
  <li>Pas d'IS — le bénéfice est imposé directement entre les mains de l'exploitant à l'IR, dans la catégorie BIC</li>
  <li>La rémunération de l'exploitant n'est <strong>pas</strong> une charge déductible (on déduit ses charges sociales TNS dans le compte 64 mais pas le "salaire")</li>
  <li>Pas de TVS (taxe véhicules sociétés) car pas de société</li>
  <li>Le compte 108 enregistre le compte de l'exploitant (apports, prélèvements)</li>
</ul>

<h3>5. Compte de l'exploitant (108)</h3>
<table class="ecriture">
  <tr><th colspan="4">Apport personnel de l'exploitant : 5 000 €</th></tr>
  <tr><td>512</td><td>Banque</td><td>5 000</td><td></td></tr>
  <tr><td>108</td><td>Compte de l'exploitant</td><td></td><td>5 000</td></tr>
  <tr><th colspan="4">Prélèvement personnel : 2 000 €</th></tr>
  <tr><td>108</td><td>Compte de l'exploitant</td><td>2 000</td><td></td></tr>
  <tr><td>512</td><td>Banque</td><td></td><td>2 000</td></tr>
</table>

<h3>6. Versement libératoire</h3>
<p>Option pour les micro-entrepreneurs : payer l'IR en même temps que les cotisations sociales, à un taux fixe (1% commerce, 1,7% services BIC, 2,2% BNC).</p>
    `,
    quiz: [
      { question: "Un micro-entrepreneur en services réalise 40 000 € de CA. Bénéfice imposable forfaitaire (abattement 50%) ?", choix: ["10 000 €", "20 000 €", "26 400 €", "40 000 €"], reponse: 1, explication: "40 000 × (1 − 0,50) = 20 000 €. C'est sur ces 20 000 € que s'applique le barème de l'IR." }
    ]
  },

  {
    id: "L62", processus: "P3", titre: "CIR : Crédit d'Impôt Recherche", duree_min: 12,
    contenu: `
<h3>1. Pourquoi le CIR ?</h3>
<p>Dispositif fiscal majeur pour soutenir la R&D. C'est un <strong>crédit d'impôt</strong> (pas une réduction du résultat fiscal mais directement de l'IS dû).</p>

<h3>2. Taux</h3>
<table class="table">
  <tr><th>Tranche</th><th>Taux</th></tr>
  <tr><td>Jusqu'à 100 M€ de dépenses éligibles</td><td><strong>30%</strong></td></tr>
  <tr><td>Au-delà de 100 M€</td><td>5%</td></tr>
</table>

<h3>3. Dépenses éligibles</h3>
<ul>
  <li>Salaires des chercheurs et techniciens R&D (avec un coefficient de 100% à 200% pour jeunes docteurs)</li>
  <li>Amortissements des immobilisations affectées à la R&D</li>
  <li>Sous-traitance R&D (à des organismes agréés)</li>
  <li>Brevets, dépôts de brevets</li>
  <li>Frais de fonctionnement R&D (forfait 75% des amorts + 43% des salaires)</li>
</ul>

<h3>4. Imputation sur l'IS</h3>
<ol>
  <li>Le CIR vient en déduction de l'IS dû</li>
  <li>Si CIR &gt; IS, le solde est imputé sur les 3 années suivantes</li>
  <li>Au bout de 4 ans, l'excédent éventuel est <strong>remboursé</strong> à l'entreprise</li>
  <li>Pour les <strong>jeunes entreprises innovantes (JEI)</strong> et certaines PME, remboursement immédiat possible</li>
</ol>

<h3>5. Comptabilisation</h3>
<table class="ecriture">
  <tr><th colspan="4">Constatation à la clôture (créance sur l'État)</th></tr>
  <tr><td>444</td><td>État - CIR à recevoir</td><td>50 000</td><td></td></tr>
  <tr><td>695 ou 699</td><td>Crédit d'impôt</td><td></td><td>50 000</td></tr>
</table>
<p>Le CIR ne diminue pas le résultat comptable mais l'IS payé. En liasse fiscale, il est imputé sur le 2058-A puis détaillé sur des annexes spécifiques (formulaire 2069-A).</p>

<h3>6. Autres crédits d'impôt à connaître</h3>
<table class="table">
  <tr><th>Dispositif</th><th>Taux</th><th>Pour</th></tr>
  <tr><td>CIR</td><td>30%</td><td>Recherche &amp; développement</td></tr>
  <tr><td>CIIC (Innovation)</td><td>30% (PME)</td><td>Innovation hors R&D pure</td></tr>
  <tr><td>Mécénat</td><td>60%</td><td>Dons aux organismes d'intérêt général</td></tr>
  <tr><td>Cinéma / audiovisuel</td><td>20-30%</td><td>Production audiovisuelle</td></tr>
  <tr><td>Famille (CIF)</td><td>50%</td><td>Crèche d'entreprise, congés familiaux</td></tr>
</table>
    `,
    quiz: [
      { question: "Une PME engage 200 000 € de dépenses R&D éligibles au CIR. Crédit d'impôt ?", choix: ["20 000 €", "30 000 €", "40 000 €", "60 000 €"], reponse: 3, explication: "200 000 × 30% = 60 000 €. Taux 30% jusqu'à 100 M€ de dépenses." }
    ]
  }
);
