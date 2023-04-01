import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({
  addFavoritePokemon,
  removeFavoritePokemon,
  isFilteringByFavorite,
  favoritePokemons,
  pokemons,
}) {
  return (
    <div className="pokemon-list">
      {(isFilteringByFavorite ? favoritePokemons : pokemons).map((pokemon) => (
        <PokemonCard
          addFavoritePokemon={addFavoritePokemon}
          removeFavoritePokemon={removeFavoritePokemon}
          favoritePokemons={favoritePokemons}
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
}

export default PokemonList;
