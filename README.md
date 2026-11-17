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

`src/server/server.js` est présent dans le dépôt, mais son exécution ou son hébergement en production n'a pas pu être confirmé. L'audit du dépôt et de son historique n'a pas mis en évidence d'identifiants SMTP réels; la configuration du serveur contient des valeurs factices. Il ne dispose pas d'une configuration de production documentée et ses protections ne sont pas adaptées à une exposition publique. Aucun changement de comportement n'est apporté à ce serveur tant que son usage et son hébergement ne sont pas confirmés.

L'audit npm de l'arbre verrouillé (`npm audit --omit=dev`) a signalé 74 avis : 14 de faible, 15 de moyenne, 41 de haute et 4 de criticité élevée, dont des dépendances directes Express et Nodemailer. Aucune mise à niveau de dépendances n'est incluse dans cette phase : l'usage du serveur est inconnu et la correction complète toucherait aussi le toolchain Create React App, dont certaines corrections proposées sont majeures.

Avant toute mise en production du serveur, confirmer avec l'équipe responsable :

- s'il est déployé, où il est hébergé et quels clients l'appellent ;
- les origines CORS attendues et les limites fonctionnelles des requêtes et pièces jointes ;
- le fournisseur de courriel, les destinataires autorisés et la façon de fournir les identifiants par variables d'environnement sécurisées.

Ne pas publier d'identifiants dans le dépôt ou les rapports. Après confirmation, configurer et documenter les variables d'environnement, puis ajouter CORS à liste d'autorisation, validation des données, limites et contrôles de téléversement, limitation de débit et réponses d'erreur sûres avant d'exposer le serveur.

La CI exécute les tests et la compilation seulement ; elle ne publie pas le site.
