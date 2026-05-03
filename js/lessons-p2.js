// Phase 2 — P2 : Contrôle et production de l'information financière

LESSONS.push(
  {
    id: "L09", processus: "P2", titre: "Les travaux d'inventaire", duree_min: 12,
    contenu: `
<h3>1. Pourquoi un inventaire ?</h3>
<p>À la <strong>clôture de l'exercice</strong> (souvent le 31/12), la comptabilité tenue au fil de l'eau ne donne pas encore une image fidèle. Il faut <strong>ajuster</strong> certains comptes pour respecter les principes comptables : <em>indépendance des exercices</em>, <em>prudence</em>, <em>continuité d'exploitation</em>.</p>

<h3>2. Les 5 grandes catégories d'écritures d'inventaire</h3>
<table class="table">
  <tr><th>Catégorie</th><th>Objectif</th></tr>
  <tr><td><strong>Amortissements</strong></td><td>Constater l'usure des immobilisations</td></tr>
  <tr><td><strong>Dépréciations</strong></td><td>Constater une perte de valeur réversible (créances douteuses, stocks dépréciés...)</td></tr>
  <tr><td><strong>Provisions pour risques et charges</strong></td><td>Anticiper une charge probable mais non certaine</td></tr>
  <tr><td><strong>Régularisations</strong></td><td>Rattacher charges et produits au bon exercice (CCA, PCA, FNP, FAR)</td></tr>
  <tr><td><strong>Variations de stocks</strong></td><td>Mettre à jour le stock à la valeur d'inventaire</td></tr>
</table>

<h3>3. La séquence type</h3>
<ol>
  <li>Sortir la <strong>balance avant inventaire</strong></li>
  <li>Réaliser l'<strong>inventaire physique</strong> (stocks, immobilisations)</li>
  <li>Passer les <strong>écritures d'inventaire</strong></li>
  <li>Sortir la <strong>balance après inventaire</strong></li>
  <li>Établir le <strong>compte de résultat</strong> et le <strong>bilan</strong></li>
  <li>Décider de l'<strong>affectation du résultat</strong></li>
</ol>
    `,
    quiz: [
      { question: "Une perte de valeur réversible se traduit par une...", choix: ["Amortissement", "Dépréciation", "Provision", "Régularisation"], reponse: 1, explication: "Dépréciation = perte de valeur réversible. Amortissement = perte de valeur irréversible (usure)." }
    ]
  },

  {
    id: "L10", processus: "P2", titre: "Les amortissements", duree_min: 25,
    contenu: `
<h3>1. Définition</h3>
<p>L'<strong>amortissement</strong> constate la <strong>perte de valeur irréversible</strong> d'une immobilisation due à son usage, au temps ou à l'obsolescence. Il étale le coût d'acquisition sur la <strong>durée d'utilisation</strong>.</p>

<h3>2. Méthode linéaire (la plus fréquente)</h3>
<div class="encadre">
  <p><strong>Annuité = Valeur d'origine × Taux × (Nb mois / 12)</strong><br>
  Taux linéaire = 100 % / durée d'utilisation</p>
</div>
<p>Exemple : ordinateur 1 200 € HT, durée 4 ans, mis en service le 01/04/2024.</p>
<ul>
  <li>Taux = 100 / 4 = 25 %</li>
  <li>Annuité 2024 (9 mois, du 01/04 au 31/12) = 1 200 × 25 % × 9/12 = <strong>225 €</strong></li>
  <li>Annuité 2025, 2026, 2027 = 1 200 × 25 % = 300 € chacune</li>
  <li>Annuité 2028 (3 mois restants, du 01/01 au 31/03) = 1 200 × 25 % × 3/12 = 75 €</li>
  <li>Total = 225 + 300×3 + 75 = 1 200 € ✓</li>
</ul>

<h3>3. Méthode dégressive</h3>
<p>Réservée à certains biens (matériel industriel neuf, durée ≥ 3 ans). Coefficient appliqué au taux linéaire :</p>
<table class="table">
  <tr><th>Durée</th><th>Coefficient</th></tr>
  <tr><td>3 ou 4 ans</td><td>1,25</td></tr>
  <tr><td>5 ou 6 ans</td><td>1,75</td></tr>
  <tr><td>+ 6 ans</td><td>2,25</td></tr>
</table>
<p>Le taux dégressif s'applique à la <strong>VNC (valeur nette comptable)</strong>, pas à la valeur d'origine. Quand le taux linéaire <em>résiduel</em> devient supérieur au taux dégressif, on bascule en linéaire pour les années restantes.</p>

<h3>4. Écriture comptable</h3>
<table class="ecriture">
  <tr><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>681120</td><td>Dotation aux amortissements</td><td>225,00</td><td></td></tr>
  <tr><td>281830</td><td>Amortissements matériel informatique</td><td></td><td>225,00</td></tr>
</table>
<p>La <strong>VNC</strong> = Valeur d'origine − Cumul amortissements. Au bilan, l'immobilisation apparaît à sa VNC.</p>

<h3>5. Vocabulaire à maîtriser</h3>
<ul>
  <li><strong>Base amortissable</strong> : valeur d'origine HT (ou TTC si TVA non récupérable)</li>
  <li><strong>Annuité</strong> : amortissement de l'année</li>
  <li><strong>Dotation</strong> : nom de la charge (681)</li>
  <li><strong>Cumul</strong> : total des annuités depuis l'origine (281)</li>
  <li><strong>VNC</strong> : valeur nette comptable = origine − cumul</li>
  <li><strong>Prorata temporis</strong> : calcul au prorata du nombre de mois (linéaire) ou en mois entiers (dégressif)</li>
</ul>
    `,
    quiz: [
      { question: "Une machine de 24 000 € HT, durée 8 ans, mise en service le 01/07. Annuité linéaire de la première année ?", choix: ["3 000 €", "1 500 €", "1 750 €", "2 000 €"], reponse: 1, explication: "Taux = 100/8 = 12,5%. Annuité pleine = 24 000 × 12,5% = 3 000. Au prorata 6/12 (juillet à décembre) = 1 500 €." },
      { question: "VNC d'un matériel acquis 10 000 € il y a 3 ans (linéaire 5 ans, prorata complet) ?", choix: ["7 000 €", "6 000 €", "4 000 €", "10 000 €"], reponse: 2, explication: "Annuité = 10 000 × 20% = 2 000 €/an. Cumul 3 ans = 6 000 €. VNC = 10 000 − 6 000 = 4 000 €." }
    ]
  },

  {
    id: "L11", processus: "P2", titre: "Dépréciations et provisions", duree_min: 18,
    contenu: `
<h3>1. Différence dépréciation / provision</h3>
<table class="table">
  <tr><th>Dépréciation</th><th>Provision pour risques et charges</th></tr>
  <tr><td>Concerne un <strong>actif</strong> (immobilisation, stock, créance, titre)</td><td>Concerne un <strong>passif</strong> (litige, garantie, restructuration)</td></tr>
  <tr><td>Compte 29x ou 39x ou 49x</td><td>Compte 15x</td></tr>
  <tr><td>Réversible</td><td>Réversible quand le risque s'éteint</td></tr>
</table>

<h3>2. Cas typique : créance douteuse</h3>
<p>Un client de 1 200 € TTC (1 000 HT + 200 TVA) ne paiera probablement que 50 % de sa dette.</p>
<ol>
  <li><strong>Reclassement</strong> en client douteux :
    <table class="ecriture">
      <tr><td>416000</td><td>Clients douteux</td><td>1 200</td><td></td></tr>
      <tr><td>411000</td><td>Clients</td><td></td><td>1 200</td></tr>
    </table>
  </li>
  <li><strong>Dépréciation</strong> = 50 % × 1 000 HT = 500 €
    <table class="ecriture">
      <tr><td>68174</td><td>Dotation aux dépréciations des créances</td><td>500</td><td></td></tr>
      <tr><td>491000</td><td>Dépréciation des comptes clients</td><td></td><td>500</td></tr>
    </table>
  </li>
</ol>
<p>Note : la dépréciation s'applique sur le <strong>HT</strong>, car la TVA sera récupérée si la créance est définitivement perdue.</p>

<h3>3. Provision pour risques (litige)</h3>
<p>Un salarié saisit le tribunal pour 8 000 €, l'avocat estime à 70 % le risque.</p>
<table class="ecriture">
  <tr><td>6815</td><td>Dotation aux provisions pour risques</td><td>5 600</td><td></td></tr>
  <tr><td>1511</td><td>Provisions pour litiges</td><td></td><td>5 600</td></tr>
</table>

<h3>4. Reprise</h3>
<p>Si le risque disparaît (litige gagné, créance encaissée, stock revalorisé), on <strong>reprend</strong> la dépréciation/provision : compte 78 (transferts de charges) ou 78x (reprise sur dépréciations) au crédit, le compte 49/15/29 au débit.</p>
    `,
    quiz: [
      { question: "Une dépréciation de créance douteuse se calcule sur quelle base ?", choix: ["Le TTC", "Le HT", "La moitié du TTC", "Le montant de la TVA"], reponse: 1, explication: "Sur le HT. La TVA sera récupérée si la créance devient définitivement irrécouvrable (formalité fiscale)." }
    ]
  },

  {
    id: "L12", processus: "P2", titre: "Régularisations : CCA, PCA, FNP, FAR", duree_min: 18,
    contenu: `
<h3>1. Le principe d'indépendance des exercices</h3>
<p>Une charge ou un produit doit être <strong>rattaché à l'exercice qu'il concerne</strong>, pas à l'exercice où la facture est arrivée. Quatre cas typiques :</p>

<h3>2. CCA — Charges Constatées d'Avance (compte 486)</h3>
<p>Une <strong>charge déjà comptabilisée</strong> mais qui concerne <strong>l'exercice suivant</strong>. Exemple : prime d'assurance 1 200 € payée le 01/10 pour 12 mois.</p>
<ul>
  <li>3 mois (oct-déc) concernent l'exercice N : 300 €</li>
  <li>9 mois (jan-sept N+1) concernent N+1 : 900 € → à régulariser</li>
</ul>
<table class="ecriture">
  <tr><td>486</td><td>Charges constatées d'avance</td><td>900</td><td></td></tr>
  <tr><td>616</td><td>Primes d'assurances</td><td></td><td>900</td></tr>
</table>
<p>Effet : on retire 900 € du compte 616 (charge N) et on les "stocke" en CCA (actif) pour les remettre en charge en N+1.</p>

<h3>3. PCA — Produits Constatés d'Avance (compte 487)</h3>
<p>Image miroir : un <strong>produit déjà facturé</strong> mais qui concerne <strong>N+1</strong>. Exemple : un loyer de 600 € reçu le 15/12 pour janvier N+1.</p>
<table class="ecriture">
  <tr><td>706</td><td>Produits</td><td>600</td><td></td></tr>
  <tr><td>487</td><td>Produits constatés d'avance</td><td></td><td>600</td></tr>
</table>

<h3>4. FNP — Factures Non Parvenues (compte 408)</h3>
<p>Une <strong>charge concernant N</strong> mais dont la facture n'arrivera qu'en N+1. Exemple : électricité de décembre, facture estimée 240 € TTC, attendue en janvier.</p>
<table class="ecriture">
  <tr><td>606</td><td>Électricité</td><td>200</td><td></td></tr>
  <tr><td>44586</td><td>TVA sur factures non parvenues</td><td>40</td><td></td></tr>
  <tr><td>408</td><td>Fournisseurs - factures non parvenues</td><td></td><td>240</td></tr>
</table>

<h3>5. FAR — Factures à établir (compte 418)</h3>
<p>Image miroir : un <strong>produit gagné en N</strong> mais que vous n'avez pas encore facturé. Exemple : une prestation livrée le 28/12, facturée le 05/01.</p>

<h3>6. Les contre-passations</h3>
<div class="encadre">
  <p>À l'<strong>ouverture de N+1</strong>, toutes ces écritures sont contre-passées (extournées) en sens inverse, pour que les comptes 486/487/408/418 soient remis à zéro et que la charge/le produit "réintègre" l'exercice où il appartient.</p>
</div>
    `,
    quiz: [
      { question: "Une assurance de 1 800 € payée le 01/09/N pour 12 mois. Montant en CCA au 31/12 ?", choix: ["600 €", "900 €", "1 200 €", "1 350 €"], reponse: 2, explication: "8 mois sur 12 concernent N+1 (jan-août). 1 800 × 8/12 = 1 200 €." },
      { question: "Une électricité de décembre N de 360 € TTC (TVA 20%) dont la facture arrive en janvier N+1. Quel compte est utilisé ?", choix: ["486 CCA", "487 PCA", "408 FNP", "418 FAR"], reponse: 2, explication: "Charge en N, facture pas encore reçue → 408 (factures non parvenues). 486 = charge déjà payée pour N+1." }
    ]
  },

  {
    id: "L13", processus: "P2", titre: "Variation des stocks", duree_min: 12,
    contenu: `
<h3>1. Inventaire intermittent (cas BTS)</h3>
<p>Pendant l'exercice, le compte 31/37 (stock) ne bouge <strong>pas</strong>. Tous les achats vont en classe 6. À la clôture, on ajuste le stock à sa valeur d'inventaire.</p>

<h3>2. Les deux écritures à la clôture (marchandises)</h3>
<p><strong>Étape 1</strong> — annuler le stock initial (qui figurait au bilan d'ouverture) :</p>
<table class="ecriture">
  <tr><td>6037</td><td>Variation des stocks de marchandises</td><td>SI</td><td></td></tr>
  <tr><td>370</td><td>Stocks de marchandises</td><td></td><td>SI</td></tr>
</table>
<p><strong>Étape 2</strong> — constater le stock final :</p>
<table class="ecriture">
  <tr><td>370</td><td>Stocks de marchandises</td><td>SF</td><td></td></tr>
  <tr><td>6037</td><td>Variation des stocks de marchandises</td><td></td><td>SF</td></tr>
</table>

<h3>3. Effet sur le résultat</h3>
<div class="encadre">
  <p>Le compte <strong>6037</strong> a un solde = SI − SF :</p>
  <ul>
    <li>Si SF &gt; SI (stock augmente) : compte 6037 créditeur → vient en <strong>déduction des charges</strong> (résultat ↑).</li>
    <li>Si SF &lt; SI (stock diminue) : compte 6037 débiteur → augmente les <strong>charges</strong> (résultat ↓).</li>
  </ul>
  <p>Logique : le coût d'achat des marchandises vendues = Achats + SI − SF.</p>
</div>

<h3>4. Pour les matières premières</h3>
<p>Mêmes écritures, comptes <strong>6031</strong> (variation) et <strong>31</strong> (stocks). Pour les produits finis (que l'entreprise fabrique) : compte <strong>71</strong> (production stockée) au crédit, <strong>35</strong> au débit.</p>
    `,
    quiz: [
      { question: "Stock initial 8 000 €, stock final 6 000 €, achats 50 000 €. Coût d'achat des marchandises vendues ?", choix: ["48 000 €", "50 000 €", "52 000 €", "56 000 €"], reponse: 2, explication: "Achats + SI − SF = 50 000 + 8 000 − 6 000 = 52 000. Le stock a diminué de 2 000, ce qui augmente le coût des ventes." }
    ]
  },

  {
    id: "L14", processus: "P2", titre: "Le compte de résultat", duree_min: 18,
    contenu: `
<h3>1. Structure</h3>
<p>Le compte de résultat oppose les <strong>charges</strong> (classe 6) aux <strong>produits</strong> (classe 7). La différence est le <strong>résultat</strong>.</p>

<h3>2. Trois niveaux de résultat</h3>
<table class="table">
  <tr><th>Niveau</th><th>Charges (classe 6)</th><th>Produits (classe 7)</th><th>Solde</th></tr>
  <tr><td><strong>Exploitation</strong></td><td>60 à 65, 681</td><td>70 à 75, 781</td><td>Résultat d'exploitation</td></tr>
  <tr><td><strong>Financier</strong></td><td>66, 686</td><td>76, 786</td><td>Résultat financier</td></tr>
  <tr><td><strong>Exceptionnel</strong></td><td>67, 687</td><td>77, 787</td><td>Résultat exceptionnel</td></tr>
</table>
<p><strong>Résultat net = Résultat d'exploitation + Résultat financier + Résultat exceptionnel − Participation salariés − IS</strong></p>

<h3>3. Présentation simplifiée (en liste)</h3>
<pre>
Chiffre d'affaires (701, 706, 707)        ......
- Achats consommés (60, ±603)              ......
- Autres charges externes (61, 62)         ......
- Impôts et taxes (63)                     ......
- Charges de personnel (64)                ......
- Dotations aux amortissements/dépréc.     ......
= Résultat d'exploitation                  ......
+ Produits financiers (76)                 ......
- Charges financières (66)                 ......
= Résultat courant avant impôts            ......
± Résultat exceptionnel (77 - 67)          ......
- IS (695)                                  ......
= Résultat de l'exercice                   ======
</pre>

<h3>4. Indicateurs clés à connaître</h3>
<ul>
  <li><strong>Chiffre d'affaires HT</strong> : total des ventes (70)</li>
  <li><strong>Marge commerciale</strong> = Vtes marchandises − Coût d'achat des marchandises vendues</li>
  <li><strong>Valeur ajoutée</strong> = Production de l'exercice − Consommations en provenance des tiers</li>
  <li><strong>EBE (Excédent Brut d'Exploitation)</strong> = VA + Subventions − Impôts/taxes − Charges de personnel</li>
</ul>
<p>Ces indicateurs sont les <strong>SIG</strong> (Soldes Intermédiaires de Gestion), traités plus en détail en P6.</p>
    `,
    quiz: [
      { question: "Le compte 67 (charges exceptionnelles) entre dans quel résultat ?", choix: ["Exploitation", "Financier", "Exceptionnel", "Net seulement"], reponse: 2, explication: "67 = exceptionnel. 66 = financier. 60-65 = exploitation." }
    ]
  },

  {
    id: "L15", processus: "P2", titre: "Le bilan", duree_min: 18,
    contenu: `
<h3>1. Définition</h3>
<p>Le bilan est une <strong>photographie du patrimoine</strong> de l'entreprise à une date donnée (en général 31/12). Il a deux colonnes équilibrées : <strong>Actif = Passif</strong>.</p>

<h3>2. Structure de l'actif</h3>
<table class="table">
  <tr><th>Rubrique</th><th>Comptes</th></tr>
  <tr><td><strong>Actif immobilisé</strong></td><td></td></tr>
  <tr><td>Immobilisations incorporelles</td><td>20 (− 280, 290)</td></tr>
  <tr><td>Immobilisations corporelles</td><td>21 (− 281, 291)</td></tr>
  <tr><td>Immobilisations financières</td><td>26, 27 (− 296, 297)</td></tr>
  <tr><td><strong>Actif circulant</strong></td><td></td></tr>
  <tr><td>Stocks</td><td>3 (− 39)</td></tr>
  <tr><td>Créances clients et autres</td><td>41, 425, 4096... (− 491)</td></tr>
  <tr><td>Disponibilités</td><td>50, 51, 53</td></tr>
</table>
<p>L'actif est présenté en <strong>3 colonnes</strong> : montant brut, amortissements/dépréciations, montant net.</p>

<h3>3. Structure du passif</h3>
<table class="table">
  <tr><th>Rubrique</th><th>Comptes</th></tr>
  <tr><td><strong>Capitaux propres</strong></td><td></td></tr>
  <tr><td>Capital social</td><td>101</td></tr>
  <tr><td>Réserves</td><td>106</td></tr>
  <tr><td>Report à nouveau</td><td>11</td></tr>
  <tr><td>Résultat de l'exercice</td><td>120 (bénéfice) ou 129 (perte)</td></tr>
  <tr><td><strong>Provisions</strong></td><td>15</td></tr>
  <tr><td><strong>Dettes</strong></td><td></td></tr>
  <tr><td>Emprunts</td><td>16</td></tr>
  <tr><td>Fournisseurs</td><td>40</td></tr>
  <tr><td>Dettes fiscales et sociales</td><td>42, 43, 44</td></tr>
</table>

<h3>4. Logique simple</h3>
<div class="encadre">
  <p><strong>Actif = ce que possède l'entreprise.</strong> Comptes à <em>solde débiteur</em> en classes 2, 3, 4 (411), 5.<br>
  <strong>Passif = ce qu'elle doit (à ses associés ou à des tiers).</strong> Comptes à <em>solde créditeur</em> en classes 1, 4 (401, 44), et le résultat.</p>
</div>

<h3>5. Du grand livre au bilan</h3>
<ol>
  <li>Sortir la balance après inventaire</li>
  <li>Pour chaque compte : déterminer s'il va à l'actif ou au passif (selon classe et sens du solde)</li>
  <li>Regrouper par rubrique du modèle</li>
  <li>Vérifier : <strong>Total actif = Total passif</strong></li>
</ol>
    `,
    quiz: [
      { question: "Le compte 411 (Clients) figure...", choix: ["À l'actif immobilisé", "À l'actif circulant", "Au passif - dettes", "Hors bilan"], reponse: 1, explication: "411 = créance client = actif circulant (rubrique « Créances »)." },
      { question: "Le résultat bénéficiaire (compte 120) figure...", choix: ["À l'actif circulant", "Au passif, dans les capitaux propres", "Au passif, dans les dettes", "Au compte de résultat seulement"], reponse: 1, explication: "Le résultat de l'exercice fait partie des capitaux propres (passif). Il sera ensuite affecté en réserves ou distribué." }
    ]
  },

  {
    id: "L16", processus: "P2", titre: "Affectation du résultat", duree_min: 10,
    contenu: `
<h3>1. Principe</h3>
<p>Le résultat de l'exercice (compte 120) doit être <strong>affecté</strong> par décision de l'AG des associés dans les 6 mois qui suivent la clôture (avant le 30 juin pour un exercice civil).</p>

<h3>2. Possibilités d'affectation</h3>
<ul>
  <li><strong>Réserve légale</strong> (compte 1061) : 5 % du bénéfice tant que la réserve légale &lt; 10 % du capital social. Obligatoire pour les SARL/SA.</li>
  <li><strong>Réserves statutaires ou facultatives</strong> (1063, 1068)</li>
  <li><strong>Report à nouveau</strong> (110 si bénéficiaire, 119 si déficitaire)</li>
  <li><strong>Dividendes</strong> aux associés (compte 457)</li>
</ul>

<h3>3. Exemple</h3>
<p>Bénéfice 2024 = 30 000 €, capital 50 000 €, réserve légale actuelle 4 000 €. AG décide : 5% en réserve légale, 10 000 € en réserves facultatives, le solde en dividendes.</p>
<table class="table">
  <tr><th>Affectation</th><th>Montant</th></tr>
  <tr><td>Réserve légale (5 % de 30 000)</td><td>1 500 € → atteint 5 500, OK car &lt; 5 000 (= 10% × 50 000)... vérif : 5 500 &gt; 5 000 donc plafond, on ne dote que de 1 000 €</td></tr>
  <tr><td>Réserves facultatives</td><td>10 000 €</td></tr>
  <tr><td>Dividendes</td><td>30 000 − 1 000 − 10 000 = 19 000 €</td></tr>
</table>

<h3>4. Écriture comptable d'affectation</h3>
<table class="ecriture">
  <tr><td>120</td><td>Résultat de l'exercice</td><td>30 000</td><td></td></tr>
  <tr><td>1061</td><td>Réserve légale</td><td></td><td>1 000</td></tr>
  <tr><td>1068</td><td>Réserves facultatives</td><td></td><td>10 000</td></tr>
  <tr><td>457</td><td>Associés - dividendes à payer</td><td></td><td>19 000</td></tr>
</table>

<h3>5. Cas du déficit</h3>
<p>Une perte (compte 129) est généralement reportée à nouveau (compte 119) pour être absorbée par les bénéfices futurs, ou imputée sur les réserves disponibles.</p>
    `,
    quiz: [
      { question: "La réserve légale est obligatoire jusqu'à quel seuil ?", choix: ["5 % du capital", "10 % du capital", "20 % du capital", "10 % du bénéfice"], reponse: 1, explication: "Réserve légale = 5 % du bénéfice annuel jusqu'à atteindre 10 % du capital social. Au-delà, plus d'obligation de doter." }
    ]
  }
);
