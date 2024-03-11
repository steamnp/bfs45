import { Link } from "react-router-dom";
import { useGetAllPokemonQuery } from "../../services/pokemon";
import { Pokemon } from "../../types";

import style from "./task.module.css";
import { getRoute } from "../../routes";

function Task2() {
  const { data, error, isLoading } = useGetAllPokemonQuery("");

  return (
    <div>
      {error ? (
        <div className={style.info}>
          Something went wrong
          <br />
          {JSON.stringify(error)}
        </div>
      ) : isLoading ? (
        <div className={style.info}>Hang in there... Fetching data...</div>
      ) : data ? (
        <div>
          {data.results.map((pokemon: Pokemon) => (
            <Link
              to={getRoute("Task 2 Detail").to.replace(":name", pokemon.name)}
              key={pokemon.name}
              className={style.list}
            >
              {pokemon.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Task2;
