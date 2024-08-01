import styled from "styled-components";

const Profilewrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  border: 1px solid black;
  background: white;
`;

const Profile = ({ loggedUser }) => {
  return (
    <>
      <h1>Profile </h1>
      <Profilewrapper>Hello {loggedUser.user.username} </Profilewrapper>
    </>
  );
};

export default Profile;
