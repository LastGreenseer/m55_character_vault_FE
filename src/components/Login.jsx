import { login } from "../utils/fetch";
import { changeHandler } from "../utils/helpers";

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("submit handler login");

    const data = await login(username, password);

    setUsername();
    setPassword();

    return data;
  };
  return (
    <div className="loginWrap">
      <h2>Login</h2>
      <form className="inputWrap" onSubmit={submitHandler}>
        <input
          placeholder="username"
          onChange={(event) => changeHandler(event, setUsername)}
        />
        <input
          placeholder="password"
          onChange={(event) => changeHandler(event, setPassword)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
