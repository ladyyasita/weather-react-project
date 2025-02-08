import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <footer>
      This project was coded by{" "}
      <a
        href="/"
        tafget="
    _blank"
        rel="noopener noreferrer"
      >
        Iaroslava Pozniak
      </a>
      and is
      <a
        href="https://github.com/ladyyasita/weather-react-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        open-sourced on GitHub
      </a>
      and
      <a href="" target="_blank" rel="noopener noreferrer">
        hosted on Netlify
      </a>
    </footer>
  </StrictMode>
);
