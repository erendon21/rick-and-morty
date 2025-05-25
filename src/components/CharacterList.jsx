import { useState, useEffect } from "react";
import { Character } from "./Character";
import { NavPage } from "./NavPage";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  //Handle paganitation state
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log("Use effect works");
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      // Conversion response to json
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };

    fetchData();
  }, [page]);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
