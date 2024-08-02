import styled from "styled-components";
import { updateCharacter } from "../../utils/charFetch";
import { useState } from "react";

const UpdateChar = () => {
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

    // if (!name || !age || !pronouns || !description || !book) {
    //   setError("All fields are required.");
    //   return;
    // }

    try {
      const response = await updateCharacter(
        name,
        age,
        pronouns,
        description,
        book
      );

      console.log("Successfully updated character", response);
    } catch (error) {
      console.error("Failed to update character.", error);
    }
  };

  return (
    <>
      <UpdateCharacterWrapper>
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

