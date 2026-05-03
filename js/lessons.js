// Cours BTS CG — Phase 1 : Processus P1 (opérations commerciales)
// Référentiel : Arrêté du 8 juillet 2024 (session 2025+)

const LESSONS = [
  {
    id: "L01",
    processus: "P1",
    titre: "Qu'est-ce que la comptabilité ?",
    duree_min: 10,
    contenu: `
<h3>1. Définition</h3>
<p>La <strong>comptabilité générale</strong> est l'outil qui permet à une entreprise de mesurer son activité économique. Elle enregistre toutes les opérations qui modifient le patrimoine de l'entreprise (achats, ventes, paiements, emprunts...).</p>

<h3>2. Trois rôles fondamentaux</h3>
<ul>
  <li><strong>Mémoriser</strong> : enregistrer chaque opération avec date, montant, justificatif.</li>
  <li><strong>Informer</strong> : produire les états financiers (bilan, compte de résultat) qui montrent la santé de l'entreprise.</li>
  <li><strong>Prouver</strong> : la comptabilité est <em>obligatoire</em> et a force probante face à l'administration fiscale, aux banques, aux associés.</li>
</ul>

<h3>3. Cadre légal en France</h3>
<p>Toute entreprise commerciale doit tenir une comptabilité conforme au <strong>Plan Comptable Général (PCG)</strong>. Les obligations principales :</p>
<ul>
  <li>Tenir un <strong>livre-journal</strong> (toutes les écritures dans l'ordre chronologique).</li>
  <li>Tenir un <strong>grand livre</strong> (toutes les écritures regroupées par compte).</li>
  <li>Établir des <strong>comptes annuels</strong> (bilan + compte de résultat + annexe) à la clôture.</li>
  <li>Conserver les pièces justificatives <strong>10 ans</strong>.</li>
</ul>

<h3>4. À retenir</h3>
<div class="encadre">
  <p>La comptabilité n'est pas une option : c'est une <strong>obligation légale</strong>. Toute opération doit être appuyée par une pièce justificative (facture, ticket, relevé bancaire, contrat...).</p>
</div>
    `,
    quiz: [
      {
        question: "Combien de temps faut-il conserver les pièces justificatives comptables en France ?",
        choix: ["3 ans", "5 ans", "10 ans", "À vie"],
        reponse: 2,
        explication: "Les pièces comptables doivent être conservées 10 ans (article L123-22 du Code de commerce)."
      },
      {
        question: "Quel document regroupe les écritures par compte ?",
        choix: ["Le livre-journal", "Le grand livre", "Le bilan", "L'annexe"],
        reponse: 1,
        explication: "Le grand livre regroupe par compte. Le livre-journal les enregistre dans l'ordre chronologique."
      }
    ]
  },

  {
    id: "L02",
    processus: "P1",
    titre: "Le Plan Comptable Général (PCG)",
    duree_min: 15,
    contenu: `
<h3>1. Le principe</h3>
<p>Le PCG est la <strong>liste normalisée des comptes</strong> que toute entreprise française doit utiliser. Chaque compte a un <strong>numéro</strong> et un <strong>libellé</strong>. Le numéro suit une logique : <em>plus il commence par un chiffre élevé, plus il décrit une opération courante</em>.</p>

<h3>2. Les 7 classes</h3>
<table class="table">
  <tr><th>Classe</th><th>Type</th><th>Exemples</th></tr>
  <tr><td><strong>1</strong></td><td>Capitaux</td><td>101 Capital, 164 Emprunts, 120 Résultat</td></tr>
  <tr><td><strong>2</strong></td><td>Immobilisations</td><td>213 Constructions, 218 Matériel, 281 Amortissements</td></tr>
  <tr><td><strong>3</strong></td><td>Stocks</td><td>31 Matières, 37 Marchandises</td></tr>
  <tr><td><strong>4</strong></td><td>Tiers</td><td>401 Fournisseurs, 411 Clients, 445 TVA, 421 Salaires</td></tr>
  <tr><td><strong>5</strong></td><td>Financiers</td><td>512 Banque, 530 Caisse</td></tr>
  <tr><td><strong>6</strong></td><td>Charges</td><td>607 Achats, 613 Loyer, 641 Salaires</td></tr>
  <tr><td><strong>7</strong></td><td>Produits</td><td>707 Ventes marchandises, 706 Prestations</td></tr>
</table>

<h3>3. Bilan vs Compte de résultat</h3>
<p>Les comptes des classes <strong>1 à 5</strong> figurent au <strong>bilan</strong> (photographie du patrimoine à un instant T).</p>
<p>Les comptes des classes <strong>6 et 7</strong> figurent au <strong>compte de résultat</strong> (flux sur la période).</p>

<h3>4. Lire un numéro de compte</h3>
<p>Exemple : <code>445660</code> — TVA déductible sur autres biens et services</p>
<ul>
  <li><strong>4</strong> = classe 4 (tiers)</li>
  <li><strong>44</strong> = État</li>
  <li><strong>445</strong> = TVA</li>
  <li><strong>4456</strong> = TVA déductible</li>
  <li><strong>44566</strong> = sur biens et services</li>
  <li><strong>445660</strong> = sous-compte spécifique</li>
</ul>

<h3>5. À retenir</h3>
<div class="encadre">
  <p>Le premier chiffre du compte vous dit <strong>tout de suite</strong> de quoi il s'agit. Quand vous voyez "401" dans une écriture, vous savez : classe 4 = tiers, 40 = fournisseur. Quand vous voyez "607" : classe 6 = charge, achat de marchandises.</p>
</div>
    `,
    quiz: [
      {
        question: "Le compte 411 appartient à quelle classe ?",
        choix: ["Classe 1 - Capitaux", "Classe 4 - Tiers", "Classe 5 - Financiers", "Classe 6 - Charges"],
        reponse: 1,
        explication: "411 = Clients, classe 4 (comptes de tiers). Tous les comptes commençant par 4 concernent les relations avec les tiers (clients, fournisseurs, État, salariés...)."
      },
      {
        question: "Où trouve-t-on les comptes de la classe 7 ?",
        choix: ["Au bilan, à l'actif", "Au bilan, au passif", "Au compte de résultat, en produits", "Dans l'annexe"],
        reponse: 2,
        explication: "Classes 6 et 7 = compte de résultat. Classe 6 = charges. Classe 7 = produits."
      },
      {
        question: "Quel est le compte du PCG pour les ventes de marchandises ?",
        choix: ["607", "706", "707", "411"],
        reponse: 2,
        explication: "707 = Ventes de marchandises. 607 = Achats de marchandises. 706 = Prestations de services."
      }
    ]
  },

  {
    id: "L03",
    processus: "P1",
    titre: "Le principe de la partie double",
    duree_min: 15,
    contenu: `
<h3>1. La règle d'or</h3>
<div class="encadre">
  <p>Toute opération est enregistrée <strong>au moins deux fois</strong> : une fois au <strong>débit</strong> d'un ou plusieurs comptes, une fois au <strong>crédit</strong> d'un ou plusieurs comptes. <br>
  <strong>Total débit = Total crédit</strong>, toujours.</p>
</div>

<h3>2. Pourquoi ?</h3>
<p>Parce que toute opération a <strong>deux faces</strong> :</p>
<ul>
  <li>D'où vient l'argent ? (l'<strong>origine</strong>, ou ressource)</li>
  <li>Où va-t-il ? (l'<strong>emploi</strong>)</li>
</ul>
<p>Exemple : vous achetez du matériel pour 1 000 € en espèces.</p>
<ul>
  <li>Emploi : le matériel entre dans le patrimoine → débit du compte 218</li>
  <li>Ressource : la caisse diminue → crédit du compte 530</li>
</ul>

<h3>3. Sens normal des comptes</h3>
<table class="table">
  <tr><th>Type de compte</th><th>Augmente par</th><th>Diminue par</th></tr>
  <tr><td>Actif (classes 2, 3, 5, 411, 445660...)</td><td>Débit</td><td>Crédit</td></tr>
  <tr><td>Passif (classes 1, 401, 445710, 421...)</td><td>Crédit</td><td>Débit</td></tr>
  <tr><td>Charges (classe 6)</td><td>Débit</td><td>Crédit</td></tr>
  <tr><td>Produits (classe 7)</td><td>Crédit</td><td>Débit</td></tr>
</table>

<h3>4. Le mémo qui marche toujours</h3>
<p>Quand vous ne savez plus dans quel sens passer une écriture :</p>
<ol>
  <li><strong>Identifiez le mouvement</strong> sur les comptes financiers (banque/caisse). Si l'argent <em>sort</em>, on crédite. Si l'argent <em>entre</em>, on débite.</li>
  <li><strong>Le reste</strong> de l'écriture s'équilibre dans l'autre sens.</li>
</ol>

<h3>5. Exemple complet</h3>
<p>Vente de marchandises à un client, 600 € HT + TVA 20% = 720 € TTC, payé immédiatement par chèque.</p>
<table class="ecriture">
  <tr><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>512</td><td>Banque (entrée)</td><td>720,00</td><td></td></tr>
  <tr><td>707</td><td>Ventes marchandises</td><td></td><td>600,00</td></tr>
  <tr><td>445710</td><td>TVA collectée</td><td></td><td>120,00</td></tr>
  <tr><td colspan="2"><strong>Total</strong></td><td><strong>720,00</strong></td><td><strong>720,00</strong></td></tr>
</table>
<p>L'argent <em>entre</em> en banque (débit 512). Le revenu vient de la vente (crédit 707) et la TVA collectée est due à l'État (crédit 445710). Total débit = total crédit = 720. ✓</p>
    `,
    quiz: [
      {
        question: "Vous payez le loyer 800 € HT par virement bancaire (TVA 20%). Quel est le crédit principal ?",
        choix: ["Crédit 613 (loyer) 800 €", "Crédit 512 (banque) 960 €", "Crédit 401 (fournisseur) 960 €", "Crédit 445710 160 €"],
        reponse: 1,
        explication: "Paiement immédiat par virement → l'argent sort de la banque, on crédite 512 du montant TTC (960 €). Au débit : 613 pour 800, 445660 pour 160."
      },
      {
        question: "Le compte 401 (Fournisseurs) augmente quand on le...",
        choix: ["Débite", "Crédite", "Lettre", "Solde"],
        reponse: 1,
        explication: "401 est un compte de passif (dette envers le fournisseur). Comme tous les comptes de passif, il augmente au crédit et diminue au débit."
      }
    ]
  },

  {
    id: "L04",
    processus: "P1",
    titre: "La TVA : mécanisme et taux",
    duree_min: 20,
    contenu: `
<h3>1. Qu'est-ce que la TVA ?</h3>
<p>La <strong>TVA (Taxe sur la Valeur Ajoutée)</strong> est un impôt indirect supporté par le consommateur final. L'entreprise n'est qu'un <strong>collecteur</strong> pour le compte de l'État :</p>
<ul>
  <li>Sur ses <strong>ventes</strong>, elle <em>collecte</em> la TVA auprès du client (compte 445710).</li>
  <li>Sur ses <strong>achats</strong>, elle <em>paie</em> de la TVA à ses fournisseurs et la <em>récupère</em> (compte 445660).</li>
  <li>À la fin du mois (ou trimestre), elle <em>verse à l'État</em> la différence : <strong>TVA collectée − TVA déductible = TVA à décaisser</strong> (compte 445510).</li>
</ul>

<h3>2. Les 4 taux français</h3>
<table class="table">
  <tr><th>Taux</th><th>Nom</th><th>Concerne</th></tr>
  <tr><td><strong>20 %</strong></td><td>Normal</td><td>La majorité des biens et services</td></tr>
  <tr><td><strong>10 %</strong></td><td>Intermédiaire</td><td>Restauration sur place, transports, travaux dans logements de + 2 ans, hôtellerie</td></tr>
  <tr><td><strong>5,5 %</strong></td><td>Réduit</td><td>Produits alimentaires, livres, équipements pour handicapés, énergie</td></tr>
  <tr><td><strong>2,1 %</strong></td><td>Particulier</td><td>Médicaments remboursés, presse</td></tr>
</table>

<h3>3. Calculs HT / TVA / TTC</h3>
<div class="encadre">
  <p><strong>HT × (1 + taux) = TTC</strong><br>
  <strong>TTC ÷ (1 + taux) = HT</strong><br>
  <strong>TVA = HT × taux = TTC − HT</strong></p>
</div>
<p>Exemple à 20 % : un produit à 100 € HT coûte 100 × 1,20 = <strong>120 € TTC</strong>. La TVA est de 20 €.</p>
<p>Inversement à 20 % : un produit à 240 € TTC fait 240 / 1,20 = <strong>200 € HT</strong>. La TVA est de 40 €.</p>

<h3>4. Quand passer la TVA en compta ?</h3>
<ul>
  <li><strong>Sur biens</strong> : à la livraison (= à la facturation en pratique).</li>
  <li><strong>Sur services</strong> : à l'<strong>encaissement</strong> en principe (TVA "sur les encaissements"), sauf option pour les "débits" (à la facturation).</li>
</ul>
<p>En BTS, on travaille presque toujours sous le régime <strong>réel normal</strong> avec déclaration mensuelle CA3.</p>

<h3>5. Comptes de TVA à connaître par cœur</h3>
<table class="table">
  <tr><td><strong>445660</strong></td><td>TVA déductible sur biens et services</td></tr>
  <tr><td><strong>445620</strong></td><td>TVA déductible sur immobilisations</td></tr>
  <tr><td><strong>445710</strong></td><td>TVA collectée</td></tr>
  <tr><td><strong>445510</strong></td><td>TVA à décaisser (à payer à l'État)</td></tr>
  <tr><td><strong>445670</strong></td><td>Crédit de TVA à reporter</td></tr>
</table>
    `,
    quiz: [
      {
        question: "Une facture indique 480 € TTC, taux de TVA 20 %. Quel est le montant HT ?",
        choix: ["384,00 €", "400,00 €", "460,00 €", "576,00 €"],
        reponse: 1,
        explication: "HT = TTC / (1 + taux) = 480 / 1,20 = 400 €. La TVA est donc de 80 €."
      },
      {
        question: "À quoi sert le compte 445510 ?",
        choix: ["Enregistrer la TVA payée aux fournisseurs", "Enregistrer la TVA encaissée des clients", "Représenter la dette de TVA envers l'État", "Comptabiliser la TVA des immobilisations"],
        reponse: 2,
        explication: "445510 = TVA à décaisser. C'est la dette envers l'État après calcul : TVA collectée − TVA déductible. Elle apparaît à la déclaration mensuelle."
      },
      {
        question: "Un restaurant vend un menu à 22 € TTC. Quel est le taux applicable et la TVA ?",
        choix: ["20 % → TVA 3,67 €", "10 % → TVA 2,00 €", "5,5 % → TVA 1,15 €", "2,1 % → TVA 0,46 €"],
        reponse: 1,
        explication: "Restauration sur place = taux intermédiaire 10 %. HT = 22 / 1,10 = 20 €. TVA = 22 − 20 = 2 €."
      }
    ]
  },

  {
    id: "L05",
    processus: "P1",
    titre: "Enregistrer une facture d'achat",
    duree_min: 20,
    contenu: `
<h3>1. La règle générale</h3>
<p>Une facture d'achat se passe <strong>toujours en 3 lignes</strong> (en l'absence de réductions) :</p>
<ol>
  <li>Au <strong>débit</strong> : le compte de <strong>charge</strong> (classe 6) ou d'<strong>immobilisation</strong> (classe 2) → montant HT</li>
  <li>Au <strong>débit</strong> : le compte de <strong>TVA déductible</strong> 445660 (ou 445620 pour immo) → montant TVA</li>
  <li>Au <strong>crédit</strong> : le compte <strong>401 Fournisseurs</strong> → montant TTC</li>
</ol>

<h3>2. Quel compte de charge utiliser ?</h3>
<table class="table">
  <tr><th>Si l'achat est...</th><th>Compte</th></tr>
  <tr><td>Une marchandise destinée à être revendue en l'état</td><td><strong>607</strong> Achats de marchandises</td></tr>
  <tr><td>Une matière première transformée</td><td><strong>601</strong> Achats matières premières</td></tr>
  <tr><td>Un loyer immobilier</td><td><strong>613200</strong> Locations immobilières</td></tr>
  <tr><td>De l'électricité, eau, gaz</td><td><strong>606800</strong> ou <strong>606100</strong></td></tr>
  <tr><td>Des fournitures de bureau</td><td><strong>606400</strong> Fournitures administratives</td></tr>
  <tr><td>Une assurance</td><td><strong>616000</strong> Primes d'assurances</td></tr>
  <tr><td>Un téléphone, internet, poste</td><td><strong>626000</strong> Frais postaux et télécom</td></tr>
  <tr><td>Des honoraires (avocat, comptable...)</td><td><strong>622600</strong> Honoraires</td></tr>
</table>

<h3>3. Exemple commenté</h3>
<p>Reçu le 15/03/2024 : facture du fournisseur "Métro" n° F-2024-887, achat de marchandises 500 € HT + TVA 20 % = 600 € TTC, payable à 30 jours.</p>
<table class="ecriture">
  <tr><th>Date</th><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>15/03</td><td>607000</td><td>Achats marchandises Métro F-2024-887</td><td>500,00</td><td></td></tr>
  <tr><td>15/03</td><td>445660</td><td>TVA déductible 20 %</td><td>100,00</td><td></td></tr>
  <tr><td>15/03</td><td>401000</td><td>Fournisseur Métro F-2024-887</td><td></td><td>600,00</td></tr>
</table>

<h3>4. Astuce</h3>
<div class="encadre">
  <p>Au débit, vous mettez le <em>HT</em> et la <em>TVA</em>, séparés. Au crédit, vous mettez le <em>TTC</em>, tout d'un bloc. Si la somme des débits ≠ crédit, vous avez une erreur de calcul TVA.</p>
</div>
    `,
    quiz: [
      {
        question: "Vous recevez la facture EDF de 240 € TTC (taux 20 %), payable à 15 jours. Quelle est l'écriture ?",
        choix: [
          "Débit 607 200 / Débit 445660 40 / Crédit 401 240",
          "Débit 606800 200 / Débit 445660 40 / Crédit 401 240",
          "Débit 606800 240 / Crédit 401 240",
          "Débit 606800 200 / Débit 445710 40 / Crédit 401 240"
        ],
        reponse: 1,
        explication: "L'électricité va en charge externe 606800 (ou 606100), pas en achats marchandises 607. La TVA est déductible (445660 et non 445710 qui est la collectée). HT = 240/1,20 = 200, TVA = 40, TTC = 240 au crédit du fournisseur."
      }
    ]
  },

  {
    id: "L06",
    processus: "P1",
    titre: "Enregistrer une facture de vente",
    duree_min: 15,
    contenu: `
<h3>1. La règle (image miroir de l'achat)</h3>
<ol>
  <li>Au <strong>débit</strong> : le compte <strong>411 Clients</strong> → montant TTC</li>
  <li>Au <strong>crédit</strong> : le compte de <strong>produit</strong> (classe 7) → montant HT</li>
  <li>Au <strong>crédit</strong> : le compte <strong>445710 TVA collectée</strong> → montant TVA</li>
</ol>

<h3>2. Quel compte de produit ?</h3>
<table class="table">
  <tr><td><strong>707</strong></td><td>Ventes de marchandises (revendues en l'état)</td></tr>
  <tr><td><strong>701</strong></td><td>Ventes de produits finis (fabriqués par l'entreprise)</td></tr>
  <tr><td><strong>706</strong></td><td>Prestations de services</td></tr>
  <tr><td><strong>708500</strong></td><td>Ports et frais accessoires facturés</td></tr>
</table>

<h3>3. Exemple</h3>
<p>Facture émise le 20/03/2024 au client "SARL Martin" n° FV-024, prestation de conseil 1 200 € HT, TVA 20 %, paiement à 30 jours.</p>
<table class="ecriture">
  <tr><th>Date</th><th>Compte</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td>20/03</td><td>411000</td><td>Client SARL Martin FV-024</td><td>1 440,00</td><td></td></tr>
  <tr><td>20/03</td><td>706000</td><td>Prestation de conseil HT</td><td></td><td>1 200,00</td></tr>
  <tr><td>20/03</td><td>445710</td><td>TVA collectée 20 %</td><td></td><td>240,00</td></tr>
</table>

<h3>4. Le piège classique</h3>
<div class="encadre">
  <p>Sur une vente, on utilise <strong>445710</strong> (TVA collectée), <em>pas</em> 445660. Le 445660, c'est la TVA <em>déductible</em>, sur les achats. Inverser les deux est l'erreur n°1 des débutants.</p>
</div>

<h3>5. Cas des ventes en espèces (commerce de détail)</h3>
<p>Pour un commerçant qui n'a pas de compte client (boulanger, café...), on saisit directement la recette journalière :</p>
<ul>
  <li>Débit 530 (Caisse) : montant TTC encaissé</li>
  <li>Crédit 707 (Ventes) : montant HT</li>
  <li>Crédit 445710 : TVA</li>
</ul>
    `,
    quiz: [
      {
        question: "Une vente de marchandises de 600 € HT, TVA 20 %, à crédit (à 30 jours). Quelle écriture ?",
        choix: [
          "Débit 411 720 / Crédit 707 600 / Crédit 445710 120",
          "Débit 411 600 / Crédit 707 600",
          "Débit 411 720 / Crédit 707 600 / Crédit 445660 120",
          "Débit 512 720 / Crédit 707 600 / Crédit 445710 120"
        ],
        reponse: 0,
        explication: "411 (créance client) au débit pour le TTC. 707 au crédit pour le HT. 445710 (TVA collectée) au crédit pour la TVA. C'est à crédit donc 411 et non 512."
      }
    ]
  },

  {
    id: "L07",
    processus: "P1",
    titre: "Les règlements clients et fournisseurs",
    duree_min: 12,
    contenu: `
<h3>1. Règlement d'un fournisseur</h3>
<p>Quand on paie un fournisseur dont la facture a déjà été enregistrée, l'écriture est <strong>simple</strong> : on solde la dette (401) et on sort l'argent.</p>
<ul>
  <li>Débit 401 Fournisseur : montant TTC</li>
  <li>Crédit 512 Banque (ou 530 Caisse, ou 403 Effets à payer)</li>
</ul>
<p><strong>Aucune TVA ici</strong> : elle a déjà été comptabilisée à la facture.</p>

<h3>2. Encaissement d'un client</h3>
<p>Image miroir :</p>
<ul>
  <li>Débit 512 Banque (ou 530 Caisse, ou 413 Effets à recevoir)</li>
  <li>Crédit 411 Client : montant TTC</li>
</ul>

<h3>3. Schéma complet d'une opération de vente</h3>
<table class="ecriture">
  <tr><th>Étape</th><th>Date</th><th>Compte</th><th>Débit</th><th>Crédit</th></tr>
  <tr><td rowspan="3">Facture émise</td><td>20/03</td><td>411 Client</td><td>1 200</td><td></td></tr>
  <tr><td>20/03</td><td>707 Ventes</td><td></td><td>1 000</td></tr>
  <tr><td>20/03</td><td>445710 TVA</td><td></td><td>200</td></tr>
  <tr><td rowspan="2">Encaissement</td><td>15/04</td><td>512 Banque</td><td>1 200</td><td></td></tr>
  <tr><td>15/04</td><td>411 Client</td><td></td><td>1 200</td></tr>
</table>
<p>Au final : 411 est nul (1 200 débité puis 1 200 crédité), la banque a augmenté de 1 200, le produit est de 1 000, la TVA collectée de 200.</p>

<h3>4. Le lettrage (introduction)</h3>
<div class="encadre">
  <p>Le <strong>lettrage</strong> consiste à associer une facture à son règlement dans le compte du tiers. Quand vous lettrez la facture FV-024 (1 200 € au débit) avec son encaissement (1 200 € au crédit), elles disparaissent du <em>solde "à régler"</em>. Cela permet de voir d'un coup d'œil les factures impayées.</p>
</div>
    `,
    quiz: [
      {
        question: "Vous payez par virement la facture du fournisseur Cedeo de 276 € TTC, déjà enregistrée la semaine dernière. Quelle est l'écriture ?",
        choix: [
          "Débit 401 276 / Crédit 512 276",
          "Débit 607 230 / Débit 445660 46 / Crédit 512 276",
          "Débit 401 230 / Débit 445660 46 / Crédit 512 276",
          "Débit 512 276 / Crédit 401 276"
        ],
        reponse: 0,
        explication: "La facture a déjà été enregistrée (charge + TVA + dette fournisseur). Au paiement, on solde la dette (débit 401) en sortant l'argent (crédit 512). Pas de re-comptabilisation de TVA."
      }
    ]
  },

  {
    id: "L08",
    processus: "P1",
    titre: "Le lettrage",
    duree_min: 12,
    contenu: `
<h3>1. Définition</h3>
<p>Le <strong>lettrage</strong> consiste à associer dans un compte de tiers (411 Clients ou 401 Fournisseurs) <strong>les écritures qui s'annulent</strong> : une facture et son règlement. On leur attribue la même <em>lettre</em> (A, B, C, AA, AB...) pour les marquer comme "soldées entre elles".</p>

<h3>2. Pourquoi ?</h3>
<ul>
  <li><strong>Suivre les impayés</strong> : tout ce qui n'est pas lettré, c'est ce qui reste dû.</li>
  <li><strong>Préparer les relances</strong> clients.</li>
  <li><strong>Justifier le solde</strong> du compte 401 ou 411 dans la balance auxiliaire.</li>
</ul>

<h3>3. Exemple — Compte 411 client "SARL Martin"</h3>
<table class="table">
  <tr><th>Date</th><th>Libellé</th><th>Débit</th><th>Crédit</th><th>Lettre</th></tr>
  <tr><td>05/03</td><td>Facture FV-001</td><td>720,00</td><td></td><td><strong>A</strong></td></tr>
  <tr><td>10/03</td><td>Facture FV-002</td><td>1 200,00</td><td></td><td>B</td></tr>
  <tr><td>02/04</td><td>Encaissement chèque (FV-001)</td><td></td><td>720,00</td><td><strong>A</strong></td></tr>
  <tr><td>15/04</td><td>Facture FV-003</td><td>540,00</td><td></td><td></td></tr>
</table>
<p>Lecture : la lettre <strong>A</strong> apparaît deux fois (720 € débit / 720 € crédit) → soldée.<br>
Les écritures sans lettre (B = 1 200, FV-003 = 540) sont des <strong>impayés</strong>. Solde du compte = 1 740 € à recevoir.</p>

<h3>4. Lettrage partiel</h3>
<p>Si un client paie en plusieurs fois (par exemple 500 € sur une facture de 1 200 €), on peut faire un <strong>lettrage partiel</strong> avec une lettre pointée (A*) le temps que le solde arrive.</p>

<h3>5. Différence avec le rapprochement bancaire</h3>
<div class="encadre">
  <p>Le <strong>lettrage</strong>, c'est dans <em>un compte de tiers</em> (401 ou 411).<br>
  Le <strong>rapprochement bancaire</strong>, c'est entre votre compte 512 et le relevé bancaire de la banque. Ne pas confondre.</p>
</div>
    `,
    quiz: [
      {
        question: "Au 30/04, le compte 411 d'un client présente : facture A 800 € (lettre A), facture B 600 € (sans lettre), encaissement C 800 € (lettre A), facture D 1 000 € (sans lettre). Combien doit ce client ?",
        choix: ["800 €", "1 000 €", "1 600 €", "2 400 €"],
        reponse: 2,
        explication: "Les écritures lettrées A se compensent. Restent les écritures non lettrées : B (600 € débit) + D (1 000 € débit) = 1 600 € à recevoir."
      }
    ]
  }
];

function getLesson(id) {
  return LESSONS.find(l => l.id === id) || null;
}

function listLessons(processus = null) {
  return processus ? LESSONS.filter(l => l.processus === processus) : LESSONS;
}
