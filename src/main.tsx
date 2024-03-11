import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./app/store.js";

import App from "./App.tsx";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
