import styled from "styled-components";

import { useState } from "react";

import { Link } from "react-router-dom";

const generateAvatarUrl = (name) => {
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(
    name
  )}`;
};

const GetUserCharacters = ({ userCharacters }) => {
  const [characters, setCharacters] = useState(() =>
    userCharacters.map((char) => {
      return { ...char, image: generateAvatarUrl(char.name) };
    })
  );

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click for character");
  };

  console.log("user characters in GetUserCharacters", userCharacters);

  return (
    <>
      {userCharacters.length < 1 ? (
        <p>loading...</p>
      ) : (
        characters.map((character) => (
          <CharacterContainer key={character.id}>
            <PlaceholderCircle
              style={{ backgroundImage: `url("${character.image}")` }}
            />
            <h2>{character.name}</h2>
            <AgePronounsContainer>
              <AgeContainer>
                <BoldText>{character.age}</BoldText>
                <SubText>years old</SubText>
              </AgeContainer>
              <Divider />
              <PronounsContainer>
                <BoldText>{character.pronouns}</BoldText>
                <SubText>pronouns</SubText>
              </PronounsContainer>
            </AgePronounsContainer>
            <StyledLink
              to={`/character-info/${character.id}`}
              state={{ character }}
            >
              View Character
            </StyledLink>
            <button onClick={() => handleDeleteClick(character)}>
              Delete Character
            </button>
          </CharacterContainer>
        ))
      )}
    </>
  );
};

export default GetUserCharacters;

const CharacterContainer = styled.div`
  background: #1a1b20;
  border-radius: 5px;
  width: 300px;
  height: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    padding: 12px;
    background: #359235;
    border: 1px solid #000000d6;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 15px;
    font-weight: bold;
    width: 90%;

    &:hover {
      background: #2a732a;
    }
  }
`;

const AgePronounsContainer = styled.div`
  background: #0c0d0f;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const AgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const PronounsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const Divider = styled.div`
  height: 50px;
  width: 1px;
  background-color: #333;
`;

const BoldText = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`;

const SubText = styled.div`
  color: grey;
  font-size: 0.75em;
`;

const PlaceholderCircle = styled.div`
  width: 10vh;
  height: 10vh;
  background-color: grey;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;
