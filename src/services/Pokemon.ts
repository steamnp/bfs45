import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonApiResponse, Pokemon } from "../interfaces/utils";

export const PokemonApi = createApi({
  reducerPath: "allPokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<PokemonApiResponse, void>({
      query: () => "pokemon",
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonQuery } = PokemonApi;
