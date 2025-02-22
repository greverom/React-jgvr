import React from "react";
import { StyledButton } from "../../../styles/styled/styles.button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" ;
  isActive?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant = "primary", isActive = false }) => {
  return (
    <StyledButton type={type} onClick={onClick} $variant={variant} $isActive={isActive}>
      {children}
    </StyledButton>
  );
};

export default Button;