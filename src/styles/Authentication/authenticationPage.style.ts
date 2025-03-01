import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const DashboardTitle = styled.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
  }
`;

export const DashboardNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  gap: 10px;
`;

export const DashboardContent = styled.div`
  margin-top: 30px; 
  width: 100%;
  min-height: 100vh
  background: black;
`;