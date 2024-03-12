import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { PokemonApi } from "./services/Pokemon";

export const store = configureStore({
  reducer: {
    [PokemonApi.reducerPath]: PokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonApi.middleware),
});

setupListeners(store.dispatch);
