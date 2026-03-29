# Guide d'installation et de démarrage

## 1. Installer Node.js et npm

- Rendez-vous sur le site officiel : https://nodejs.org/fr/
- Téléchargez la version LTS recommandée pour Windows.
- Lancez l'installateur et suivez les instructions (npm est inclus avec Node.js).

## 2. Installer les dépendances

Ouvrez deux terminaux (ou deux onglets) :

### Pour le backend
1. Naviguez dans le dossier backend :
   ```powershell
   cd backend
   ```
2. Installez les dépendances :
   ```powershell
   npm install
   ```

### Pour le frontend
1. Naviguez dans le dossier frontend :
   ```powershell
   cd frontend
   ```
2. Installez les dépendances :
   ```powershell
   npm install
   ```

## 3. Démarrer l'application

### Backend (API)
Dans le terminal backend :
```powershell
npm start
```
Le serveur démarre sur http://localhost:4000

### Frontend (interface)
Dans le terminal frontend :
```powershell
npm start
```
L'application s'ouvre sur http://localhost:3000

## 4. Problème de navigation (react-router-dom)

Si vous voyez une erreur liée à `react-router-dom` (ex : "no such file or directory, open ... index.mjs" ou des erreurs d'import), il faut installer la version 6 :

Dans le dossier frontend, exécutez :
```powershell
npm uninstall react-router-dom
npm install react-router-dom@6
```

Ensuite, relancez `npm start` dans frontend.

---

**Tout le code est commenté en français pour faciliter la modification.**
