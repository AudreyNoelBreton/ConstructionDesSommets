# Habitations du Sommet

Site React publié via GitHub Pages. Le toolchain utilise Vite, Vitest et React Router maintenu.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test -- --watchAll=false`

Exécute la suite Vitest une fois et retourne le code de sortie.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Conserve le script `gh-pages -d build`, mais ne l’exécute pas dans la CI ni durant les validations. La publication reste une action manuelle après revue.

## Migration Phase 4

Vite remplace CRA pour le développement et le build. Vitest remplace le lanceur CRA. React Router est passé de la v6 à la v7.18.5. Les routes, composants, styles et liens sont conservés. Les détails sont consignés dans [docs/toolchain-migration-2026-11-17.md](docs/toolchain-migration-2026-11-17.md).

## Sécurité et déploiement

GitHub Pages est actuellement configuré pour servir le site public depuis la branche `gh-pages` (source Pages historique). Le client React est un site statique et aucune requête du client vers la route Express `/send-email` n'est référencée dans `src/`. Le script `npm run deploy` publie sur GitHub Pages : ne l'exécutez pas dans le cadre des tests ou de la CI.

La configuration Pages confirmée publie uniquement des fichiers statiques depuis `gh-pages` (`/`); elle n'exécute pas Express. Le dépôt ne révèle pas si le serveur est hébergé séparément. Le code historique contenait des adresses et identifiants factices, pas de secrets réels. Le serveur a été durci séparément, sans changer le déploiement Pages.

### Audit des dépendances

L'audit complet, son inventaire par gravité et chemin de dépendance, les résultats des vérifications et l'évaluation de l'exposition sont consignés dans [docs/dependency-audit-2026-11-17.md](docs/dependency-audit-2026-11-17.md). Après `npm ci`, `npm audit` signale 83 entrées de paquets vulnérables (0 critique, 74 élevées, 6 modérées et 3 faibles). `npm audit fix --dry-run` et `npm audit fix` n'ont trouvé aucun changement compatible; aucune mise à jour forcée ni mise à jour de version n'a été effectuée.

Les outils de compilation, Sass et les bibliothèques de test sont classés dans `devDependencies`, sans changement de version verrouillée. `npm audit --omit=dev` signale maintenant 2 entrées de paquets affectés, toutes deux modérées et liées à React Router. Express, Multer et Nodemailer ne figurent pas dans les résultats d'audit. GitHub Pages sert des fichiers statiques et n'exécute pas Express; l'existence éventuelle d'un hébergement Express séparé demeure non confirmée. Aucun code Express ni identifiant de messagerie n'a été modifié.

### Serveur Express (facultatif, hébergement séparé)

Lancer localement avec `npm run start:server`. En développement, sans configuration SMTP, le processus démarre mais `/send-email` répond `503`. Pour envoyer des courriels, fournir les variables suivantes dans l'environnement du processus (ne jamais les committer) :

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` : paramètres SMTP et secret de connexion.
- `SMTP_SECURE` : `true` ou `false`; par défaut `true` sur le port 465 et `false` autrement.
- `EMAIL_FROM`, `EMAIL_TO` : adresse expéditrice et destinataire configurés par l'opérateur.
- `CORS_ORIGINS` : origines exactes séparées par des virgules; obligatoire en production et HTTPS seulement. En développement, la valeur par défaut autorise `http://localhost:3000` et `http://127.0.0.1:3000`.
- `PORT` : port HTTP (3001 par défaut).
- `TRUST_PROXY_HOPS` : nombre de proxys de confiance devant Express (0 par défaut); ne le configurer que selon la topologie réelle.

Le serveur exige Node.js 20 ou plus récent. `/send-email` limite les requêtes à 5 par IP toutes les 15 minutes, valide les champs et l'adresse courriel, et n'accepte qu'un plan PDF/JPG/PNG jusqu'à 10 Mo dont l'extension, le type MIME et la signature du fichier correspondent. Les fichiers temporaires sont supprimés après traitement. En multi-instance, remplacer le limiteur en mémoire par un stockage partagé avant exposition publique et définir `TRUST_PROXY_HOPS` selon l'hébergeur.

La CI exécute les tests et la compilation seulement ; elle ne publie pas le site. Le build s'exécute avec `CI=true` : les avertissements ESLint empêchent donc une compilation réussie.
