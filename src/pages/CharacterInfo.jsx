import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpdateChar from "./UpdateCharacter";
import ConfirmDelete from "../components/modals/ConfirmDelete";
import { deleteCharacter } from "../utils/charFetch";

const CharacterInfo = ({ setUserCharacters }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const character = state?.character;

  const [showUpdateChar, setShowUpdateChar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  React.useEffect(() => {}, [character, navigate]);

  const handleToggleUpdateChar = () => {
    setShowUpdateChar((prev) => !prev);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteCharacter(character.name);
      setMessage("Character Deleted");
      navigate("/");
    } catch (error) {
      console.error("Error deleteing character", error);
      setMessage("Error deleting character");
    }
    setShowModal(false);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainWrapper>
        <InfoWrapperMain>
          <InfoWrapperChar>
            <AvatarWrapper>
              <AvatarCircle
                style={{ backgroundImage: `url("${character.image}")` }}
              />
            </AvatarWrapper>
            <NamePronounsWrapper>
              <BoldTextName>{character.name}</BoldTextName>
              <SubText>{character.pronouns}</SubText>
            </NamePronounsWrapper>
          </InfoWrapperChar>
          <BiographyWrapperMain>
            <InfoWrapperBiography>
              <BoldText>Biography</BoldText>
              <SubText>{character.description}</SubText>
            </InfoWrapperBiography>
          </BiographyWrapperMain>
          <BookWrapperMain>
            <InfoWrapperBooks>
              <BoldText>Books</BoldText>
              <SubText>{character.book}</SubText>
            </InfoWrapperBooks>
          </BookWrapperMain>
        </InfoWrapperMain>
        <ManagementWrapperMain>
          <BoldTextManagement>Character Management</BoldTextManagement>
          <UpdateCharacterWrapper>
            <button onClick={handleToggleUpdateChar}>
              {showUpdateChar ? "Close" : "Update Character"}
            </button>
            {showUpdateChar && (
              <UpdateChar setUserCharacters={setUserCharacters} />
            )}
          </UpdateCharacterWrapper>
          <DeleteCharacterWrapper>
            <button onClick={handleDeleteClick}>Delete Character</button>
          </DeleteCharacterWrapper>
        </ManagementWrapperMain>
      </MainWrapper>
      {showModal && (
        <ConfirmDelete
          show={showModal}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          characterName={character.name}
        />
      )}
      {message && <p>{message}</p>}
    </>
  );
};

export default CharacterInfo;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const InfoWrapperMain = styled.div`
  background: #1a1b20;
  border-radius: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const InfoWrapperChar = styled.div`
  padding: 40px 40px;
  display: flex;
`;

const AvatarWrapper = styled.div``;

const NamePronounsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px;
`;

const BiographyWrapperMain = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoWrapperBiography = styled.div`
  padding: 40px 40px;
  background: #2d2e31;
  width: 90%;
  border-radius: 5px;
`;

const BookWrapperMain = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoWrapperBooks = styled.div`
  padding: 40px 40px;
  width: 90%;
`;

const ManagementWrapperMain = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const UpdateCharacterWrapper = styled.div`
  margin-right: auto;

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

const DeleteCharacterWrapper = styled.div`
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

const BoldText = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`;

const BoldTextName = styled.div`
  color: #dd901d;
  font-size: 1.5em;
  font-weight: bold;
`;

const BoldTextManagement = styled.div`
  color: #dd901d;
  font-size: 1.5em;
  font-weight: bold;
  padding: 20px 0px;
`;

const SubText = styled.div`
  color: #ffffff;
  font-size: 1.05em;
`;

const AvatarCircle = styled.div`
  width: 10vh;
  height: 10vh;
  background-color: #383838;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;
