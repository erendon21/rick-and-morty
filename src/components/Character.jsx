export const Character = ({character}) => {
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h2>{character.status}</h2>
    </div>
  );
};
