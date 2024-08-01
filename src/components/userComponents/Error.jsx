import React from 'react';
import styled from 'styled-components';

const ErrorBox = styled.div`
  background-color: #fff0f0;
  border: 1px solid #ff3b30;
  border-radius: 4px;
  padding: 16px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(255, 59, 48, 0.1);
`;

const ErrorTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #ff3b30;
  font-size: 16px;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: #4a4a4a;
  font-size: 14px;
  line-height: 1.5;
`;

const Error = ({ title, message }) => (
  <ErrorBox>
    <ErrorTitle>{title}</ErrorTitle>
    <ErrorMessage>{message}</ErrorMessage>
  </ErrorBox>
);

export default Error;