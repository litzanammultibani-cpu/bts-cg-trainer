// P5 approfondi — comptabilité de gestion détaillée

LESSONS.push(
  {
    id: "L68", processus: "P5", titre: "Imputation rationnelle des charges fixes", duree_min: 18,
    contenu: `
<h3>1. Le problème</h3>
<p>En coût complet classique, les charges fixes sont réparties sur l'activité réelle. Si l'activité baisse, le coût unitaire monte mécaniquement (parce que les CF se diluent sur moins d'unités). C'est trompeur : on attribue à un produit le coût de la <strong>sous-activité</strong>.</p>

<h3>2. Le principe de l'imputation rationnelle</h3>
<p>On distingue les charges fixes en deux parties :</p>
<ol>
  <li>La <strong>part imputable</strong> au produit, calculée en fonction d'une <strong>activité normale</strong></li>
  <li>La <strong>part non imputable</strong> (coût de sous-activité ou bonus de suractivité) qui va en charge ou produit exceptionnel d'analyse</li>
</ol>

<div class="encadre">
  <p><strong>Coefficient d'imputation rationnelle = Activité réelle / Activité normale</strong></p>
  <p><strong>CF imputées au produit = CF totales × Coefficient</strong></p>
</div>

<h3>3. Exemple</h3>
<p>Activité normale : 1 000 unités/mois. CF mensuelles : 20 000 €.</p>
<table class="table">
  <tr><th>Mois</th><th>Activité réelle</th><th>Coef.</th><th>CF imputées</th><th>Coût sous-activité</th></tr>
  <tr><td>Janvier (sous-activité)</td><td>800</td><td>0,80</td><td>16 000</td><td>4 000 (charge)</td></tr>
  <tr><td>Février (normale)</td><td>1 000</td><td>1,00</td><td>20 000</td><td>0</td></tr>
  <tr><td>Mars (suractivité)</td><td>1 200</td><td>1,20</td><td>24 000</td><td>−4 000 (boni)</td></tr>
</table>

<h3>4. Avantage</h3>
<p>Le coût unitaire devient plus stable. Le décideur voit clairement combien coûte la sous-activité. Permet de comparer des produits sans biais lié à la conjoncture.</p>

<h3>5. Limites</h3>
<ul>
  <li>Détermination de l'activité normale (subjectif)</li>
  <li>Hypothèse que les CF restent constantes (pas toujours vrai)</li>
  <li>Lourdeur de calcul</li>
</ul>
    `,
    quiz: [
      { question: "Activité normale 2 000 unités, activité réelle 1 600 unités, CF totales 50 000 €. CF imputées au produit ?", choix: ["50 000 €", "40 000 €", "62 500 €", "10 000 €"], reponse: 1, explication: "Coef = 1600/2000 = 0,80. CF imputées = 50 000 × 0,80 = 40 000 €. Coût sous-activité = 10 000 €." }
    ]
  },

  {
    id: "L69", processus: "P5", titre: "Coût marginal et décisions", duree_min: 15,
    contenu: `
<h3>1. Définition</h3>
<p>Le <strong>coût marginal</strong> = coût supplémentaire engendré par la production d'une unité (ou d'un lot) de plus, par rapport à la production actuelle.</p>

<h3>2. Composition</h3>
<ul>
  <li>Coût variable supplémentaire (matières, MOD)</li>
  <li>Éventuellement palier de coût fixe (location d'équipement, embauche...)</li>
</ul>

<h3>3. Cas typique : faut-il accepter une commande supplémentaire ?</h3>
<p>Une entreprise a une capacité de 2 000 unités/mois, produit 1 500 et vend à 100 €. Charges fixes 60 000 €, charges variables 40 €/unité. Un client propose 400 unités à 60 € pièce.</p>
<p>Calcul classique : marge sur coût complet ne couvre pas le prix → refuser ?</p>
<p>Calcul marginal : <strong>coût marginal = 40 €/unité (CV uniquement)</strong> + 0 (pas de palier de CF). Marge marginale = 60 − 40 = 20 €. Sur 400 unités = 8 000 € de marge. → <strong>Accepter</strong>, ça améliore le résultat.</p>

<h3>4. Conditions d'application</h3>
<ul>
  <li>Capacité disponible (sinon il faut investir = palier)</li>
  <li>Pas de cannibalisation des ventes existantes</li>
  <li>Pas d'effet de ricochet sur les prix (le client habituel ne doit pas savoir)</li>
</ul>

<h3>5. Application aux décisions</h3>
<p>Le raisonnement marginal s'applique à :</p>
<ul>
  <li>Acceptation d'une commande exceptionnelle</li>
  <li>Sous-traitance (faire ou faire faire ?)</li>
  <li>Suppression d'un produit déficitaire (a-t-il une marge sur coût variable positive ? si oui, le maintenir tant qu'il aide à amortir les CF)</li>
  <li>Baisse de prix promotionnelle</li>
</ul>
    `,
    quiz: [
      { question: "Une commande supplémentaire de 200 unités à 50 € (CV unitaire 35 €, CF déjà couverts par activité de base) :", choix: ["À refuser : prix &lt; coût complet", "À accepter : marge marginale de 3 000 €", "Indifférent", "À renégocier"], reponse: 1, explication: "Marge marginale = (50 − 35) × 200 = 3 000 €. Comme les CF sont déjà couvertes, cette marge va directement au résultat. Accepter." }
    ]
  },

  {
    id: "L70", processus: "P5", titre: "Méthode UVA (Unités de Valeur Ajoutée)", duree_min: 12,
    contenu: `
<h3>1. Le principe</h3>
<p>La méthode UVA convertit toute production en une <strong>unité de mesure unique</strong>, l'UVA. Une UVA correspond à un volume de travail standardisé (ex : 1 minute de travail dans le poste de référence).</p>

<h3>2. Pour quoi ?</h3>
<p>Idéale pour les entreprises qui produisent une <strong>grande variété de produits</strong> dans un même processus. Permet de calculer le coût de chaque produit à partir d'une <strong>base unique</strong>.</p>

<h3>3. Démarche</h3>
<ol>
  <li>Choisir un <strong>article de référence</strong> (= 1 UVA)</li>
  <li>Calculer le <strong>coût horaire des postes</strong> de l'usine (postes UVA)</li>
  <li>Pour chaque article, mesurer sa <strong>consommation en UVA</strong> en additionnant les UVA des postes traversés</li>
  <li>Calculer le <strong>coût d'une UVA</strong> = (Total des charges hors achats matières) / (Nombre d'UVA produites)</li>
  <li>Coût d'un produit = (Matières directes) + (UVA consommées × Coût d'une UVA)</li>
</ol>

<h3>4. Exemple ultra simplifié</h3>
<p>Atelier produit 2 articles. Charges totales hors matières = 100 000 €. Nb d'UVA produites au total = 50 000 UVA. Donc 1 UVA = 2 €.</p>
<ul>
  <li>Article A : matières 5 €, consomme 8 UVA → coût = 5 + 8×2 = 21 €</li>
  <li>Article B : matières 3 €, consomme 12 UVA → coût = 3 + 12×2 = 27 €</li>
</ul>

<h3>5. Avantages / inconvénients</h3>
<table class="table">
  <tr><th>+</th><th>−</th></tr>
  <tr><td>Simple à mettre à jour (une seule clé : le coût d'une UVA)</td><td>Mise en place initiale longue (étalonnage des postes)</td></tr>
  <tr><td>Utile pour vastes gammes de produits</td><td>Suppose des process stables</td></tr>
  <tr><td>Pas besoin de mise à jour analytique constante</td><td>Moins fin que ABC pour analyser les inducteurs</td></tr>
</table>
    `,
    quiz: [
      { question: "Coût d'une UVA = 1,50 €. Article qui consomme 10 UVA + 4 € de matières. Coût total ?", choix: ["15 €", "16 €", "19 €", "21 €"], reponse: 2, explication: "10 × 1,50 = 15. 15 + 4 = 19 €." }
    ]
  },

  {
    id: "L71", processus: "P5", titre: "Budget de trésorerie pas à pas", duree_min: 22,
    contenu: `
<h3>1. À quoi ça sert ?</h3>
<p>Anticiper les soldes mois par mois pour <strong>détecter les besoins de financement</strong> à temps. Sans budget de trésorerie, on découvre le découvert quand il est trop tard.</p>

<h3>2. Méthode en 3 étapes</h3>
<ol>
  <li><strong>Construire le budget des encaissements</strong> (à partir du budget des ventes + délais clients)</li>
  <li><strong>Construire le budget des décaissements</strong> (achats, salaires, TVA, charges, investissements)</li>
  <li><strong>Synthétiser dans le budget de trésorerie</strong> avec solde initial mensuel et report du solde final</li>
</ol>

<h3>3. Budget des encaissements</h3>
<p>Si l'entreprise vend à 30 jours, les ventes de janvier sont encaissées en février. Si 50% paient comptant et 50% à 60 jours, on ventile.</p>
<table class="table">
  <tr><th>Mois ventes</th><th>Janv (HT)</th><th>Fév</th><th>Mars</th></tr>
  <tr><td>Ventes prévues TTC</td><td>12 000</td><td>15 000</td><td>18 000</td></tr>
  <tr><td>Encaissé en janvier (50% comptant)</td><td>6 000</td><td>—</td><td>—</td></tr>
  <tr><td>Encaissé en février (reste de janv + 50% fév)</td><td>6 000</td><td>7 500</td><td>—</td></tr>
  <tr><td>Encaissé en mars</td><td>—</td><td>7 500</td><td>9 000</td></tr>
</table>

<h3>4. Budget des décaissements (TVA inclus)</h3>
<p>N'oublie pas la TVA à décaisser, qui se paie le mois suivant son fait générateur.</p>
<ul>
  <li>TVA collectée février = 2 500 € (= 15 000 / 6 environ)</li>
  <li>TVA déductible février = 1 200 €</li>
  <li>TVA à décaisser février = 1 300 € → décaissée en mars</li>
</ul>

<h3>5. Synthèse — budget de trésorerie sur 3 mois</h3>
<table class="table">
  <tr><th></th><th>Janv</th><th>Fév</th><th>Mars</th></tr>
  <tr><td>Solde initial</td><td>5 000</td><td>4 000</td><td>2 200</td></tr>
  <tr><td>+ Encaissements</td><td>6 000</td><td>13 500</td><td>16 500</td></tr>
  <tr><td>− Salaires + charges</td><td>−4 000</td><td>−4 500</td><td>−4 500</td></tr>
  <tr><td>− Décaissements fournisseurs</td><td>−3 000</td><td>−9 500</td><td>−12 000</td></tr>
  <tr><td>− TVA</td><td>0</td><td>−800</td><td>−1 300</td></tr>
  <tr><td>− Investissements</td><td>0</td><td>−500</td><td>0</td></tr>
  <tr><td><strong>Solde final</strong></td><td><strong>4 000</strong></td><td><strong>2 200</strong></td><td><strong>900</strong></td></tr>
</table>

<h3>6. Diagnostic et solutions</h3>
<p>Si solde négatif un mois → besoin de financement court terme :</p>
<ul>
  <li>Découvert autorisé (cher, ~10-15% l'an mais flexible)</li>
  <li>Escompte d'effets (si tu as des LCR à recevoir)</li>
  <li>Affacturage (cession des créances clients à un factor)</li>
  <li>Crédit de campagne (saisonnier)</li>
</ul>
<p>Si solde structurellement excédentaire → placement court terme (SICAV, dépôts à terme).</p>
    `,
    quiz: [
      { question: "Vente de janvier : 10 000 € TTC, conditions 30 jours. Encaissée :", choix: ["En janvier", "En février", "Étalée janv-fév", "En mars"], reponse: 1, explication: "Vente 30 jours → encaissée le mois suivant, donc février." }
    ]
  },

  {
    id: "L72", processus: "P5", titre: "Tableaux de bord opérationnels et indicateurs", duree_min: 15,
    contenu: `
<h3>1. Définition</h3>
<p>Un tableau de bord (TdB) est un outil de <strong>pilotage opérationnel</strong> qui présente, sur une seule page, les indicateurs clés (KPI = Key Performance Indicators) suivis par un manager.</p>

<h3>2. Caractéristiques d'un bon TdB</h3>
<ul>
  <li><strong>Synthétique</strong> : 5 à 10 indicateurs maximum</li>
  <li><strong>Pertinent</strong> : aligné sur les objectifs stratégiques</li>
  <li><strong>Comparatif</strong> : valeur réelle vs valeur cible vs valeur N-1</li>
  <li><strong>Visuel</strong> : graphiques, codes couleur (vert/orange/rouge)</li>
  <li><strong>Périodique</strong> : mis à jour à fréquence régulière (quotidien/hebdo/mensuel)</li>
</ul>

<h3>3. Indicateurs commerciaux</h3>
<table class="table">
  <tr><th>KPI</th><th>Calcul</th></tr>
  <tr><td>CA réalisé / CA budget</td><td>%</td></tr>
  <tr><td>Panier moyen</td><td>CA / nb tickets</td></tr>
  <tr><td>Taux de transformation</td><td>Nb commandes / nb visites</td></tr>
  <tr><td>Top 5 clients en CA</td><td>Concentration risque</td></tr>
  <tr><td>Taux de fidélisation</td><td>Clients récurrents / total</td></tr>
</table>

<h3>4. Indicateurs production</h3>
<table class="table">
  <tr><th>KPI</th><th>Calcul</th></tr>
  <tr><td>Taux d'utilisation des machines</td><td>Heures travaillées / heures disponibles</td></tr>
  <tr><td>Productivité horaire</td><td>Production / heures de MOD</td></tr>
  <tr><td>Taux de rebut / non-qualité</td><td>Pièces défectueuses / total</td></tr>
  <tr><td>Délai de livraison moyen</td><td>Temps commande → livraison</td></tr>
</table>

<h3>5. Indicateurs financiers</h3>
<table class="table">
  <tr><th>KPI</th><th>Calcul / lecture</th></tr>
  <tr><td>Trésorerie nette</td><td>En € et en jours de CA</td></tr>
  <tr><td>BFR</td><td>Variation vs N-1</td></tr>
  <tr><td>Délai clients (DSO)</td><td>(Créances clients / CA TTC) × 360</td></tr>
  <tr><td>Délai fournisseurs (DPO)</td><td>(Dettes fourn / Achats TTC) × 360</td></tr>
  <tr><td>Marge brute</td><td>(CA − CV) / CA</td></tr>
</table>

<h3>6. Indicateurs RH (P4)</h3>
<table class="table">
  <tr><th>KPI</th><th>Calcul</th></tr>
  <tr><td>Taux d'absentéisme</td><td>Heures d'absence / heures théoriques</td></tr>
  <tr><td>Turnover</td><td>(Départs + Arrivées) / 2 / Effectif moyen</td></tr>
  <tr><td>Coût moyen d'un salarié</td><td>Masse salariale / effectif</td></tr>
  <tr><td>Productivité du travail</td><td>VA / effectif</td></tr>
</table>

<h3>7. Outils</h3>
<p>Les TdB peuvent être faits sur :</p>
<ul>
  <li>Excel / Google Sheets (le + courant en PME)</li>
  <li>Power BI / Tableau / Looker Studio (mid-market et grands)</li>
  <li>Modules natifs des PGI (SAP BO, Cegid Reports)</li>
</ul>
    `,
    quiz: [
      { question: "Le DSO (Days Sales Outstanding) mesure :", choix: ["Le délai de paiement aux fournisseurs", "Le délai de paiement des clients en jours", "Le délai de stockage", "Le délai d'amortissement"], reponse: 1, explication: "DSO = délai client = (créances clients TTC / CA TTC) × 360. Indicateur clé du BFR." }
    ]
  }
);
