import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpdateChar from "./UpdateCharacter";

const CharacterInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const character = state?.character;

  const [showUpdateChar, setShowUpdateChar] = useState(false);

  React.useEffect(() => {
    console.log("Character data:", character);
  }, [character, navigate]);

  const handleToggleUpdateChar = () => {
    setShowUpdateChar((prev) => !prev);
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
              <PlaceholderCircle
                style={{ backgroundImage: `url("${character.image}")` }}
              />
            </AvatarWrapper>
            <NamePronounsWrapper>
              <BoldText>{character.name}</BoldText>
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
          <BoldText>Character Management</BoldText>
          <UpdateCharacterWrapper>
            <button onClick={handleToggleUpdateChar}>
              {showUpdateChar
                ? "Close"
                : "Update Character"}
            </button>
            {showUpdateChar && <UpdateChar />}
          </UpdateCharacterWrapper>
          <SubText>Delete Character</SubText>
          <DeleteCharacterWrapper>
            <h2>Do you want to delete this character?</h2>
            <button>Delete Character</button>
          </DeleteCharacterWrapper>
        </ManagementWrapperMain>
      </MainWrapper>
    </>
  );
};

export default CharacterInfo;

const MainWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoWrapperMain = styled.div`
  background: #1a1b20;
  border-radius: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* margin-left: 10px; */
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
  border: 2px solid blue;
  width: 540px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #732a2a;
  border-radius: 5px;

  h2 {
    font-size: 18px;
  }

  button {
    padding: 12px;
    margin-left: 20px;
    background: #000000;
    border: 1px solid #000000d6;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;

    &:hover {
      background: #ff7474;
    }
  }
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
