// pokeApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PokemonListResponse {
  results: { name: string }[];
}

interface PokemonDetailResponse {
  name: string;
  height: number;
  weight: number;
  // Add more details as needed
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, void>({
      query: () => 'pokemon?limit=20',
    }),
    getPokemonDetail: builder.query<PokemonDetailResponse, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = api;
