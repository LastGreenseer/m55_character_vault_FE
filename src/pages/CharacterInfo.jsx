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
            <h1>{character.name}</h1>
          </InfoWrapperName>
          <InfoWrapperBiography></InfoWrapperBiography>
          <InfoWrapperBooks></InfoWrapperBooks>
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

const MainWrapper = styled.div``;

const InfoWrapperMain = styled.div``;

const InfoWrapperName = styled.div``;

const InfoWrapperBiography = styled.div``;

const InfoWrapperBooks = styled.div``;

const ManagementWrapperMain = styled.div``;

const UpdateCharacterWrapper = styled.div``;

const DeleteCharacterWrapper = styled.div``;
