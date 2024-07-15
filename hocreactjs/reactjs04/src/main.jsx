import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "f8_",
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
