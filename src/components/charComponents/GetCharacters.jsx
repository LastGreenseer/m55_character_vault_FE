import { useState, useEffect } from "react";
import { getAllCharactersFetch } from "../../utils/charFetch/";
import styled from "styled-components";

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
  background-color: purple;
  padding: 20px;
  border-radius: 10px;
  color: white;
  min-height: 100vh;
`;

const CharacterListContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const CharacterItem = styled.div`
  background-color: #fff;
  color: #000;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const GetButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
