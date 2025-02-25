import styled, { keyframes } from "styled-components";


const popIn = keyframes`
  0% {
    transform: translateY(0) scale(0.5); 
    opacity: 0;
  }
  50% {
    transform: translateY(0) scale(1.1); 
    opacity: 1;
  }
  100% {
    transform: translateY(0%) scale(1); 
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<{ $type?: "success" | "error" | "warning" | "info" | "question"; $hasTimeout?: boolean }>`
  background: white;
  width: ${({ $type }) => ($type === "question" ? "auto" : "340px")}; 
  padding: ${({ $type }) => ($type === "question" ? "20px" : "15px")};
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${popIn} 0.3s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $hasTimeout }) => ($hasTimeout ? "100%" : "0%")};
    height: 4px;
    background-color: ${({ $type }) =>
      $type === "success" ? "#28a745" :
      $type === "error" ? "#dc3545" :
      $type === "warning" ? "#f4a836" :
      $type === "info" ? "#17a2b8" :
      "transparent"};

    transition: width 0.3s linear;
    animation: ${({ $hasTimeout }) => ($hasTimeout ? "progressBar 2s linear forwards" : "none")};
  }

  @keyframes progressBar {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export const ModalHeader = styled.div<{ $type: "success" | "error" | "warning" | "info" | "question" }>`
  display: flex;
  width: 100%;
  margin: auto
  justify-content: center;
  align-items: center;
  position: relative;
  
  h2 {
    font-size: 15px;
    margin: 0;
    color: ${({ $type }) =>
      $type === "success" ? "#28a745" :  
      $type === "error" ? "#dc3545" :   
      $type === "info" ? "#17a2b8" :    
      "#333"}; 

    text-align: center;
    flex: 1; 
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  position: absolute; 
  right: 0px; 
  bottom: 10px; 
`;

export const ModalBody = styled.div`
  padding: 10px ;
  font-size: 13px;
  text-align: center;
  color: #333;

  p{
    margin: 7px ;
    }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px;
  gap: 10px;

    button {
    padding: 13px;  
    width: 140px; 
  }
`;

