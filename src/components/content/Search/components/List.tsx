import { Pokemon } from "@/models";
import { useSearchContext } from "../context";

export const List = () => {
  const { data } = useSearchContext();

  return (
    <>
      <h2>Results</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((pokemon: Pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
