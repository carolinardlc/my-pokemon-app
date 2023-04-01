import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon?limit=30";
      if (searchQuery) {
        url = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data.results || [data]);
    };

    fetchPokemons();
  }, [searchQuery]);

  const handleSearch = (search) => {
    setSearchQuery(search);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
