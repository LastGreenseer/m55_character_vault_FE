import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ loggedUser }) => {

  return (
    <StyledHeader>
      <HeaderLeft>
        <div className="site-title" onClick={() => navigate("/")}>Character<span>Vault</span></div>
      </HeaderLeft>
      <HeaderRight>
        {!loggedUser || !loggedUser.user ? (
          <StyledList>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </StyledList>
        ) : (
          <StyledList>
            <li>{loggedUser.user.username}</li>
          </StyledList>
        )}
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h1`
  background: #1A1B20;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
`;

const HeaderLeft = styled.div`
  width: 25%;
  text-align: left;
  font-family: "Rubik", sans-serif;
  .site-title {
    span {
      color: #DD901D;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  width: 75%;
  font-family: "Nunito", sans-serif;
  align-items: center;
  justify-content: flex-end;
  li {
    font-size: 20px;
    list-style-type: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  gap: 25px;
  li {
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #DD901D;
    }
  }
`;