import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { DefaultLayout } from "./layout";
import * as serviceWorker from "./serviceWorker";
import { Store, StoreProvider } from "./services/store";

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <DefaultLayout />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
