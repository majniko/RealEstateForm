import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { App } from "./App";
import { Store } from "./store/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChciNabidku } from "./routes/chci-nabidku";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="chci-nabidku" element={<ChciNabidku />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Store>
  </React.StrictMode>
);
