import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
);
