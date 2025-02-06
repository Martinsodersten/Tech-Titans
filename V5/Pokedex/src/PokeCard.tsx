import { Pokemon } from "./App";

export function PokeCard({
  pokeData: { id, name, type, base_experience },
}: {
  pokeData: Pokemon;
}) {
  return (
    <article className="pokecard">
      <div>{name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon img" />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </article>
  );
}
