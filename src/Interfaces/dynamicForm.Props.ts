
export interface FieldConfig {
  name: string;
  type?: "text" | "email" | "password" | "date" | "tel" | "select" 
  | "radio" | "checkbox" | "role" | "textarea";
  label: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  options?: Option[];
}

export interface Option {
  disabled?: boolean;
  value: string;
  label: string;
}

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  gender?: string;
  address?: string;
  password?: string;
  confirmPassword?: string;
}
  
export interface DynamicFormProps {
  fields: FieldConfig[];
  onSubmit: (data: FormData) => void;
}