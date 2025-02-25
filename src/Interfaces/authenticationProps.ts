import { FieldValues } from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> {
  name: keyof T; 
  label: string;
  type?: "text" | "email" | "password"; 
}

export interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}
  
  export interface RegisterFormInputs {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
  
  export interface AuthResponse {
  token: string;
  user: User;
}
  
  export interface User {
  id: number;
  username: string;
  email: string;
  role: 'ADMINISTRADOR' | 'GUEST'; 
}