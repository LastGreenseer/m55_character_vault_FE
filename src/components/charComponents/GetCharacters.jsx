import { useState, useEffect } from "react";
import { getAllCharactersFetch } from "../../utils/charFetch/";

const GetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getAllCharactersFetch();
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
    <Container>
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
    </Container>
  );
};

export default GetCharacters;


const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

const CharacterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CharacterItem = styled.div`
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CharacterName = styled.h2`
  font-size: 1.5em;
  color: #007bff;
`;

const CharacterDescription = styled.h3`
  font-size: 1.2em;
  color: #666;
`;

const CharacterPronouns = styled.p`
  font-size: 1em;
  color: #666;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
