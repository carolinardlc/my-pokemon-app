import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({
  addFavoritePokemon,
  removeFavoritePokemon,
  favoritePokemons,
  pokemons,
}) {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          addFavoritePokemon={addFavoritePokemon}
          removeFavoritePokemon={removeFavoritePokemon}
          favoritePokemons={favoritePokemons}
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
}

export default PokemonList;
