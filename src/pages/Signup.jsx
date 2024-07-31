import styled from 'styled-components';

const SignupWrapper = styled.div`
  width: 100%;
  max-width: 556px;
  border-radius: 5px;
  border: 1px solid black;
  background: white;
`;

const Signup = () => {
  return (
    <>
    <h1>Create an account </h1>
      <SignupWrapper>
        Hello
      </SignupWrapper>
    </>
  )
}

export default Signup;