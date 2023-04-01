function Star({
  addSpinClass,
  addFavoritePokemon,
  removeFavoritePokemon,
  isFavorited,
  pokemon,
}) {
  const handleClick = () => {
    addSpinClass();
    isFavorited ? removeFavoritePokemon(pokemon) : addFavoritePokemon(pokemon);
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
