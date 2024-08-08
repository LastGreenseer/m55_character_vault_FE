import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Error from "../components/userComponents/Error";

const SignupWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece0f;
  background: #1a1b20;
  margin: auto;
  margin-top: 125px;
`;

const SignupHeader = styled.div`
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
  .login-link {
    font-weight: bold;
    color: #359235;
    text-decoration: none;
  }
`;

const SignupForm = styled.form`
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
    background-color: #383838;
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

const SuccessBox = styled.div`
  background: #438f43;
  border: 1px solid #ffffff4d;
  border-radius: 5px;
  color: white;
  padding: 15px 15px;
  box-sizing: border-box;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [success, setSuccess] = useState();
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        setErrors({ message: "Failed to create an account" });
      }

      setSuccess({
        message:
          "Account successfully created, automatically redirecting to login.",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <>
      <SignupWrapper>
        <SignupHeader>
          <h2>Create an account </h2>
          <p>
            Already have an account?{" "}
            <Link className="login-link" to="/login">
              Login
            </Link>
          </p>
        </SignupHeader>
        {success ? (
          <SuccessBox>
            <b>Account successfully created</b>
            <p>{success.message}</p>
          </SuccessBox>
        ) : (
          ""
        )}
        <SignupForm onSubmit={handleSignup}>
          <label>Username</label>
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email Address</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
        </SignupForm>
      </SignupWrapper>
    </>
  );
};

export default Signup;
