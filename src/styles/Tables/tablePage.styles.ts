import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PageTitle = styled.h1`
  width: 100%;
  color: #333;  
  font-size: 2rem;
  font-weight: bold;

  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;