import React from "react";
 import ReactDOM from "react-dom/client";
 import Store from "./app/store.ts";
 import { Provider } from "react-redux";
 import App from "./App.tsx";

 ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
     <App />
   </Provider>
  </React.StrictMode>
   
 );