import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Web3ModalProvider } from "./providers/Web3ModalProvider.tsx";
import App from "./App.tsx";
import "./index.css";
import { CottonCandyContextProvider } from "./providers/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Web3ModalProvider>
      <CottonCandyContextProvider>
        <App />
      </CottonCandyContextProvider>
    </Web3ModalProvider>
  </StrictMode>
);
