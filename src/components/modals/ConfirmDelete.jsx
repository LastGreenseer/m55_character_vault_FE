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
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete {characterName}?</p>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #494949;
  padding: 20px;
  border-radius: 8px;
  height: 350px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(117, 117, 117, 0.1);
  position: relative;
  display: flex;
  flex-direction: column
`;

const ModalHeader = styled.h2`
  display: flex;
  justify-content: flex-end;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto
`;

const CloseButton = styled.button`
  border: none;
  background-color: red;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 10px;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 4px;
`;

const ConfirmButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #960000;

  &:hover {
    background-color: red;
  }
`;
