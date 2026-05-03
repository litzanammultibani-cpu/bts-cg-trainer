# BTS CG Trainer

Application web complète d'auto-formation au **BTS Comptabilité et Gestion** pour candidat libre. Référentiel officiel **arrêté du 8 juillet 2024** (session 2025+).

## Couverture pédagogique

**47 cours** avec quiz couvrant l'intégralité du programme :

| Bloc | Contenu | Cours |
|------|---------|-------|
| **P1** | Opérations commerciales (factures, TVA, règlements, lettrage) | 8 |
| **P2** | Production information financière (inventaire, amortissements, comptes annuels) | 8 |
| **P3** | Obligations fiscales (TVA CA3, IS, CFE/CVAE, résultat fiscal) | 6 |
| **P4** | Relations sociales (paie, DSN, congés, épargne salariale) | 4 |
| **P5** | Analyse et prévision (coûts complets, ABC, SR, écarts, budgets) | 6 |
| **P6** | Analyse financière (SIG, CAF, bilan fonctionnel, ratios) | 5 |
| **P7** | SI comptable (contrôle interne, Factur-X, SQL, tableurs, ERP) | 5 |
| **E1.1** | Culture générale et expression — méthode | 1 |
| **E1.2** | Anglais — vocabulaire pro | 1 |
| **E2** | Mathématiques appliquées (maths fi, stats) | 2 |
| **E3** | CEJM (économie, droit, management) | 1 |

## Modules de l'application

### 1. Cours
Tous les cours sont organisés par processus, filtrables par bloc. Chaque cours se termine par un quiz de validation.

### 2. Entreprises fictives (P1)
Café Le Trocadéro et Atelier Dupont : balances d'ouverture + opérations du mois à enregistrer en comptabilité. Le journal, le grand livre et la balance se construisent automatiquement à partir de vos écritures.

### 3. Calculatrices
10 calculatrices comptables :
- Amortissement linéaire (avec prorata temporis)
- Amortissement dégressif (avec coefficient et bascule en linéaire)
- TVA / déclaration CA3
- Impôt sur les sociétés (PME taux réduit)
- Paie simplifiée (brut → net + coût employeur)
- Seuil de rentabilité (MCV, SR, point mort, levier op)
- SIG (Soldes Intermédiaires de Gestion)
- Bilan fonctionnel (FRNG, BFR, TN)
- Intérêts composés
- Tableau d'amortissement d'emprunt

### 4. Passeport Professionnel
Générateur de fiches de situations professionnelles pour l'épreuve **E6** (coef 5) — c'est l'épreuve où les candidats libres échouent le plus. Permet de :
- Créer des fiches structurées (contexte, missions, outils, compétences mobilisées)
- Cocher dans le référentiel officiel des compétences (P1 à P7)
- Suivre la couverture des 7 processus (objectif : tous couverts)
- Exporter le passeport complet en Markdown pour révision/impression

### 5. Compétences (scaffolding fade)
8 compétences à valider une par une. Au début, l'application vous guide (suggestions de comptes, calcul TVA automatique, écritures pré-remplies). Au fur et à mesure que vous cochez les compétences acquises, elle retire les aides — pour vous mettre en conditions d'examen.

### 6. Sauvegarde
Export/import en JSON de toute votre progression (cours, écritures, compétences, quiz). Idéal pour transférer entre appareils ou archiver.

## Lancer en local

```bash
cd bts-cg-trainer
python -m http.server 8770
```
Ouvrir http://localhost:8770 dans un navigateur.

## Déployer sur GitHub Pages (gratuit)

```bash
cd C:\Users\litza\bts-cg-trainer
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/bts-cg-trainer.git
git push -u origin main
```
Puis : Settings → Pages → Source = main, root → Save.

URL en ligne : `https://VOTRE_USERNAME.github.io/bts-cg-trainer/`

## Spécificités candidat libre rappelées

- **Toutes les épreuves se passent en ponctuelle** (pas de CCF)
- **6 semaines minimum d'expérience pro** en comptabilité requises à l'inscription
- **Passeport professionnel** OBLIGATOIRE pour l'E6 — préparez-le tout au long de l'année
- **3 fiches de situations professionnelles** à préparer pour E4.2 et E5

## Architecture technique

- 100 % statique (HTML/CSS/JS), aucun framework, aucun build
- Données dans `localStorage` du navigateur
- 1 chargement = autonome (offline-friendly)
- Hébergement gratuit sur GitHub Pages

## Structure du projet

```
bts-cg-trainer/
├── index.html
├── README.md
├── css/
│   └── style.css
├── data/
│   └── pcg.js                  # Plan Comptable Général
└── js/
    ├── businesses.js           # Entreprises fictives
    ├── lessons.js              # Cours P1
    ├── lessons-p2.js           # Cours P2
    ├── lessons-p3.js           # Cours P3
    ├── lessons-p4.js           # Cours P4
    ├── lessons-p5.js           # Cours P5
    ├── lessons-p6.js           # Cours P6
    ├── lessons-p7.js           # Cours P7
    ├── lessons-general.js      # Matières générales E1/E2/E3
    ├── accounting.js           # Moteur comptable (journal, balance)
    ├── calculs.js              # Calculatrices (amort, SIG, IS, paie...)
    ├── mastery.js              # Système de scaffolding fade
    ├── passeport.js            # Générateur Passeport Professionnel
    ├── storage.js              # Sauvegarde / export / import
    └── app.js                  # UI + routage
```

## Licence

Outil pédagogique personnel. Données fictives uniquement.
