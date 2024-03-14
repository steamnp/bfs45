import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:name" element={<PokemonDetails />} />
      </Routes>
    </Provider>
  </BrowserRouter>,

  rootElement
);
