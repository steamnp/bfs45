import { useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../services/Pokemon";

function Detail() {
  const { name } = useParams<{ name: string }>();
  const { data: pokemonData, isLoading } = useGetPokemonQuery(name || "");

  console.log(pokemonData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemonData) return <div>Pokemon not found</div>;

  const { base_experience, height, weight } = pokemonData;

  return (
    <div>
      <div>Name: {name} </div>
      <div>Base Experience: {base_experience} </div>
      <div>Height: {height} </div>
      <div>Weight: {weight} </div>
    </div>
  );
}
export default Detail;
