
Javascript library(a piece of code where a specific action or task is defined) for UI interfaces
This is used to create components and UI, single page applications(no reload)
React is a component based architecture, modular acting as functions and virtual DOM maintained.

Features: state management, props(data transfers/communication), hooks(in-built features)

Code :  npm create vite@latest
        npm install
        npm run dev

Folders descriptions:
    - Public : Static files [Icons, Directly embed]
    - Src : Main components [Assets, Files(jsx, css)]

index.html > main.jsx > app-component(first component) > app.jsx > interface

How is it working?
index.html > root (script = main.jsx) > renders app component > our para

JSX is an extension in which we use html + javascript, where during rendering jsx is converted to react code and after that it converts to html and our browser then renders and displays our components.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
