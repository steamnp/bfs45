export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}
