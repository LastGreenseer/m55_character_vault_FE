import React from "react";
import styled from "styled-components";

const Header = ({ loggedUser }) => {
  return (
    <StyledHeader>
      <div>
        <h1>Character Vault</h1>
        {!loggedUser ? (
          <p>Please login</p>
        ) : (
          <p>Hello </p>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h1`
  text-align: center;
`;
