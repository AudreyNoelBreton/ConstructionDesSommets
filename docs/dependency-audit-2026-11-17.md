# Phase 3 — Audit de sécurité des dépendances npm

Date : 2026-11-17. Périmètre : `AudreyNoelBreton/ConstructionDesSommets`, branche `phase-3-dependency-security`. L'audit couvre l'arbre npm complet; aucun code ni configuration Express n'a été modifié.

## Vérifications

- `npm ci` : réussi avant et après le reclassement des paquets. CRA affiche des avis de dépréciation; l'installation signale aussi des scripts d'installation transitifs non approuvés.
- `CI=true npm test -- --watchAll=false` : réussi, 4 suites et 13 tests.
- `CI=true npm run build` : réussi. CRA affiche son avertissement existant sur un greffon Babel non déclaré.
- `npm audit` (toutes les dépendances) : 83 entrées de paquets vulnérables — 0 critique, 74 élevées, 6 modérées et 3 faibles. Le code de sortie 1 est attendu tant que des avis restent présents.
- `npm audit --omit=dev` : 2 entrées de paquets affectés — 0 critique, 0 élevée, 2 modérées et 0 faible.
- `npm audit fix --dry-run` : aucun paquet ajouté, retiré ou modifié. `npm audit fix` indique que l'arbre est à jour et n'a pas changé les versions. Aucun `--force` n'a été utilisé.
- CRA (`react-scripts`), Sass et Testing Library ont été déplacés vers `devDependencies`; leurs versions verrouillées sont inchangées. L'audit `--omit=dev` reflète ainsi les dépendances d'exécution, tandis que `npm ci` en CI installe toujours les outils de build et de test.

## Résultats et chemins de dépendance

### Dépendances d'exécution (2 entrées modérées)

- `react-router-dom@6.30.6` → `react-router@6.30.6` : [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), redirection externe possible via un antislash dans `<Link>`/`useNavigate` (contournement CVE-2025-68470); et [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg), injection de constructeur pendant l'hydratation SSR de React Router. npm propose un correctif dans `react-router-dom@7.18.5`, une mise à niveau majeure.
- Évaluation de l'exposition : le projet est une SPA côté client sans rendu serveur. Les destinations de navigation repérées dans `src/data/data.js` et les composants sont des routes locales, pas des URL externes fournies par les visiteurs. Cela réduit les chemins d'attaque applicables, mais la bibliothèque vulnérable reste incluse dans le bundle navigateur.

### Dépendances de build/test (chaîne CRA)

- `react-scripts@5.0.1` est la dépendance directe à l'origine des avis élevés. npm ne propose pas de correction non majeure exploitable; sa suggestion forcée automatique est le substitut invalide `react-scripts@0.0.0`. Les 74 entrées élevées et la plupart des autres entrées modérées/faibles appartiennent à l'arbre transitif CRA/Jest/build, pas à un service Node exécuté par les visiteurs.
- Chemins représentatifs : `react-scripts` → `@svgr/webpack` → `@svgr/plugin-svgo` → `svgo` → `css-select` → `nth-check`; `react-scripts` → `webpack-dev-server` → `http-proxy-middleware` / `sockjs` / `webpack-dev-middleware`; et `react-scripts` → `jest` / `jest-environment-jsdom` → utilitaires Jest / jsdom / paquets proxy. Autres chaînes affectées : PostCSS via `resolve-url-loader`, `picomatch` via les outils CRA de glob/watch, et `serialize-javascript` via la minification/Workbox.
- Évaluation de l'exposition : GitHub Pages ne sert que le dossier statique `build`, pas `react-scripts`, Jest ou `webpack-dev-server`. Les avis de ce dernier s'appliquent lorsque le serveur de développement tourne; ceux de la chaîne de build concernent les environnements de développement et de CI. L'hébergement Express séparé n'est pas confirmé.

### Express, Multer et Nodemailer

- Aucun avis npm n'a été signalé pour `express@4.22.3`, `multer@2.5.0` ou `nodemailer@10.6.0`. Aucun code Express, aucune configuration d'environnement ni aucun identifiant de messagerie n'ont été modifiés.

## Migrations majeures reportées

1. Remplacer Create React App par une chaîne build/test maintenue, puis refaire l'audit et vérifier l'artefact de production et la CI. Les avis transitifs couvrent des greffons CRA épinglés, Jest, SVGO, PostCSS, webpack-dev-server et des outils connexes; des overrides globaux comporteraient un risque de compatibilité sans chemin de support fiable pour CRA.
2. Migrer React Router de v6 à v7 pour obtenir le correctif proposé, puis tester les routes, la navigation, les transitions et les liens profonds. Cette migration majeure d'exécution n'a pas été incluse dans le groupe de changements sûrs.

## Inventaire complet des paquets

Les entrées ci-dessous sont les enregistrements de paquets vulnérables indiqués par npm audit (et non un décompte de CVE uniques). Les chemins sont les emplacements d'installation dans le lockfile; `via` nomme la dépendance ou l'avis contributeur. Une correction `major` est marquée comme majeure par npm.

### CRITICAL (0)

- None.

### HIGH (74)

- **@jest/console** — `node_modules/@jest/console@27.5.1`, `node_modules/jest-watch-typeahead/node_modules/@jest/console@28.1.3`; via `jest-message-util`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/core** — `node_modules/@jest/core@27.5.1`; via `@jest/console`; `@jest/reporters`; `@jest/test-result`; `@jest/transform`; `jest-config`; `jest-haste-map`; `jest-message-util`; `jest-resolve`; `jest-resolve-dependencies`; `jest-runner`; `jest-runtime`; `jest-snapshot`; `jest-util`; `jest-watcher`; `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/environment** — `node_modules/@jest/environment@27.5.1`; via `@jest/fake-timers`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/fake-timers** — `node_modules/@jest/fake-timers@27.5.1`; via `jest-message-util`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/globals** — `node_modules/@jest/globals@27.5.1`; via `@jest/environment`; `expect`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/reporters** — `node_modules/@jest/reporters@27.5.1`; via `@jest/console`; `@jest/test-result`; `@jest/transform`; `jest-haste-map`; `jest-resolve`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/test-result** — `node_modules/@jest/test-result@27.5.1`, `node_modules/jest-watch-typeahead/node_modules/@jest/test-result@28.1.3`; via `@jest/console`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/test-sequencer** — `node_modules/@jest/test-sequencer@27.5.1`; via `@jest/test-result`; `jest-haste-map`; `jest-runtime`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@jest/transform** — `node_modules/@jest/transform@27.5.1`; via `jest-haste-map`; `jest-util`; `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@parcel/watcher** — `node_modules/@parcel/watcher@2.6.0`; via `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@rollup/plugin-babel** — `node_modules/@rollup/plugin-babel@5.3.1`; via `@rollup/pluginutils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@rollup/plugin-node-resolve** — `node_modules/@rollup/plugin-node-resolve@11.2.1`; via `@rollup/pluginutils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@rollup/plugin-replace** — `node_modules/@rollup/plugin-replace@2.4.2`; via `@rollup/pluginutils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@rollup/pluginutils** — `node_modules/@rollup/pluginutils@3.1.0`; via `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@svgr/plugin-svgo** — `node_modules/@svgr/plugin-svgo@5.5.0`; via `svgo`; correctif majeur signalé : react-scripts@0.0.0.
- **@svgr/webpack** — `node_modules/@svgr/webpack@5.5.0`; via `@svgr/plugin-svgo`; correctif majeur signalé : react-scripts@0.0.0.
- **@types/jest** — `node_modules/@types/jest@29.5.12`; via `expect`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/eslint-plugin** — `node_modules/@typescript-eslint/eslint-plugin@5.62.0`; via `@typescript-eslint/parser`; `@typescript-eslint/type-utils`; `@typescript-eslint/utils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/experimental-utils** — `node_modules/@typescript-eslint/experimental-utils@5.62.0`; via `@typescript-eslint/utils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/parser** — `node_modules/@typescript-eslint/parser@5.62.0`; via `@typescript-eslint/typescript-estree`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/type-utils** — `node_modules/@typescript-eslint/type-utils@5.62.0`; via `@typescript-eslint/typescript-estree`; `@typescript-eslint/utils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/typescript-estree** — `node_modules/@typescript-eslint/typescript-estree@5.62.0`; via `globby`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **@typescript-eslint/utils** — `node_modules/@typescript-eslint/utils@5.62.0`; via `@typescript-eslint/typescript-estree`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **anymatch** — `node_modules/anymatch@3.1.3`; via `picomatch`; correctif majeur signalé : react-scripts@0.0.0.
- **babel-jest** — `node_modules/babel-jest@27.5.1`; via `@jest/transform`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **bfj** — `node_modules/bfj@7.1.0`; via `jsonpath`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **chokidar** — `node_modules/chokidar@3.6.0`; via `anymatch`; `readdirp`; correctif majeur signalé : react-scripts@0.0.0.
- **css-select** — `node_modules/svgo/node_modules/css-select@2.1.0`; via `nth-check`; correctif majeur signalé : react-scripts@0.0.0.
- **eslint-config-react-app** — `node_modules/eslint-config-react-app@7.0.1`; via `@typescript-eslint/parser`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **eslint-plugin-testing-library** — `node_modules/eslint-plugin-testing-library@5.11.1`; via `@typescript-eslint/utils`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **eslint-webpack-plugin** — `node_modules/eslint-webpack-plugin@3.2.0`; via `micromatch`; correctif majeur signalé : react-scripts@0.0.0.
- **expect** — `node_modules/@types/jest/node_modules/expect@29.7.0`, `node_modules/expect@27.5.1`; via `jest-message-util`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **fast-glob** — `node_modules/fast-glob@3.3.3`; via `micromatch`; correctif majeur signalé : react-scripts@0.0.0.
- **fdir** — `node_modules/tinyglobby/node_modules/fdir@6.5.0`; via `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **fork-ts-checker-webpack-plugin** — `node_modules/fork-ts-checker-webpack-plugin@6.5.3`; via `chokidar`; correctif majeur signalé : react-scripts@0.0.0.
- **globby** — `node_modules/globby@11.1.0`; via `fast-glob`; correctif majeur signalé : react-scripts@0.0.0.
- **http-proxy-middleware** — `node_modules/http-proxy-middleware@2.0.12`; via `micromatch`; correctif majeur signalé : react-scripts@0.0.0.
- **jest** — `node_modules/jest@27.5.1`; via `@jest/core`; `jest-cli`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-circus** — `node_modules/jest-circus@27.5.1`; via `@jest/environment`; `@jest/test-result`; `expect`; `jest-each`; `jest-message-util`; `jest-runtime`; `jest-snapshot`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-cli** — `node_modules/jest-cli@27.5.1`; via `@jest/core`; `@jest/test-result`; `jest-config`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-config** — `node_modules/jest-config@27.5.1`; via `@jest/test-sequencer`; `babel-jest`; `jest-circus`; `jest-environment-jsdom`; `jest-environment-node`; `jest-jasmine2`; `jest-resolve`; `jest-runner`; `jest-util`; `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-each** — `node_modules/jest-each@27.5.1`; via `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-environment-jsdom** — `node_modules/jest-environment-jsdom@27.5.1`; via `@jest/environment`; `@jest/fake-timers`; `jest-util`; `jsdom`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-environment-node** — `node_modules/jest-environment-node@27.5.1`; via `@jest/environment`; `@jest/fake-timers`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-haste-map** — `node_modules/jest-haste-map@27.5.1`; via `anymatch`; `jest-util`; `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-jasmine2** — `node_modules/jest-jasmine2@27.5.1`; via `@jest/environment`; `@jest/test-result`; `expect`; `jest-each`; `jest-message-util`; `jest-runtime`; `jest-snapshot`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-message-util** — `node_modules/@types/jest/node_modules/jest-message-util@29.7.0`, `node_modules/jest-message-util@27.5.1`, `node_modules/jest-watch-typeahead/node_modules/jest-message-util@28.1.3`; via `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-resolve** — `node_modules/jest-resolve@27.5.1`; via `jest-haste-map`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-resolve-dependencies** — `node_modules/jest-resolve-dependencies@27.5.1`; via `jest-snapshot`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-runner** — `node_modules/jest-runner@27.5.1`; via `@jest/console`; `@jest/environment`; `@jest/test-result`; `@jest/transform`; `jest-environment-jsdom`; `jest-environment-node`; `jest-haste-map`; `jest-message-util`; `jest-resolve`; `jest-runtime`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-runtime** — `node_modules/jest-runtime@27.5.1`; via `@jest/environment`; `@jest/fake-timers`; `@jest/globals`; `@jest/test-result`; `@jest/transform`; `jest-haste-map`; `jest-message-util`; `jest-resolve`; `jest-snapshot`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-snapshot** — `node_modules/jest-snapshot@27.5.1`; via `@jest/transform`; `expect`; `jest-haste-map`; `jest-message-util`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-util** — `node_modules/@types/jest/node_modules/jest-util@29.7.0`, `node_modules/jest-util@27.5.1`, `node_modules/jest-watch-typeahead/node_modules/jest-util@28.1.3`; via `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-watch-typeahead** — `node_modules/jest-watch-typeahead@1.1.0`; via `jest`; `jest-watcher`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jest-watcher** — `node_modules/jest-watch-typeahead/node_modules/jest-watcher@28.1.3`, `node_modules/jest-watcher@27.5.1`; via `@jest/test-result`; `jest-util`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jsonpath** — `node_modules/jsonpath@1.3.0`; via `underscore`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **micromatch** — `node_modules/micromatch@4.0.8`; via `picomatch`; correctif majeur signalé : react-scripts@0.0.0.
- **nth-check** — `node_modules/svgo/node_modules/nth-check@1.0.2`; via Inefficient Regular Expression Complexity in nth-check ([advisory](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)), affected range <2.0.1; correctif majeur signalé : react-scripts@0.0.0.
- **picomatch** — `node_modules/@parcel/watcher/node_modules/picomatch@4.0.7`, `node_modules/picomatch@2.3.2`, `node_modules/tinyglobby/node_modules/picomatch@4.0.7`; via picomatch vulnerable to ReDoS through single-branch repeated extglobs ([advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)), affected range <=4.0.7; correctif majeur signalé : react-scripts@0.0.0.
- **postcss** — `node_modules/resolve-url-loader/node_modules/postcss@7.0.39`; via PostCSS line return parsing error ([advisory](https://github.com/advisories/GHSA-7fh5-64p2-3v2j)), affected range <8.4.31; PostCSS has XSS via Unescaped </style> in its CSS Stringify Output ([advisory](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)), affected range <8.5.10; PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments ([advisory](https://github.com/advisories/GHSA-6g55-p6wh-862q)), affected range <=8.5.11; PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset ([advisory](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp)), affected range <=8.5.22; PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure ([advisory](https://github.com/advisories/GHSA-r28c-9q8g-f849)), affected range <=8.5.17; correctif majeur signalé : react-scripts@0.0.0.
- **react-dev-utils** — `node_modules/react-dev-utils@12.0.1`; via `fork-ts-checker-webpack-plugin`; `globby`; correctif majeur signalé : react-scripts@0.0.0.
- **react-scripts** (direct) — `node_modules/react-scripts@5.0.1`; via `@svgr/webpack`; `babel-jest`; `css-minimizer-webpack-plugin`; `eslint-config-react-app`; `eslint-webpack-plugin`; `jest`; `jest-resolve`; `jest-watch-typeahead`; `react-dev-utils`; `resolve-url-loader`; `webpack-dev-server`; `workbox-webpack-plugin`; correctif majeur signalé : react-scripts@0.0.0.
- **readdirp** — `node_modules/readdirp@3.6.0`; via `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **rollup-plugin-terser** — `node_modules/rollup-plugin-terser@7.0.2`; via `serialize-javascript`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **serialize-javascript** — `node_modules/rollup-plugin-terser/node_modules/serialize-javascript@4.0.0`, `node_modules/serialize-javascript@6.0.2`; via Serialize JavaScript is Vulnerable to RCE via RegExp.flags and Date.prototype.toISOString() ([advisory](https://github.com/advisories/GHSA-5c6j-r48x-rmvq)), affected range <=7.0.2; Serialize JavaScript has CPU Exhaustion Denial of Service via crafted array-like objects ([advisory](https://github.com/advisories/GHSA-qj8w-gfj5-8c6v)), affected range >=5.0.0 <7.0.5; Serialize JavaScript: Cross-site scripting (XSS) via unescaped </script at the end of a serialized function body ([advisory](https://github.com/advisories/GHSA-m5mm-p8h7-m29v)), affected range <7.1.3; correctif majeur signalé : react-scripts@0.0.0.
- **sucrase** — `node_modules/sucrase@3.35.1`; via `tinyglobby`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **svgo** — `node_modules/svgo@1.3.2`; via SVGO removeScripts plugin leaves some executable scripts intact ([advisory](https://github.com/advisories/GHSA-2p49-hgcm-8545)), affected range >=1.0.0 <2.8.3; SVGO: removeScripts incompletely sanitizes executable HTML in SVG foreignObject elements ([advisory](https://github.com/advisories/GHSA-4vpr-x523-8j87)), affected range >=1.0.0 <2.8.4; SVGO: removeScripts allows executable links through namespace and control-character bypasses ([advisory](https://github.com/advisories/GHSA-w27v-7q3p-w38r)), affected range >=1.0.0 <2.8.4; `css-select`; correctif majeur signalé : react-scripts@0.0.0.
- **tailwindcss** — `node_modules/tailwindcss@3.4.19`; via `chokidar`; `fast-glob`; `micromatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **tinyglobby** — `node_modules/tinyglobby@0.2.17`; via `fdir`; `picomatch`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **underscore** — `node_modules/underscore@1.13.6`; via Underscore has unlimited recursion in _.flatten and _.isEqual, potential for DoS attack ([advisory](https://github.com/advisories/GHSA-qpx9-hpmf-5gmw)), affected range <=1.13.7; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **webpack-dev-middleware** — `node_modules/webpack-dev-middleware@5.3.4`; via webpack-dev-middleware vulnerable to Path Traversal via non-slash-terminated publicPath ([advisory](https://github.com/advisories/GHSA-g84c-rxfj-3j2c)), affected range <7.4.5; correctif majeur signalé : react-scripts@0.0.0.
- **webpack-dev-server** — `node_modules/webpack-dev-server@4.15.2`; via webpack-dev-server users' source code may be stolen when they access a malicious web site with non-Chromium based browser ([advisory](https://github.com/advisories/GHSA-9jgg-88mc-972h)), affected range <=5.2.0; webpack-dev-server users' source code may be stolen when they access a malicious web site ([advisory](https://github.com/advisories/GHSA-4v9v-hfq4-rm2v)), affected range <=5.2.0; webpack-dev-server vulnerable to cross-origin source code exposure on non-HTTPS origins ([advisory](https://github.com/advisories/GHSA-79cf-xcqc-c78w)), affected range <=5.2.3; webpack-dev-server vulnerable to HMR WebSocket interception via permissive user proxies ([advisory](https://github.com/advisories/GHSA-mx8g-39q3-5c79)), affected range <5.2.5; webpack-dev-server vulnerable to cross-site request forgery via internal developer endpoints ([advisory](https://github.com/advisories/GHSA-f5vj-f2hx-8m93)), affected range <=5.2.5; webpack-dev-server vulnerable to denial of service via a malformed Host or Origin header ([advisory](https://github.com/advisories/GHSA-m28w-2pqf-7qgj)), affected range <=5.2.5; `chokidar`; `http-proxy-middleware`; `sockjs`; `webpack-dev-middleware`; correctif majeur signalé : react-scripts@0.0.0.
- **workbox-build** — `node_modules/workbox-build@6.6.0`; via `@rollup/plugin-babel`; `@rollup/plugin-node-resolve`; `@rollup/plugin-replace`; `rollup-plugin-terser`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **workbox-webpack-plugin** — `node_modules/workbox-webpack-plugin@6.6.0`; via `workbox-build`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.

### MODERATE (6)

- **css-minimizer-webpack-plugin** — `node_modules/css-minimizer-webpack-plugin@3.4.1`; via `serialize-javascript`; correctif majeur signalé : react-scripts@0.0.0.
- **react-router** — `node_modules/react-router@6.30.6`; via React Router: Open redirect via backslash in <Link> and useNavigate (CVE-2025-68470 bypass) ([advisory](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6)), affected range >=6.0.0 <7.18.0; React Router: Arbitrary Constructor Injection via deserializeErrors() in React Router SSR Hydration ([advisory](https://github.com/advisories/GHSA-337j-9hxr-rhxg)), affected range >=6.4.0 <7.18.0; correctif majeur signalé : react-router-dom@7.18.5.
- **react-router-dom** (direct) — `node_modules/react-router-dom@6.30.6`; via `react-router`; correctif majeur signalé : react-router-dom@7.18.5.
- **resolve-url-loader** — `node_modules/resolve-url-loader@4.0.0`; via `postcss`; correctif majeur signalé : react-scripts@0.0.0.
- **sockjs** — `node_modules/sockjs@0.3.24`; via `uuid`; correctif majeur signalé : react-scripts@0.0.0.
- **uuid** — `node_modules/uuid@8.3.2`; via uuid: Missing buffer bounds check in v3/v5/v6 when buf is provided ([advisory](https://github.com/advisories/GHSA-w5hq-g745-h8pq)), affected range <11.1.1; correctif majeur signalé : react-scripts@0.0.0.

### LOW (3)

- **@tootallnate/once** — `node_modules/@tootallnate/once@1.1.2`; via @tootallnate/once vulnerable to Incorrect Control Flow Scoping ([advisory](https://github.com/advisories/GHSA-vpq2-c234-7xj6)), affected range <2.0.1; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **http-proxy-agent** — `node_modules/http-proxy-agent@4.0.1`; via `@tootallnate/once`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
- **jsdom** — `node_modules/jsdom@16.7.0`; via `http-proxy-agent`; correctif : npm indique un correctif transitif, mais la simulation complète ne modifie rien.
