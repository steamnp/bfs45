import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
