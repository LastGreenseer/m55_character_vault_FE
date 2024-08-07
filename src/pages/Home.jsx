import React, { useState } from "react";
import { Link } from "react-router-dom";

import GetUserCharacters from "../components/charComponents/GetUserCharacters";

import styled from "styled-components";

const Home = ({ userCharacters }) => {
  return (
    <>
      <div>
        <h1>Character Vault</h1>
      </div>
      <MainWrapper>
        <CharacterSearchWrapper>
          <SearchCharacter>
            <input type="text" placeholder="Character Name" />
            <button type="submit">Search Character</button>
          </SearchCharacter>
          <AddNewCharacter>
            <StyledLink to="/add-character">Add New Character</StyledLink>
          </AddNewCharacter>
        </CharacterSearchWrapper>
        <CharacterWrapperMain>
          <CharacterListTitle>
            <h2>Characters</h2>
          </CharacterListTitle>
          <CharacterListWrapper>
            {userCharacters === undefined ? (
              'No Characters Found'
            ) : (
              <GetUserCharacters userCharacters={userCharacters} />
            )}
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

const CharacterWrapperMain = styled.div``;

const CharacterListTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 140vh;
  margin-left: auto;
  margin-right: 10px;
`;
