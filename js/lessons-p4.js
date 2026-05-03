// Phase 4 — P4 : Gestion des relations sociales

LESSONS.push(
  {
    id: "L23", processus: "P4", titre: "Les contrats de travail", duree_min: 15,
    contenu: `
<h3>1. Les types de contrats</h3>
<table class="table">
  <tr><th>Contrat</th><th>Durée</th><th>Cas d'usage</th></tr>
  <tr><td><strong>CDI</strong></td><td>Indéterminée</td><td>Norme. Tout autre contrat doit être justifié.</td></tr>
  <tr><td><strong>CDD</strong></td><td>Déterminée (max 18 mois en général)</td><td>Remplacement, accroissement temporaire, saisonnier</td></tr>
  <tr><td><strong>Intérim</strong></td><td>Déterminée</td><td>Mission via une entreprise de travail temporaire</td></tr>
  <tr><td><strong>Apprentissage</strong></td><td>Déterminée (1-3 ans)</td><td>Formation en alternance, jeune 16-29 ans</td></tr>
  <tr><td><strong>Professionnalisation</strong></td><td>Déterminée ou indéterminée</td><td>Formation alternée, public + large</td></tr>
</table>

<h3>2. Mentions obligatoires d'un contrat</h3>
<ul>
  <li>Identité des parties</li>
  <li>Lieu et date d'embauche</li>
  <li>Fonction et qualification</li>
  <li>Durée du travail</li>
  <li>Rémunération (brut + accessoires)</li>
  <li>Convention collective applicable</li>
  <li>Période d'essai (durée variable selon catégorie)</li>
</ul>

<h3>3. Période d'essai (CDI, max légal)</h3>
<table class="table">
  <tr><th>Catégorie</th><th>Initiale</th><th>Renouvelable max</th></tr>
  <tr><td>Ouvriers/employés</td><td>2 mois</td><td>4 mois</td></tr>
  <tr><td>Agents de maîtrise</td><td>3 mois</td><td>6 mois</td></tr>
  <tr><td>Cadres</td><td>4 mois</td><td>8 mois</td></tr>
</table>

<h3>4. Formalités d'embauche</h3>
<ol>
  <li><strong>DPAE</strong> (Déclaration Préalable À l'Embauche) avant la prise de poste, jusqu'à 8 jours avant</li>
  <li><strong>Visite d'information et de prévention</strong> (médecine du travail) dans les 3 mois</li>
  <li><strong>Inscription au registre unique du personnel</strong></li>
  <li><strong>Affiliation</strong> aux caisses de retraite et de prévoyance</li>
</ol>

<h3>5. Durée légale du travail</h3>
<ul>
  <li>35 heures hebdomadaires</li>
  <li>Heures supplémentaires : majoration 25 % (8 premières) puis 50 %</li>
  <li>Repos quotidien : 11 heures consécutives mini</li>
  <li>Repos hebdomadaire : 35 heures consécutives mini</li>
  <li>Durée max : 10h/jour, 48h/semaine, 44h/semaine sur 12 semaines</li>
</ul>
    `,
    quiz: [
      { question: "Combien de jours avant la prise de poste peut-on faire la DPAE ?", choix: ["1 jour", "8 jours", "30 jours", "Le jour même seulement"], reponse: 1, explication: "DPAE jusqu'à 8 jours avant l'embauche, et au plus tard avant la prise de poste effective." }
    ]
  },

  {
    id: "L24", processus: "P4", titre: "Anatomie du bulletin de paie", duree_min: 22,
    contenu: `
<h3>1. Structure type</h3>
<table class="table">
  <tr><th>Rubrique</th><th>Description</th></tr>
  <tr><td><strong>1. Identification</strong></td><td>Salarié, employeur, période, convention collective</td></tr>
  <tr><td><strong>2. Salaire brut</strong></td><td>Salaire de base + primes + heures sup + avantages en nature</td></tr>
  <tr><td><strong>3. Cotisations salariales</strong></td><td>Sécurité sociale, retraite, chômage, CSG/CRDS imposable</td></tr>
  <tr><td><strong>4. Net imposable</strong></td><td>Brut − cotisations déductibles + CSG/CRDS non déductible</td></tr>
  <tr><td><strong>5. Net à payer avant impôt</strong></td><td>Brut − total cotisations salariales</td></tr>
  <tr><td><strong>6. PAS</strong></td><td>Prélèvement à la source (impôt sur le revenu prélevé par l'employeur)</td></tr>
  <tr><td><strong>7. Net à payer</strong></td><td>Net avant impôt − PAS</td></tr>
  <tr><td><strong>8. Cotisations patronales</strong></td><td>Charges payées par l'employeur (≈ 40-45 % du brut)</td></tr>
</table>

<h3>2. Du brut au net (chiffres approximatifs 2025)</h3>
<table class="table">
  <tr><th>Cotisation</th><th>Salarial</th><th>Patronal</th></tr>
  <tr><td>Sécurité sociale - Maladie/maternité</td><td>—</td><td>≈ 7 %</td></tr>
  <tr><td>Vieillesse plafonnée</td><td>6,90 %</td><td>8,55 %</td></tr>
  <tr><td>Vieillesse déplafonnée</td><td>0,40 %</td><td>1,90 %</td></tr>
  <tr><td>Chômage</td><td>—</td><td>4,05 %</td></tr>
  <tr><td>AGIRC-ARRCO (T1)</td><td>3,15 %</td><td>4,72 %</td></tr>
  <tr><td>AGFF/CEG/CET</td><td>0,86 %</td><td>1,29 %</td></tr>
  <tr><td>CSG déductible</td><td>6,80 %</td><td>—</td></tr>
  <tr><td>CSG/CRDS non déductible</td><td>2,90 %</td><td>—</td></tr>
  <tr><td>Allocations familiales</td><td>—</td><td>3,45 % ou 5,25 %</td></tr>
  <tr><td>Accidents du travail</td><td>—</td><td>≈ 1 % (variable)</td></tr>
  <tr><td><strong>Total approx</strong></td><td><strong>≈ 22 %</strong></td><td><strong>≈ 42 %</strong></td></tr>
</table>

<h3>3. Exemple simplifié — salarié au SMIC</h3>
<p>Brut mensuel 1 802 € (151,67 h × 11,88 €).</p>
<ul>
  <li>Cotisations salariales (~22 %) : ≈ 396 €</li>
  <li>Net avant impôt : ≈ 1 406 €</li>
  <li>Coût total employeur (avec ~42 % de patronales) : ≈ 2 559 €</li>
</ul>

<h3>4. Bases de calcul</h3>
<ul>
  <li><strong>Plafond mensuel sécurité sociale (PMSS)</strong> 2025 : 3 925 €</li>
  <li><strong>T1</strong> : tranche jusqu'à 1 PMSS</li>
  <li><strong>T2</strong> : 1 à 8 PMSS (cadres essentiellement)</li>
  <li>Certaines cotisations sont plafonnées à T1, d'autres déplafonnées</li>
</ul>

<h3>5. Comptabilisation</h3>
<table class="ecriture">
  <tr><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>641</td><td>Salaires bruts</td><td>1 802,00</td><td></td></tr>
  <tr><td>645</td><td>Charges patronales</td><td>757,00</td><td></td></tr>
  <tr><td>421</td><td>Personnel - rémunérations dues (net)</td><td></td><td>1 406,00</td></tr>
  <tr><td>431</td><td>Sécurité sociale (cotis sal + pat)</td><td></td><td>≈ 900,00</td></tr>
  <tr><td>437</td><td>Autres organismes (retraite + chômage)</td><td></td><td>≈ 253,00</td></tr>
</table>
    `,
    quiz: [
      { question: "Sur un brut de 2 500 €, le net avant impôt approximatif est de :", choix: ["1 500 €", "1 950 €", "2 200 €", "1 800 €"], reponse: 1, explication: "Cotisations salariales ≈ 22 % du brut. 2 500 × 0,78 ≈ 1 950 € de net avant impôt." }
    ]
  },

  {
    id: "L25", processus: "P4", titre: "DSN, congés payés, absences", duree_min: 18,
    contenu: `
<h3>1. La DSN — Déclaration Sociale Nominative</h3>
<p>La DSN est la <strong>déclaration mensuelle unique</strong> qui remplace la plupart des déclarations sociales depuis 2017. Une DSN par mois transmet à l'URSSAF, aux caisses de retraite, à Pôle Emploi (France Travail) et à la DGFiP toutes les données salariales.</p>
<ul>
  <li><strong>Échéances</strong> : le 5 (ou 15) du mois suivant selon la taille de l'entreprise</li>
  <li><strong>Dépôt</strong> : net-entreprises.fr ou via le logiciel de paie</li>
  <li><strong>Contenu</strong> : rémunérations, contrats, mouvements (embauches, sorties, arrêts maladie...)</li>
</ul>

<h3>2. Les congés payés</h3>
<ul>
  <li><strong>Acquisition</strong> : 2,5 jours ouvrables par mois travaillé (= 5 semaines/an pour un temps plein)</li>
  <li><strong>Période de référence</strong> : 1er juin N-1 au 31 mai N (ou autre selon convention)</li>
  <li><strong>Période de prise</strong> : 1er mai N au 31 octobre N (en général), avec un congé principal de 12 jours minimum consécutifs</li>
  <li><strong>Maintien de salaire</strong> : règle du dixième (10 % du salaire de la période de référence) OU du maintien de salaire — on prend le plus favorable au salarié</li>
</ul>

<h3>3. Comptabilisation à la clôture (provision)</h3>
<p>À la clôture, on doit constater une <strong>provision pour congés payés non pris</strong> (compte 4282) + charges sociales sur cette provision (4382, 4482) :</p>
<table class="ecriture">
  <tr><td>6412</td><td>Congés payés</td><td>15 000</td><td></td></tr>
  <tr><td>4282</td><td>Personnel - dettes provis. CP</td><td></td><td>15 000</td></tr>
  <tr><td>6451</td><td>Charges sociales sur CP</td><td>6 750</td><td></td></tr>
  <tr><td>4382</td><td>Charges sociales sur CP à payer</td><td></td><td>6 750</td></tr>
</table>

<h3>4. Maladie et accidents du travail</h3>
<ul>
  <li><strong>Indemnités journalières (IJSS)</strong> : versées par la Sécu à partir du 4e jour (3 jours de carence). Calcul = 50 % du salaire journalier de base, plafonné</li>
  <li><strong>Subrogation</strong> : l'employeur peut maintenir le salaire et récupérer les IJSS auprès de la Sécu (en compte 4387)</li>
  <li><strong>Maintien de salaire</strong> : selon convention collective (ex : 90 % puis 66 % pendant X jours)</li>
</ul>

<h3>5. Sortie d'un salarié</h3>
<ul>
  <li>Solde de tout compte (signature du salarié)</li>
  <li>Certificat de travail</li>
  <li>Attestation France Travail (ex-Pôle Emploi)</li>
  <li>DSN évènementielle dans les 5 jours</li>
  <li><strong>Indemnité compensatrice de congés payés</strong> si CP non pris</li>
  <li><strong>Indemnité de précarité</strong> en CDD (10 % de la rémunération brute totale)</li>
</ul>
    `,
    quiz: [
      { question: "Combien de jours ouvrables de congés payés un salarié à temps plein acquiert-il par mois travaillé ?", choix: ["1,5", "2", "2,5", "3"], reponse: 2, explication: "2,5 jours ouvrables par mois → 30 jours/an = 5 semaines (le samedi compte comme jour ouvrable)." }
    ]
  },

  {
    id: "L26", processus: "P4", titre: "Épargne salariale", duree_min: 12,
    contenu: `
<h3>1. Les 3 dispositifs principaux</h3>
<table class="table">
  <tr><th>Dispositif</th><th>Obligatoire ?</th><th>Public</th></tr>
  <tr><td><strong>Participation</strong></td><td>Oui si ≥ 50 salariés</td><td>Tous les salariés</td></tr>
  <tr><td><strong>Intéressement</strong></td><td>Facultatif</td><td>Tous les salariés (si en place)</td></tr>
  <tr><td><strong>PEE / PERCOL</strong></td><td>Plan d'épargne, facultatif</td><td>Tous les salariés</td></tr>
</table>

<h3>2. Participation</h3>
<p>Formule légale : <strong>RSP = ½ × (B − 5 % C) × S/VA</strong></p>
<ul>
  <li>B = bénéfice net fiscal</li>
  <li>C = capitaux propres</li>
  <li>S = salaires</li>
  <li>VA = valeur ajoutée</li>
</ul>
<p>L'enveloppe est répartie entre salariés (en général : 50 % uniforme, 50 % au prorata des salaires).</p>

<h3>3. Intéressement</h3>
<p>Formule libre, négociée par accord d'entreprise. Doit être collectif, aléatoire et calculé sur des critères objectifs (résultat, productivité, qualité...). Plafond global : 20 % de la masse salariale brute.</p>

<h3>4. Régime social et fiscal</h3>
<ul>
  <li><strong>Pour le salarié</strong> : exonéré d'IR si versé dans un PEE/PERCOL (durée de blocage 5 ans pour PEE, jusqu'à la retraite pour PERCOL). Soumis à CSG/CRDS (9,7 %).</li>
  <li><strong>Pour l'employeur</strong> : exonéré de cotisations sociales (sauf forfait social pour les + 50 salariés). Déductible du résultat fiscal.</li>
</ul>

<h3>5. Comptabilisation (intéressement)</h3>
<table class="ecriture">
  <tr><td>6414</td><td>Indemnités d'intéressement</td><td>20 000</td><td></td></tr>
  <tr><td>4287</td><td>Personnel - intéressement à verser</td><td></td><td>20 000</td></tr>
</table>

<h3>6. Prime de partage de la valeur (PPV)</h3>
<p>Anciennement "prime Macron". Versement facultatif, exonéré jusqu'à 3 000 € (ou 6 000 € si accord d'intéressement). Sous conditions de revenus pour l'exonération d'IR (jusqu'à 3 SMIC).</p>
    `,
    quiz: [
      { question: "À partir de combien de salariés la participation est-elle obligatoire ?", choix: ["20", "50", "100", "Jamais obligatoire"], reponse: 1, explication: "À partir de 50 salariés, la participation aux résultats est légalement obligatoire." }
    ]
  }
);
