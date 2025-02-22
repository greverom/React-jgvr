import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  background-color: #f0f2f5;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 1.7rem;
  margin-bottom: 2rem;
  background: white;
  border: 1px solid rgb(195, 195, 195);
  border-radius: 8px;
`;

export const AuthTitle = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 2.5rem;
  text-align: center;
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
  margin-bottom: 7px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 277px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #828485;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const AuthButton = styled.button`
  background: #007bff;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-align: center;

  &:hover {
    transform: scale(1.01);
  }
`;