// App.tsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PokemonList from './pokemonList';
import PokemonDetail from './pokemonDetail';

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);

  const handlePokemonClick = (pokemonId: number) => {
    setSelectedPokemon(pokemonId);
  };

  return (
    <Provider store={store}>
      <div>
        <PokemonList onPokemonClick={handlePokemonClick} />
        {selectedPokemon && <PokemonDetail pokemonId={selectedPokemon} />}
      </div>
    </Provider>
  );
};

export default App;
