import React, { useState } from "react";
import { updateAcc } from "../../utils/usersFetch";
import styled from "styled-components";

const UpdateProfile = ({ loggedUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      id: loggedUser.user.id,
      username: editUsername ? username : undefined,
      email: editEmail ? email : undefined,
      password: editPassword ? password : undefined,
    };

    const data = await updateAcc(updateData);
    setMessage(data.message);
  };

  return (
    <UpdateWrapper>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label onClick={() => setEditUsername(true)}>
            Username{editUsername ? "" : username}
          </Label>
          {editUsername && (
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="New Username"
            />
          )}
        </FormGroup>
        <FormGroup>
          <Label onClick={() => setEditEmail(true)}>
            Email{editEmail ? "" : email}
          </Label>
          {editEmail && (
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="New Email"
            />
          )}
        </FormGroup>
        <FormGroup>
          <Label onClick={() => setEditPassword(true)}>Password</Label>
          {editPassword && (
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
          )}
        </FormGroup>
        <Button type="submit">Update</Button>
      </form>
      {message && <Message>{message}</Message>}
    </UpdateWrapper>
  );
};

export default UpdateProfile;

const UpdateWrapper = styled.div`
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

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
  color: #359235;
  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: 1px solid #5b5b5bbd;
  border-radius: 0;
  outline: none;
  background-color: #1a1b20;
  color: white;
  font-size: 15px;

  &:focus {
    border-color: #909090;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #383838 inset !important;
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Button = styled.button`
  padding: 12px;
  background: #359235;
  border: 1px solid #000000d6;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 15px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;

  &:hover {
    background: #2a732a;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  color: #359235;
  font-family: "Nunito", sans-serif;
`;
