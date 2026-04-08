import { App } from "./app/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/assets/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
