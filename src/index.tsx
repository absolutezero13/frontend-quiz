import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./Styles/main.scss";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
