import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchBarProvider } from "./contexts/SearchBarContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchBarProvider>
      <App />
    </SearchBarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
