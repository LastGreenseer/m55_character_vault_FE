import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { updateCharacter } from "../utils/charFetch";
import { useState } from "react";

const UpdateChar = ({ setUserCharacters }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [description, setDescription] = useState("");
  const [book, setBook] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { character } = location.state;

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateCharacter(
        character.id,
        name,
        age,
        pronouns,
        description,
        book
      );

      setUserCharacters([...response.allCharacters]);
      navigate("/");
    } catch (error) {
      console.error("Failed to update character.", error);
    }
  };

  return (
    <>
      <UpdateCharacterWrapper>
        <BackButton>
          <h2>
            <BackLink to="/">Back</BackLink>
          </h2>
        </BackButton>
        <UpdateCharacterHeader>
          <h2>Please update your character's information</h2>
        </UpdateCharacterHeader>
        <UpdateCharacterForm onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            onChange={(e) => handleChange(e, setName)}
            type="text"
            className="nameInput"
          />
          <label>Age</label>
          <input
            onChange={(e) => handleChange(e, setAge)}
            type="text"
            className="ageInput"
          />
          <label>Pronouns</label>
          <input
            onChange={(e) => handleChange(e, setPronouns)}
            type="text"
            className="pronounsInput"
          />
          <label>Description</label>
          <input
            onChange={(e) => handleChange(e, setDescription)}
            type="text"
            className="descriptionInput"
          />
          <label>Book</label>
          <input
            onChange={(e) => handleChange(e, setBook)}
            type="text"
            className="bookInput"
          />
          <button type="submit">Update Character</button>
        </UpdateCharacterForm>
      </UpdateCharacterWrapper>
    </>
  );
};

export default UpdateChar;

const UpdateCharacterWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece0f;
  background: #1a1b20;
  margin: auto;
  font-family: "Nunito", sans-serif;
`;

const UpdateCharacterForm = styled.form`
  font-family: "Nunito", sans-serif;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: auto;
  input {
    height: 20px;
    background-color: #1a1b20;
    color: white;
    border: 1px solid #5b5b5bbd;
    border-radius: 0px;
    outline: none;
    padding: 12px;
    font-size: 15px;

    &:focus {
      border-color: #909090;
    }
  }
  button {
    padding: 12px;
    background: #359235;
    border: 1px solid #000000d6;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 15px;
    font-weight: bold;

    &:hover {
      background: #2a732a;
    }
  }
`;

const UpdateCharacterHeader = styled.div`
  display: flex;
`;

const BackButton = styled(Link)`
  width: 25%;
  font-size: 15px;
  text-align: left;
  font-family: "Nunito", sans-serif;
  :hover {
    color: #dd901d;
  }
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
