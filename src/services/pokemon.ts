// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon, PokemonListResponse } from "./types";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemon: builder.query<
      PokemonListResponse,
      { limit: number; offset: number }
    >({
      query: ({ limit = 20, offset = 0 }) =>
        `pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;
