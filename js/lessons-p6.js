// Phase 6 — P6 : Analyse de la situation financière

LESSONS.push(
  {
    id: "L33", processus: "P6", titre: "Les Soldes Intermédiaires de Gestion (SIG)", duree_min: 22,
    contenu: `
<h3>1. Principe</h3>
<p>Les SIG décomposent le résultat en <strong>9 paliers</strong> qui montrent comment l'entreprise crée de la valeur. C'est l'outil n°1 d'analyse de la performance.</p>

<h3>2. Le tableau des SIG</h3>
<table class="table">
  <tr><th>Solde</th><th>Calcul</th></tr>
  <tr><td><strong>1. Marge commerciale</strong></td><td>Vtes marchandises − Coût d'achat des marchandises vendues</td></tr>
  <tr><td><strong>2. Production de l'exercice</strong></td><td>Production vendue (701) + Production stockée (71) + Production immobilisée (72)</td></tr>
  <tr><td><strong>3. Valeur ajoutée (VA)</strong></td><td>Marge commerciale + Production − Consommations en provenance des tiers (60, 61, 62)</td></tr>
  <tr><td><strong>4. EBE</strong></td><td>VA + Subventions d'exploitation − Impôts/taxes/versements (63) − Charges de personnel (64)</td></tr>
  <tr><td><strong>5. Résultat d'exploitation</strong></td><td>EBE + Reprises sur dépréciations + Autres produits − Dotations − Autres charges</td></tr>
  <tr><td><strong>6. Résultat courant avant impôts</strong></td><td>Résultat d'exploitation + Quote-parts SCM + Produits financiers − Charges financières</td></tr>
  <tr><td><strong>7. Résultat exceptionnel</strong></td><td>Produits exceptionnels (77) − Charges exceptionnelles (67)</td></tr>
  <tr><td><strong>8. Résultat net</strong></td><td>Résultat courant + Résultat exceptionnel − Participation salariés − IS</td></tr>
  <tr><td><strong>9. Plus/moins-value sur cessions</strong></td><td>Prix de cession − VNC (calcul "extra")</td></tr>
</table>

<h3>3. Lecture analytique</h3>
<ul>
  <li><strong>Marge commerciale</strong> : pertinente pour les distributeurs → mesure la capacité à acheter au plus bas et à vendre au plus haut</li>
  <li><strong>Valeur ajoutée</strong> : richesse créée. Sert à payer les salaires, les impôts, les financiers, et l'entreprise.</li>
  <li><strong>EBE</strong> : performance économique pure (avant amortissements et politique de financement). Comparable entre entreprises de structures différentes.</li>
  <li><strong>Résultat d'exploitation</strong> : performance opérationnelle après prise en compte de l'investissement (dotations).</li>
  <li><strong>Résultat net</strong> : ce qui revient aux associés.</li>
</ul>

<h3>4. Exemple complet</h3>
<table class="table">
  <tr><td>Vtes marchandises</td><td>800 000</td></tr>
  <tr><td>Coût d'achat marchandises vendues</td><td>−500 000</td></tr>
  <tr><td><strong>Marge commerciale</strong></td><td><strong>300 000</strong></td></tr>
  <tr><td>− Autres charges externes</td><td>−60 000</td></tr>
  <tr><td><strong>Valeur ajoutée</strong></td><td><strong>240 000</strong></td></tr>
  <tr><td>− Impôts et taxes</td><td>−10 000</td></tr>
  <tr><td>− Charges de personnel</td><td>−150 000</td></tr>
  <tr><td><strong>EBE</strong></td><td><strong>80 000</strong></td></tr>
  <tr><td>− Dotations aux amortissements</td><td>−25 000</td></tr>
  <tr><td><strong>Résultat d'exploitation</strong></td><td><strong>55 000</strong></td></tr>
  <tr><td>− Charges financières (intérêts)</td><td>−8 000</td></tr>
  <tr><td><strong>Résultat courant</strong></td><td><strong>47 000</strong></td></tr>
  <tr><td>− IS (25%)</td><td>−11 750</td></tr>
  <tr><td><strong>Résultat net</strong></td><td><strong>35 250</strong></td></tr>
</table>
    `,
    quiz: [
      { question: "L'EBE se calcule à partir de la VA en :", choix: ["ajoutant les charges financières", "ajoutant les subventions et déduisant impôts/taxes/personnel", "déduisant les dotations aux amortissements", "déduisant l'IS"], reponse: 1, explication: "EBE = VA + Subv. d'exploitation − Impôts/taxes (63) − Charges de personnel (64). Avant dotations." }
    ]
  },

  {
    id: "L34", processus: "P6", titre: "La Capacité d'Autofinancement (CAF)", duree_min: 15,
    contenu: `
<h3>1. Définition</h3>
<p>La CAF = ressource interne dégagée par l'activité, disponible pour <strong>investir, rembourser des dettes ou distribuer des dividendes</strong>. C'est l'indicateur clé d'autonomie financière.</p>

<h3>2. Calcul à partir de l'EBE (méthode soustractive)</h3>
<table class="table">
  <tr><td>EBE</td><td>+</td></tr>
  <tr><td>+ Autres produits encaissables (hors 77x)</td><td></td></tr>
  <tr><td>− Autres charges décaissables (hors 67x)</td><td></td></tr>
  <tr><td>+ Produits financiers encaissables</td><td></td></tr>
  <tr><td>− Charges financières décaissables</td><td></td></tr>
  <tr><td>+ Produits exceptionnels encaissables (sauf cessions, sauf 777)</td><td></td></tr>
  <tr><td>− Charges exceptionnelles décaissables (sauf VNC cédées)</td><td></td></tr>
  <tr><td>− Participation des salariés</td><td></td></tr>
  <tr><td>− IS</td><td></td></tr>
  <tr><td><strong>= CAF</strong></td><td></td></tr>
</table>

<h3>3. Calcul à partir du résultat net (méthode additive)</h3>
<div class="encadre">
  <p><strong>CAF = Résultat net + Dotations (681) − Reprises (78) + VNC immo cédées (675) − Prix de cession (775) − Subventions virées au compte de résultat (777)</strong></p>
</div>
<p>Plus rapide à calculer en pratique.</p>

<h3>4. Exemple</h3>
<p>Résultat net = 35 000 €, dotations = 12 000 €, VNC immo cédée = 3 000 €, prix de cession = 5 000 €.</p>
<p>CAF = 35 000 + 12 000 + 3 000 − 5 000 = <strong>45 000 €</strong></p>

<h3>5. Autofinancement</h3>
<div class="encadre">
  <p><strong>Autofinancement = CAF − Dividendes versés</strong></p>
  <p>C'est ce qui reste effectivement disponible après rémunération des associés.</p>
</div>

<h3>6. Pourquoi neutraliser les dotations ?</h3>
<p>Une dotation aux amortissements est une <em>charge calculée</em>, pas un décaissement. La CAF cherche à mesurer le flux <strong>réellement encaissé</strong> par l'activité. On neutralise donc tout ce qui est calculé (681, 78) et tout ce qui correspond à des opérations en capital (cessions d'actifs).</p>
    `,
    quiz: [
      { question: "Résultat net 50 000, dotations 20 000, prix de cession immo 8 000, VNC immo cédée 5 000. CAF ?", choix: ["57 000 €", "63 000 €", "67 000 €", "78 000 €"], reponse: 2, explication: "CAF = 50 000 + 20 000 (dotations) + 5 000 (VNC) − 8 000 (PC) = 67 000 €. On retire la PV de cession (775 − 675 = 3 000) du résultat car elle est exceptionnelle non récurrente." }
    ]
  },

  {
    id: "L35", processus: "P6", titre: "Bilan fonctionnel : FRNG, BFR, TN", duree_min: 22,
    contenu: `
<h3>1. Du bilan PCG au bilan fonctionnel</h3>
<p>Le bilan fonctionnel reclasse les postes par <strong>cycle</strong> : investissement (long terme) / exploitation / hors exploitation / trésorerie.</p>

<h3>2. Structure</h3>
<table class="table">
  <tr><th>Emplois (actif)</th><th>Ressources (passif)</th></tr>
  <tr><td><strong>Emplois stables</strong> : Immobilisations BRUTES</td><td><strong>Ressources stables</strong> : Capitaux propres + Provisions + Amortissements + Dettes financières (hors concours bancaires)</td></tr>
  <tr><td><strong>Actif circulant exploitation (ACE)</strong> : Stocks, Créances clients, Effets à recevoir</td><td><strong>Dettes circulantes exploitation (DCE)</strong> : Fournisseurs, Dettes sociales, Dettes fiscales d'exploitation</td></tr>
  <tr><td><strong>ACHE</strong> : Autres créances hors exploitation, VMP</td><td><strong>DCHE</strong> : Dettes sur immobilisations, IS, dividendes à payer</td></tr>
  <tr><td><strong>Trésorerie active</strong> : Disponibilités</td><td><strong>Trésorerie passive</strong> : Concours bancaires courants</td></tr>
</table>

<h3>3. Les 3 indicateurs clés</h3>
<div class="encadre">
  <p><strong>FRNG</strong> = Ressources stables − Emplois stables</p>
  <p><strong>BFR</strong> = (ACE + ACHE) − (DCE + DCHE)</p>
  <p><strong>Trésorerie nette (TN)</strong> = Trésorerie active − Trésorerie passive</p>
  <p><strong>Égalité fondamentale</strong> : FRNG = BFR + TN</p>
</div>

<h3>4. Lecture</h3>
<ul>
  <li><strong>FRNG &gt; 0</strong> = les ressources stables financent tout l'actif immobilisé et il reste un surplus pour financer le BFR</li>
  <li><strong>BFR &gt; 0</strong> = besoin de financement (cycle d'exploitation immobilise plus de capitaux qu'il n'en libère)</li>
  <li><strong>TN &gt; 0</strong> = trésorerie excédentaire ; <strong>TN &lt; 0</strong> = découvert bancaire ; risque si durable</li>
</ul>

<h3>5. Diagnostics typiques</h3>
<table class="table">
  <tr><th>FRNG</th><th>BFR</th><th>TN</th><th>Diagnostic</th></tr>
  <tr><td>+</td><td>+</td><td>+</td><td>Sain : FRNG couvre BFR avec surplus</td></tr>
  <tr><td>+</td><td>+</td><td>−</td><td>BFR &gt; FRNG → trésorerie tendue</td></tr>
  <tr><td>+</td><td>−</td><td>+</td><td>BFR négatif (grande distrib) : ressource d'exploitation, trésorerie pléthorique</td></tr>
  <tr><td>−</td><td>+</td><td>−</td><td>Crise : actif immobilisé financé par trésorerie négative</td></tr>
</table>

<h3>6. Le BFR en jours de CA</h3>
<p>Pour interpréter le BFR : <strong>BFR / CA HT × 360</strong> donne le BFR en jours de CA. Repère : un BFR de 60 jours de CA est élevé, 30 jours est confortable, négatif est exceptionnel.</p>
    `,
    quiz: [
      { question: "FRNG = 80 000 €, BFR = 100 000 €. Trésorerie nette ?", choix: ["+180 000 €", "+20 000 €", "−20 000 €", "0 €"], reponse: 2, explication: "TN = FRNG − BFR = 80 000 − 100 000 = −20 000 €. L'entreprise est en découvert (FRNG insuffisant pour couvrir le BFR)." }
    ]
  },

  {
    id: "L36", processus: "P6", titre: "Les ratios financiers", duree_min: 22,
    contenu: `
<h3>1. Ratios d'activité</h3>
<table class="table">
  <tr><th>Ratio</th><th>Formule</th><th>Lecture</th></tr>
  <tr><td>Délai clients</td><td>(Créances clients TTC / CA TTC) × 360</td><td>Nb jours de CA en attente. &lt; 60 jours = bon.</td></tr>
  <tr><td>Délai fournisseurs</td><td>(Dettes fournisseurs TTC / Achats TTC) × 360</td><td>Nb jours de crédit obtenu. &gt; clients = sain.</td></tr>
  <tr><td>Rotation des stocks</td><td>(Stock moyen / CA HT) × 360</td><td>Nb jours d'écoulement du stock.</td></tr>
</table>

<h3>2. Ratios de structure financière</h3>
<table class="table">
  <tr><th>Ratio</th><th>Formule</th><th>Norme</th></tr>
  <tr><td>Autonomie financière</td><td>Capitaux propres / Total bilan</td><td>&gt; 30 % = bon</td></tr>
  <tr><td>Endettement</td><td>Dettes financières / Capitaux propres</td><td>&lt; 100 % généralement</td></tr>
  <tr><td>Capacité de remboursement</td><td>Dettes financières / CAF</td><td>&lt; 4 ans = bon</td></tr>
</table>

<h3>3. Ratios de liquidité (court terme)</h3>
<table class="table">
  <tr><th>Ratio</th><th>Formule</th><th>Norme</th></tr>
  <tr><td>Liquidité générale</td><td>Actif circulant / Dettes &lt; 1 an</td><td>&gt; 1, idéal 1,5</td></tr>
  <tr><td>Liquidité réduite</td><td>(Créances + Dispo) / Dettes &lt; 1 an</td><td>&gt; 1</td></tr>
  <tr><td>Liquidité immédiate</td><td>Disponibilités / Dettes &lt; 1 an</td><td>&gt; 0,2</td></tr>
</table>

<h3>4. Ratios de rentabilité</h3>
<table class="table">
  <tr><th>Ratio</th><th>Formule</th></tr>
  <tr><td>Rentabilité commerciale</td><td>Résultat net / CA HT</td></tr>
  <tr><td>Rentabilité économique (ROCE)</td><td>Résultat d'exploitation / Capitaux investis</td></tr>
  <tr><td>Rentabilité financière (ROE)</td><td>Résultat net / Capitaux propres</td></tr>
</table>

<h3>5. Effet de levier</h3>
<div class="encadre">
  <p><strong>Rf = Re + (Re − i) × D/CP</strong></p>
  <ul>
    <li>Rf = rentabilité financière</li>
    <li>Re = rentabilité économique</li>
    <li>i = coût de la dette</li>
    <li>D/CP = ratio d'endettement</li>
  </ul>
  <p>Quand Re &gt; i, l'endettement <strong>amplifie</strong> la rentabilité financière (effet de levier positif). Quand Re &lt; i, c'est un effet de massue (rentabilité financière dégradée par les intérêts).</p>
</div>
    `,
    quiz: [
      { question: "Une entreprise a un délai client de 90 jours et un délai fournisseur de 30 jours. C'est :", choix: ["Très favorable", "Inquiétant : elle finance ses clients", "Neutre", "Indéterminé sans le BFR"], reponse: 1, explication: "Elle paie ses fournisseurs en 30 jours mais encaisse à 90 jours. Pendant 60 jours, elle finance le décalage → BFR élevé, tension de trésorerie." }
    ]
  },

  {
    id: "L37", processus: "P6", titre: "Tableau de financement (PCG)", duree_min: 18,
    contenu: `
<h3>1. Objectif</h3>
<p>Le tableau de financement explique <strong>comment</strong> l'entreprise a couvert ses besoins de financement durant l'exercice. Il est composé de <strong>2 parties</strong>.</p>

<h3>2. Tableau I — Emplois et ressources stables</h3>
<table class="table">
  <tr><th>Ressources</th><th>Emplois</th></tr>
  <tr><td>CAF de l'exercice</td><td>Dividendes versés</td></tr>
  <tr><td>Cessions d'immobilisations</td><td>Acquisitions d'immobilisations</td></tr>
  <tr><td>Augmentation de capital</td><td>Réduction de capital</td></tr>
  <tr><td>Augmentation des dettes financières</td><td>Remboursement de dettes financières</td></tr>
  <tr><td><strong>Total ressources</strong></td><td><strong>Total emplois</strong></td></tr>
</table>
<p>Solde = <strong>Variation du FRNG</strong> (positive si ressources &gt; emplois).</p>

<h3>3. Tableau II — Variation du BFR et de la trésorerie</h3>
<p>Détaille comment la variation du FRNG s'est répartie entre BFR exploitation, BFR hors exploitation et trésorerie nette.</p>

<h3>4. Logique générale</h3>
<div class="encadre">
  <p><strong>Δ FRNG = Δ BFRE + Δ BFRHE + Δ TN</strong></p>
</div>

<h3>5. Lecture</h3>
<ul>
  <li>Si la CAF est insuffisante pour financer les investissements et les remboursements, l'entreprise a recouru à des dettes nouvelles ou a tiré sur sa trésorerie.</li>
  <li>Une variation du FRNG positive est saine ; négative répétée est un signal d'alerte.</li>
</ul>
    `,
    quiz: [
      { question: "La CAF est inscrite dans le tableau de financement comme :", choix: ["Un emploi", "Une ressource", "Un retraitement", "Une variation"], reponse: 1, explication: "La CAF est la principale ressource interne de l'exercice. Elle finance les investissements, les remboursements et les dividendes." }
    ]
  }
);
