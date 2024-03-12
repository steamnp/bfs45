import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../service/pokemon/pokemon";
import { Stat } from "../../types";

function Details() {
  const { name } = useParams();
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name); // Use the generated hook

  return (
    <div>
      {error ? (
        <div>
          <>Oh no, there was an error</>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : pokemon ? (
        <div>
          <p>Name: {pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>Base Stats:</h2>
          <ul>
            {pokemon.stats.map((stat: Stat, index: number) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Details;
