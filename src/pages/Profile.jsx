import React, { useState } from "react";
import styled from "styled-components";
import UpdateProfile from "../components/userComponents/UpdateProfile";
import DeleteAccount from "../components/userComponents/DeleteAccount";

const Profile = ({ loggedUser, logOrSignSetters }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <h2>{loggedUser.user.username}</h2>
        <ProfileInfo>
          <p>
            <strong>Username:</strong> {loggedUser.user.username}
          </p>
          <p>
            <strong>Email:</strong> {loggedUser.user.email}
          </p>
        </ProfileInfo>
      </ProfileHeader>
      <ActionButton onClick={toggleEdit}>
        {isEditing ? "Cancel Edit" : "Edit Profile"}
      </ActionButton>
      {isEditing && <UpdateProfile loggedUser={loggedUser} />}
      <DeleteAccount logOrSignSetters={logOrSignSetters} />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece0f;
  background: #1a1b20;
  margin: auto;
  margin-top: 125px;
  font-family: "Nunito", sans-serif;
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 20px;
    font-family: "Rubik", sans-serif;
    color: #dd901d;
    text-transform: uppercase;
  }
`;

const ProfileInfo = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 20px;

  p {
    margin: 10px 0;
  }

  strong {
    color: #dd901d;
  }
`;

const ActionButton = styled.button`
  padding: 12px;
  background: #359235;
  border: 1px solid #000000d6;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background: #2a732a;
  }
`;
