// P2 approfondi — sous-thèmes détaillés du processus 2

LESSONS.push(
  {
    id: "L53", processus: "P2", titre: "Amortissement par composants", duree_min: 18,
    contenu: `
<h3>1. Le principe (PCG)</h3>
<p>Une immobilisation peut être décomposée en <strong>composants</strong> ayant des durées de vie différentes. Chaque composant est amorti séparément. C'est obligatoire si :</p>
<ul>
  <li>Le composant représente une part <strong>significative</strong> de la valeur (≥ 15%)</li>
  <li>Sa durée d'utilisation est <strong>significativement différente</strong> de la structure</li>
</ul>

<h3>2. Exemple : un immeuble</h3>
<table class="table">
  <tr><th>Composant</th><th>Valeur</th><th>Durée</th><th>Annuité</th></tr>
  <tr><td>Structure (gros œuvre)</td><td>400 000</td><td>50 ans</td><td>8 000</td></tr>
  <tr><td>Toiture</td><td>40 000</td><td>25 ans</td><td>1 600</td></tr>
  <tr><td>Façade et étanchéité</td><td>30 000</td><td>20 ans</td><td>1 500</td></tr>
  <tr><td>Installations électriques/sanitaires</td><td>30 000</td><td>15 ans</td><td>2 000</td></tr>
  <tr><td><strong>Total</strong></td><td><strong>500 000</strong></td><td>—</td><td><strong>13 100</strong></td></tr>
</table>

<h3>3. Comptabilisation</h3>
<p>Chaque composant a son propre compte 21x et son propre compte 281x. À l'acquisition :</p>
<table class="ecriture">
  <tr><td>2131</td><td>Constructions - structure</td><td>400 000</td></tr>
  <tr><td>2132</td><td>Constructions - toiture</td><td>40 000</td></tr>
  <tr><td>2133</td><td>Constructions - façade</td><td>30 000</td></tr>
  <tr><td>2134</td><td>Constructions - installations</td><td>30 000</td></tr>
  <tr><td>404</td><td>Fournisseur immo</td><td></td><td>500 000 (HT)</td></tr>
</table>

<h3>4. Remplacement d'un composant</h3>
<p>Quand on remplace la toiture (par exemple), on traite cela comme une <strong>cession + acquisition</strong> :</p>
<ol>
  <li>Sortie de la valeur résiduelle de l'ancien composant (le plus souvent VNC = 0 en fin de vie, donc neutre)</li>
  <li>Inscription du nouveau composant pour son coût d'acquisition</li>
  <li>Démarrage d'un nouveau plan d'amortissement</li>
</ol>

<h3>5. Avantage fiscal et comptable</h3>
<p>L'approche par composants donne une vision plus juste de l'usure réelle. Elle augmente les dotations annuelles (donc diminue le résultat fiscal), mais étale mieux la dépense de remplacement.</p>
    `,
    quiz: [
      { question: "Une toiture d'immeuble (40 000 €, 25 ans) doit être amortie séparément si :", choix: ["L'immeuble vaut + 1 M€", "Sa durée diffère significativement de la structure", "Le PCG l'exige toujours", "Jamais"], reponse: 1, explication: "L'amortissement par composants est obligatoire dès lors que la durée d'usage du composant est significativement différente et qu'il représente une part significative de la valeur." }
    ]
  },

  {
    id: "L54", processus: "P2", titre: "Évaluation des stocks : PMP, FIFO, CMP", duree_min: 18,
    contenu: `
<h3>1. Méthodes autorisées en PCG</h3>
<table class="table">
  <tr><th>Méthode</th><th>Description</th><th>Usage</th></tr>
  <tr><td><strong>CMP / PMP</strong></td><td>Coût Moyen Pondéré (après chaque entrée OU en fin de période)</td><td>Le plus utilisé en France</td></tr>
  <tr><td><strong>FIFO / PEPS</strong></td><td>Premier Entré, Premier Sorti</td><td>Autorisé. Logique pour produits périssables.</td></tr>
  <tr><td>LIFO / DEPS</td><td>Dernier Entré, Premier Sorti</td><td><strong>Interdit</strong> en France (PCG)</td></tr>
</table>

<h3>2. CMP après chaque entrée</h3>
<p>Recalculé à chaque réception. Soit :</p>
<table class="table">
  <tr><th>Date</th><th>Mouvement</th><th>Qté</th><th>PU</th><th>Stock après</th><th>CMP</th></tr>
  <tr><td>01/03</td><td>SI</td><td>100</td><td>10,00 €</td><td>100 → 1 000 €</td><td>10,00</td></tr>
  <tr><td>05/03</td><td>Entrée</td><td>200</td><td>11,00 €</td><td>300 → 3 200 €</td><td>10,67</td></tr>
  <tr><td>10/03</td><td>Sortie</td><td>−150</td><td>10,67</td><td>150 → 1 600,50 €</td><td>10,67</td></tr>
  <tr><td>15/03</td><td>Entrée</td><td>100</td><td>12,00 €</td><td>250 → 2 800,50 €</td><td>11,20</td></tr>
</table>
<p>Calcul du CMP : (1 600,50 + 100×12) / (150+100) = 2 800,50 / 250 = 11,20.</p>

<h3>3. FIFO (Premier Entré Premier Sorti)</h3>
<p>Les sorties épuisent les lots dans leur ordre d'entrée. Le stock final est valorisé aux <strong>derniers prix d'entrée</strong>.</p>
<p>Reprenant l'exemple : sortie de 150 unités le 10/03 = 100 du SI à 10 € + 50 entrées du 05/03 à 11 € = 1 000 + 550 = 1 550 €.<br>
Stock après sortie = 150 unités du lot 05/03 à 11 € = 1 650 €.</p>

<h3>4. Effet sur le résultat</h3>
<p>En période d'<strong>inflation</strong> (prix qui montent) :</p>
<ul>
  <li><strong>FIFO</strong> : sorties valorisées à l'ancien prix (bas) → COGS bas → bénéfice plus élevé → impôt plus élevé</li>
  <li><strong>CMP</strong> : effet lissé, intermédiaire</li>
</ul>

<h3>5. Bonnes pratiques BTS</h3>
<ul>
  <li>Présenter le tableau de mouvements à 4 colonnes : entrées, sorties, stock, CMP/PU</li>
  <li>Pour le CMP en fin de période : (Stock initial + Achats) / (Qté SI + Qté entrées)</li>
  <li>Pour le FIFO : tracer mentalement les "couches" de stock par date d'entrée</li>
</ul>
    `,
    quiz: [
      { question: "En période d'inflation, FIFO donne :", choix: ["Plus de bénéfice qu'avec CMP", "Moins de bénéfice qu'avec CMP", "Le même résultat", "Indéterminé"], reponse: 0, explication: "FIFO sort les lots anciens (bas prix) → COGS faible → bénéfice élevé. CMP lisse." }
    ]
  },

  {
    id: "L55", processus: "P2", titre: "Cession d'immobilisation", duree_min: 18,
    contenu: `
<h3>1. Étapes de la cession</h3>
<ol>
  <li><strong>Constater la dotation complémentaire</strong> jusqu'au jour de la cession (prorata temporis)</li>
  <li><strong>Sortir l'immobilisation</strong> du bilan : crédit du compte 21x, débit du 281x (cumul amort), différence en VNC en charge exceptionnelle (675)</li>
  <li><strong>Enregistrer le prix de cession</strong> en produit exceptionnel (775)</li>
  <li>Plus-value ou moins-value = 775 − 675</li>
</ol>

<h3>2. Exemple complet</h3>
<p>Machine acquise le 01/01/2020, valeur d'origine 30 000 €, durée 5 ans, linéaire. Cédée le 01/07/2024 pour 8 000 € HT.</p>
<ul>
  <li>Annuité annuelle = 30 000 × 20% = 6 000 €</li>
  <li>Cumul au 31/12/2023 (4 ans complets) = 24 000 €</li>
  <li>Dotation complémentaire 2024 (6 mois) = 6 000 × 6/12 = 3 000 €</li>
  <li>Cumul total au 01/07/2024 = 27 000 €</li>
  <li>VNC = 30 000 − 27 000 = <strong>3 000 €</strong></li>
  <li>Plus-value = 8 000 − 3 000 = <strong>+5 000 €</strong></li>
</ul>

<h3>3. Écritures</h3>
<table class="ecriture">
  <tr><th colspan="4">Écriture 1 : dotation complémentaire</th></tr>
  <tr><td>68112</td><td>DAP</td><td>3 000</td><td></td></tr>
  <tr><td>2815</td><td>Cumul amort matériel</td><td></td><td>3 000</td></tr>
  <tr><th colspan="4">Écriture 2 : sortie de l'immobilisation</th></tr>
  <tr><td>675</td><td>VNC immo cédées</td><td>3 000</td><td></td></tr>
  <tr><td>2815</td><td>Cumul amort (annulation)</td><td>27 000</td><td></td></tr>
  <tr><td>2154</td><td>Matériel industriel</td><td></td><td>30 000</td></tr>
  <tr><th colspan="4">Écriture 3 : encaissement</th></tr>
  <tr><td>462</td><td>Créance sur cession (ou 512)</td><td>9 600</td><td></td></tr>
  <tr><td>775</td><td>Produits cession (HT)</td><td></td><td>8 000</td></tr>
  <tr><td>445710</td><td>TVA collectée 20%</td><td></td><td>1 600</td></tr>
</table>

<h3>4. Régularisation TVA</h3>
<p>Pour les biens cédés <strong>moins de 5 ans</strong> après l'acquisition, il peut y avoir une régularisation de la TVA initialement déduite (sur immo). Cas rare en BTS.</p>

<h3>5. Mise au rebut (immo non revendue)</h3>
<p>Mêmes écritures sauf qu'il n'y a pas de 462/775 (pas de prix de cession). On constate seulement la VNC en 675.</p>
    `,
    quiz: [
      { question: "Une machine VNC 4 000 € est cédée 6 000 € HT. La plus-value est :", choix: ["+10 000 €", "+6 000 €", "+2 000 €", "Pas de PV"], reponse: 2, explication: "PV = prix de cession − VNC = 6 000 − 4 000 = +2 000 €. Comptablement : 775 − 675 = 6 000 − 4 000." }
    ]
  },

  {
    id: "L56", processus: "P2", titre: "Subventions reçues (investissement et exploitation)", duree_min: 14,
    contenu: `
<h3>1. Deux types principaux</h3>
<table class="table">
  <tr><th>Type</th><th>Compte</th><th>Logique</th></tr>
  <tr><td><strong>Subvention d'exploitation</strong></td><td>74</td><td>Compense des charges (ex : aide à l'embauche). Produit immédiatement intégré au CR.</td></tr>
  <tr><td><strong>Subvention d'investissement</strong></td><td>13</td><td>Aide à financer une immobilisation. Au passif (capitaux propres). Reprise étalée sur la durée d'amortissement de l'immo financée.</td></tr>
  <tr><td>Subvention d'équilibre</td><td>74</td><td>Aide à compenser un déficit (rare en privé)</td></tr>
</table>

<h3>2. Subvention d'exploitation — exemple</h3>
<p>Aide URSSAF de 4 000 € reçue par virement.</p>
<table class="ecriture">
  <tr><td>512</td><td>Banque</td><td>4 000</td><td></td></tr>
  <tr><td>74</td><td>Subventions d'exploitation</td><td></td><td>4 000</td></tr>
</table>
<p>C'est un produit qui apparaît dans la VA (juste après l'EBE).</p>

<h3>3. Subvention d'investissement — exemple</h3>
<p>Subvention reçue de 50 000 € pour financer une machine de 80 000 € (durée 10 ans).</p>
<table class="ecriture">
  <tr><th colspan="4">Réception (notification + encaissement)</th></tr>
  <tr><td>441</td><td>État - subvention à recevoir</td><td>50 000</td><td></td></tr>
  <tr><td>131</td><td>Subvention d'investissement</td><td></td><td>50 000</td></tr>
</table>
<p>Plus tard, encaissement : 512 / 441 (50 000 / 50 000).</p>

<h3>4. Reprise annuelle (étalement)</h3>
<p>Chaque année, on rapporte au compte de résultat (compte 777) une fraction = annuité d'amort de l'immo / durée :</p>
<ul>
  <li>Annuité d'amort = 80 000 / 10 = 8 000 €</li>
  <li>Quote-part de subvention reprise = 50 000 / 10 = <strong>5 000 €/an</strong></li>
</ul>
<table class="ecriture">
  <tr><td>139</td><td>Subvention d'investissement inscrite au CR</td><td>5 000</td><td></td></tr>
  <tr><td>777</td><td>Quote-part de subvention virée au CR</td><td></td><td>5 000</td></tr>
</table>
<p>Au bilan, la subvention 131 reste à 50 000, mais 139 atteint à 5 000 (puis 10k, 15k...). Le solde net diminue chaque année jusqu'à 0 en 10 ans.</p>

<h3>5. À retenir pour la CAF</h3>
<p>Le compte 777 (quote-part subvention virée au CR) est <strong>retiré de la CAF</strong> car ce n'est pas un encaissement de l'année. Ce raisonnement est crucial dans le calcul de la CAF par méthode additive.</p>
    `,
    quiz: [
      { question: "Une subvention d'investissement de 30 000 € pour une immo amortie sur 5 ans → reprise annuelle au CR ?", choix: ["3 000 €", "5 000 €", "6 000 €", "30 000 € en une fois"], reponse: 2, explication: "30 000 / 5 = 6 000 €/an. Et oui, on étale au rythme des amortissements de l'immo financée." }
    ]
  },

  {
    id: "L57", processus: "P2", titre: "Provisions : risques, charges, grosses réparations", duree_min: 15,
    contenu: `
<h3>1. Quand provisionner ?</h3>
<p>Une provision est à constituer si :</p>
<ol>
  <li>Il existe une <strong>obligation</strong> à la clôture (légale, contractuelle, implicite)</li>
  <li>Cette obligation entraînera <strong>probablement</strong> une sortie de ressources</li>
  <li>Le montant est <strong>évaluable de manière fiable</strong></li>
</ol>

<h3>2. Comptes des provisions</h3>
<table class="table">
  <tr><th>Compte</th><th>Objet</th></tr>
  <tr><td><strong>1511</strong></td><td>Provisions pour litiges (prud'hommes, contentieux fiscal, commercial)</td></tr>
  <tr><td><strong>1512</strong></td><td>Provisions pour garanties données aux clients</td></tr>
  <tr><td><strong>1513</strong></td><td>Provisions pour pertes sur marchés à terme</td></tr>
  <tr><td><strong>1515</strong></td><td>Provisions pour pertes de change</td></tr>
  <tr><td><strong>1518</strong></td><td>Autres provisions pour risques</td></tr>
  <tr><td><strong>1572</strong></td><td>Provisions pour grosses réparations</td></tr>
  <tr><td><strong>1581</strong></td><td>Provisions pour remises en état</td></tr>
</table>

<h3>3. Constitution d'une provision pour litige</h3>
<p>Un salarié réclame 12 000 € en prud'hommes ; l'avocat estime à 70% la probabilité de perte.</p>
<ul>
  <li>Provision = 12 000 × 70% = 8 400 €</li>
</ul>
<table class="ecriture">
  <tr><td>6815</td><td>Dotation aux provisions pour risques</td><td>8 400</td><td></td></tr>
  <tr><td>1511</td><td>Provision pour litiges</td><td></td><td>8 400</td></tr>
</table>

<h3>4. Provision pour grosses réparations (GR)</h3>
<p>Concerne les travaux <strong>de remplacement</strong> ou <strong>d'entretien important</strong> futurs (ex : ravalement de façade, vidange machine industrielle). Étalée sur la période entre 2 grosses réparations.</p>
<p>Exemple : ravalement prévu dans 10 ans, coût estimé 30 000 €. Provision annuelle = 3 000 €.</p>
<table class="ecriture">
  <tr><td>6815</td><td>DAP risques et charges</td><td>3 000</td><td></td></tr>
  <tr><td>1572</td><td>Provision pour grosses réparations</td><td></td><td>3 000</td></tr>
</table>

<h3>5. Reprise de provision</h3>
<p>Quand l'obligation s'éteint (litige gagné, réparation faite), on reprend :</p>
<table class="ecriture">
  <tr><td>1511</td><td>Provision pour litiges</td><td>8 400</td><td></td></tr>
  <tr><td>7815</td><td>Reprise sur provisions</td><td></td><td>8 400</td></tr>
</table>

<h3>6. Provisions réglementées (à part)</h3>
<p>Comptes <strong>14</strong> : provisions ayant un caractère <em>fiscal</em> sans correspondre à un risque réel (ex : amortissements dérogatoires, hausse des prix). Au passif des capitaux propres, pas dans la classe 15. Cas avancé.</p>

<h3>7. Pièges</h3>
<ul>
  <li>Une provision pour <strong>perte d'exploitation prévisible</strong> est <em>interdite</em> en France (sauf pour les contrats à long terme déficitaires).</li>
  <li>Bien différencier provision (passif) et dépréciation (actif).</li>
  <li>Les provisions pour risques sont <em>déductibles fiscalement</em> sous conditions ; certaines (provisions pour propres assureurs) ne le sont pas.</li>
</ul>
    `,
    quiz: [
      { question: "Compte d'une provision pour grosses réparations futures :", choix: ["1511", "1512", "1572", "491"], reponse: 2, explication: "1572 = Provisions pour grosses réparations. 1511 = litiges. 1512 = garanties clients. 491 = dépréciation des comptes clients (actif)." }
    ]
  }
);
