import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GetCharacters from "../components/charComponents/GetCharacters";

const testCharacters = [
  {
    id: 1,
    name: "Bob Bobber",
    age: 30,
    pronouns: "He/Him",
  },
  {
    id: 2,
    name: "John Smith",
    age: 25,
    pronouns: "She/Her",
  },
  {
    id: 3,
    name: "James Bond",
    age: 40,
    pronouns: "They/Them",
  },
];

const Home = () => {
  const [characters, setCharacters] = useState(testCharacters);

  return (
    <>
      <div>
        <h1>Character Vault</h1>
        <Link to="/profile">Profile</Link>
        {/* <GetCharacters/> */}
      </div>
      <MainWrapper>
        <CharacterSearchWrapper>
          <SearchCharacter>
            <input type="text" placeholder="Character Name" />
            <button type="submit">Search Character</button>
          </SearchCharacter>
          <SearchDivider />
          <AddNewCharacter>
            <StyledLink to="/add-character">Add New Character</StyledLink>
          </AddNewCharacter>
        </CharacterSearchWrapper>
        <CharacterWrapperMain>
          <CharacterListTitle>
            <h2>Characters</h2>
          </CharacterListTitle>
          <CharacterListWrapper>
            {characters.map((character) => (
              <CharacterContainer key={character.id}>
                <PlaceholderCircle
                  style={{
                    backgroundImage: `url(${character.image})`,
                    backgroundSize: "cover",
                  }}
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
                <button type="submit">View Character</button>
              </CharacterContainer>
            ))}
          </CharacterListWrapper>
        </CharacterWrapperMain>
      </MainWrapper>
    </>
  );
};

export default Home;

const MainWrapper = styled.div`
  display: flex;

`;

const CharacterSearchWrapper = styled.div`
  border: 2px solid red;
  width: 400px;
  margin-right: auto;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;

const SearchCharacter = styled.div`
  width: 100%;

  input,
  button {
    height: 40px;
    width: 90%;
    background-color: #1a1b20;
    color: white;
    border: 1px solid #5b5b5bbd;
    border-radius: 4px;
    outline: none;
    padding: 0 10px;
    font-size: 15px;
    box-sizing: border-box;
  }

  button {
    background: #359235;
    border: 1px solid #000000d6;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  input:focus,
  button:focus {
    border-color: #909090;
  }
`;

const AddNewCharacter = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  height: 40px;
  width: 90%;
  background-color: #359235; 
  color: white;
  border: 1px solid #000000d6; 
  border-radius: 4px;
  outline: none;
  padding: 0 10px;
  font-size: 15px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 5px;

  &:hover {
    background-color: #2a732a;
  }

  &:focus {
    border-color: #909090;
  }
`;

const SearchDivider = styled.div`
  height: 1px; 
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
`;

const CharacterWrapperMain = styled.div`

`;

const CharacterListTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 2px solid red;
  width: 138vh;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 10px;
`;


const CharacterListWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 140vh;
  margin-left: auto;
  margin-right: 10px;
`;

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
`;
