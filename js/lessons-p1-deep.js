// P1 approfondi — sous-thèmes détaillés du processus 1

LESSONS.push(
  {
    id: "L48", processus: "P1", titre: "Effets de commerce : LCR, BAO, traite", duree_min: 25,
    contenu: `
<h3>1. Définition</h3>
<p>Un <strong>effet de commerce</strong> est un titre négociable qui constate une créance à payer à une date déterminée. Trois types principaux :</p>
<ul>
  <li><strong>Lettre de change (LCR / traite)</strong> : créée par le créancier (tireur), acceptée par le débiteur (tiré), à payer à un bénéficiaire</li>
  <li><strong>Billet à ordre (BAO)</strong> : créé par le débiteur (souscripteur) qui s'engage à payer à un bénéficiaire</li>
  <li><strong>Warrant</strong> : effet garanti par un gage (peu utilisé en BTS)</li>
</ul>

<h3>2. Comptes utilisés</h3>
<table class="table">
  <tr><th>Compte</th><th>Usage</th></tr>
  <tr><td><strong>413</strong></td><td>Clients - effets à recevoir</td></tr>
  <tr><td><strong>403</strong></td><td>Fournisseurs - effets à payer</td></tr>
  <tr><td><strong>5113</strong></td><td>Effets à l'encaissement (remis pour encaissement à échéance)</td></tr>
  <tr><td><strong>5114</strong></td><td>Effets à l'escompte (remis avant échéance)</td></tr>
  <tr><td><strong>519</strong></td><td>Concours bancaires courants (créance d'escompte du banquier)</td></tr>
</table>

<h3>3. Cycle complet d'une LCR — vue côté tireur (le fournisseur)</h3>
<ol>
  <li><strong>Création de l'effet (transformation de la créance) :</strong>
    <table class="ecriture">
      <tr><td>413</td><td>Effets à recevoir</td><td>1 200</td><td></td></tr>
      <tr><td>411</td><td>Clients</td><td></td><td>1 200</td></tr>
    </table>
  </li>
  <li><strong>Remise à l'encaissement (à échéance, à la banque) :</strong>
    <table class="ecriture">
      <tr><td>5113</td><td>Effets à l'encaissement</td><td>1 200</td><td></td></tr>
      <tr><td>413</td><td>Effets à recevoir</td><td></td><td>1 200</td></tr>
    </table>
  </li>
  <li><strong>Encaissement par la banque (avec frais) :</strong>
    <table class="ecriture">
      <tr><td>512</td><td>Banque (net reçu)</td><td>1 196,40</td><td></td></tr>
      <tr><td>627</td><td>Services bancaires</td><td>3,00</td><td></td></tr>
      <tr><td>44566</td><td>TVA déductible</td><td>0,60</td><td></td></tr>
      <tr><td>5113</td><td>Effets à l'encaissement</td><td></td><td>1 200,00</td></tr>
    </table>
  </li>
</ol>

<h3>4. Escompte d'effet (avant échéance)</h3>
<p>Le tireur peut faire <strong>escompter</strong> l'effet auprès de sa banque pour avoir l'argent immédiatement, moyennant un coût (intérêt + commission + TVA sur commission).</p>
<table class="ecriture">
  <tr><th colspan="4">Remise à l'escompte le 15/03 d'un effet de 5 000 € échéance 30/05 (75 jours), taux 9%, commission 12 €</th></tr>
  <tr><td>5114</td><td>Effets à l'escompte</td><td>5 000</td><td></td></tr>
  <tr><td>413</td><td>Effets à recevoir</td><td></td><td>5 000</td></tr>
</table>
<p>Calcul de l'agios :</p>
<ul>
  <li>Escompte = 5 000 × 9% × 75/360 = <strong>93,75 €</strong></li>
  <li>Commission = 12 € HT</li>
  <li>TVA sur commission = 12 × 20% = 2,40 €</li>
  <li>Total agios TTC = 93,75 + 12 + 2,40 = 108,15 €</li>
  <li>Net porté en compte = 5 000 − 108,15 = <strong>4 891,85 €</strong></li>
</ul>
<table class="ecriture">
  <tr><th colspan="4">Avis de crédit reçu :</th></tr>
  <tr><td>512</td><td>Banque (net porté)</td><td>4 891,85</td><td></td></tr>
  <tr><td>661</td><td>Charges d'intérêts (escompte)</td><td>93,75</td><td></td></tr>
  <tr><td>627</td><td>Services bancaires (commission)</td><td>12,00</td><td></td></tr>
  <tr><td>44566</td><td>TVA déductible 20%</td><td>2,40</td><td></td></tr>
  <tr><td>5114</td><td>Effets à l'escompte</td><td></td><td>5 000,00</td></tr>
</table>

<h3>5. Effets à payer — côté débiteur (tiré)</h3>
<p>Quand le client accepte la LCR, sa dette fournisseur passe en effet à payer :</p>
<table class="ecriture">
  <tr><td>401</td><td>Fournisseurs</td><td>1 200</td><td></td></tr>
  <tr><td>403</td><td>Fournisseurs - effets à payer</td><td></td><td>1 200</td></tr>
</table>
<p>À l'échéance, paiement automatique par la banque :</p>
<table class="ecriture">
  <tr><td>403</td><td>Effets à payer</td><td>1 200</td><td></td></tr>
  <tr><td>512</td><td>Banque</td><td></td><td>1 200</td></tr>
</table>

<h3>6. Effet impayé</h3>
<p>Si le tiré ne paie pas à l'échéance, l'effet revient impayé. La banque débite le compte du tireur du nominal + frais :</p>
<table class="ecriture">
  <tr><td>411 (ou 416 si litige)</td><td>Cliente sur effet impayé</td><td>1 220</td><td></td></tr>
  <tr><td>512</td><td>Banque</td><td></td><td>1 220</td></tr>
</table>
<p>Frais d'impayé refacturés au client (avec TVA si présente).</p>

<h3>7. Pièges classiques en BTS</h3>
<ul>
  <li>Ne pas confondre <strong>5113</strong> (effets remis à l'encaissement, échéance proche) et <strong>5114</strong> (effets escomptés avant échéance contre avance).</li>
  <li>L'<strong>escompte est une charge financière (661)</strong>, mais l'escompte de règlement (réduction commerciale) est en 765 (ou 665 selon le sens).</li>
  <li>Bien distinguer 401/403 et 411/413 selon qu'il y a effet ou pas.</li>
</ul>
    `,
    quiz: [
      { question: "Quel compte enregistre une dette client matérialisée par une LCR acceptée ?", choix: ["411", "413", "401", "403"], reponse: 1, explication: "413 = Clients - effets à recevoir. Quand le client accepte la traite, on transfère 411 → 413." },
      { question: "L'escompte d'un effet (intérêt prélevé par la banque) va dans quel compte ?", choix: ["627 Services bancaires", "661 Charges d'intérêts", "665 Escomptes accordés", "765 Escomptes obtenus"], reponse: 1, explication: "L'escompte sur effet est une charge financière (661). 627 sert pour la commission. 665/765 sont pour les escomptes commerciaux de règlement." }
    ]
  },

  {
    id: "L49", processus: "P1", titre: "RRR : Rabais, Remises, Ristournes (et escomptes)", duree_min: 18,
    contenu: `
<h3>1. Vocabulaire</h3>
<table class="table">
  <tr><th>Réduction</th><th>Définition</th></tr>
  <tr><td><strong>Rabais</strong></td><td>Réduction exceptionnelle pour défaut de qualité, retard de livraison, problème</td></tr>
  <tr><td><strong>Remise</strong></td><td>Réduction commerciale habituelle (volume, fidélité, profession, gros client)</td></tr>
  <tr><td><strong>Ristourne</strong></td><td>Réduction calculée sur un total de période (ex : ristourne annuelle de fin d'année selon CA)</td></tr>
  <tr><td><strong>Escompte</strong></td><td>Réduction <em>financière</em> pour paiement comptant ou anticipé</td></tr>
</table>

<h3>2. Réductions commerciales sur la facture (R-R-R)</h3>
<p>Les rabais/remises/ristournes <strong>sur la facture initiale</strong> ne s'enregistrent pas séparément : ils sont déduits du HT directement.</p>
<table class="ecriture">
  <tr><th colspan="4">Facture : 1 000 € HT − 5% remise − 2% remise = 931 € HT, TVA 20%</th></tr>
  <tr><td>411</td><td>Client</td><td>1 117,20</td><td></td></tr>
  <tr><td>707</td><td>Ventes (net commercial)</td><td></td><td>931,00</td></tr>
  <tr><td>445710</td><td>TVA collectée 20%</td><td></td><td>186,20</td></tr>
</table>

<h3>3. R-R-R hors facture (avoir postérieur)</h3>
<p>Si la réduction est accordée <strong>après</strong> la facture (avoir), elle utilise un compte spécifique :</p>
<table class="table">
  <tr><th>Sens</th><th>Compte (vendeur)</th><th>Compte (acheteur)</th></tr>
  <tr><td>RRR sur ventes</td><td><strong>709</strong> (au débit, diminue les produits)</td><td><strong>609</strong> (au crédit, diminue les charges)</td></tr>
  <tr><td>RRR sur services</td><td><strong>709</strong> ou en sous-compte de 706</td><td><strong>609</strong> ou sous-compte 606</td></tr>
</table>
<p>Exemple : avoir de 100 € HT (TVA 20%) accordé au client pour défaut de qualité.</p>
<table class="ecriture">
  <tr><th colspan="4">Côté vendeur :</th></tr>
  <tr><td>709</td><td>RRR accordés sur ventes</td><td>100,00</td><td></td></tr>
  <tr><td>445710</td><td>TVA collectée (régularisation)</td><td>20,00</td><td></td></tr>
  <tr><td>411</td><td>Client (diminution de la créance)</td><td></td><td>120,00</td></tr>
</table>

<h3>4. Escompte de règlement</h3>
<p>L'escompte est une réduction <strong>financière</strong> pour paiement rapide (ex : "2% si paiement sous 8 jours"). Il s'enregistre <strong>séparément</strong> du HT, contrairement aux R-R-R.</p>
<table class="table">
  <tr><th>Sens</th><th>Vendeur</th><th>Acheteur</th></tr>
  <tr><td>Escompte accordé</td><td><strong>665</strong> (charge financière)</td><td><strong>765</strong> (produit financier)</td></tr>
</table>

<h3>5. Cas : escompte accordé sur la facture</h3>
<p>Facture : 1 000 € HT, escompte 2% pour paiement à 8 jours, TVA 20%. Le client paie sous 8 jours.</p>
<ul>
  <li>HT après escompte = 1 000 × (1 − 0,02) = 980 €</li>
  <li>TVA calculée sur le HT après escompte = 980 × 20% = 196 €</li>
  <li>TTC = 980 + 196 = 1 176 € (s'il prend l'escompte)</li>
</ul>
<table class="ecriture">
  <tr><th colspan="4">Comptabilisation côté vendeur (option : facture nette d'escompte) :</th></tr>
  <tr><td>411</td><td>Client</td><td>1 200,00</td><td></td></tr>
  <tr><td>665</td><td>Escompte accordé</td><td>20,00</td><td></td></tr>
  <tr><td>707</td><td>Ventes HT</td><td></td><td>1 000,00</td></tr>
  <tr><td>445710</td><td>TVA collectée 20% (sur 1 000 − 20 = 980)</td><td></td><td>196,00</td></tr>
  <tr><td colspan="2">Vérification</td><td>1 220</td><td>1 196 + 20 = 1 216 ≠</td></tr>
</table>
<p>Cas pratique en BTS — la TVA est <strong>toujours sur le net commercial après escompte</strong>, même si le client ne profite pas de l'escompte. Bien retenir cette règle.</p>

<h3>6. Récap rapide pour ne pas se planter</h3>
<div class="encadre">
  <ul>
    <li><strong>Rabais / remise / ristourne sur la facture initiale</strong> → directement dans le HT, pas de compte 709/609</li>
    <li><strong>R-R-R sur avoir postérieur</strong> → 709 (vendeur) ou 609 (acheteur)</li>
    <li><strong>Escompte de règlement</strong> → toujours 665 (vendeur) ou 765 (acheteur), peu importe quand</li>
    <li><strong>TVA</strong> → toujours sur le HT net de toutes les réductions commerciales et financières</li>
  </ul>
</div>
    `,
    quiz: [
      { question: "Une remise de 100 € HT accordée sur la facture initiale s'enregistre :", choix: ["Au débit du 709", "Directement dans le 707 (HT net)", "Au crédit du 665", "Au débit du 411"], reponse: 1, explication: "Sur la facture initiale, les R-R-R sont déduits du HT. Pas de compte spécifique. Seuls les avoirs postérieurs vont en 709." },
      { question: "Un escompte de règlement accordé par le vendeur s'enregistre dans :", choix: ["709 RRR accordés", "665 Escompte accordé", "765 Escompte obtenu", "627 Services bancaires"], reponse: 1, explication: "Côté vendeur = 665 (charge financière). Côté acheteur = 765 (produit financier)." }
    ]
  },

  {
    id: "L50", processus: "P1", titre: "Acomptes et avances", duree_min: 15,
    contenu: `
<h3>1. Acompte versé à un fournisseur</h3>
<p>Un acompte = paiement avant la livraison/exécution. Il est versé sans facture finale → la TVA est due par le fournisseur (sauf opt out) sur l'acompte si c'est un service ; pas si c'est un bien (TVA à la livraison).</p>

<h3>2. Comptes utilisés</h3>
<ul>
  <li><strong>4091</strong> : Fournisseurs - avances et acomptes versés sur commandes (débit côté acheteur)</li>
  <li><strong>4191</strong> : Clients - avances et acomptes reçus sur commandes (crédit côté vendeur)</li>
</ul>

<h3>3. Cas : Acompte sur achat de marchandises (TVA à la livraison)</h3>
<p>Versement d'un acompte de 1 200 € (sans facture) le 10/03 :</p>
<table class="ecriture">
  <tr><td>4091</td><td>Acompte versé sur commande</td><td>1 200</td><td></td></tr>
  <tr><td>512</td><td>Banque</td><td></td><td>1 200</td></tr>
</table>
<p>Réception facture finale 5 000 € HT + TVA 20% = 6 000 € TTC, le 25/03 :</p>
<table class="ecriture">
  <tr><td>607</td><td>Achats marchandises</td><td>5 000</td><td></td></tr>
  <tr><td>445660</td><td>TVA déductible 20%</td><td>1 000</td><td></td></tr>
  <tr><td>4091</td><td>Solde de l'acompte</td><td></td><td>1 200</td></tr>
  <tr><td>401</td><td>Fournisseur (solde restant)</td><td></td><td>4 800</td></tr>
</table>
<p>Vérif : débits 6 000 = crédits 1 200 + 4 800 = 6 000 ✓</p>

<h3>4. Cas : Acompte sur prestation de services (TVA exigible à l'encaissement)</h3>
<p>Acompte de 600 € TTC (TVA 20%) reçu d'un client le 05/03 :</p>
<ul>
  <li>HT = 600/1,20 = 500 €</li>
  <li>TVA = 100 €</li>
</ul>
<p>Côté <strong>vendeur</strong> :</p>
<table class="ecriture">
  <tr><td>512</td><td>Banque</td><td>600</td><td></td></tr>
  <tr><td>4191</td><td>Acompte reçu</td><td></td><td>500</td></tr>
  <tr><td>445710</td><td>TVA collectée (sur acompte service)</td><td></td><td>100</td></tr>
</table>
<p>Quand la facture finale est émise (3 000 € HT + 600 € TVA = 3 600 € TTC) :</p>
<table class="ecriture">
  <tr><td>411</td><td>Client (solde restant 3 000)</td><td>3 000</td><td></td></tr>
  <tr><td>4191</td><td>Solde acompte</td><td>500</td><td></td></tr>
  <tr><td>706</td><td>Prestations (HT total)</td><td></td><td>3 000</td></tr>
  <tr><td>445710</td><td>TVA sur le solde (3 000 − 500 = 2 500 × 20%)</td><td></td><td>500</td></tr>
</table>

<h3>5. Pièges</h3>
<ul>
  <li><strong>Bien et service ≠ même règle TVA</strong> : sur un bien, TVA exigible à la livraison. Sur un service, à l'encaissement (donc sur l'acompte). Sauf option pour les débits (ligne F2 du CA3).</li>
  <li>L'acompte n'est pas une charge ni un produit : c'est juste un mouvement de trésorerie + créance/dette d'attente.</li>
  <li>À la facture finale, l'acompte est <strong>soldé</strong> (compensation).</li>
</ul>
    `,
    quiz: [
      { question: "Un acompte versé à un fournisseur de marchandises se met dans :", choix: ["401", "411", "4091", "4191"], reponse: 2, explication: "4091 = Fournisseurs - avances et acomptes versés (côté acheteur). 4191 c'est l'inverse (côté vendeur, acompte reçu)." }
    ]
  },

  {
    id: "L51", processus: "P1", titre: "Frais accessoires sur achat (ports, douane)", duree_min: 12,
    contenu: `
<h3>1. Trois traitements possibles</h3>
<p>Quand un fournisseur facture des frais de port, d'emballage, de transport, de douane, on a trois choix selon la nature :</p>
<table class="table">
  <tr><th>Cas</th><th>Compte de port</th></tr>
  <tr><td>Port forfaitaire facturé par le fournisseur</td><td>Inclus dans le coût d'achat (607 + 624)</td></tr>
  <tr><td>Port assuré par un transporteur tiers</td><td><strong>624</strong> Transports de biens</td></tr>
  <tr><td>Port refacturé au client (ports facturés)</td><td>Au crédit du <strong>708500</strong> (Ports et frais accessoires facturés)</td></tr>
</table>

<h3>2. Coût d'acquisition d'une immobilisation</h3>
<div class="encadre">
  <p><strong>Le coût d'acquisition d'une immo INCLUT</strong> :
  prix d'achat + droits de douane + frais de transport + installation + mise en service. Pas la formation, pas l'entretien.</p>
</div>
<p>Exemple : machine 20 000 € HT + transport 800 € HT + installation 1 200 € HT.</p>
<table class="ecriture">
  <tr><td>2154</td><td>Matériel industriel (20 000+800+1 200)</td><td>22 000</td><td></td></tr>
  <tr><td>445620</td><td>TVA déductible immo</td><td>4 400</td><td></td></tr>
  <tr><td>404</td><td>Fournisseurs immobilisations</td><td></td><td>26 400</td></tr>
</table>

<h3>3. Refacturation de port à un client</h3>
<p>Le vendeur a payé 50 € de port + 10 € TVA = 60 €, et refacture 60 € HT au client (avec sa marge zéro). On peut traiter ainsi :</p>
<ul>
  <li><strong>Option 1 — Port en débours</strong> : le port refacturé annule le port payé, sans impact sur le résultat → contrepartie en 624</li>
  <li><strong>Option 2 — Port comme produit accessoire</strong> : compte 708500 au crédit côté vendeur (recommandé)</li>
</ul>
<p>Comptabilisation côté vendeur :</p>
<table class="ecriture">
  <tr><td>411</td><td>Client (port refacturé 60 + TVA 12)</td><td>72</td><td></td></tr>
  <tr><td>708500</td><td>Ports refacturés HT</td><td></td><td>60</td></tr>
  <tr><td>445710</td><td>TVA collectée</td><td></td><td>12</td></tr>
</table>
    `,
    quiz: [
      { question: "Le coût d'acquisition d'une immobilisation comprend :", choix: ["Le prix HT seulement", "Le prix HT + transport + installation", "Le prix HT + frais de formation", "Le TTC"], reponse: 1, explication: "Le coût d'acquisition inclut tous les frais nécessaires à la mise en service (transport, douane, installation, mise en service). Pas la formation ni l'entretien courant." }
    ]
  },

  {
    id: "L52", processus: "P1", titre: "Créances et dettes en devises", duree_min: 15,
    contenu: `
<h3>1. Le cours du change</h3>
<p>Une facture en devises (USD, GBP, JPY...) doit être convertie en € au moment de l'enregistrement. Les opérations courantes utilisent le <strong>cours du jour de la facture</strong>.</p>

<h3>2. Comptabilisation initiale</h3>
<p>Vente à un client US : 5 000 USD le 10/03, cours 1 USD = 0,92 €.</p>
<ul>
  <li>Conversion : 5 000 × 0,92 = <strong>4 600 €</strong></li>
</ul>
<table class="ecriture">
  <tr><td>411</td><td>Client US (en €)</td><td>4 600</td><td></td></tr>
  <tr><td>707</td><td>Ventes</td><td></td><td>4 600</td></tr>
</table>

<h3>3. Encaissement à un cours différent</h3>
<p>Encaissement le 25/03, cours 1 USD = 0,95 €.</p>
<ul>
  <li>Encaissement réel = 5 000 × 0,95 = 4 750 €</li>
  <li>Différence = 4 750 − 4 600 = +150 € → <strong>gain de change</strong> (compte 766)</li>
</ul>
<table class="ecriture">
  <tr><td>512</td><td>Banque</td><td>4 750</td><td></td></tr>
  <tr><td>411</td><td>Client (solde)</td><td></td><td>4 600</td></tr>
  <tr><td>766</td><td>Gain de change</td><td></td><td>150</td></tr>
</table>
<p>Si le cours avait baissé, on aurait constaté une <strong>perte de change (compte 666)</strong>.</p>

<h3>4. À la clôture (créance non encore encaissée)</h3>
<p>Si la créance reste ouverte au 31/12 et que le cours a évolué, on évalue à la <strong>cours de clôture</strong> et on constate une <strong>différence de conversion</strong> :</p>
<ul>
  <li><strong>477</strong> : Différences de conversion - Passif (gain latent)</li>
  <li><strong>476</strong> : Différences de conversion - Actif (perte latente)</li>
</ul>
<p>Si perte latente, on doit constituer une <strong>provision pour pertes de change (1515)</strong> en application du principe de prudence.</p>

<h3>5. Exemple de clôture</h3>
<p>Créance 5 000 USD au 31/12, cours d'origine 0,92 (= 4 600 € au bilan), cours du 31/12 = 0,90.</p>
<ul>
  <li>Valeur actuelle = 5 000 × 0,90 = 4 500 €</li>
  <li>Perte latente = 4 600 − 4 500 = 100 €</li>
</ul>
<table class="ecriture">
  <tr><td>476</td><td>Différence de conversion - actif</td><td>100</td><td></td></tr>
  <tr><td>411</td><td>Client (ajustement)</td><td></td><td>100</td></tr>
  <tr><td>6865</td><td>Dotation aux provisions financières</td><td>100</td><td></td></tr>
  <tr><td>1515</td><td>Provision pour pertes de change</td><td></td><td>100</td></tr>
</table>
<p>Au 1/1 (ouverture suivante), on contrepasse les écritures 476 et 411 pour rétablir.</p>

<h3>6. Synthèse</h3>
<div class="encadre">
  <ul>
    <li>En cours d'exercice : 766 (gain) ou 666 (perte) selon le sens du change</li>
    <li>À la clôture : 476/477 + provision si perte latente</li>
    <li>Pour les exporteurs réguliers, on peut couvrir le risque par un <strong>contrat de change à terme</strong> (cours fixé d'avance)</li>
  </ul>
</div>
    `,
    quiz: [
      { question: "Une créance en USD comptabilisée à 5 000 € (cours 0,92) est encaissée plus tard pour 5 200 € (cours 0,94). On a :", choix: ["Une perte de change de 200 €", "Un gain de change de 200 €", "Pas d'impact si cours similaire", "Une différence de conversion seulement"], reponse: 1, explication: "Encaissement réel > valeur comptabilisée → 200 € de plus reçus → gain de change (766) en produit financier." }
    ]
  }
);
