import React from "react";
import { hydrate } from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./ContextProvider.js";

const style = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  }
};

hydrate(
  <BrowserRouter>
    <ContextProvider context={style}>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
