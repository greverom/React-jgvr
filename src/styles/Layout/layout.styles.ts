import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
  margin: 0;
  padding: 0;
  color: white;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px auto;
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background: radial-gradient(circle,rgba(239, 248, 255, 0.5) 100%,rgba(255, 255, 255, 0.88) 100%);
  overflow-x: auto;
`;