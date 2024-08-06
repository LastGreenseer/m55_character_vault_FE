import React from "react";
import styled from "styled-components";

const ConfirmDelete = ({ show, onClose, onConfirm, characterName }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalWrapper>
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
    </ModalWrapper>
  );
};

export default ConfirmDelete;

const ModalWrapper = styled.div`
position: fixed;
display: flex;
justify-content: center;
`;

const ModalContent = styled.div`
background: white;
padding: 20px;
`;

const ModalHeader = styled.h2`
display: flex;
justify-content: flex-end;
button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer
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