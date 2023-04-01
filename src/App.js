import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import "./App.css";

const filterByQuery = (pokemons, query) => {
  return pokemons.filter((pokemon) => {
    return pokemon.name.startsWith(query.toLowerCase());
  });
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState("");
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const addFavoritePokemon = (pokemonName) => {
    setFavoritePokemons([...favoritePokemons, pokemonName]);
  };

  const removeFavoritePokemon = (pokemonName) => {
    setFavoritePokemons(
      favoritePokemons.filter((name) => name !== pokemonName)
    );
  };

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} setPokemons={setPokemons} />
      <PokemonList
        addFavoritePokemon={addFavoritePokemon}
        removeFavoritePokemon={removeFavoritePokemon}
        favoritePokemons={favoritePokemons}
        pokemons={filterByQuery(pokemons, query)}
      />
    </div>
  );
}

export default App;
