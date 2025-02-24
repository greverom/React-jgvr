import styled, { keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
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
  width: 380px;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${popIn} 0.4s ease-out;
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
  padding: 5px 0;
  position: relative;

   span {
    display: flex;
    align-items: center;
    margin-right: 10px; 
  }
  
  h2 {
    font-size: 15px;
    margin: 0;
    color: ${({ $type }) =>
      $type === "success" ? "#28a745" :  
      $type === "error" ? "#dc3545" :   
      $type === "info" ? "#17a2b8" :    
      "#333"}; 

      text-align: ${({ $type }) => ($type === "question" ? "center" : "left")}; /* 🔹 Solo centra el de question */
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
  padding: 0px 0px 8px 0px;
  font-size: 13px;
  text-align: center;
  color: #333;

  p{
    margin: 7px 0 15px 0 ;
    
    }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px;
  gap: 10px;

    button {
    padding: 12px 20px;   
  }
`;

