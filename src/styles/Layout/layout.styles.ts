import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
  margin: 0;
  padding: 0;
  background-color: #346bdb;
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #ffffff; 
`;