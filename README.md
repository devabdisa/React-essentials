# React Essentials (Vite)

A small practice project for core React concepts — **components**, **props**, **state**, **JSX**, **lists & keys**, **events**, **conditional rendering**, and a sprinkle of basic hooks like `useState`/`useEffect`. Built with **Vite** for a fast DX.

> Live page (GitHub Pages): **[https://devabdisa.github.io/React-essentials/](https://devabdisa.github.io/React-essentials/)**

---

## What you’ll learn / find in here

* Splitting UI into **reusable components**
* Passing data with **props**
* Managing **state** and updating UI reactively
* Writing UI with **JSX**
* Handling **events** and **conditional rendering**
* Rendering **lists** and using **keys** correctly
* Lifting state up and composing components

---

## Tech stack

* **React 18**
* **Vite** (fast dev server & build)
* **Node.js** (v18+ recommended)

---

## Project setup (step‑by‑step)

> Use **one** of the package managers below. Commands shown with `npm`; swap for `yarn` or `pnpm` if you prefer.

### 1) Clone the repo

```bash
git clone https://github.com/devabdisa/React-essentials.git
cd React-essentials
```

### 2) Install dependencies

```bash
npm install
# or: yarn
# or: pnpm install
```

### 3) Run locally (dev server)

```bash
npm run dev
```

Open the URL printed in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### 4) Build for production

```bash
npm run build
```

### 5) Preview the production build (optional)

```bash
npm run preview
```

---

## How the code is organized (typical Vite + React structure)

```
React-essentials/
├─ src/
│  ├─ main.jsx          # App entry
│  ├─ App.jsx           # Root component
│  └─ components/       # Practice components (props, state, lists, etc.)
├─ index.html
├─ package.json
├─ vite.config.js (or vite.config.ts)
└─ README.md
```

> Tip: Check `src/components/` to see examples of props, state, lists/keys, and conditional rendering.

---

## Contributing

This repo is mainly for practice/learning, but PRs that improve examples, comments, or clarity are welcome.

---

## License

No explicit license provided. If you plan to reuse code, open an issue to discuss licensing or add one (e.g., MIT).
