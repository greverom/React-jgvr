import styled from "styled-components";

export const ModalPageContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ModalTitle = styled.h1`    
  font-size: 1.8rem; 
  font-weight: bold;
  color: #333; 
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px; 
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