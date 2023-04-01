import React, { useState, useEffect } from "react";
import Star from "./Star";

const PokemonCard = ({
  addFavoritePokemon,
  removeFavoritePokemon,
  favoritePokemons,
  pokemon,
}) => {
  const { url, name } = pokemon;

  const [pokemonData, setPokemonData] = useState(null);
  const [effectClass, setEffectClass] = useState("");
  const [spinClass, setSpinClass] = useState("");

  const addSpinClass = () => {
    setSpinClass("spin-effect");
  };

  useEffect(() => {
    const handleRemoveClass = () => {
      setEffectClass("");
    };

    setTimeout(handleRemoveClass, 10000);

    return () => clearTimeout(handleRemoveClass);
  }, [effectClass]);

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
      <div className={`pokemon-card ${effectClass} ${spinClass}`}>
        <Star
          addSpinClass={addSpinClass}
          addFavoritePokemon={addFavoritePokemon}
          removeFavoritePokemon={removeFavoritePokemon}
          isFavorited={favoritePokemons.includes(pokemon.name)}
          pokemonName={pokemon.name}
        />
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
