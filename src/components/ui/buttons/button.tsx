import React from "react";
import { StyledButton } from "../../../styles/Button/styles.button";
import { ButtonProps } from "../../../Interfaces/buttonProps";


const Button: React.FC<ButtonProps> = ({ 
  children, onClick, 
  type = "button", 
  variant = "primary", 
  isActive = false,  
  style, className }) => {

  return (
    <StyledButton type={type} 
                  onClick={onClick} 
                  $variant={variant} 
                  $isActive={isActive} 
                  style={style} 
                  className={className}>
                    
      {children}
    </StyledButton>
  );
};

export default Button;