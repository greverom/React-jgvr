import styled from "styled-components";

export const DynamicFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

export const DynamicFormWrapper = styled.form`
  background: radial-gradient(circle,rgb(246, 246, 246) 0%,rgb(255, 255, 255) 100%);
  display: flex;
  width: 600px; 
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-bottom: 2rem;
  border-radius: 10px;
  border: 1px solid  rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) { 
    width: 100%;
    max-width: 390px; 
    padding: 1rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #555;
  text-align: left;
  margin: 0 0 5px 10px;

  @media (max-width: 768px) {
    font-size: 13px; 
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

`;

export const Input = styled.input<{ $hasError?: boolean }>`
  max-width: 266px;
  min-width: 265px;
  padding: 0 5px;
  height: 36px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "red" : "#ccc")};
  border-radius: 5px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    min-width: 94.5%;
  }

  @media (max-width: 490px) {
    font-size: 14px; 
    height: 42px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  max-width: 266px;
  min-width: 280px;
  padding: 0 5px;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #828485;
  }

   @media (max-width: 768px) {
    min-width: 97.5%;
  }

   @media (max-width: 490px) {
    min-width: 99%;  
    height: 42px;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  text-align: left;
  margin: 4px 0 0 10px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 11px; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;

  button {
    max-width: 200px; 
  }

   @media (max-width: 768px) {
    margin-top: 1rem;
  
    button {
    max-width: 100%; 
  }
`;

