import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AllProductContextProvider from "./store/AllProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProductContextProvider>
      <App />
    </AllProductContextProvider>
  </React.StrictMode>
);
