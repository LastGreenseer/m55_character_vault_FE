import React from "react";
import { deleteCharater } from "../utils/fetch";
import styled from "styled-components";

const DeleteCharacter = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const result = await DeleteCharacter(name);
      setMessage("Character Deleted!");
      console.log("Character Deleted!", result);
    } catch (error) {
      setMessage("Error deleting character");
      console.error("Error deleting character", error);
    }
  };

  return (
    <DeleteWrapper>
      <DeleteHeader>Delete Character</DeleteHeader>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          value={name}
          onChange={(e = setName(e.target.value))}
          placeholder="Character Name"
          required
        />
        <DeleteButton type="submit">Delete Character</DeleteButton>
      </form>
      {message && <p>{message}</p>}
    </DeleteWrapper>
  );
};

const DeleteWrapper = styled.div``;

const DeleteHeader = styled.h2``;

const DeleteButton = styled.button``;

export default DeleteCharacter
