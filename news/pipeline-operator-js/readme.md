# New JavaScript pipeline operator: Transform anything into a one-liner

- [Docs](https://medium.com/coding-beauty/new-javascript-pipeline-operator-transform-anything-into-a-one-liner-2287aecb6314)


## ⚙️ Utiliser le Pipeline Operator (`|>`) avec Babel

### 1. Initialiser un projet Node.js

```bash
    npm init -y
```

### 2. Installer les dépendances nécessaires

```bash
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-pipeline-operator
```

### 3. Créer un fichier `.babelrc`
```json
    {
        "presets": ["@babel/preset-env"],
        "plugins": [
          ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]
        ]
    }
```



### 4. Créer un fichier `file.js`, package.json config

```json
    ...
    "scripts": {
        "build":"npx babel file.js --out-file compiled.js",
        "start": "node compiled.js"
    },
    ...
```

build et start maintenant:
```bash
    npm run build && npm run start
```

