// Phase 5 — P5 : Analyse et prévision de l'activité (comptabilité de gestion)

LESSONS.push(
  {
    id: "L27", processus: "P5", titre: "Charges directes et indirectes", duree_min: 12,
    contenu: `
<h3>1. Définitions</h3>
<table class="table">
  <tr><th></th><th>Définition</th><th>Exemples</th></tr>
  <tr><td><strong>Charge directe</strong></td><td>Affectable sans ambiguïté à un produit/service précis</td><td>Matières premières, main-d'œuvre directe, sous-traitance</td></tr>
  <tr><td><strong>Charge indirecte</strong></td><td>Concerne plusieurs produits, doit être <em>répartie</em></td><td>Loyer atelier, électricité, salaires encadrement, amortissement machines</td></tr>
</table>

<h3>2. Charges incorporables / non incorporables</h3>
<p>En comptabilité de gestion, certaines charges de la compta générale sont écartées :</p>
<ul>
  <li><strong>Non incorporables</strong> : charges exceptionnelles (67), participation des salariés, IS</li>
  <li><strong>Supplétives</strong> (ajoutées) : rémunération conventionnelle de l'exploitant, intérêts conventionnels du capital</li>
</ul>
<div class="encadre">
  <p><strong>Charges incorporables = Charges classe 6 − Non incorporables + Supplétives</strong></p>
</div>

<h3>3. Vocabulaire</h3>
<ul>
  <li><strong>Coût</strong> : somme de charges relatives à un objet (produit, activité, fonction)</li>
  <li><strong>Coût de revient</strong> : coût total d'un produit jusqu'à sa vente</li>
  <li><strong>Marge</strong> = prix de vente − coût (avant un certain stade)</li>
  <li><strong>Résultat</strong> = prix de vente − coût de revient</li>
</ul>

<h3>4. La hiérarchie des coûts (industrie)</h3>
<pre>
   Coût d'achat = Achats + Frais d'approvisionnement
                            ↓
   Coût de production = Coût d'achat (matières utilisées) + Charges de production
                            ↓
   Coût de revient = Coût de production (produits vendus) + Charges hors production
                            ↓
   Résultat = Prix de vente − Coût de revient
</pre>
    `,
    quiz: [
      { question: "Le loyer de l'atelier qui produit 3 références différentes est :", choix: ["Charge directe à l'atelier", "Charge indirecte à répartir", "Non incorporable", "Supplétive"], reponse: 1, explication: "Le loyer de l'atelier concerne plusieurs produits → indirecte. Il faudra le répartir via une clé (par ex. heures-machine ou volume produit)." }
    ]
  },

  {
    id: "L28", processus: "P5", titre: "Méthode des centres d'analyse (coût complet)", duree_min: 22,
    contenu: `
<h3>1. Principe</h3>
<p>Les charges indirectes sont regroupées dans des <strong>centres d'analyse</strong> (= sections de l'entreprise : approvisionnement, production, distribution, administration). Chaque centre mesure son activité par une <strong>unité d'œuvre</strong> (UO).</p>

<h3>2. Les étapes</h3>
<ol>
  <li><strong>Répartition primaire</strong> : ventiler les charges indirectes entre centres principaux et auxiliaires</li>
  <li><strong>Répartition secondaire</strong> : déverser les centres auxiliaires (entretien, gestion du personnel) sur les principaux</li>
  <li><strong>Calcul du coût d'unité d'œuvre</strong> : Total du centre / Nombre d'UO</li>
  <li><strong>Imputation aux produits</strong> : Coût UO × Nombre d'UO consommé</li>
</ol>

<h3>3. Tableau de répartition (exemple simplifié)</h3>
<table class="table">
  <tr><th></th><th>Total</th><th>Approvisionnement</th><th>Production</th><th>Distribution</th></tr>
  <tr><td>Charges indirectes</td><td>50 000</td><td>10 000</td><td>30 000</td><td>10 000</td></tr>
  <tr><td>UO</td><td>—</td><td>1 € d'achat</td><td>Heure-machine</td><td>1 € de CA</td></tr>
  <tr><td>Nb d'UO</td><td>—</td><td>40 000</td><td>1 500</td><td>100 000</td></tr>
  <tr><td><strong>Coût UO</strong></td><td>—</td><td><strong>0,25 €/€</strong></td><td><strong>20 €/h</strong></td><td><strong>0,10 €/€</strong></td></tr>
</table>

<h3>4. Imputation aux produits</h3>
<p>Pour calculer le coût de production d'un produit P qui a consommé 2 h-machine :</p>
<ul>
  <li>Charges directes (matières + MOD) : 80 €</li>
  <li>Charges indirectes production : 2 × 20 = 40 €</li>
  <li><strong>Coût de production = 120 €</strong></li>
</ul>

<h3>5. Limites de la méthode</h3>
<ul>
  <li>Choix subjectif des clés de répartition</li>
  <li>Coût des produits sensible aux variations d'activité</li>
  <li>Mauvaise répartition des coûts indirects "stratégiques" (R&D, marketing) → méthode ABC plus pertinente</li>
</ul>
    `,
    quiz: [
      { question: "Centre Production : 60 000 € de charges, 2 000 heures-machine. Le produit X consomme 5 h-machine. Charges indirectes imputées à X ?", choix: ["60 €", "150 €", "300 €", "12 000 €"], reponse: 1, explication: "Coût UO = 60 000 / 2 000 = 30 €/h. Imputé à X = 5 × 30 = 150 €." }
    ]
  },

  {
    id: "L29", processus: "P5", titre: "Coût variable et seuil de rentabilité", duree_min: 18,
    contenu: `
<h3>1. Distinction charges variables / fixes</h3>
<table class="table">
  <tr><th>Charges variables</th><th>Charges fixes</th></tr>
  <tr><td>Proportionnelles à l'activité</td><td>Indépendantes de l'activité (à court terme)</td></tr>
  <tr><td>Matières premières, commissions, énergie de production</td><td>Loyer, salaires fixes, amortissements, assurance</td></tr>
</table>

<h3>2. Marge sur coût variable (MCV)</h3>
<div class="encadre">
  <p><strong>MCV = CA − Coût variable</strong><br>
  <strong>Taux de MCV = MCV / CA</strong> (en %)<br>
  <strong>Résultat = MCV − Coûts fixes</strong></p>
</div>

<h3>3. Seuil de rentabilité (SR)</h3>
<p>C'est le CA pour lequel le résultat = 0 (donc MCV = CF).</p>
<div class="encadre">
  <p><strong>SR (en €) = Coûts fixes / Taux de MCV</strong><br>
  <strong>SR (en quantités) = Coûts fixes / MCV unitaire</strong></p>
</div>

<h3>4. Exemple</h3>
<p>CA annuel = 500 000 €, charges variables = 300 000 €, charges fixes = 120 000 €.</p>
<ul>
  <li>MCV = 500 000 − 300 000 = 200 000 €</li>
  <li>Taux de MCV = 200 000 / 500 000 = <strong>40 %</strong></li>
  <li>Résultat = 200 000 − 120 000 = 80 000 €</li>
  <li>SR = 120 000 / 0,40 = <strong>300 000 €</strong></li>
</ul>

<h3>5. Point mort et marge de sécurité</h3>
<ul>
  <li><strong>Point mort</strong> = date à laquelle le SR est atteint dans l'année.<br>Point mort = (SR / CA) × 12 mois = (300 000/500 000) × 12 = <strong>7,2 mois</strong> → fin juillet</li>
  <li><strong>Marge de sécurité</strong> = CA − SR = 500 000 − 300 000 = 200 000 €</li>
  <li><strong>Indice de sécurité</strong> = MS / CA = 200 000 / 500 000 = 40 %</li>
</ul>

<h3>6. Levier opérationnel</h3>
<p><strong>Levier opérationnel = MCV / Résultat</strong> = 200 000 / 80 000 = 2,5. Cela signifie qu'une variation de 1 % du CA fait varier le résultat de 2,5 %. Plus le levier est élevé, plus le risque économique est grand.</p>
    `,
    quiz: [
      { question: "CA 800 000 €, CV 480 000 €, CF 200 000 €. Seuil de rentabilité ?", choix: ["320 000 €", "400 000 €", "500 000 €", "680 000 €"], reponse: 2, explication: "MCV = 800 000 − 480 000 = 320 000. Taux MCV = 320 000/800 000 = 40%. SR = 200 000 / 0,40 = 500 000 €." }
    ]
  },

  {
    id: "L30", processus: "P5", titre: "Méthode ABC (Activity-Based Costing)", duree_min: 15,
    contenu: `
<h3>1. Principe</h3>
<p>La méthode ABC (Activity-Based Costing, comptabilité par activités) part d'un constat : ce ne sont pas les <strong>produits</strong> qui consomment des ressources, mais les <strong>activités</strong>. Et les produits consomment ces activités.</p>

<div class="encadre">
  <p><strong>Ressources → Activités → Produits</strong></p>
</div>

<h3>2. Les étapes</h3>
<ol>
  <li><strong>Identifier les activités</strong> (ex : passer une commande, traiter une facture, monter une pièce, contrôler la qualité)</li>
  <li><strong>Affecter les ressources aux activités</strong> (charges indirectes ventilées par activité)</li>
  <li><strong>Choisir un inducteur de coût</strong> par activité (mesure de la consommation : nb commandes, nb factures, nb minutes...)</li>
  <li><strong>Calculer le coût unitaire de l'inducteur</strong></li>
  <li><strong>Imputer aux produits</strong> en fonction de leur consommation d'inducteurs</li>
</ol>

<h3>3. Différence avec la méthode des centres d'analyse</h3>
<table class="table">
  <tr><th>Centres d'analyse</th><th>ABC</th></tr>
  <tr><td>Centre = section organisationnelle</td><td>Activité = action transversale</td></tr>
  <tr><td>UO simple (heure, € d'achat)</td><td>Inducteur fin (nb commandes, nb références)</td></tr>
  <tr><td>Sensible aux choix de structure</td><td>Met en lumière la complexité</td></tr>
  <tr><td>Bon pour produits standardisés</td><td>Bon pour gammes diversifiées</td></tr>
</table>

<h3>4. Exemple court</h3>
<p>L'activité "Lancement de série" coûte 60 000 €/an et est mesurée par le nombre de lancements (= 200/an). Coût par lancement = 300 €.</p>
<ul>
  <li>Le produit A est fabriqué en 1 lancement de 10 000 unités → 300 € imputés / 10 000 = <strong>0,03 €/unité</strong></li>
  <li>Le produit B est fabriqué en 50 lancements de 200 unités → 50 × 300 = 15 000 € / 10 000 = <strong>1,50 €/unité</strong></li>
</ul>
<p>L'ABC révèle que B coûte beaucoup plus cher en réalité, ce que la méthode classique masquait.</p>
    `,
    quiz: [
      { question: "L'inducteur de coût mesure :", choix: ["L'output total de l'entreprise", "La consommation d'une activité par un produit", "Le coût de revient", "Le résultat analytique"], reponse: 1, explication: "L'inducteur mesure la consommation d'une activité par un produit (nb commandes, nb opérations, nb références)." }
    ]
  },

  {
    id: "L31", processus: "P5", titre: "Coûts préétablis et écarts", duree_min: 18,
    contenu: `
<h3>1. Pourquoi des coûts préétablis ?</h3>
<p>On compare le <strong>coût standard</strong> (prévu) au <strong>coût réel</strong> pour analyser la performance et identifier les sources de dérive.</p>

<h3>2. Écart total</h3>
<div class="encadre">
  <p><strong>Écart total = Coût réel − Coût préétabli adapté à l'activité réelle</strong></p>
</div>

<h3>3. Décomposition pour les charges directes (matière, MOD)</h3>
<p>Pour une charge variable directe (matière première par exemple) :</p>
<ul>
  <li><strong>Écart sur quantité (E/Q)</strong> = (Qr − Qp) × Pp</li>
  <li><strong>Écart sur prix (E/P)</strong> = (Pr − Pp) × Qr</li>
  <li><strong>Total</strong> = E/Q + E/P</li>
</ul>
<p>Avec : Qr = quantité réelle, Qp = quantité préétablie pour la production réelle, Pr = prix réel, Pp = prix préétabli.</p>

<h3>4. Exemple — matière première</h3>
<p>Prévu : 2 kg/produit à 5 €/kg. Production réelle : 1 000 produits, consommation réelle 2 100 kg à 5,20 €/kg.</p>
<ul>
  <li>Quantité préétablie ajustée : 1 000 × 2 = 2 000 kg</li>
  <li>Coût préétabli : 2 000 × 5 = 10 000 €</li>
  <li>Coût réel : 2 100 × 5,20 = 10 920 €</li>
  <li><strong>Écart total = +920 € (défavorable)</strong></li>
  <li>E/Q = (2 100 − 2 000) × 5 = +500 € (sur-consommation)</li>
  <li>E/P = (5,20 − 5) × 2 100 = +420 € (prix plus élevé)</li>
</ul>

<h3>5. Décomposition pour les charges indirectes</h3>
<ul>
  <li><strong>Écart sur budget</strong> : différence entre charges réelles et budget flexible</li>
  <li><strong>Écart sur activité</strong> : sous/sur-imputation des charges fixes</li>
  <li><strong>Écart sur rendement</strong> : écart sur le nombre d'UO consommées</li>
</ul>
    `,
    quiz: [
      { question: "Production réelle 500 unités, prévision 2 kg à 4 €/kg. Conso réelle 1 050 kg à 4,10 €. Écart total ?", choix: ["+105 €", "+200 €", "+305 €", "+420 €"], reponse: 2, explication: "Coût préétabli ajusté : 500 × 2 × 4 = 4 000. Coût réel : 1 050 × 4,10 = 4 305. Écart = +305 € défavorable." }
    ]
  },

  {
    id: "L32", processus: "P5", titre: "Budgets et tableaux de bord", duree_min: 18,
    contenu: `
<h3>1. La gestion budgétaire</h3>
<p>Le budget = traduction chiffrée des objectifs sur l'année à venir. Décomposé en sous-budgets cohérents :</p>
<ol>
  <li><strong>Budget des ventes</strong> (point de départ) : prévision en quantités et en valeur, par produit/zone</li>
  <li><strong>Budget de production</strong> : adapté aux ventes + niveau de stock visé</li>
  <li><strong>Budget des approvisionnements</strong> : matières nécessaires</li>
  <li><strong>Budget des autres charges</strong> (personnel, structure)</li>
  <li><strong>Budget des investissements</strong></li>
  <li><strong>Budget de trésorerie</strong> : encaissements − décaissements mois par mois</li>
</ol>

<h3>2. Budget de trésorerie — exemple</h3>
<table class="table">
  <tr><th></th><th>Janvier</th><th>Février</th><th>Mars</th></tr>
  <tr><td>Solde initial</td><td>5 000</td><td>3 200</td><td>−1 100</td></tr>
  <tr><td>+ Encaissements clients</td><td>20 000</td><td>22 000</td><td>25 000</td></tr>
  <tr><td>− Décaissements fournisseurs</td><td>−14 000</td><td>−16 000</td><td>−15 000</td></tr>
  <tr><td>− Salaires + charges</td><td>−7 000</td><td>−9 500</td><td>−9 500</td></tr>
  <tr><td>− TVA à décaisser</td><td>−800</td><td>−800</td><td>−1 200</td></tr>
  <tr><td><strong>Solde final</strong></td><td><strong>3 200</strong></td><td><strong>−1 100</strong></td><td><strong>−1 800</strong></td></tr>
</table>
<p>Diagnostic : trésorerie négative dès février → besoin d'un financement court terme (découvert, escompte, affacturage).</p>

<h3>3. Stock optimal — modèle de Wilson</h3>
<div class="encadre">
  <p><strong>Q* = √( 2 × D × Cl / (Cu × Ts) )</strong></p>
  <ul>
    <li>D = consommation annuelle</li>
    <li>Cl = coût de lancement d'une commande</li>
    <li>Cu = coût unitaire</li>
    <li>Ts = taux de stockage (% / an)</li>
  </ul>
</div>

<h3>4. Tableaux de bord</h3>
<p>Outils de pilotage opérationnel : indicateurs synthétiques, mis à jour fréquemment, orientés vers la prise de décision.</p>
<ul>
  <li><strong>KPI commerciaux</strong> : CA, marge, taux de transformation, panier moyen</li>
  <li><strong>KPI production</strong> : taux de rebut, taux d'utilisation, productivité horaire</li>
  <li><strong>KPI financiers</strong> : trésorerie, BFR, délais clients/fournisseurs</li>
</ul>
    `,
    quiz: [
      { question: "Le budget de trésorerie compare :", choix: ["Charges et produits", "Encaissements et décaissements", "Stock initial et stock final", "Recettes prévues et recettes réelles"], reponse: 1, explication: "Trésorerie = flux d'encaissement et de décaissement. C'est différent du compte de résultat (qui suit la facturation)." }
    ]
  }
);
