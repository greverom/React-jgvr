import styled from "styled-components";

export const ModalPageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ModalTitle = styled.h1`    
  color: #333;  
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;  
  gap: 10px;
  margin-top: 4rem;

  button {
    width: auto;   
    min-width: 180px; 
  }
`;

export const ModalButton = styled.button`
  width: 200px;
`;