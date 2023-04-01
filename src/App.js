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
  const [isFilteringByFavorite, setIsFilteringByFavorite] = useState(false);

  const addFavoritePokemon = (pokemonName) => {
    setFavoritePokemons([...favoritePokemons, pokemonName]);
  };

  const removeFavoritePokemon = (pokemonName) => {
    setFavoritePokemons(
      favoritePokemons.filter((name) => name !== pokemonName)
    );
  };

  const toggleIsFilteringByFavorite = () => {
    setIsFilteringByFavorite(!isFilteringByFavorite);
  };

  return (
    <div className="App">
      <SearchBar
        query={query}
        setQuery={setQuery}
        setPokemons={setPokemons}
        isFilteringByFavorite={isFilteringByFavorite}
        toggleIsFilteringByFavorite={toggleIsFilteringByFavorite}
      />
      <PokemonList
        addFavoritePokemon={addFavoritePokemon}
        removeFavoritePokemon={removeFavoritePokemon}
        isFilteringByFavorite={isFilteringByFavorite}
        favoritePokemons={favoritePokemons}
        pokemons={filterByQuery(pokemons, query).slice(0, 30)}
      />
    </div>
  );
}

export default App;
