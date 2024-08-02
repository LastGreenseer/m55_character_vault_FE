import { useState, useEffect } from "react";
import { getAllCharactersFetch } from "../../utils/charFetch/";

const GetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
       const data = await getAllCharactersFetch()
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
            <button className="get-button" type="click" onClick={handleClick}>
              Get Character
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetCharacters;







