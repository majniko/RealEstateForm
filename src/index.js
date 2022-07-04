import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { Store } from "./store/Context";
import { Router } from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <Router />
    </Store>
  </React.StrictMode>
);
