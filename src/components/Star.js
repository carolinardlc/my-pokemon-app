function Star({
  addSpinClass,
  addFavoritePokemon,
  removeFavoritePokemon,
  isFavorited,
  pokemonName,
}) {
  const handleClick = () => {
    addSpinClass();
    isFavorited
      ? removeFavoritePokemon(pokemonName)
      : addFavoritePokemon(pokemonName);
  };

  return (
    <img
      onClick={handleClick}
      className="star"
      src={
        isFavorited
          ? "/icons/starsprite-favorite.png"
          : "/icons/starsprite-unfavorite.png"
      }
    />
  );
}

export default Star;
