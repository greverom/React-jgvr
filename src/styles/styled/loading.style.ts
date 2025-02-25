import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); 
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(0, 0, 255, 0); 
  border-top-color: rgb(64, 177, 183); 
  border-radius: 50%; 
  animation: ${spin} 0.5s linear infinite;
`;