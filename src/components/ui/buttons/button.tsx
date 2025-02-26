import React, { CSSProperties } from "react";
import { StyledButton } from "../../../styles/Button/styles.button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "cancel" | "error";
  isActive?: boolean; 
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, onClick, 
  type = "button", 
  variant = "primary", 
  isActive = false,  
  style, className }) => {

  return (
    <StyledButton type={type} onClick={onClick} $variant={variant} $isActive={isActive} style={style} className={className}
      >{children}
    </StyledButton>
  );
};

export default Button;