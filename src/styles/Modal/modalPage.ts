import styled from "styled-components";

export const ModalPageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ModalTitle = styled.h1`    
  color: #333;  
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  flex-wrap: wrap;  
  gap: 16px;

  button {
    width: auto;   
    min-width: 180px; 
  }
`;

export const ModalButton = styled.button`
  width: 200px;
`;