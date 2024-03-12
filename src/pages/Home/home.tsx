import { useEffect } from "react";
import { useGetPokemonListQuery } from "../../service/pokemon/pokemon";
import { Link } from "react-router-dom";
import { Pokemon } from "../../types";

function Home() {
  // Change the hook to useGetPokemonListQuery
  // Getting the first 20 pokemon of the https://pokeapi.co/api/v2/pokemon/
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery(20);
  useEffect(() => {
    // Fetch the list of Pokemon when the component mounts
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {error ? (
        <div>
          <>Oh no, there was an error</>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : pokemonList ? (
        <ul>
          {pokemonList.results.map((pokemon: Pokemon) => (
            <li key={pokemon.name}>
              <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Home;
