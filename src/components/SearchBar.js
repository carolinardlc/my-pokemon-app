import React, { useCallback, useEffect } from "react";

const fetchPokemons = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

function SearchBar({
  query,
  setQuery,
  setPokemons,
  isFilteringByFavorite,
  toggleIsFilteringByFavorite,
}) {
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const data = await fetchPokemons();

      if (data) {
        setPokemons(data.results);
      }
    },
    [setPokemons]
  );

  useEffect(() => {
    handleSubmit({ preventDefault: () => {} });
  }, [handleSubmit]);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button style={{ borderRadius: 0 }} type="submit">
          Search
        </button>
        <button type="button" onClick={toggleIsFilteringByFavorite}>
          {isFilteringByFavorite && "No "}Filter
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
