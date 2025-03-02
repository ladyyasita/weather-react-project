import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Iaroslava Pozniak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ladyyasita/weather-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://iaroslavas-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
