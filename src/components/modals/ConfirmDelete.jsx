import React from "react";
import styled from "styled-components";

const ConfirmDelete = ({ show, onClose, onConfirm, characterName }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>
            Are you sure you want to delete <strong>{characterName}</strong>?
          </p>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmDelete;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Slightly darker for better contrast */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1a1b20; /* Darker background to match the app's dark theme */
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* More pronounced shadow for depth */
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: #e0e0e0;
  font-family: "Nunito", sans-serif;
  font-weight: bold;

`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #e0e0e0;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #555;
  color: #fff;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #e74c3c;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;
