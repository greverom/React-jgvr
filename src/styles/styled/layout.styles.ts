import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 0px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100vh;
  background-color: #ffffff;
  transition: margin-left 0.3s ease-in-out; // Transición suave
`;