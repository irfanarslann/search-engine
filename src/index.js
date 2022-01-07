import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataContextProvider from "./context/Data/DataContext";
import './style/index.css'
ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
