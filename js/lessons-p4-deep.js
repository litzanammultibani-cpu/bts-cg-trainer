// P4 approfondi — paie en détail

LESSONS.push(
  {
    id: "L63", processus: "P4", titre: "Bulletin de paie ligne par ligne", duree_min: 25,
    contenu: `
<h3>1. Architecture obligatoire (depuis 2018)</h3>
<p>Le bulletin de paie est <strong>simplifié et clarifié</strong> par décret. Il regroupe les cotisations en grandes catégories.</p>

<h3>2. Les grandes rubriques (dans l'ordre)</h3>
<table class="table">
  <tr><th>Rubrique</th><th>Détails</th></tr>
  <tr><td><strong>1. En-tête</strong></td><td>Salarié (nom, n° SS, emploi, classification), employeur (raison sociale, SIRET), période, code APE, convention collective, n° URSSAF</td></tr>
  <tr><td><strong>2. Salaire de base</strong></td><td>Heures normales × taux horaire</td></tr>
  <tr><td><strong>3. Heures supplémentaires</strong></td><td>HS 25% (8 premières), HS 50% (au-delà), majoration travail nuit/dimanche</td></tr>
  <tr><td><strong>4. Primes / indemnités</strong></td><td>Prime ancienneté, treizième mois, prime d'objectif, indemnités forfaitaires</td></tr>
  <tr><td><strong>5. Avantages en nature</strong></td><td>Logement, voiture, repas, NTIC (intégrés au brut)</td></tr>
  <tr><td><strong>6. Brut total</strong></td><td>Somme des 2-5</td></tr>
  <tr><td><strong>7. Cotisations salariales</strong></td><td>Détaillées en 6 grands postes (santé, retraite, chômage...)</td></tr>
  <tr><td><strong>8. CSG/CRDS</strong></td><td>Calculée sur 98,25% du brut + avantages prévoyance employeur</td></tr>
  <tr><td><strong>9. Net imposable</strong></td><td>Pour la déclaration d'IR</td></tr>
  <tr><td><strong>10. Prélèvement à la source</strong></td><td>Taux personnalisé fourni par DGFiP</td></tr>
  <tr><td><strong>11. Net à payer</strong></td><td>Ce que reçoit le salarié</td></tr>
  <tr><td><strong>12. Cotisations patronales</strong></td><td>Détaillées (informationnel, pas déduit du net)</td></tr>
  <tr><td><strong>13. Coût total employeur</strong></td><td>Brut + cotisations patronales</td></tr>
</table>

<h3>3. Les 6 catégories de cotisations (présentation 2018+)</h3>
<table class="table">
  <tr><th>Catégorie</th><th>Couvertures</th></tr>
  <tr><td>Santé</td><td>Sécurité sociale, mutuelle obligatoire, prévoyance lourde</td></tr>
  <tr><td>Accidents du travail / Maladies professionnelles</td><td>Cotisation patronale uniquement, taux variable selon secteur</td></tr>
  <tr><td>Retraite</td><td>Sécu plafonnée + déplafonnée + AGIRC-ARRCO + APEC pour cadres</td></tr>
  <tr><td>Famille</td><td>Allocations familiales (patronale)</td></tr>
  <tr><td>Assurance chômage</td><td>Patronale uniquement (4,05%)</td></tr>
  <tr><td>Autres contributions</td><td>FNAL, taxe d'apprentissage, formation, transport</td></tr>
</table>

<h3>4. Calcul détaillé sur 3 000 € brut (non cadre, hors zones spéciales)</h3>
<pre>
SALAIRE BRUT                                 3 000,00

COTISATIONS SALARIALES :
  Santé / prévoyance (~0)                          0
  Vieillesse plafonnée (6,90%)                  207,00
  Vieillesse déplafonnée (0,40%)                 12,00
  AGIRC-ARRCO T1 (3,15%)                         94,50
  CEG T1 (0,86%)                                 25,80
  APEC (0% non-cadre)                              0
  CSG déductible (6,80% sur 98,25% brut)        200,57
                                              -----------
  TOTAL DÉDUCTIBLE                              539,87
  CSG/CRDS non déductible (2,90% sur 98,25%)     85,48
                                              -----------
  TOTAL COTISATIONS SALARIALES                  625,35

NET IMPOSABLE = 3000 - 539,87 + 85,48     =  2 545,61
NET AVANT IMPÔT = 3000 - 625,35           =  2 374,65
- Prélèvement à la source (ex 5%)            -127,28
NET À PAYER                               =  2 247,37

COTISATIONS PATRONALES (informationnel) :
  Santé maladie                                 210,00
  Vieillesse plaf (8,55%)                       256,50
  Vieillesse déplaf (1,90%)                      57,00
  AGIRC-ARRCO T1 (4,72%)                        141,60
  CEG (1,29%)                                    38,70
  Allocations familiales (5,25%)                157,50
  Chômage (4,05%)                               121,50
  AT/MP (~1%)                                    30,00
  Formation (1%)                                 30,00
  Apprentissage (0,68%)                          20,40
                                              -----------
  TOTAL COTIS PATRONALES                      1 063,20

COÛT EMPLOYEUR = 3000 + 1063,20 = 4 063,20 €
</pre>

<h3>5. Plafond Sécurité Sociale (PMSS 2025)</h3>
<ul>
  <li>PMSS = <strong>3 925 €/mois</strong></li>
  <li>T1 = de 0 à 1 PMSS (3 925 €)</li>
  <li>T2 = de 1 à 8 PMSS (31 400 €) — surtout pour cadres</li>
</ul>

<h3>6. À retenir</h3>
<div class="encadre">
  <p>Le brut → net est environ -22% (cotisations salariales).<br>
  Le brut → coût employeur est environ +35% à +45% (cotisations patronales).<br>
  Donc <strong>1 € de brut = ~ 0,78 € de net pour le salarié et ~ 1,42 € de coût pour l'employeur</strong>.</p>
</div>
    `,
    quiz: [
      { question: "Sur 3 000 € de brut (non cadre), le coût employeur total est environ :", choix: ["3 000 €", "3 500 €", "4 050 €", "5 000 €"], reponse: 2, explication: "Cotisations patronales ≈ 35% du brut, donc 3 000 × 1,35 ≈ 4 050 €." }
    ]
  },

  {
    id: "L64", processus: "P4", titre: "Allègements de charges (réduction Fillon)", duree_min: 12,
    contenu: `
<h3>1. La réduction générale (ex-Fillon)</h3>
<p>Réduction des cotisations patronales sur les bas salaires, pour favoriser l'emploi. Concerne les salaires <strong>jusqu'à 1,6 SMIC annuel</strong>.</p>

<h3>2. Formule</h3>
<div class="encadre">
  <p><strong>Réduction = Coefficient × Brut</strong><br>
  Coefficient = (T / 0,6) × ((1,6 × SMIC annuel / brut annuel) − 1)</p>
  <p>Avec T = paramètre URSSAF (≈ 0,3193 en 2025 pour FNAL 0,5%, 0,3203 si FNAL 0,1%)</p>
</div>

<h3>3. Lecture intuitive</h3>
<ul>
  <li><strong>Au SMIC</strong> : réduction maximale (≈ 32% du brut)</li>
  <li><strong>Au fil que le salaire monte</strong>, la réduction décroît linéairement</li>
  <li><strong>À 1,6 SMIC</strong> : réduction = 0</li>
</ul>

<h3>4. Imputation</h3>
<p>La réduction Fillon vient diminuer les cotisations URSSAF du mois. Pas d'écriture comptable spécifique : c'est imputé sur les comptes 645/438. Apparaît sur le bulletin et la DSN.</p>

<h3>5. Autres allègements</h3>
<table class="table">
  <tr><th>Dispositif</th><th>Cible</th></tr>
  <tr><td>Réduction de 6 points sur la cotisation maladie</td><td>Salaires &lt; 2,5 SMIC</td></tr>
  <tr><td>Réduction de 1,8 point sur les allocations familiales</td><td>Salaires &lt; 3,5 SMIC</td></tr>
  <tr><td>Exonération apprentis</td><td>Apprentis : exonération quasi totale des cotisations sur la part &lt; 79% SMIC</td></tr>
  <tr><td>JEI (Jeune Entreprise Innovante)</td><td>Exonération cotis patronales sur les chercheurs (sous conditions)</td></tr>
  <tr><td>ZFU / ZRR</td><td>Exonérations zones franches / rurales</td></tr>
</table>

<h3>6. Cas pratique simplifié</h3>
<p>Salarié au SMIC (1 802 € brut), réduction Fillon ≈ 32% = environ 577 €. Donc cotisations patronales effectives ≈ 1 802 × 0,42 − 577 ≈ 180 € au lieu de 757. Énorme différence pour les bas salaires.</p>
    `,
    quiz: [
      { question: "La réduction générale (Fillon) s'annule à partir de :", choix: ["1 SMIC", "1,2 SMIC", "1,6 SMIC", "2 SMIC"], reponse: 2, explication: "Le seuil est 1,6 SMIC annuel. Au-delà, plus de réduction." }
    ]
  },

  {
    id: "L65", processus: "P4", titre: "Indemnités journalières et subrogation", duree_min: 15,
    contenu: `
<h3>1. Les IJSS — qu'est-ce que c'est ?</h3>
<p>Quand un salarié est en arrêt (maladie, maternité, accident du travail), la <strong>Sécu lui verse des indemnités journalières</strong> qui remplacent partiellement son salaire.</p>

<h3>2. Calcul des IJSS maladie (cas standard)</h3>
<ul>
  <li><strong>Délai de carence</strong> : 3 jours (sauf AT/MP : 0 jour)</li>
  <li><strong>Salaire journalier de référence</strong> = (Brut des 3 mois précédents) / 91,25</li>
  <li><strong>IJ = 50% du salaire journalier</strong>, plafonnée à 50% × 1,8 SMIC mensuel / 30,42 ≈ 53 €/jour brut en 2025</li>
</ul>

<h3>3. Maintien de salaire par l'employeur</h3>
<p>Selon la convention collective ou le Code du travail (loi de mensualisation, après 1 an d'ancienneté) :</p>
<ul>
  <li>90% du brut pendant X jours (durée selon ancienneté, ex : 30 jours)</li>
  <li>Puis 66,66% pendant X jours suivants</li>
  <li>L'employeur verse la <strong>différence</strong> entre IJ et 90% / 66,66% du brut</li>
</ul>

<h3>4. La subrogation</h3>
<p>Mécanisme : l'<strong>employeur perçoit directement les IJ à la place du salarié</strong>, et lui verse l'intégralité du salaire maintenu. C'est la pratique la plus courante.</p>

<h3>5. Comptabilisation (subrogation maladie)</h3>
<p>Salaire de mars : brut 2 500 €, le salarié est en arrêt 10 jours (du 11 au 20). Brut maintenu (90%). IJ versées par la Sécu (subrogation) : 35 €/jour × 7 jours (jours indemnisés après carence) = 245 €.</p>
<table class="ecriture">
  <tr><th colspan="4">Bulletin :</th></tr>
  <tr><td>641</td><td>Salaire brut</td><td>2 500</td><td></td></tr>
  <tr><td>421</td><td>Personnel - net à payer</td><td></td><td>~ 1 950</td></tr>
  <tr><td>43x</td><td>Cotisations sociales</td><td></td><td>~ 550</td></tr>
  <tr><th colspan="4">Réception des IJ par l'employeur (subrogation) :</th></tr>
  <tr><td>512</td><td>Banque</td><td>245</td><td></td></tr>
  <tr><td>4387</td><td>Sécurité sociale - IJ à recevoir</td><td></td><td>245</td></tr>
</table>
<p>Le compte 4387 fait le tampon. L'employeur récupère ses 245 €. Net pour le salarié = pas changé (le brut est maintenu).</p>

<h3>6. Maternité, paternité, AT/MP</h3>
<table class="table">
  <tr><th>Cas</th><th>Carence</th><th>Taux IJ</th></tr>
  <tr><td>Maladie classique</td><td>3 jours</td><td>50%</td></tr>
  <tr><td>Maternité</td><td>0 jour</td><td>~ 100% du salaire net (sous plafond)</td></tr>
  <tr><td>Paternité</td><td>0 jour</td><td>~ 100% (sous plafond, max 25 jours)</td></tr>
  <tr><td>Accident du travail / MP</td><td>0 jour</td><td>60% les 28 premiers jours, 80% au-delà</td></tr>
</table>
    `,
    quiz: [
      { question: "Le délai de carence pour les IJ maladie classiques est de :", choix: ["0 jour", "3 jours", "7 jours", "10 jours"], reponse: 1, explication: "3 jours de carence, sauf accidents du travail/maladies pro où c'est 0." }
    ]
  },

  {
    id: "L66", processus: "P4", titre: "Congés payés détaillés", duree_min: 18,
    contenu: `
<h3>1. Acquisition</h3>
<ul>
  <li><strong>2,5 jours ouvrables</strong> par mois travaillé (ou 2,08 jours ouvrés si décompte en jours ouvrés — moins courant)</li>
  <li><strong>30 jours ouvrables/an</strong> = <strong>5 semaines</strong> pour un temps plein</li>
  <li>Période de référence : <strong>1er juin N-1 au 31 mai N</strong> (sauf accord d'entreprise modifiant)</li>
</ul>

<h3>2. Période de prise</h3>
<ul>
  <li><strong>Période légale</strong> : 1er mai N au 31 octobre N (pour les jours acquis sur N-1)</li>
  <li><strong>Congé principal</strong> : 12 jours minimum consécutifs entre 2 weekends, à prendre dans cette période</li>
  <li><strong>5e semaine</strong> : prise généralement en hiver, ne peut être accolée au congé principal</li>
</ul>

<h3>3. Calcul de l'indemnité de CP — la double règle</h3>
<p>L'employeur applique la <strong>règle la plus favorable</strong> au salarié entre :</p>
<ol>
  <li><strong>Règle du dixième</strong> : indemnité = 10% du brut total de la période de référence</li>
  <li><strong>Règle du maintien de salaire</strong> : on paye comme si le salarié avait travaillé</li>
</ol>

<h3>4. Exemple chiffré</h3>
<p>Brut période de référence : 30 000 €. Salarié prend 5 jours en juillet, brut habituel mensuel = 2 500 €.</p>
<ul>
  <li><strong>Dixième</strong> : 30 000 × 10% = 3 000 € pour les 30 jours acquis. Soit pour 5 jours = 3 000 / 30 × 5 = <strong>500 €</strong></li>
  <li><strong>Maintien</strong> : 2 500 / 21,67 (jours ouvrés moyens) × 5 = <strong>576,69 €</strong></li>
  <li>Plus favorable = maintien → 576,69 € à payer</li>
</ul>

<h3>5. Comptabilisation à la clôture (provision pour CP)</h3>
<p>Au 31/12, on doit provisionner les congés acquis et non pris (ainsi que les charges sociales sur cette provision).</p>
<table class="ecriture">
  <tr><td>6412</td><td>Congés payés (charge)</td><td>15 000</td><td></td></tr>
  <tr><td>4282</td><td>Personnel - dettes provisionnées CP</td><td></td><td>15 000</td></tr>
  <tr><td>6451</td><td>Charges sociales sur CP (≈ 45%)</td><td>6 750</td><td></td></tr>
  <tr><td>4382</td><td>Charges sociales sur CP à payer</td><td></td><td>6 750</td></tr>
</table>
<p>L'année suivante, quand les congés sont payés, on extourne la provision et on passe les écritures normales de paie.</p>

<h3>6. Indemnité compensatrice (sortie)</h3>
<p>Quand un salarié quitte l'entreprise avec des CP non pris, on lui verse une <strong>indemnité compensatrice</strong> calculée par les mêmes règles. Soumise à cotisations comme un salaire.</p>
    `,
    quiz: [
      { question: "Pour un temps plein, le nombre de jours ouvrables de CP par an est :", choix: ["25", "28", "30", "35"], reponse: 2, explication: "30 jours ouvrables = 5 semaines (le samedi compte). En jours ouvrés (lundi-vendredi), c'est 25 jours." }
    ]
  },

  {
    id: "L67", processus: "P4", titre: "DSN événementielle (sortie, AT, maladie)", duree_min: 12,
    contenu: `
<h3>1. DSN mensuelle vs DSN événementielle</h3>
<table class="table">
  <tr><th>DSN mensuelle</th><th>DSN événementielle</th></tr>
  <tr><td>1 par mois, le 5 ou 15 du mois suivant</td><td>Au fil de l'eau, à chaque événement</td></tr>
  <tr><td>Récap rémunérations + cotisations</td><td>Signale embauche, sortie, arrêt, reprise...</td></tr>
</table>

<h3>2. Les événements qui déclenchent une DSN événementielle</h3>
<ul>
  <li><strong>Arrêt de travail</strong> (maladie, AT/MP, maternité) : signal "S21.G00.60" sous 5 jours</li>
  <li><strong>Reprise de travail</strong> après arrêt</li>
  <li><strong>Fin de contrat</strong> (démission, licenciement, fin de CDD) : sous 5 jours</li>
  <li><strong>Signalement amiante</strong> (cas spécifique)</li>
</ul>

<h3>3. Pour la fin de contrat</h3>
<p>La DSN remplace l'attestation France Travail (anciennement Pôle Emploi). Elle doit être envoyée <strong>dans les 5 jours suivant la fin du contrat</strong>. Elle contient :</p>
<ul>
  <li>Date de fin et motif</li>
  <li>Salaires des 24 ou 36 mois précédents (selon âge)</li>
  <li>Indemnités de fin de contrat (préavis, CP, précarité, licenciement...)</li>
  <li>Solde de tout compte</li>
</ul>

<h3>4. Sanctions</h3>
<p>Retard ou erreur :</p>
<ul>
  <li>Pénalité de 7,50 € par salarié et par mois</li>
  <li>Retard de versement des cotisations : majoration 5% + intérêts de retard</li>
  <li>Pour défaut de DSN d'AT : pénalité spécifique URSSAF</li>
</ul>

<h3>5. Outils</h3>
<p>Toute la DSN passe par le portail <strong>net-entreprises.fr</strong> ou directement depuis le logiciel de paie qui transmet en mode API. Aucune saisie manuelle pour une entreprise normale.</p>
    `,
    quiz: [
      { question: "Délai pour faire une DSN événementielle après une fin de contrat :", choix: ["24 heures", "5 jours", "1 mois", "3 mois"], reponse: 1, explication: "5 jours pour les événements (sortie, arrêt, reprise). La DSN remplace l'attestation Pôle Emploi qui était à envoyer immédiatement avant." }
    ]
  }
);
