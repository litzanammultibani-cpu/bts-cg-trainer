// Matières générales — E1.1 (Culture gé), E1.2 (Anglais), E2 (Maths), E3 (CEJM)

LESSONS.push(
  {
    id: "L43", processus: "E1.1", titre: "Culture générale et expression — méthode", duree_min: 22,
    contenu: `
<h3>1. L'épreuve E1.1</h3>
<p>4 heures, écrit, coefficient 4. Deux exercices sur un thème national imposé chaque année (le thème change annuellement, communs à tous les BTS tertiaires).</p>

<h3>2. Synthèse de documents (40 points)</h3>
<p>Vous recevez 3 ou 4 documents (article, essai, document iconographique...) sur une question. Il faut produire une <strong>synthèse objective</strong> qui les confronte, sans donner votre avis.</p>

<h4>Méthode</h4>
<ol>
  <li><strong>Lire</strong> les documents en notant les idées de chacun (≈ 30 min)</li>
  <li><strong>Confronter</strong> dans un tableau : thème vs documents → identifier les convergences et divergences (≈ 30 min)</li>
  <li><strong>Formuler une problématique</strong> et un plan en 2 ou 3 parties (≈ 15 min)</li>
  <li><strong>Rédiger</strong> introduction (présentation des docs, problématique, annonce du plan), développement (paragraphes structurés citant les sources : "selon le document 2..."), conclusion brève</li>
  <li><strong>Relire</strong> orthographe et fluidité (≈ 15 min)</li>
</ol>

<h3>3. Écriture personnelle (20 points)</h3>
<p>Question liée au thème, sur laquelle vous donnez votre avis argumenté en 1 à 2 pages.</p>

<h4>Méthode</h4>
<ol>
  <li>Lire la question, repérer les mots-clés, l'angle attendu</li>
  <li>Bâtir un plan thèse / antithèse / synthèse, ou problème/causes/solutions, ou avantages/limites</li>
  <li>Mobiliser <strong>vos références culturelles</strong> : œuvres littéraires, films, articles, expériences personnelles. C'est ce qui distingue les copies.</li>
  <li>Écrire de manière fluide, en évitant le "je pense" répété</li>
</ol>

<h3>4. Conseils tactiques</h3>
<ul>
  <li>Lire un journal sérieux par semaine (Le Monde, L'Express, Courrier International) sur le thème de l'année</li>
  <li>Tenir une <strong>fiche par référence culturelle</strong> avec auteur/œuvre/idée principale/citation courte</li>
  <li>Travailler la <strong>concision</strong> : la synthèse doit faire ~700 mots, pas plus</li>
  <li>S'entraîner sur 4-5 sujets corrigés des annales avant l'épreuve</li>
</ul>
    `,
    quiz: [
      { question: "Dans la synthèse de documents, vous devez :", choix: ["Donner votre avis", "Confronter les documents objectivement", "Critiquer les documents", "Choisir le meilleur document"], reponse: 1, explication: "Synthèse = confrontation objective. L'avis personnel se réserve à l'écriture personnelle (deuxième exercice)." }
    ]
  },

  {
    id: "L44", processus: "E1.2", titre: "Anglais — vocabulaire comptable et oral", duree_min: 18,
    contenu: `
<h3>1. L'épreuve E1.2</h3>
<p>Oral. 20 min de préparation + 20 min de passage. Compréhension d'un document professionnel + interaction.</p>

<h3>2. Vocabulaire à maîtriser</h3>
<table class="table">
  <tr><th>Français</th><th>Anglais</th></tr>
  <tr><td>Comptabilité</td><td>Accounting / bookkeeping</td></tr>
  <tr><td>Bilan</td><td>Balance sheet</td></tr>
  <tr><td>Compte de résultat</td><td>Income statement / P&L</td></tr>
  <tr><td>Chiffre d'affaires</td><td>Revenue / turnover / sales</td></tr>
  <tr><td>Bénéfice net</td><td>Net profit / net income</td></tr>
  <tr><td>Trésorerie</td><td>Cash / cash flow</td></tr>
  <tr><td>Actif / Passif</td><td>Assets / Liabilities</td></tr>
  <tr><td>Capitaux propres</td><td>Equity / shareholders' equity</td></tr>
  <tr><td>Créance client</td><td>Receivable / accounts receivable (AR)</td></tr>
  <tr><td>Dette fournisseur</td><td>Payable / accounts payable (AP)</td></tr>
  <tr><td>Stock</td><td>Inventory / stock</td></tr>
  <tr><td>Amortissement</td><td>Depreciation (corporel) / Amortization (incorporel)</td></tr>
  <tr><td>Provision</td><td>Provision / allowance</td></tr>
  <tr><td>Audit</td><td>Audit</td></tr>
  <tr><td>Taux de TVA</td><td>VAT rate</td></tr>
  <tr><td>Impôt sur les sociétés</td><td>Corporate tax / corporate income tax</td></tr>
  <tr><td>Salaire brut/net</td><td>Gross/net salary</td></tr>
  <tr><td>Facture</td><td>Invoice (établir = to issue)</td></tr>
  <tr><td>Avoir</td><td>Credit note</td></tr>
  <tr><td>Ratio d'endettement</td><td>Debt-to-equity ratio</td></tr>
</table>

<h3>3. Phrases types pour l'oral</h3>
<ul>
  <li><em>"This document focuses on..."</em></li>
  <li><em>"The author argues that..."</em></li>
  <li><em>"As an accountant, I would recommend..."</em></li>
  <li><em>"In my company, we usually deal with..."</em></li>
  <li><em>"The main challenge / advantage / consequence is..."</em></li>
  <li><em>"Could you rephrase the question, please?"</em> (si on ne comprend pas)</li>
</ul>

<h3>4. Sujets fréquents en BTS CG</h3>
<ul>
  <li>Digital transformation in accounting (RPA, AI, blockchain)</li>
  <li>Sustainability reporting (CSRD, ESG)</li>
  <li>Remote work and team management</li>
  <li>Financial scams (CEO fraud, phishing)</li>
  <li>Cross-cultural business communication</li>
</ul>

<h3>5. Conseils pour l'oral</h3>
<ul>
  <li>Parler <strong>fort et lentement</strong> > parler vite et marmonner</li>
  <li>Préparer un <strong>plan d'introduction</strong> en 3 phrases qu'on peut sortir mécaniquement</li>
  <li>Si bloqué sur un mot : reformuler avec un synonyme simple ("the company that buys = the customer")</li>
  <li>Sourire et regarder l'examinateur — l'attitude compte autant que le contenu</li>
</ul>
    `,
    quiz: [
      { question: "How do you say \"compte de résultat\" in business English ?", choix: ["Balance sheet", "Cash flow statement", "Income statement (or P&L)", "Trial balance"], reponse: 2, explication: "Income statement, ou Profit and Loss (P&L) statement. Balance sheet = bilan. Cash flow = flux de trésorerie." }
    ]
  },

  {
    id: "L45", processus: "E2", titre: "Mathématiques financières", duree_min: 22,
    contenu: `
<h3>1. L'épreuve E2</h3>
<p>2 heures, écrit, coefficient 3. Deux à trois exercices : statistiques, probabilités, mathématiques financières, suivi sur tableur.</p>

<h3>2. Intérêts simples</h3>
<div class="encadre">
  <p><strong>I = C × t × n</strong></p>
  <ul>
    <li>I = intérêt</li>
    <li>C = capital</li>
    <li>t = taux annuel (en décimal)</li>
    <li>n = durée en années</li>
  </ul>
</div>
<p>Exemple : 5 000 € à 4 % pendant 6 mois → I = 5 000 × 0,04 × 0,5 = 100 €.</p>

<h3>3. Intérêts composés</h3>
<div class="encadre">
  <p><strong>Cn = C0 × (1 + t)^n</strong> (valeur acquise)<br>
  <strong>C0 = Cn × (1 + t)^(−n)</strong> (valeur actuelle, actualisation)</p>
</div>
<p>Exemple : 10 000 € placés à 3 % pendant 5 ans → 10 000 × 1,03^5 = 11 593 €.</p>

<h3>4. Annuités constantes (emprunt indivis)</h3>
<div class="encadre">
  <p><strong>a = C × t / (1 − (1 + t)^(−n))</strong></p>
  <p>a = annuité, C = capital emprunté, t = taux, n = nb de périodes</p>
</div>
<p>Exemple : emprunt 100 000 € sur 10 ans à 4 % → a = 100 000 × 0,04 / (1 − 1,04^(−10)) = 12 329 €/an.</p>

<h3>5. Valeur Actuelle Nette (VAN) d'un projet</h3>
<div class="encadre">
  <p><strong>VAN = − I0 + Σ (CFn / (1 + t)^n)</strong></p>
  <ul>
    <li>I0 = investissement initial</li>
    <li>CFn = flux de trésorerie de l'année n</li>
    <li>t = taux d'actualisation</li>
  </ul>
</div>
<p>Si VAN &gt; 0 → projet rentable au taux t. Sinon → à rejeter.</p>

<h3>6. Taux de Rentabilité Interne (TRI)</h3>
<p>Le TRI est le taux d'actualisation pour lequel la VAN = 0. Si TRI &gt; coût du capital, le projet est rentable. Calcul par interpolation ou via la fonction TRI() du tableur.</p>

<h3>7. Sur tableur</h3>
<ul>
  <li><code>=VPM(taux; nb_périodes; capital)</code> → mensualité</li>
  <li><code>=VC(taux; nb_périodes; ; -capital)</code> → valeur capitalisée</li>
  <li><code>=VA(taux; nb_périodes; ; -valeur_finale)</code> → valeur actuelle</li>
  <li><code>=VAN(taux; flux1; flux2; ...)</code> → VAN</li>
  <li><code>=TRI(plage_des_flux)</code> → TRI</li>
</ul>
    `,
    quiz: [
      { question: "10 000 € placés à 5 % pendant 4 ans en intérêts composés. Valeur acquise ?", choix: ["12 000 €", "12 155 €", "12 763 €", "10 500 €"], reponse: 1, explication: "Cn = 10 000 × 1,05^4 = 10 000 × 1,2155 = 12 155,06 €." }
    ]
  },

  {
    id: "L46", processus: "E2", titre: "Statistiques et probabilités", duree_min: 18,
    contenu: `
<h3>1. Statistiques descriptives</h3>
<table class="table">
  <tr><th>Indicateur</th><th>Formule / définition</th></tr>
  <tr><td>Moyenne</td><td>x̄ = Σ xi / n</td></tr>
  <tr><td>Médiane</td><td>Valeur centrale d'une série triée</td></tr>
  <tr><td>Mode</td><td>Valeur la plus fréquente</td></tr>
  <tr><td>Variance</td><td>V = Σ (xi − x̄)² / n</td></tr>
  <tr><td>Écart-type</td><td>σ = √V</td></tr>
  <tr><td>Coefficient de variation</td><td>CV = σ / x̄ (en %)</td></tr>
</table>

<h3>2. Régression linéaire</h3>
<p>Modèle <strong>y = ax + b</strong> qui prédit y à partir de x.</p>
<ul>
  <li>a (pente) = Cov(x,y) / V(x)</li>
  <li>b = ȳ − a × x̄</li>
  <li>Coefficient de corrélation : r = Cov(x,y) / (σx × σy), entre −1 et 1</li>
  <li>r² (coefficient de détermination) = pourcentage de la variance expliquée</li>
</ul>
<p>Sur tableur : <code>=PENTE</code>, <code>=ORDONNEE.ORIGINE</code>, <code>=COEFFICIENT.CORRELATION</code>.</p>

<h3>3. Loi binomiale (B(n, p))</h3>
<p>Nombre de succès dans n épreuves indépendantes, avec probabilité p de succès à chaque épreuve.</p>
<ul>
  <li>E(X) = n × p</li>
  <li>V(X) = n × p × (1 − p)</li>
  <li>P(X = k) = C(n,k) × p^k × (1−p)^(n−k)</li>
</ul>
<p>Tableur : <code>=LOI.BINOMIALE.N(k; n; p; FAUX)</code></p>

<h3>4. Loi normale (N(μ, σ²))</h3>
<p>Distribution en cloche, symétrique autour de μ.</p>
<ul>
  <li>≈ 68 % des valeurs entre μ − σ et μ + σ</li>
  <li>≈ 95 % entre μ − 2σ et μ + 2σ</li>
  <li>≈ 99,7 % entre μ − 3σ et μ + 3σ</li>
</ul>
<p>Tableur : <code>=LOI.NORMALE.N(x; μ; σ; VRAI)</code> donne P(X ≤ x).</p>

<h3>5. Loi de Poisson — événements rares</h3>
<p>P(X = k) = (λ^k × e^(−λ)) / k!</p>
<p>Utilisée pour modéliser des événements rares (pannes, accidents) sur une période fixe. λ = E(X) = V(X).</p>

<h3>6. Tests d'hypothèses (notion)</h3>
<p>On formule une hypothèse H0 ("la moyenne est de 100"), une hypothèse alternative H1, et on calcule la probabilité d'observer les données sous H0. Si cette probabilité (p-value) est faible (&lt; 5 % typiquement), on rejette H0.</p>
    `,
    quiz: [
      { question: "Une population suit N(80, 10²). Quel pourcentage approximatif est entre 60 et 100 ?", choix: ["50 %", "68 %", "95 %", "99,7 %"], reponse: 2, explication: "60 = μ − 2σ et 100 = μ + 2σ. Loi normale : ≈ 95 % des valeurs dans ±2σ." }
    ]
  },

  {
    id: "L47", processus: "E3", titre: "CEJM — Économie, Droit, Management (vue d'ensemble)", duree_min: 25,
    contenu: `
<h3>1. L'épreuve E3</h3>
<p>4 heures, écrit, coefficient 6. Étude de situation à partir d'un dossier documentaire. Trois compétences évaluées (éco, droit, management) souvent imbriquées dans une même question.</p>

<h3>2. Les 6 thèmes du programme CEJM</h3>
<table class="table">
  <tr><th>Thème</th><th>Contenu principal</th></tr>
  <tr><td><strong>1. L'intégration de l'entreprise dans son environnement</strong></td><td>Marchés, concurrence (Porter), parties prenantes, RSE</td></tr>
  <tr><td><strong>2. La régulation de l'activité économique</strong></td><td>Politiques économiques, État, monnaie, BCE, UE, mondialisation</td></tr>
  <tr><td><strong>3. L'organisation de l'activité de l'entreprise</strong></td><td>Statuts juridiques, gouvernance, RH, structures organisationnelles (Mintzberg)</td></tr>
  <tr><td><strong>4. L'impact du numérique sur la vie de l'entreprise</strong></td><td>Transformation digitale, RGPD, cybersécurité, plateformes</td></tr>
  <tr><td><strong>5. Les mutations du travail</strong></td><td>Télétravail, économie collaborative, nouvelles formes d'emploi, droit du travail</td></tr>
  <tr><td><strong>6. Les choix stratégiques de l'entreprise</strong></td><td>Diagnostic SWOT, stratégies de Porter, croissance interne/externe, internationalisation</td></tr>
</table>

<h3>3. Concepts économiques clés</h3>
<ul>
  <li><strong>Offre et demande</strong>, élasticités, équilibre de marché</li>
  <li><strong>Marché de concurrence pure et parfaite</strong> vs imparfaite (monopole, oligopole, concurrence monopolistique)</li>
  <li><strong>Externalités</strong> positives/négatives, défaillances de marché</li>
  <li><strong>Politique monétaire</strong> (BCE, taux directeurs) et politique budgétaire (État)</li>
  <li><strong>Indicateurs</strong> : PIB, taux de croissance, inflation (IPC), chômage, balance commerciale</li>
</ul>

<h3>4. Concepts juridiques clés</h3>
<ul>
  <li><strong>Contrat</strong> : conditions de validité (consentement, capacité, contenu licite et certain), exécution, sanctions</li>
  <li><strong>Responsabilité civile</strong> : faute, dommage, lien de causalité, art. 1240 Code civil</li>
  <li><strong>Droit du travail</strong> : contrats, durée du travail, licenciement, conventions collectives, prud'hommes</li>
  <li><strong>Droit de la concurrence</strong> : pratiques anticoncurrentielles, abus de position dominante, contrôle des concentrations</li>
  <li><strong>RGPD</strong> : données à caractère personnel, droits des personnes, DPO, sanctions CNIL</li>
</ul>

<h3>5. Concepts management clés</h3>
<ul>
  <li><strong>Diagnostic stratégique</strong> : SWOT, PESTEL, 5 forces de Porter, chaîne de valeur</li>
  <li><strong>Stratégies génériques</strong> de Porter : domination par les coûts, différenciation, focalisation</li>
  <li><strong>Croissance</strong> : interne (investissement) vs externe (M&A) vs partenariats (alliances)</li>
  <li><strong>Structures organisationnelles</strong> (Mintzberg) : simple, mécaniste, professionnelle, divisionnalisée, adhocratie, missionnaire</li>
  <li><strong>Théories de la motivation</strong> : Maslow, Herzberg, McGregor (X/Y), Vroom (attentes)</li>
</ul>

<h3>6. Méthode pour l'épreuve</h3>
<ol>
  <li>Lire les <strong>questions</strong> avant les documents — repérer ce qu'on cherche</li>
  <li>Lire les documents en surlignant les éléments utiles à chaque question</li>
  <li>Pour chaque réponse : <strong>annoncer la notion</strong> (concept du cours), <strong>l'illustrer</strong> avec les documents, <strong>conclure</strong></li>
  <li>Soigner l'orthographe et les termes techniques</li>
</ol>
    `,
    quiz: [
      { question: "Les 5 forces de Porter analysent :", choix: ["Le climat social interne", "L'attractivité d'un secteur d'activité", "La structure financière", "Les compétences du personnel"], reponse: 1, explication: "5 forces de Porter = pouvoir des clients, pouvoir des fournisseurs, menace des nouveaux entrants, menace des substituts, intensité concurrentielle. Diagnostic externe d'un secteur." }
    ]
  }
);
