import { useState, useEffect } from "react";
import { Character } from "./Character";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // console.log("Use effect works");
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      // Conversion response to json
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchData();
  }, []);
  return (
    <div>
      {characters.map((character) => {
        return <Character key= {character.id} character={character} />;
      })}
    </div>
  );
};
