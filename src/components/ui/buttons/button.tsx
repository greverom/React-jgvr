import React, { CSSProperties } from "react";
import { StyledButton } from "../../../styles/Button/styles.button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "cancel" | "error";
  isActive?: boolean; 
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant = "primary", isActive = false,  style }) => {
  return (
    <StyledButton type={type} onClick={onClick} $variant={variant} $isActive={isActive} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;