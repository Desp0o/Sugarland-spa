import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ScrollToTop />
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </HashRouter>
);
