import { login } from "../utils/usersFetch";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Error from "../components/userComponents/Error";
import styled from "styled-components";

import { writeCookie } from "../common";

const Login = ({ logOrSignSetters, charSetters }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  const changeHandler = (event, setter) => {
    setter(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const data = await login(username, password);

      if (data.message === "user not found") {
        setErrors({ error: true, message: "User not found" });
        return;
      }

      if (data.error) {
        setErrors({ error: data.error, message: data.message });
        return;
      }
      logOrSignSetters.setIsLoggedIn(true);
      logOrSignSetters.setLoggedUser(data.user);
      charSetters.setUserCharacters(data.characters);
      writeCookie("jwt_token", data.token, 7);

      setUsername("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrors({ error: true, message: "An unexpected error occurred" });
    }
  };

  return (
    <>
      <LoginWrapper>
        <LoginHeader>
          <h2>Login</h2>
          <p>
            Don't have an account?{" "}
            <Link className="signup-link" to="/signup">
              Signup
            </Link>
          </p>
        </LoginHeader>
        {errors?.error ? (
          <Error
            title="There was an error logging in."
            message={errors?.message}
          />
        ) : (
          ""
        )}
        <LoginForm onSubmit={submitHandler}>
          <label>Username</label>
          <input
            value={username}
            type="text"
            onChange={(event) => changeHandler(event, setUsername)}
          />
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece0f;
  background: #1a1b20;
  margin: auto;
  margin-top: 125px;
`;

const LoginHeader = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    padding-bottom: 0px;
    margin-bottom: 0px;
    text-transform: uppercase;
    font-family: "Rubik", sans-serif;
  }
  P {
    margin-top: 8px;
    font-family: "Nunito", sans-serif;
  }
  .signup-link {
    font-weight: bold;
    color: #359235;
    text-decoration: none;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 35px;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;

  label {
    font-weight: bold;
  }

  input {
    background-color: #1a1b20;
    color: white;
    border: 1px solid #5b5b5bbd;
    border-radius: 0px;
    outline: none;
    padding: 12px;
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
  }

  button {
    padding: 12px;
    background: #359235;
    border: 1px solid #000000d6;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 15px;
    font-weight: bold;

    &:hover {
      background: #2a732a;
    }
  }
`;
