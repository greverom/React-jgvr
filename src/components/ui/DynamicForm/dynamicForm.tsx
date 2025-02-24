import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AuthContainer,
  AuthForm,
  AuthTitle,
  InputGroup,
  Label,
  InputContainer,
  Input,
  InputIcon,
  ErrorMessage,
  SelectContainer,
  Select
} from "../../../styles/styled/auth.styles"; 
import { FieldConfig, DynamicFormProps, FormData } from "../../../Interfaces/dynamicForm.Props"; 

const createValidationSchema = (fields: FieldConfig[]) => {
    const schema: Record<string, yup.AnySchema> = {};
  
    fields.forEach((field) => {
      let validator = yup.string();
  
      if (field.required) {
        validator = validator.required(`${field.label} es obligatorio`);
      }
      if (field.minLength) {
        validator = validator.min(field.minLength, `${field.label} debe tener al menos ${field.minLength} caracteres`);
      }
      if (field.type === "email") {
        validator = validator.email("Correo inválido");
      }
      if (field.name === "confirmPassword") {
        validator = validator.oneOf([yup.ref("password")], "Las contraseñas no coinciden");
      }
  
      schema[field.name] = validator;
    });
  
    return yup.object().shape(schema);
  };

export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  const validationSchema = createValidationSchema(fields);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({  
    resolver: yupResolver(validationSchema),
  });

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Registro de Usuario</AuthTitle>

        {fields.map((field) => (
          <InputGroup key={field.name}>
            <Label>{field.label}</Label>

            {field.type === "select" ? (
              <SelectContainer>
               <Select {...register(field.name as keyof FormData)}>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
            ) : (
              <InputContainer>
                <Input type={field.type} {...register(field.name as keyof FormData)} $hasError={!!errors[field.name as keyof FormData]} />
                {field.type === "email" && <InputIcon $position="left">📧</InputIcon>}
                {field.type === "password" && <InputIcon $position="right">🔒</InputIcon>}
              </InputContainer>
            )}

            {errors[field.name as keyof FormData] && <ErrorMessage>{errors[field.name as keyof FormData]?.message as string}</ErrorMessage>}
          </InputGroup>
        ))}

        <button type="submit">Enviar</button>
      </AuthForm>
    </AuthContainer>
  );
}