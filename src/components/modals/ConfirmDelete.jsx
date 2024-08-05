import React from "react";
import styled from "styled-components";

const ConfirmDelete = ({ show, onClose, onConfirm, characterName }) => {
  if (!show) {
    return null;
  }
};

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
