`nest new project-name --language js`


`spec.ts`: Test case file

`src/test`: Test folder

- Nest est conçu pour fournir une base architecturale solide en utilisant TypeScript et en adoptant des modèles architecturaux tels que l'**Injection** de Dépendance, les **Modules** et les **Décorateurs**.
- Nest est connu pour son soutien à la contruction d'**API RESTfull**, d'**API GraphQL** et l'application **WebSocke**

## Structure du Projet

NestJS suit une structure de projet bien définie qui aide à organiser votre code et votre maintenabilité. Certains composants clés de la structure de projet NestJS typique comprennent:

- src/: Ce répertoire contient le code principal de l'application.

- main.ts: Le point d'entrée de votre application NestJS.

- app.module.ts: Le module racine qui orchestre les composants et modules de l'application.

- controllers/: Les controllers définissent la logique de traitement des requêtes pour vos itinéraires.

- providers/: Les providers sont responsables de l'encapsulation et de la gestion de la logique et des services métier.

- modules/: Les modules regroupent les composants, controllers et providers associés.

- fichiers Nestjs.config.json ou .env: Fichiers de configuration pour les paramètres spécifiques à l'environnement.

- public/: Ce répertoire est utilisé pour servir des fichiers statiques.

- test/: Testez des fichiers et des configurations pour tester votre application.

**`Note 100%`**

## Controllers

Controllers are modules or components responsible for handling and responding to incoming requests from clients, such as web browsers or API consumers. 
Valider les donnée entrée, invoquer les services ou la logique métier et de renvoyer les réponses.
@Controllers() decorator
responsable du traitement des requêtes HTTP entrantes et de la génération des réponses appropriées.

## Route Parameters and Query Strings

param: pour transmettre des valeurs dynamique au serveur, ex: /users/:id
query: pour envoyé des donnée suplementaire ex: /search?q=query

> [!NOTE]
>  You can use query params if the params are optional. It is never a good idea to create optional param routes (disagreements agreed). Both serve the same purpose, but having them as the query params makes it more understandable for debugging and fellow developers.

## Handling Request and Responses

The Request and Response objects are key compnents of handling `HTTP` responses. These objects are used to interact with the incoming request data and prepare the response data that your Ntasj.js application sneds back to the client.

**`Note 80%`**

## Service

`nest g service sum-service`


