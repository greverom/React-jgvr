import styled from "styled-components";

export const DynamicFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  background-color: #f8f9fa;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DynamicFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px; 
  padding: 2rem;
  margin-bottom: 2rem;
  background: white;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) { 
    width: 100%;
    max-width: 390px; 
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
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
  gap: 1.2rem;
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
  font-size: 12px;
  color: #555;
  text-align: left;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px; 
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

`;

export const Input = styled.input<{ $hasError?: boolean }>`
  max-width: 266px;
  min-width: 265px;
  padding: 12px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "red" : "#ccc")};
  border-radius: 6px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    min-width: 94.5%;
    font-size: 12px; 
    padding: 10px;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 100%;
  min-width: 250px;
  padding: 12px;
  height: 41.5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #828485;
  }

   @media (max-width: 768px) {
   max-width: 100%;
   height: 36px;
    font-size: 12px;
    padding: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: left;
  margin-top: 5px;
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

