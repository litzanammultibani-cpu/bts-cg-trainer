// P7 approfondi — SI comptable

LESSONS.push(
  {
    id: "L77", processus: "P7", titre: "SQL avancé : sous-requêtes, jointures, agrégats", duree_min: 22,
    contenu: `
<h3>1. Rappel : structure d'une requête SQL</h3>
<pre>
SELECT     [colonnes ou agrégats]
FROM       [table principale]
JOIN       [autres tables]   ON [condition]
WHERE      [filtre lignes]
GROUP BY   [colonnes de regroupement]
HAVING     [filtre sur agrégats]
ORDER BY   [tri]
LIMIT      [nb lignes]
</pre>

<h3>2. Les types de jointures</h3>
<table class="table">
  <tr><th>Jointure</th><th>Effet</th></tr>
  <tr><td><strong>INNER JOIN</strong></td><td>Lignes présentes dans les deux tables</td></tr>
  <tr><td><strong>LEFT JOIN</strong></td><td>Toutes les lignes de gauche + correspondances de droite (NULL si pas de match)</td></tr>
  <tr><td><strong>RIGHT JOIN</strong></td><td>Inverse</td></tr>
  <tr><td><strong>FULL OUTER JOIN</strong></td><td>Tout, des deux côtés (rare en MySQL/MariaDB)</td></tr>
</table>

<h3>3. Sous-requêtes (subqueries)</h3>
<p>Requête imbriquée dans une autre.</p>
<pre>
-- Clients qui ont acheté plus que la moyenne
SELECT nom, total_achats
FROM CLIENTS
WHERE total_achats > (SELECT AVG(total_achats) FROM CLIENTS);
</pre>

<h3>4. Sous-requête corrélée</h3>
<pre>
-- Pour chaque client, son top achat
SELECT c.nom,
       (SELECT MAX(montant) FROM COMMANDES o WHERE o.client_id = c.id) AS plus_gros_achat
FROM CLIENTS c;
</pre>

<h3>5. Cas pratique BTS — Balance par compte sur période</h3>
<pre>
SELECT
  c.numero AS compte,
  c.libelle,
  SUM(l.debit) AS total_debit,
  SUM(l.credit) AS total_credit,
  SUM(l.debit) - SUM(l.credit) AS solde
FROM LIGNES_ECRITURE l
JOIN COMPTES c ON c.numero = l.compte
JOIN ECRITURES e ON e.id = l.ecriture_id
WHERE e.date BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY c.numero, c.libelle
HAVING ABS(SUM(l.debit) - SUM(l.credit)) > 0
ORDER BY c.numero;
</pre>

<h3>6. Fonctions d'agrégation et fenêtre (window functions)</h3>
<pre>
-- Top 10 clients par CA, avec leur rang
SELECT
  client_id,
  SUM(montant) AS ca,
  RANK() OVER (ORDER BY SUM(montant) DESC) AS rang
FROM COMMANDES
GROUP BY client_id
LIMIT 10;
</pre>

<h3>7. Manipulation de données</h3>
<pre>
-- Insertion
INSERT INTO ECRITURES (date, journal, libelle)
VALUES ('2024-12-31', 'OD', 'Régularisation TVA');

-- Mise à jour
UPDATE CLIENTS
SET encours = encours + 100
WHERE id = 42;

-- Suppression (attention !)
DELETE FROM LIGNES_ECRITURE
WHERE ecriture_id = 99;
</pre>

<h3>8. Détection d'anomalies (utile pour audit)</h3>
<pre>
-- Écritures déséquilibrées
SELECT ecriture_id,
       SUM(debit) AS sd,
       SUM(credit) AS sc,
       SUM(debit) - SUM(credit) AS ecart
FROM LIGNES_ECRITURE
GROUP BY ecriture_id
HAVING ABS(SUM(debit) - SUM(credit)) > 0.01;

-- Clients sans aucune commande
SELECT c.nom
FROM CLIENTS c
LEFT JOIN COMMANDES o ON o.client_id = c.id
WHERE o.id IS NULL;
</pre>
    `,
    quiz: [
      { question: "Pour ne lister que les comptes ayant un solde non nul après agrégation :", choix: ["WHERE solde &lt;&gt; 0", "HAVING solde &lt;&gt; 0", "ORDER BY solde", "GROUP BY solde"], reponse: 1, explication: "Les filtres sur agrégats (SUM, COUNT...) utilisent HAVING. WHERE filtre les lignes brutes avant agrégation." }
    ]
  },

  {
    id: "L78", processus: "P7", titre: "Tableurs avancés : VBA et macros", duree_min: 18,
    contenu: `
<h3>1. À quoi servent les macros ?</h3>
<p>Une macro = suite d'actions enregistrées ou codées en VBA (Visual Basic for Applications), qui automatise une tâche répétitive sur Excel : import, calcul, mise en forme, génération de fichier...</p>

<h3>2. Enregistrer une macro (sans coder)</h3>
<ol>
  <li>Onglet Développeur → "Enregistrer une macro"</li>
  <li>Nommer + raccourci clavier optionnel</li>
  <li>Faire les actions à enregistrer</li>
  <li>Cliquer "Arrêter l'enregistrement"</li>
</ol>
<p>Excel génère automatiquement le code VBA correspondant (modifiable ensuite).</p>

<h3>3. Exemple VBA — formater une balance</h3>
<pre>
Sub FormaterBalance()
    With ActiveSheet
        ' Mettre les en-têtes en gras
        .Range("A1:F1").Font.Bold = True
        .Range("A1:F1").Interior.Color = RGB(200, 220, 255)

        ' Format euros sur les colonnes Débit et Crédit
        .Columns("C:D").NumberFormat = "#,##0.00 €"

        ' Couleur rouge si solde négatif
        Dim derLigne As Long
        derLigne = .Cells(.Rows.Count, "A").End(xlUp).Row
        Dim cell As Range
        For Each cell In .Range("E2:E" & derLigne)
            If cell.Value < 0 Then cell.Font.Color = RGB(200, 0, 0)
        Next cell
    End With
End Sub
</pre>

<h3>4. Exemple : import auto d'un FEC</h3>
<pre>
Sub ImporterFEC()
    Dim fichier As String
    fichier = Application.GetOpenFilename("Fichiers FEC,*.txt")
    If fichier = "False" Then Exit Sub

    With ActiveSheet.QueryTables.Add(Connection:="TEXT;" & fichier, _
        Destination:=Range("A1"))
        .TextFileParseType = xlDelimited
        .TextFileTabDelimiter = True
        .TextFileTextQualifier = xlTextQualifierDoubleQuote
        .Refresh
    End With

    MsgBox "FEC importé : " & ActiveSheet.UsedRange.Rows.Count & " lignes"
End Sub
</pre>

<h3>5. Formules avancées indispensables</h3>
<table class="table">
  <tr><th>Formule</th><th>Usage</th></tr>
  <tr><td><code>SOMME.SI.ENS</code></td><td>Somme conditionnelle multi-critères</td></tr>
  <tr><td><code>RECHERCHEX</code></td><td>Recherche flexible (mieux que RECHERCHEV)</td></tr>
  <tr><td><code>INDEX/EQUIV</code></td><td>Recherche en croix (combo classique)</td></tr>
  <tr><td><code>SOMMEPROD</code></td><td>Somme pondérée, comme un tableau croisé en formule</td></tr>
  <tr><td><code>FILTRE</code></td><td>Extrait dynamiquement les lignes correspondant à un critère</td></tr>
  <tr><td><code>UNIQUE</code></td><td>Liste les valeurs distinctes d'une plage</td></tr>
  <tr><td><code>TRIER.PAR</code></td><td>Tri d'une plage par une autre</td></tr>
</table>

<h3>6. TCD (Tableau Croisé Dynamique)</h3>
<p>Outil n°1 du comptable. Glisser-déposer pour analyser :</p>
<ul>
  <li>Lignes : compte ou date ou client</li>
  <li>Colonnes : mois</li>
  <li>Valeurs : SUM, AVG, COUNT</li>
  <li>Filtres : type d'opération, journal</li>
</ul>
    `,
    quiz: [
      { question: "RECHERCHEX dans Excel récent permet :", choix: ["Une recherche limitée à la première colonne", "Une recherche flexible avec gestion native des erreurs", "Le calcul d'agrégats uniquement", "Le tri automatique"], reponse: 1, explication: "RECHERCHEX (XLOOKUP) cherche dans n'importe quelle colonne, gère les erreurs avec un argument de fallback, ne nécessite pas de tri préalable." }
    ]
  },

  {
    id: "L79", processus: "P7", titre: "Power Query et automatisation des imports", duree_min: 12,
    contenu: `
<h3>1. Qu'est-ce que Power Query ?</h3>
<p>Outil intégré à Excel et Power BI, permettant d'<strong>importer, transformer et combiner</strong> des données de multiples sources (fichiers, web, BDD) sans coder. Les transformations sont enregistrées et rejouées automatiquement à chaque actualisation.</p>

<h3>2. Sources possibles</h3>
<ul>
  <li>Fichiers Excel, CSV, TXT</li>
  <li>Bases de données (SQL Server, MySQL, Access...)</li>
  <li>Web (scraping de tableaux HTML)</li>
  <li>SharePoint, OneDrive</li>
  <li>API REST (avec un peu de configuration)</li>
</ul>

<h3>3. Cas d'usage pour comptable</h3>
<ul>
  <li>Importer un export bancaire (.csv) et le formater pour rapprochement</li>
  <li>Combiner les FEC de plusieurs filiales en un seul fichier</li>
  <li>Mettre à jour une balance synthétique à partir d'un grand livre détaillé</li>
  <li>Construire un tableau de bord automatisé qui se rafraîchit</li>
</ul>

<h3>4. Démarche</h3>
<ol>
  <li><strong>Importer</strong> : Données → Obtenir des données → choisir la source</li>
  <li><strong>Transformer</strong> : éditeur Power Query (renommer colonnes, supprimer doublons, fusionner, filtrer...)</li>
  <li><strong>Charger</strong> dans Excel ou modèle de données</li>
  <li><strong>Actualiser</strong> en un clic à chaque nouvelle période</li>
</ol>

<h3>5. Avantage</h3>
<p>Pas besoin de macro / VBA. La logique est <strong>visuelle</strong> et <strong>rejouable</strong>. Idéal pour automatiser les rapports mensuels.</p>

<h3>6. Power BI (cousin avancé)</h3>
<p>Pour des tableaux de bord interactifs, mises à jour automatiques, partage en équipe. Utilise le même moteur Power Query + le langage DAX pour les calculs.</p>
    `,
    quiz: [
      { question: "Power Query est utile pour :", choix: ["Écrire des macros VBA", "Importer et transformer des données de manière automatisée et rejouable", "Faire du SQL pur", "Imprimer des rapports"], reponse: 1, explication: "Power Query = ETL léger intégré (Extract, Transform, Load). Imports automatisés, transformations rejouables, sans code." }
    ]
  }
);
