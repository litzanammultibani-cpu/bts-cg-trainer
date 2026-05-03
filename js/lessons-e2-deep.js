// E2 approfondi — Maths

LESSONS.push(
  {
    id: "L80", processus: "E2", titre: "Probabilités conditionnelles et indépendance", duree_min: 18,
    contenu: `
<h3>1. Probabilité conditionnelle</h3>
<div class="encadre">
  <p><strong>P(A | B) = P(A ∩ B) / P(B)</strong></p>
  <p>Lit "probabilité de A sachant B"</p>
</div>

<h3>2. Formule des probabilités totales</h3>
<p>Si {B1, B2, ..., Bn} forment une partition de l'univers :</p>
<div class="encadre">
  <p><strong>P(A) = Σ P(A | Bi) × P(Bi)</strong></p>
</div>

<h3>3. Formule de Bayes</h3>
<div class="encadre">
  <p><strong>P(B | A) = [P(A | B) × P(B)] / P(A)</strong></p>
</div>

<h3>4. Exemple — test de qualité</h3>
<p>Une usine produit 2 lignes : Ligne 1 (60% production, 5% défauts), Ligne 2 (40% production, 2% défauts). Une pièce prise au hasard est défectueuse. Probabilité qu'elle vienne de la Ligne 1 ?</p>
<ul>
  <li>P(D) = P(D|L1) × P(L1) + P(D|L2) × P(L2) = 0,05 × 0,6 + 0,02 × 0,4 = 0,038</li>
  <li>P(L1 | D) = P(D | L1) × P(L1) / P(D) = (0,05 × 0,6) / 0,038 = 0,789 = <strong>78,9%</strong></li>
</ul>

<h3>5. Indépendance</h3>
<p>A et B sont indépendants si : <strong>P(A ∩ B) = P(A) × P(B)</strong> ou de manière équivalente <strong>P(A | B) = P(A)</strong>.</p>

<h3>6. Arbre de probabilité</h3>
<p>Outil visuel utile pour les BTS. Sur chaque branche, on multiplie les proba.</p>
<pre>
                    Défaut (0,05)        → 0,60 × 0,05 = 0,030
       Ligne 1  ──┤
        (0,60)    Sain (0,95)            → 0,60 × 0,95 = 0,570
   ──┤
       Ligne 2  ──┤ Défaut (0,02)        → 0,40 × 0,02 = 0,008
        (0,40)    Sain (0,98)            → 0,40 × 0,98 = 0,392
                                          ─────
                                          1,000
</pre>
    `,
    quiz: [
      { question: "Si P(A | B) = 0,4 et P(B) = 0,3, alors P(A ∩ B) =", choix: ["0,7", "0,12", "0,1", "0,4"], reponse: 1, explication: "P(A ∩ B) = P(A | B) × P(B) = 0,4 × 0,3 = 0,12." }
    ]
  },

  {
    id: "L81", processus: "E2", titre: "Échantillonnage et estimation", duree_min: 18,
    contenu: `
<h3>1. Théorème central limite</h3>
<p>Pour un échantillon de taille n &gt; 30, la moyenne empirique X̄ suit approximativement une <strong>loi normale</strong> :</p>
<div class="encadre">
  <p><strong>X̄ ∼ N(μ, σ²/n)</strong></p>
  <p>où μ et σ sont la moyenne et l'écart-type de la population.</p>
</div>

<h3>2. Intervalle de confiance d'une moyenne (au niveau 95%)</h3>
<div class="encadre">
  <p><strong>IC₉₅ = [x̄ − 1,96 × σ/√n  ;  x̄ + 1,96 × σ/√n]</strong></p>
</div>
<p>Si σ inconnu, on utilise s (écart-type empirique) et la loi de Student (t).</p>

<h3>3. Exemple</h3>
<p>Un échantillon de 100 factures donne x̄ = 250 €, s = 50 €. IC à 95% pour la moyenne de toutes les factures :</p>
<ul>
  <li>Marge d'erreur = 1,96 × 50 / √100 = 1,96 × 5 = 9,8</li>
  <li>IC = [240,2 ; 259,8]</li>
</ul>

<h3>4. Intervalle de confiance d'une proportion</h3>
<div class="encadre">
  <p><strong>IC = [p − 1,96 × √(p(1−p)/n)  ;  p + 1,96 × √(p(1−p)/n)]</strong></p>
</div>

<h3>5. Taille d'échantillon nécessaire</h3>
<p>Pour avoir une marge d'erreur de E avec un niveau de confiance 95% :</p>
<div class="encadre">
  <p><strong>n = (1,96 × σ / E)²</strong></p>
</div>
<p>Plus on veut de précision (E petit), plus n grandit. Pour diviser E par 2, il faut multiplier n par 4.</p>

<h3>6. Application au contrôle de gestion</h3>
<p>L'estimation par échantillon est utilisée pour :</p>
<ul>
  <li>Audit (sélection d'écritures à contrôler)</li>
  <li>Sondages clients (NPS, satisfaction)</li>
  <li>Contrôle qualité production (échantillonnage des lots)</li>
  <li>Inventaire tournant (compter par échantillon plutôt que tout)</li>
</ul>
    `,
    quiz: [
      { question: "Échantillon n=400, x̄=20, σ=5. Marge d'erreur de l'IC à 95% ?", choix: ["0,49", "0,98", "1,96", "5"], reponse: 0, explication: "Marge = 1,96 × σ/√n = 1,96 × 5/20 = 1,96 × 0,25 = 0,49." }
    ]
  },

  {
    id: "L82", processus: "E2", titre: "Tests d'hypothèses (introduction)", duree_min: 15,
    contenu: `
<h3>1. Le principe</h3>
<p>On a une <strong>hypothèse nulle H0</strong> (ce qu'on suppose par défaut) et une <strong>hypothèse alternative H1</strong>. On collecte des données et on calcule la probabilité d'observer ces données <em>si H0 était vraie</em>. Cette probabilité = <strong>p-value</strong>.</p>

<h3>2. Décision</h3>
<ul>
  <li>Si p-value &lt; α (souvent 5%) → on <strong>rejette H0</strong> (résultat significatif)</li>
  <li>Sinon → on ne rejette pas H0</li>
</ul>

<h3>3. Types d'erreurs</h3>
<table class="table">
  <tr><th></th><th>H0 vraie en réalité</th><th>H0 fausse en réalité</th></tr>
  <tr><td>Décision : ne pas rejeter H0</td><td>OK</td><td>Erreur de 2e espèce (β)</td></tr>
  <tr><td>Décision : rejeter H0</td><td>Erreur de 1ère espèce (α)</td><td>OK</td></tr>
</table>

<h3>4. Test bilatéral vs unilatéral</h3>
<ul>
  <li><strong>Bilatéral</strong> : H1 : μ ≠ μ0 (différent, peu importe le sens)</li>
  <li><strong>Unilatéral à droite</strong> : H1 : μ &gt; μ0</li>
  <li><strong>Unilatéral à gauche</strong> : H1 : μ &lt; μ0</li>
</ul>

<h3>5. Exemple</h3>
<p>Une machine est censée produire des pièces de 100 g (norme). On prélève 36 pièces, x̄ = 99 g, σ connu = 3 g. Y a-t-il un dérèglement (test bilatéral, α = 5%) ?</p>
<ul>
  <li>H0 : μ = 100, H1 : μ ≠ 100</li>
  <li>Statistique de test : Z = (x̄ − μ0) / (σ/√n) = (99 − 100) / (3/6) = −2</li>
  <li>Valeur critique à 5% bilatéral = ±1,96</li>
  <li>|Z| = 2 &gt; 1,96 → on <strong>rejette H0</strong> → la machine est probablement déréglée</li>
</ul>

<h3>6. Sur tableur</h3>
<p>Excel offre des fonctions natives :</p>
<ul>
  <li><code>=TEST.STUDENT</code> : test t (deux échantillons)</li>
  <li><code>=LOI.NORMALE.STANDARD.N</code> pour la p-value</li>
  <li><code>=INTERVALLE.CONFIANCE.NORMAL</code> pour la marge d'erreur</li>
</ul>
    `,
    quiz: [
      { question: "Une p-value de 0,02 dans un test à 5% conduit à :", choix: ["Ne pas rejeter H0", "Rejeter H0", "Augmenter l'échantillon", "Refaire le calcul"], reponse: 1, explication: "p-value (0,02) &lt; α (0,05) → on rejette H0. Le résultat est statistiquement significatif." }
    ]
  }
);
