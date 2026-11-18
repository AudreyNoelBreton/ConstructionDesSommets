# Phase 4 — Migration du toolchain

Date : 2026-11-17.

## Toolchain retenue

- Build/dev server : Vite 8.
- Tests : Vitest 5 avec Testing Library.
- Routage : React Router 7.18.5.
- Compatibilité navigateurs : plugin Vite legacy pour les cibles déjà déclarées dans `package.json`.
- Déploiement : conservation de `build/`, `gh-pages -d build`, du fichier `CNAME` et du domaine `habitationsdusommet.com`.

## Routes conservées

- `/`
- `/about`
- `/realisations`
- `/realisations/consecration`
- `/realisations/ferreolaise`
- `/realisations/maison-verte`
- `/realisations/olympique`
- `/team`

## Comportements conservés

Les composants, styles SCSS, liens internes, transitions de page, retour en haut de page, navigation par projet et liens externes restent inchangés. React Router conserve `BrowserRouter`, les routes imbriquées et `useNavigate`/`useLocation`.

GitHub Pages utilise maintenant un fichier `404.html` et un court script de restauration dans `index.html` pour les liens directs vers des routes internes. Cela ne change pas les URLs existantes.

## Validation de l’étape CRA vers Vite

- `npm ci` : réussi.
- Tests : 4 suites, 13 tests réussis.
- Build : réussi vers `build/`.
- `npm audit --omit=dev` : 0 vulnérabilité après migration du routage.
- `npm audit` complet : 12 avis élevés dans les dépendances de build/test après la migration. Ils proviennent principalement de picomatch/tinyglobby transitifs dans Vite/Vitest et des outils d’archives. Le correctif proposé par npm implique des rétrogradations majeures vers Vite 6/Vitest 3 ou des changements de chaînes de plugins; elles ont été différées sans `--force`.

Le serveur Express n’a pas été modifié ni hébergé par cette migration.
