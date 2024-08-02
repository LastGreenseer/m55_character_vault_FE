import { Link } from "react-router-dom";
import styled from "styled-components";
import { addCharacter } from "../utils/charFetch";
import { useState } from "react";

const AddChar = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [description, setDescription] = useState("");
  const [book, setBook] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addCharacter(
        name,
        age,
        pronouns,
        description,
        book
      );

      console.log("Successfully added character", response);
    } catch (error) {
      console.error("Failed to add character.", error);
    }
  };

  return (
    <>
      <AddCharacterWrapper>
        <AddCharacterHeader>
          <h2>Please input your character's information</h2>
        </AddCharacterHeader>
        <AddCharacterForm onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleChange(e, setName)}
            type="text"
            placeholder="Name"
            className="nameInput"
          />
          <input
            onChange={(e) => handleChange(e, setAge)}
            type="text"
            placeholder="Age"
            className="ageInput"
          />
          <input
            onChange={(e) => handleChange(e, setPronouns)}
            type="text"
            placeholder="Pronouns"
            className="pronounsInput"
          />
          <input
            onChange={(e) => handleChange(e, setDescription)}
            type="text"
            placeholder="Description"
            className="descriptionInput"
          />
          <input
            onChange={(e) => handleChange(e, setBook)}
            type="text"
            placeholder="Book"
            className="bookInput"
          />
          <button type="submit">Add Character</button>
        </AddCharacterForm>
      </AddCharacterWrapper>
    </>
  );
};

export default AddChar;

const AddCharacterWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece;
  background: #fdfdfd;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const AddCharacterForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: auto;
  input {
    height: 20px;
  }
  button {
    padding: 10px;
    background: #359235;
    border: 1px solid #000000d6;
    color: white;
  }
`;

const AddCharacterHeader = styled.div`
  display: flex;
  justify-content: center;
`;

