export const Character = ({character}) => {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img className = "img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h2>{character.status}</h2>
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
    </div>
  );
};
