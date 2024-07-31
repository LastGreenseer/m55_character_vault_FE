import { addCharacter } from "../utils/fetch";
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
    <div className="mainContainer">
      <form onSubmit={handleSubmit} className="addCharacterForm">
        <div className="addCharacterContainer">
          #
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
        </div>
      </form>
    </div>
  );
};

export default AddChar;
