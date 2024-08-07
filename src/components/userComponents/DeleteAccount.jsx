import { deleteAccount } from "../../utils/usersFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DeleteAccount = ({ logOrSignSetters }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const data = await deleteAccount(logOrSignSetters.loggedUser.id);

      if (data.message === "User deleted successfully") {
        logOrSignSetters.setLoggedUser(null);
        logOrSignSetters.setIsLoggedIn(false);

        setTimeout(() => {
          navigate("/signup");
        }, 2000);
      } else {
        setMessage(" an error occured:", error.message);
      }
    } catch (error) {
      setMessage("Error" + error.message);
    }
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <DeleteWrapper>
      {showConfirmation ? (
        <ConfirmationBox>
          <p>Are you sure you want to delete your account?</p>
          <Button onClick={handleDelete}>Yes, Delete</Button>
          <CancelButton onClick={handleCancelDelete}>Cancel</CancelButton>
        </ConfirmationBox>
      ) : (
        <Button onClick={handleConfirmDelete}>Delete Account</Button>
      )}
    </DeleteWrapper>
  );
};
export default DeleteAccount;

const DeleteWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  padding: 12px;
  background: #c53030;
  border: 1px solid #000000d6;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 15px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;

  &:hover {
    background: #a52828;
  }
`;

const CancelButton = styled(Button)`
  background: #cccccc;
  color: black;

  &:hover {
    background: #999999;
  }
`;

const ConfirmationBox = styled.div`
  text-align: center;
`;
