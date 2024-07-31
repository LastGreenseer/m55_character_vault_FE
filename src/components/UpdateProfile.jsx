import React, { useEffect, useState } from "react";
import { updateAcc } from "../utils/fetch";

const UpdateProfile = ({ loggedUser }) => {
  const [username, setUsername] = useState(loggedUser.user.username);
  const [email, setEmail] = useState(loggedUser.user.email);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUsername(loggedUser.user.username);
    setEmail(loggedUser.user.email);
  }, [loggedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      id: loggedUser.user.id,
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
