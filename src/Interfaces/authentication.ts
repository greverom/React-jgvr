 export interface InputFieldProps {
    name: string;
    label: string;
    type?: string;
  }

export interface LoginFormInputs {
    email: string;
    password: string;
  }
  
  export interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user'; 
  }