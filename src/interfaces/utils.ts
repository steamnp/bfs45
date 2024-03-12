export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  image: string;
}
