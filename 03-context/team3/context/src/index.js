import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import { LanguageContextProvider } from "./contexts/LanguagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
