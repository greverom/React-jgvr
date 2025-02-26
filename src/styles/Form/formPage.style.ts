import styled from "styled-components";

export const UserPageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const UserTitle = styled.h1`
  color: #333;  
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;