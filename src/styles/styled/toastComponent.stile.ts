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
    $type === "success" ? "#28a745" :
    $type === "error" ? "#dc3545" :
    $type === "warning" ? "#f4a836" :
    $type === "info" ? "#17a2b8" :
    "#333"};
  color: white;
  padding: 18px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  min-width: 250px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: bold;
  animation: ${popIn} 0.5s ease-out; /* 📌 Nueva animación */
  transition: opacity 0.3s ease-in-out;

  &.fade-out {
    opacity: 0;
    transform: translateY(-10px);
  }
`;