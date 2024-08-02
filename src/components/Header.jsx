import React from "react";
import styled from "styled-components";

const Header = ({ loggedUser }) => {
  return (
    <StyledHeader>
      <div>
        <h1>Character Vault</h1>
        {loggedUser === null ? (
          <p>Log in to unlock the Vault!</p>
        ) : (
          <p>Welcome {loggedUser.user.username}</p>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h1`
  text-align: center;
`;
