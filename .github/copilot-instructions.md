# Copilot instructions for this repository

- The active application is inside `viva/`. Use `viva/package.json` as the source of truth for install/build/test commands.
- The root `package.json` is only a placeholder and does not define the React app dependencies or scripts.

## Project architecture

- This is a Create React App project.
- Primary source files are under `viva/src/`:
  - `viva/src/index.js` bootstraps the app with `ReactDOM.createRoot`.
  - `viva/src/App.js` is the main component and currently contains default CRA starter content.
  - `viva/src/App.test.js` is the default React Testing Library test for the rendered link.
- Static assets and the HTML shell live in `viva/public/`.
- Styling is provided by `viva/src/App.css` and `viva/src/index.css`.

## Build and developer workflow

- Install dependencies in the app folder:
  - `cd viva && npm install`
- Run development server:
  - `cd viva && npm start`
  - The app opens at `http://localhost:3000`
- Build production bundle:
  - `cd viva && npm run build`
- Run tests:
  - `cd viva && npm test`

## Project-specific notes

- This project uses CRA defaults with `react-scripts` and no custom webpack/Babel configuration.
- Do not eject unless explicitly asked; the current codebase depends on CRA-managed tooling.
- There are no backend or API integration files in this repo yet; the current app is front-end only.
- Keep changes scoped to `viva/src/` and `viva/public/` unless adding repository-level configuration.

## When editing code

- Preserve the CRA bootstrap pattern in `viva/src/index.js` when making structural changes.
- If you add new dependencies, install them from inside `viva/` and update `viva/package-lock.json`.
- Use the existing test file style in `viva/src/App.test.js` when adding unit tests.
- Avoid modifying the root-level `package.json` for app-specific behavior.
