import * as yup from "yup";
import { FieldConfig } from "../Interfaces/dynamicForm.Props";

export const createValidationSchema = (fields: FieldConfig[]) => {
  const schema: Record<string, yup.AnySchema> = {};

  fields.forEach((field) => {
    let validator = yup.string();

    if (field.required) {
      validator = validator.required(`${field.label} es obligatorio`);
    }
    if (field.maxLength) {
      validator = validator.max(field.maxLength, `${field.label} no puede tener más de ${field.maxLength} caracteres`);
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
    if (field.name === "phone") {
      validator = validator
        .matches(/^[0-9]+$/, "Solo se permiten números") 
        .length(10, "El teléfono debe tener exactamente 10 dígitos");
    }

    schema[field.name] = validator;
  });

  return yup.object().shape(schema);
};

 