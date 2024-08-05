import { useState } from "react";
import { getAllCharactersFetch } from "../../utils/charFetch";

//!!!!!!! dont not use this file

const GetAllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data.characters);
      } catch (err) {
        setError("Error fetching characters");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click for character");
  };

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <h3>{character.description}</h3>
            <p> {character.pronouns}</p>
            {/* <getButton type="submit">get Character</getButton> */}
            <button className="get-button" type="click" onClick={handleClick}>
              Get Character
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
