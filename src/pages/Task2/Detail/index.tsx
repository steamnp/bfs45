import { useParams } from "react-router-dom";

import { useGetPokemonByNameQuery } from "../../../services/pokemon";

import style from "../task.module.css";
import Button from "../../../components/Button";
import { getRoute } from "../../../routes";

function Detail() {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error ? (
        <div className={style.info}>Oh no, there was an error</div>
      ) : isLoading ? (
        <div className={style.info}>Loading...</div>
      ) : data ? (
        <>
          <div>
            <img
              src={data.sprites.front_shiny}
              style={{ width: "200px" }}
              alt={name}
            />
          </div>
          <div>{data.name}</div>
        </>
      ) : null}
      <br />
      <br />
      <Button as="link" to={getRoute("Task 2").to} style={{ margin: "0" }}>
        Go back
      </Button>
    </div>
  );
}

export default Detail;
