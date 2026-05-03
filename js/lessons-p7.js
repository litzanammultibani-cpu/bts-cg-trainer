// Phase 7 — P7 : Fiabilisation de l'information et SI comptable (transversal)

LESSONS.push(
  {
    id: "L38", processus: "P7", titre: "Contrôle interne et piste d'audit", duree_min: 15,
    contenu: `
<h3>1. Définition du contrôle interne</h3>
<p>Le contrôle interne = <strong>ensemble des procédures</strong> mises en place pour garantir la fiabilité des opérations et de l'information comptable. Il vise 4 objectifs :</p>
<ol>
  <li>Protection du patrimoine (anti-fraude, anti-erreur)</li>
  <li>Fiabilité de l'information comptable et de gestion</li>
  <li>Conformité aux lois et règlements</li>
  <li>Application des instructions de la direction</li>
</ol>

<h3>2. Les 5 grands principes</h3>
<table class="table">
  <tr><th>Principe</th><th>Exemple</th></tr>
  <tr><td><strong>Séparation des tâches</strong></td><td>Celui qui passe la commande ≠ celui qui règle ≠ celui qui réceptionne</td></tr>
  <tr><td><strong>Habilitations</strong></td><td>Limites de signature, droits d'accès informatiques</td></tr>
  <tr><td><strong>Traçabilité</strong></td><td>Toute opération a une pièce justificative et un auteur identifiable</td></tr>
  <tr><td><strong>Approbations / contrôles</strong></td><td>Validation à 2 niveaux pour les paiements importants</td></tr>
  <tr><td><strong>Réconciliations périodiques</strong></td><td>Rapprochement bancaire, lettrage, inventaire physique</td></tr>
</table>

<h3>3. La piste d'audit fiable (PAF)</h3>
<p>Obligation issue de la directive TVA. La PAF garantit qu'on peut <strong>retracer</strong> chaque opération de la pièce d'origine au document comptable, et inversement.</p>
<div class="encadre">
  <p>Pour une facture électronique : on doit pouvoir prouver l'authenticité de l'origine (qui l'a émise), l'intégrité du contenu (non modifiée) et la lisibilité jusqu'au délai de conservation (10 ans).</p>
</div>

<h3>4. Trois moyens d'avoir une PAF</h3>
<ol>
  <li><strong>Signature électronique qualifiée</strong> ou EDI</li>
  <li><strong>Cachet électronique avancé</strong> (Factur-X)</li>
  <li><strong>Contrôles documentés</strong> (process documentés permettant le rapprochement bon de commande / bon de livraison / facture / paiement)</li>
</ol>

<h3>5. Risques courants</h3>
<ul>
  <li><strong>Fraude au président</strong> : un escroc usurpe l'identité du dirigeant et demande un virement urgent</li>
  <li><strong>Fraude au RIB</strong> : changement frauduleux du RIB d'un fournisseur</li>
  <li><strong>Détournement</strong> : un salarié émet des fausses factures fournisseurs</li>
  <li><strong>Erreurs de saisie</strong> : doublons, montants inversés, mauvais compte</li>
</ul>
<p>Mesures : double validation des virements, vérification téléphonique des changements de RIB, séparation comptabilité/trésorerie.</p>
    `,
    quiz: [
      { question: "Le principe de séparation des tâches consiste à :", choix: ["Empêcher les contrôles inutiles", "Confier à des personnes différentes les rôles incompatibles", "Sous-traiter la comptabilité", "Numériser tous les documents"], reponse: 1, explication: "Séparation des tâches : la même personne ne doit pas pouvoir, par exemple, à la fois engager une dépense, la valider et la payer." }
    ]
  },

  {
    id: "L39", processus: "P7", titre: "Dématérialisation et factur-X", duree_min: 15,
    contenu: `
<h3>1. La réforme de la facturation électronique en France</h3>
<p>Calendrier (loi de finances 2024) :</p>
<table class="table">
  <tr><th>Date</th><th>Obligation</th></tr>
  <tr><td><strong>1er sept 2026</strong></td><td>Réception obligatoire pour TOUTES les entreprises (B2B domestique)</td></tr>
  <tr><td><strong>1er sept 2026</strong></td><td>Émission obligatoire pour grandes entreprises et ETI</td></tr>
  <tr><td><strong>1er sept 2027</strong></td><td>Émission obligatoire pour PME et microentreprises</td></tr>
</table>

<h3>2. Les 3 formats acceptés</h3>
<ul>
  <li><strong>Factur-X</strong> : format mixte. Un PDF lisible par l'humain + un fichier XML structuré dedans (le PDF/A-3 inclut le XML en pièce jointe). Idéal car visualisable et automatisable.</li>
  <li><strong>UBL</strong> (Universal Business Language) : XML pur, standard international</li>
  <li><strong>CII</strong> (Cross Industry Invoice) : autre format XML, EDI</li>
</ul>

<h3>3. Les acteurs</h3>
<ul>
  <li><strong>PPF</strong> (Portail Public de Facturation, devenu PDP minimaliste) : plateforme de l'État qui collecte et redistribue</li>
  <li><strong>PDP</strong> (Plateforme de Dématérialisation Partenaire) : acteurs privés certifiés (Generix, Esker, Yooz, etc.) qui peuvent émettre/recevoir des factures pour le compte des entreprises</li>
  <li><strong>OD</strong> (Opérateur de Dématérialisation) : peut produire les factures mais doit les transmettre via une PDP/PPF</li>
</ul>

<h3>4. Données obligatoires sur une facture (rappel)</h3>
<ul>
  <li>Mentions générales : émetteur, client, n° de facture, date</li>
  <li>SIREN/SIRET, n° de TVA intracom</li>
  <li>Détail des produits/services, quantité, prix unitaire HT</li>
  <li>Taux et montant de TVA</li>
  <li>Total HT, total TVA, total TTC</li>
  <li>Conditions et délais de paiement, escompte si applicable</li>
  <li>Mentions légales (IBAN, RCS, capital, etc.)</li>
</ul>

<h3>5. Avantages</h3>
<ul>
  <li>Réduction des délais et des coûts de traitement</li>
  <li>Lutte contre la fraude à la TVA</li>
  <li>Automatisation de la saisie comptable</li>
  <li>Traçabilité de bout en bout</li>
</ul>

<h3>6. Conservation</h3>
<p>Toute facture (papier ou électronique) doit être conservée <strong>10 ans</strong>. Pour les factures électroniques, le format doit rester lisible et infalsifiable jusqu'à cette échéance (problème des formats propriétaires).</p>
    `,
    quiz: [
      { question: "Le format Factur-X est :", choix: ["Du XML pur", "Un PDF avec un XML embarqué", "Un format propriétaire SAP", "Une signature électronique"], reponse: 1, explication: "Factur-X = PDF/A-3 (lisible) avec XML structuré inclus en pièce jointe → lisible humain + automatisable machine." }
    ]
  },

  {
    id: "L40", processus: "P7", titre: "SQL pour comptable — les bases", duree_min: 22,
    contenu: `
<h3>1. Le modèle relationnel</h3>
<p>Une base de données comptable contient des <strong>tables</strong> liées entre elles par des <strong>clés</strong>. Exemple typique :</p>
<table class="table">
  <tr><th>Table</th><th>Colonnes</th></tr>
  <tr><td><strong>ECRITURES</strong></td><td>id, date, journal, libelle</td></tr>
  <tr><td><strong>LIGNES_ECRITURE</strong></td><td>id, ecriture_id, compte, debit, credit</td></tr>
  <tr><td><strong>COMPTES</strong></td><td>numero, libelle, classe</td></tr>
  <tr><td><strong>CLIENTS</strong></td><td>id, nom, ville, encours</td></tr>
</table>

<h3>2. SELECT — sélection</h3>
<pre>
SELECT date, libelle FROM ECRITURES WHERE journal = 'AC';
</pre>
<p>Sort toutes les écritures du journal "AC" (achats).</p>

<h3>3. JOIN — joindre 2 tables</h3>
<pre>
SELECT e.date, c.libelle, l.debit, l.credit
FROM ECRITURES e
JOIN LIGNES_ECRITURE l ON l.ecriture_id = e.id
JOIN COMPTES c ON c.numero = l.compte
WHERE e.date BETWEEN '2024-01-01' AND '2024-12-31';
</pre>

<h3>4. GROUP BY et fonctions d'agrégation</h3>
<pre>
SELECT compte,
       SUM(debit) AS total_debit,
       SUM(credit) AS total_credit,
       SUM(debit) - SUM(credit) AS solde
FROM LIGNES_ECRITURE
GROUP BY compte
ORDER BY compte;
</pre>
<p>Génère une <strong>balance</strong> : pour chaque compte, total débit, total crédit et solde.</p>

<h3>5. Filtres avancés et HAVING</h3>
<pre>
SELECT compte, SUM(debit) AS total
FROM LIGNES_ECRITURE
WHERE date >= '2024-01-01'
GROUP BY compte
HAVING SUM(debit) > 10000
ORDER BY total DESC;
</pre>
<p>Sort les comptes avec plus de 10 000 € de débits sur la période.</p>

<h3>6. Cas concret BTS — détecter les anomalies</h3>
<pre>
-- Écritures déséquilibrées (somme débits ≠ somme crédits)
SELECT ecriture_id, SUM(debit) AS sd, SUM(credit) AS sc
FROM LIGNES_ECRITURE
GROUP BY ecriture_id
HAVING SUM(debit) <> SUM(credit);
</pre>
<pre>
-- Top 10 clients par encours
SELECT nom, encours
FROM CLIENTS
ORDER BY encours DESC
LIMIT 10;
</pre>

<h3>7. Mots-clés à connaître pour le BTS</h3>
<ul>
  <li><code>SELECT ... FROM ... WHERE</code></li>
  <li><code>JOIN ... ON</code> (et LEFT JOIN, RIGHT JOIN)</li>
  <li><code>GROUP BY</code>, <code>HAVING</code>, <code>ORDER BY</code></li>
  <li>Fonctions : <code>SUM, AVG, COUNT, MIN, MAX</code></li>
  <li><code>LIKE</code>, <code>IN</code>, <code>BETWEEN</code></li>
  <li><code>UPDATE</code>, <code>INSERT</code>, <code>DELETE</code> (rare en cas pratique mais à comprendre)</li>
</ul>
    `,
    quiz: [
      { question: "Pour obtenir le total des ventes par client, on utilise :", choix: ["SELECT *", "GROUP BY client", "ORDER BY client", "WHERE client"], reponse: 1, explication: "GROUP BY regroupe les lignes par client et permet d'utiliser SUM(montant) sur chaque groupe." }
    ]
  },

  {
    id: "L41", processus: "P7", titre: "Tableurs : RECHERCHEV, TCD, fonctions clés", duree_min: 18,
    contenu: `
<h3>1. RECHERCHEV / VLOOKUP</h3>
<p>Recherche une valeur dans la première colonne d'un tableau et renvoie la valeur d'une autre colonne de la même ligne.</p>
<pre>
=RECHERCHEV(valeur_cherchée; tableau; n°_colonne; FAUX)
</pre>
<p>Exemple : récupérer le libellé d'un compte depuis le PCG.</p>
<pre>
=RECHERCHEV(A2; PCG!$A$2:$B$500; 2; FAUX)
</pre>
<p>FAUX = correspondance exacte (à toujours utiliser pour les comptes/codes).</p>

<h3>2. RECHERCHEX (Excel récent) — meilleure</h3>
<pre>
=RECHERCHEX(valeur; colonne_recherche; colonne_résultat; "Non trouvé")
</pre>
<p>Plus flexible : pas de souci d'ordre des colonnes, gestion des erreurs intégrée.</p>

<h3>3. SI, SOMME.SI, SOMME.SI.ENS</h3>
<pre>
=SI(débit>0; "Débit"; "Crédit")
=SOMME.SI(plage_compte; "401%"; plage_montant)   -- somme des débits sur les comptes 401
=SOMME.SI.ENS(plage_montant; plage_compte; "401000"; plage_date; ">=" & DATE(2024;1;1))
</pre>

<h3>4. Tableau Croisé Dynamique (TCD)</h3>
<p>Outil indispensable. À partir d'un tableau de transactions, on génère :</p>
<ul>
  <li>Lignes = comptes</li>
  <li>Colonnes = mois</li>
  <li>Valeurs = somme des montants</li>
</ul>
<p>On obtient un grand livre par mois en 3 clics.</p>

<h3>5. Fonctions financières utiles</h3>
<table class="table">
  <tr><th>Fonction</th><th>Usage</th></tr>
  <tr><td><code>VPM</code></td><td>Mensualité d'un emprunt</td></tr>
  <tr><td><code>VAN</code></td><td>Valeur Actuelle Nette d'un projet</td></tr>
  <tr><td><code>TRI</code></td><td>Taux de Rentabilité Interne</td></tr>
  <tr><td><code>VC</code></td><td>Valeur acquise (capitalisation)</td></tr>
  <tr><td><code>VA</code></td><td>Valeur actuelle (actualisation)</td></tr>
</table>

<h3>6. Bonnes pratiques BTS</h3>
<ul>
  <li>Toujours figer les références ($A$1) dans une formule recopiée</li>
  <li>Nommer les plages (Insertion → Nom) pour la lisibilité</li>
  <li>Utiliser les tableaux structurés (Ctrl+T)</li>
  <li>Vérifier la cohérence des totaux (somme verticale = somme horizontale)</li>
  <li>Mise en forme conditionnelle pour identifier les anomalies (par ex. soldes négatifs en rouge)</li>
</ul>
    `,
    quiz: [
      { question: "Pour additionner uniquement les débits du compte 607, on utilise :", choix: ["RECHERCHEV", "SOMME", "SOMME.SI", "TCD"], reponse: 2, explication: "SOMME.SI(plage_critère; \"607*\"; plage_à_sommer) additionne conditionnellement. Un TCD fonctionne aussi mais est moins ciblé." }
    ]
  },

  {
    id: "L42", processus: "P7", titre: "PGI/ERP : paramétrage et flux comptable", duree_min: 12,
    contenu: `
<h3>1. Qu'est-ce qu'un PGI/ERP ?</h3>
<p>Un <strong>Progiciel de Gestion Intégré</strong> (Enterprise Resource Planning en anglais) regroupe dans une base de données unique tous les modules métiers : ventes, achats, stocks, production, comptabilité, paie. Une seule saisie alimente automatiquement la comptabilité.</p>

<h3>2. Exemples sur le marché</h3>
<table class="table">
  <tr><th>Cible</th><th>Solutions</th></tr>
  <tr><td>TPE / petites PME</td><td>EBP, Ciel, Cegid Quadra</td></tr>
  <tr><td>PME / ETI</td><td>Sage 100, Cegid XRP Flex, Divalto</td></tr>
  <tr><td>Grandes entreprises</td><td>SAP, Oracle, Microsoft Dynamics</td></tr>
</table>

<h3>3. Le flux d'une vente intégré</h3>
<ol>
  <li><strong>Devis</strong> dans le module commercial</li>
  <li>Transformation en <strong>commande</strong> (réservation de stock)</li>
  <li><strong>Bon de livraison</strong> → mouvement de stock automatique</li>
  <li><strong>Facture</strong> → écriture comptable automatique (411 / 707 / 445710)</li>
  <li><strong>Encaissement</strong> → écriture (512 / 411) avec lettrage automatique</li>
</ol>
<p>Avantage : aucune ressaisie. Risque : un paramétrage erroné se propage partout.</p>

<h3>4. Paramétrages comptables clés</h3>
<ul>
  <li><strong>Comptes par défaut</strong> par famille de produits, par taux de TVA</li>
  <li><strong>Comptes auxiliaires</strong> : un compte 411 par client, un compte 401 par fournisseur</li>
  <li><strong>Journaux</strong> : achats (AC), ventes (VE), banque (BQ), opérations diverses (OD), paie (PA), à-nouveau (AN)</li>
  <li><strong>Codes TVA</strong> liant taux et comptes (ex : "TVA20" → 445710 à la vente, 445660 à l'achat)</li>
</ul>

<h3>5. Imports / exports</h3>
<ul>
  <li><strong>FEC (Fichier des Écritures Comptables)</strong> : format normalisé exigé par l'administration en cas de contrôle. 18 colonnes obligatoires (voir BO 2013-30 de mai 2013).</li>
  <li><strong>Import bancaire</strong> : format CSV ou OFX pour intégrer automatiquement les relevés bancaires</li>
  <li><strong>Export liasse fiscale</strong> : 2050 à 2058 + annexes</li>
</ul>

<h3>6. Le FEC en bref</h3>
<p>Obligatoire à la demande de l'administration. Doit contenir : journal, n° d'écriture, date, n° de compte, libellé, débit, crédit, lettrage, date de lettrage, etc. La non-production peut entraîner une amende fiscale + un rejet de la comptabilité.</p>
    `,
    quiz: [
      { question: "Le FEC est :", choix: ["Un format propriétaire SAP", "Un fichier d'écritures comptables normalisé exigé par l'administration", "Un format de facture électronique", "Un type de tableau de bord"], reponse: 1, explication: "Le FEC (Fichier des Écritures Comptables) est un format normé que toute entreprise doit pouvoir produire en cas de contrôle fiscal." }
    ]
  }
);
