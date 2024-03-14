import * as React from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "./services/pokemon";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { data, error, isLoading } = useGetPokemonQuery({
    limit: 20,
    offset: 20,
  });
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  // console.log(data);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.results.map((pk) => (
            <Link key={pk.name} to={`/${pk.name}`}>
              <div>{pk.name}</div>
            </Link>
          ))}
        </>
      ) : null}
    </div>
  );
}
