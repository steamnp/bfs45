// PokemonList.tsx
import React from 'react';
import { useGetPokemonListQuery } from './pokeApi';

interface PokemonListProps {
  onPokemonClick: (pokemonId: number) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onPokemonClick }) => {
  const { data: pokemonList } = useGetPokemonListQuery();

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList?.results.map((pokemon) => (
          <li key={pokemon.name} onClick={() => onPokemonClick(1 /* replace with the actual Pokemon ID */)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
