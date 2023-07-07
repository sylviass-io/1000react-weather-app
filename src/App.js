import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Sylvia SS and is{" "}
          <a
            href="https://github.com/sylviass-io/1000react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
