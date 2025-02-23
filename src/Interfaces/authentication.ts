
export interface InputFieldProps {
    name: keyof LoginFormInputs;
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
    id: string;
    username: string;
    email: string;
    role: 'ADMINISTRADOR' | 'GUEST'; 
  }