import { useEffect } from "react";
import { useGetPokemonListQuery } from "../../service/pokemon/pokemon";
import { Link } from "react-router-dom";
import { Pokemon } from "../../types";

import style from "./home.module.css";
function Home() {
  // Change the hook to useGetPokemonListQuery
  // Getting the first 20 pokemon of the https://pokeapi.co/api/v2/pokemon/
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery(20);
  useEffect(() => {
    // Fetch the list of Pokemon when the component mounts
  }, []);

  return (
    <div>
      {error ? (
        <div>
          <>Oh no, there was an error</>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : pokemonList ? (
        <div className={style.container}>
          {pokemonList.results.map((pokemon: Pokemon) => (
            <div className={`${style.box} ${style.name}`}>
              <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
