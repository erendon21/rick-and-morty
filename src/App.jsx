import { CharacterList } from "./components/CharacterList";

const Hello = () => {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
};

export default Hello;
