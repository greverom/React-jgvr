import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createValidationSchema } from "../../validations/dynamicFormValidations";
import { DynamicFormProps, FormData } from "../../Interfaces/dynamicForm.Props";
import { useToast } from "../Toast/useToast";

export const useDynamicForm = (fields: DynamicFormProps["fields"], onSubmit: (data: FormData) => void) => {
  const validationSchema = createValidationSchema(fields);
  
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit", 
  });

  const { showToast } = useToast();
  const showToastRef = useRef(showToast);
  const prevErrors = useRef<string[]>([]);
  
  const [formModal, setFormModal] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (formState.isSubmitted) {
      const currentErrorKeys = Object.keys(formState.errors);
      if (currentErrorKeys.length > 0) {
        showToastRef.current("Verifica los campos obligatorios", "error");
        prevErrors.current = currentErrorKeys;
      }
    }
  }, [formState.errors, formState.isSubmitted]);

  const handleFormSubmit = (data: FormData) => {
    try {
      onSubmit(data);
      setFormModal({
        isOpen: true,
        title: "Registro exitoso",
        message: "Los datos se enviaron correctamente.",
        type: "success",
      });
    } catch (error) {
      console.log(error);
      setFormModal({
        isOpen: true,
        title: "Error en el formulario",
        message: "Hubo un problema al enviar los datos.",
        type: "error",
      });
    }
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    errors: formState.errors,
    formModal,
    setFormModal,
  };
};
