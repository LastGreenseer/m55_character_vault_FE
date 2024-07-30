import React, { useState } from "react";
import { updateAcc } from "../utils/fetch";

const UpdateProfile = () => {
  const fakeUser = {
    id: 123,
    username: "person",
    email: "email@email.com",
    password: "pass123",
  };

  const [username, setUsername] = useState(fakeUser.username);
  const [email, setEmail] = useState(fakeUser.email);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      id: fakeUser.id,
      username,
      email,
      password,
    };

    const data = await updateAcc(updateData);
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProfile;
