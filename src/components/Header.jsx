import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ loggedUser }) => {
  return (
    <StyledHeader>
      <HeaderLeft>
        <div className="site-title" onClick={() => navigate("/")}>
          Character<span>Vault</span>
        </div>
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
            <li>
              <Link to={`/profile`} className="username-link">
                {loggedUser.user.username}
              </Link>
            </li>
          </StyledList>
        )}
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: #1a1b20;
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
    cursor: pointer;
    span {
      color: #dd901d;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  width: 75%;
  font-family: "Nunito", sans-serif;
  align-items: center;
  justify-content: flex-end;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  gap: 25px;
  li {
    list-style-type: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #dd901d;
  }
`;

const ClickableUsername = styled(Link)`
  color: white;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #dd901d;
  }
`;
