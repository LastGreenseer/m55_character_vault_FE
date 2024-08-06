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
          <button onClick={onClose}>X</button>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete {characterName}?</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
background: #494949;
padding: 20px;
`;

const ModalHeader = styled.h2`
  display: flex;
  justify-content: flex-end;
  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
  }
`;