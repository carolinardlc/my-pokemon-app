import React, { useEffect } from "react";

const fetchPokemons = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=30";

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

function SearchBar({ query, setQuery, setPokemons }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchPokemons();

    if (data) {
      setPokemons(data.results);
    }
  };

  useEffect(() => {
    handleSubmit({ preventDefault: () => {} });
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
