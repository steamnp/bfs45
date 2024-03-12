import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../service/pokemon/pokemon";
import { Stat } from "../../types";
import styles from "./details.module.css";

function Details() {
  const { name } = useParams();
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name); // Use the generated hook

  return (
    <div className={styles.container}>
      {error ? (
        <div className={styles.box}>
          <>Oh no, there was an error</>
        </div>
      ) : isLoading ? (
        <div className={styles.box}>Loading...</div>
      ) : pokemon ? (
        <div className={styles.box}>
          <p className={styles.name}>Name: {pokemon.name}</p>
          <img src={pokemon.sprites.front_default} className={styles.image} />
          <h2 className={styles.content}>Base Stats:</h2>
          <ul>
            {pokemon.stats.map((stat: Stat, index: number) => (
              <li key={index} className={styles.content}>
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
