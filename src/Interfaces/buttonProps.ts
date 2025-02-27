import { CSSProperties } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "cancel" | "error";
  isActive?: boolean; 
  style?: CSSProperties;
  className?: string;
}