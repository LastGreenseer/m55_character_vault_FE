import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const CharacterInfo = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const { character } = state;

    if (!character) {
      return <div>Character not found</div>;
    }


    return (
      <>
        <MainWrapper>
          <InfoWrapperMain>
            <InfoWrapperName>

            </InfoWrapperName>
            <InfoWrapperBiography>

            </InfoWrapperBiography>
            <InfoWrapperBooks>

            </InfoWrapperBooks>
          </InfoWrapperMain>
          <ManagementWrapperMain>
            <UpdateCharacterWrapper>

            </UpdateCharacterWrapper>
            <DeleteCharacterWrapper>

            </DeleteCharacterWrapper>
          </ManagementWrapperMain>
        </MainWrapper>
      </>
    );
};

export default CharacterInfo;

const MainWrapper = styled.div`
 
`;

const InfoWrapperMain = styled.div`

`;

const InfoWrapperName = styled.div`

`;

const InfoWrapperBiography = styled.div`

`;

const InfoWrapperBooks = styled.div`

`;

const ManagementWrapperMain = styled.div`

`;

const UpdateCharacterWrapper = styled.div`

`;

const DeleteCharacterWrapper = styled.div`

`;