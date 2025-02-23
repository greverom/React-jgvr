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

export const ModalContent = styled.div`
  background: white;
  width: 400px;
  padding: 17px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${popIn} 0.3s ease-out;                  
`;

export const ModalHeader = styled.div<{ $type: "success" | "error" | "warning" | "info" | "question" }>`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 7px;
  padding-bottom: 15px;
  position: relative;
  border-bottom: 1px solid ${({ $type }) =>
    $type === "success" ? "#28a745" :  
    $type === "error" ? "#dc3545" :       
    "#fff"}; /* Color por defecto */
  
  h2 {
    font-size: 17px;
    font-weight: bold;
    margin: 0 auto;
    color: ${({ $type }) =>
      $type === "success" ? "#28a745" :  
      $type === "error" ? "#dc3545" :   
      $type === "info" ? "#17a2b8" :    
      "#333"}; 
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  position: absolute; 
  right: -10px; 
  bottom: 20px; 
`;

export const ModalBody = styled.div`
  margin: 25px 5px;
  font-size: 15px;
  text-align: left;
  color: #333;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
   gap: 15px;

    button {
    width: 170px; 
    padding: 13px;
    font-size: 14px;
    min-width: 120px;
  }
`;

export const ModalButton = styled.button<{ $type: "success" | "error" | "warning" | "info" }>`
  width: 170px;
  min-width: 120px;
  padding: 13px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  color: white;
  gap: 10px;

  background: ${({ $type }) =>
    $type === "success" ? "#28a745" :
    $type === "error" ? "#dc3545" :
    $type === "info" ? "#17a2b8" :
    "#6c757d"};

  &:hover {
    background: ${({ $type }) =>
      $type === "success" ? "#218838" :
      $type === "error" ? "#c82333" :
      $type === "info" ? "#138496" :
      "#545b62"};
  }

`;

