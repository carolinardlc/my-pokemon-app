import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const { url, name } = pokemon;

  const [pokemonData, setPokemonData] = useState(null);
  console.log("pokemon data:\n", pokemonData);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    }

    fetchData();
  }, [url]);

  if (pokemonData) {
    return (
      <div className="pokemon-card">
        <div className="pokemon-img">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt={name}
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{name}</h3>
            <div className="pokemon-number">
              <small>#0{pokemonData.id}</small>
            </div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemonData.types.map((type, idx) => {
                return (
                  <div key={idx} className="type">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PokemonCard;
