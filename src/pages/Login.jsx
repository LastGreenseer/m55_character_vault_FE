import { login } from "../utils/usersFetch";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useState } from "react";
import Error from "../components/userComponents/Error";

const Login = ({ logOrSignSetters }) => {
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
      if (data.error) {
        setErrors({ error: data.error, message: data.message });
        return;
      }
      logOrSignSetters.setIsLoggedIn(true);
      logOrSignSetters.setLoggedUser(data);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginWrapper>
        <LoginHeader>
          <h2>Login</h2>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
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
  border: 1px solid #cecece;
  background: #fdfdfd;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const LoginHeader = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
  P {
    margin-top: 8px;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    height: 20px;
  }
  button {
    padding: 10px;
    background: #359235;
    border: 1px solid #000000d6;
    color: white;
  }
`;
