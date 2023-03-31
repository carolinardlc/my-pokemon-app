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

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} setPokemons={setPokemons} />
      <PokemonList pokemons={filterByQuery(pokemons, query)} />
    </div>
  );
}

export default App;
