import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ScrollToTop />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
