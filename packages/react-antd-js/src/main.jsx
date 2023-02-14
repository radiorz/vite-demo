import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import App from "./app";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
