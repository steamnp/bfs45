import { Link, useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../services/Pokemon";

function Detail() {
  const { name } = useParams<{ name: string }>();
  const { data: pokemonData, isLoading } = useGetPokemonQuery(name || "");

  //console.log(pokemonData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemonData) return <div>Pokemon not found</div>;

  const { height, weight } = pokemonData;

  return (
    <>
      <div>
        <div>Name: {name} </div>
        <div>Height: {height} </div>
        <div>Weight: {weight} </div>
        <img
          src={pokemonData.sprites.front_shiny}
          style={{ width: "200px" }}
          alt={name}
        />
      </div>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}
export default Detail;
