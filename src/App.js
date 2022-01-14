import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kaydreanna-castaneda-345637211"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaydreanna Castaneda
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Kaydreanna/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://naughty-jones-3cb7a1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
