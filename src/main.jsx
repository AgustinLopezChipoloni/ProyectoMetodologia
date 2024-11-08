import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de que esta línea esté correcta
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Asegúrate de que el id sea 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

