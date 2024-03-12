import { Link } from "react-router-dom";
import { useGetAllPokemonQuery } from "../services/Pokemon";
import { PokemonResult } from "../interfaces/utils";

function Home() {
  const { data, isLoading, isError } = useGetAllPokemonQuery();
  //console.log(data?.results);

  const result: PokemonResult[] = data?.results;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error..</div>;

  return (
    <div>
      {result &&
        result.map((item: PokemonResult, index: number) => {
          return (
            <ul key={index}>
              <Link to={`/pokemon/${item.name}`}>
                <li>{item.name} </li>
              </Link>
            </ul>
          );
        })}
    </div>
  );
}

export default Home;
