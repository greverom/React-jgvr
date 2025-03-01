import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 1.5rem 0;
  min-height: auto;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 1.7rem;
  margin-bottom: 2rem;
  background: radial-gradient(circle,rgb(246, 246, 246) 0%,rgb(255, 255, 255) 100%);
  border: 1px solid  rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

   @media (max-width: 768px) {
    border: none;
  }
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
  margin-bottom: 14px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #555;
  text-align: left;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  max-width: 100%;
  min-width: 254px;
  font-size: 14px;
  height: 36px;
  padding-left: ${({ type }) => (type === "email" ? "35px" : "10px")}; 
  padding-right: ${({ type }) => (type === "password" || type === "text" ? "35px" : "10px")}; 
  border: 1px solid ${({ $hasError }) => ($hasError ? "red" : "#ccc")};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, width 0s, min-width 0s;

  &:focus {
    border-color: #828485;
  }

  &:-webkit-autofill {
    background-color: white !important;
    color: #333 !important;
    box-shadow: 0 0 0px 1000px white inset !important;
  }

   @media (max-width: 768px) {
    height: 42px;  
    font-size: 15px; 
  }
`;

export const InputIcon = styled.span<{ $position?: "left" | "right" }>`
  position: absolute; 
  ${({ $position }) => $position === "left" ? "left: 10px;" : "right: 10px;"}
  top: 56%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
  cursor: ${({ $position }) => ($position === "right" ? "pointer" : "default")};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const RememberAndForgotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  margin-top: -2px;
  margin-bottom: 15px;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberMeCheckbox = styled.input`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  cursor: pointer;
`;

export const RememberMeLabel = styled.label`
  font-size: 0.8rem;
  color: grey;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 0.8rem; 
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;
