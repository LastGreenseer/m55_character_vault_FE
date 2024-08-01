import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const SignupWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #cecece;
  background: #fdfdfd;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const SignupHeader = styled.div`
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

const SignupForm = styled.form`
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

const ErrorBox = styled.div`
  background: red;
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

  const [errors, setErrors] = useState();
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }),
      });

      if (!response.ok) {
        setErrors({ message: "Failed to create an account" });
      }

      setSuccess({ message: "Account successfully created, automatically redirecting to login." });

      // Give slight delay to show success message.
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrors(error)
    }
  }

  return (
    <>
      <SignupWrapper>
        <SignupHeader>
          <h2>Create an account </h2>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </SignupHeader>
        {success ? (
          <SuccessBox>
            <b>Account successfully created</b>
            <p>{success.message}</p>
          </SuccessBox>
        ) : ''}
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
  )
}

export default Signup;