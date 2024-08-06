import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CharacterInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const character = state?.character;

  React.useEffect(() => {
    console.log("Character data:", character);
  }, [character, navigate]);

  if (!character) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <MainWrapper>
        <InfoWrapperMain>
          <InfoWrapperName>
            <PlaceholderCircle
              style={{ backgroundImage: `url("${character.image}")` }}
            />
            <BoldText>{character.name}</BoldText>
            <SubText>{character.pronouns}</SubText>
          </InfoWrapperName>
          <InfoWrapperBiography>
            <BoldText>Biography</BoldText>
            <SubText>{character.description}</SubText>
          </InfoWrapperBiography>
          <InfoWrapperBooks>
            <BoldText>Books</BoldText>
            <SubText>{character.book}</SubText>
          </InfoWrapperBooks>
        </InfoWrapperMain>
        <ManagementWrapperMain>
          <UpdateCharacterWrapper></UpdateCharacterWrapper>
          <DeleteCharacterWrapper></DeleteCharacterWrapper>
        </ManagementWrapperMain>
      </MainWrapper>
    </>
  );
};

export default CharacterInfo;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoWrapperMain = styled.div``;

const InfoWrapperName = styled.div``;

const InfoWrapperBiography = styled.div``;

const InfoWrapperBooks = styled.div``;

const ManagementWrapperMain = styled.div``;

const UpdateCharacterWrapper = styled.div``;

const DeleteCharacterWrapper = styled.div``;

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