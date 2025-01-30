import { useState } from "react";
import "./App.css";

type Pokemon = {
  id: number;
  name: string;
  type: string;
  base_experience: number;
};

const pokemons: Pokemon[] = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const calcExp = (pokemons: Pokemon[]) => {
  return pokemons.reduce((acc, pokemon) => 
    acc + pokemon.base_experience
, 0)
}



function App() {
  const tempPokemons = [...pokemons];

  let pokedex1: Pokemon[] = [];

  while (pokedex1.length < 4) {
    pokedex1.push(
      tempPokemons.splice(Math.random() * tempPokemons.length, 1)[0]
    );
  }

  const pd1Exp = calcExp(pokedex1);
  const pd2Exp = calcExp(tempPokemons)
  

  return (
    <>
      <Pokedex pokemons={pokedex1} totalExp={pd1Exp} winner={pd1Exp > pd2Exp}/>
      <Pokedex pokemons={tempPokemons} totalExp={pd2Exp} winner={pd2Exp > pd1Exp}/>
    </>
  );
}

function Pokedex({ pokemons, totalExp, winner }: { pokemons: Pokemon[], totalExp: number, winner: boolean }) {


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
      (<>You are a loser</>)}
    </div>
  );
}

function PokeCard({
  pokeData: { id, name, type, base_experience },
}: {
  pokeData: Pokemon;
}) {
  return (
    <article className="pokecard">
      <div>{name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon img"
      />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </article>
  );
}

export default App;
