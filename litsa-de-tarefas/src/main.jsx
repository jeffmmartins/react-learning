import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListaTarefasProvider } from "./context/todos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListaTarefasProvider>
      <App />
    </ListaTarefasProvider>
  </React.StrictMode>
);
