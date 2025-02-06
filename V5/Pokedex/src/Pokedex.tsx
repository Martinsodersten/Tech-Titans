import { Pokemon } from "./App";
import { PokeCard } from "./PokeCard";

export function Pokedex({ pokemons, totalExp, winner }: { pokemons: Pokemon[]; totalExp: number; winner: boolean; }) {


  return (
    <div>
      <h2>POKEDEX</h2>
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <PokeCard pokeData={pokemon} />
        ))}
      </div>
      <div>Total experience: {totalExp}</div>
      {winner ?
        (<>Winner</>)
        :
        (<></>)}
    </div>
  );
}
