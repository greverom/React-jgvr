import styled, { keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    transform: translateY(0) scale(0.3); 
    opacity: 0;
  }
  50% {
    transform: translateY(0) scale(1.05); 
    opacity: 1;
  }
  100% {
    transform: translateY(0%) scale(1); 
    opacity: 1;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 50%; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

export const ToastMessage = styled.div<{ $type: "success" | "error" | "warning" | "info" }>`
  background-color: ${({ $type }) =>
    $type === "success" ? "#d4edda" : 
    $type === "error" ? "#f8d7da" :   
    $type === "warning" ? "#fff3cd" :
    $type === "info" ? "#d1ecf1" :    
    "#f8f9fa"};
    color: ${({ $type }) =>
    $type === "success" ? "#28a745" :
    $type === "error" ? "#dc3545" :
    $type === "warning" ? "#f4a836" :
    $type === "info" ? "#17a2b8" :
    "#333"};
  min-width: 310px;
  padding: 20px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${popIn} 0.5s ease-out; 
  transition: opacity 0.3s ease-in-out;

  &.fade-out {
    opacity: 0;
    transform: translateY(-15px);
  }
`;