import styled from "styled-components";

const GetUserCharacters = ({ userCharacters }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click for character");
  };

  console.log("user characters in GetUserCharacters", userCharacters);

  return (
    <Container>
      <div>
        <h1>Character List</h1>

        {userCharacters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <h3>{character.description}</h3>
            <p> {character.pronouns}</p>
            <button className="get-button" type="click" onClick={handleClick}>
              Get Character
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GetUserCharacters;

const Container = styled.div`
  background-color: purple;
  padding: 20px;
  border-radius: 10px;
  color: white;
  min-height: 100vh;
`;

const GetButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
