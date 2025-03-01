import styled from "styled-components";

export const HomePageContainer = styled.div`
  text-align: center;
  min-heigh: 100vh;
  padding: 20px auto;
`;

export const HomeTitle = styled.h1`
  color: #333;  
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;