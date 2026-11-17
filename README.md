# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Sécurité et déploiement

GitHub Pages est actuellement configuré pour servir le site public depuis la branche `gh-pages` (source Pages historique). Le client React est un site statique et aucune requête du client vers la route Express `/send-email` n'est référencée dans `src/`. Le script `npm run deploy` publie sur GitHub Pages : ne l'exécutez pas dans le cadre des tests ou de la CI.

La configuration Pages confirmée publie uniquement des fichiers statiques depuis `gh-pages` (`/`); elle n'exécute pas Express. Le dépôt ne révèle pas si le serveur est hébergé séparément. Le code historique contenait des adresses et identifiants factices, pas de secrets réels. Le serveur a été durci séparément, sans changer le déploiement Pages.

Les mises à jour compatibles appliquées avec `npm audit fix` (sans `--force`) ont supprimé les quatre avis critiques du lockfile initial et actualisé les versions transitives dans les plages déjà déclarées. Au 17 novembre 2026, `npm audit --omit=dev` signale encore 83 avis (3 faibles, 6 modérés et 74 élevés), principalement issus du toolchain Create React App. Les avis directs restants concernent `react-scripts` (aucun correctif non majeur proposé) et `react-router-dom` (correctif proposé en version majeure 7). Nodemailer, Express et Multer ont été mis à jour pour éliminer leurs avis directs. Les migrations majeures restantes demandent une validation distincte de compatibilité et de portée.

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
