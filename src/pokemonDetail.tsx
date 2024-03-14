// PokemonDetail.tsx
import React from 'react';
import { useGetPokemonDetailQuery } from './pokeApi';

interface PokemonDetailProps {
  pokemonId: number;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonId }) => {
  const { data: pokemonDetail } = useGetPokemonDetailQuery(pokemonId);

  return (
    <div>
      <h2>Pokemon Detail</h2>
      {pokemonDetail && (
        <div>
          <p>Name: {pokemonDetail.name}</p>
          <p>Height: {pokemonDetail.height}</p>
          <p>Weight: {pokemonDetail.weight}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
