import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Store/Auth/authContext";
import { UseFormSetValue, FormState } from "react-hook-form";
import { LoginFormInputs } from "../../Interfaces/authenticationProps";
import { useToast } from "../Toast/useToast";

export const useAuth = (
  setValue?: UseFormSetValue<LoginFormInputs>,
  formState?: FormState<LoginFormInputs> ) => { 
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  const prevErrors = useRef(formState?.errors);
  const { login } = context; 
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const { showToast } = useToast();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(storedRememberMe);
      
      if (setValue) {
        setValue("email", storedEmail, { shouldValidate: true }); 
        setValue("rememberMe", storedRememberMe, { shouldValidate: true });
      }
    }
  }, [setValue]);

  useEffect(() => {
    if (
      (formState?.errors?.email && prevErrors.current?.email !== formState.errors.email) ||
      (formState?.errors?.password && prevErrors.current?.password !== formState.errors.password)
    ) {
      if (formState?.errors?.email && formState?.errors?.password) {
        showToast("Falta completar el email y la contraseña", "error");
      } else if (formState?.errors?.email) {
        showToast("No has ingresado el email", "error");
      } else if (formState?.errors?.password) {
        showToast("Falta ingresar la contraseña", "error");
      }
    }
    prevErrors.current = formState?.errors;
  }, [formState?.errors, showToast]); 


  const handleLogin = (email: string, password: string, rememberMe: boolean) => {
    if (!login) {
      return;
    }
    
    try {
      login(email, password); 
      showToast("Inicio de sesión exitoso", "success");

      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("rememberMe", "true"); 
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("rememberMe"); 
      }

    } catch (error) {
      console.error("Error en login:", error);
      showToast("Credenciales incorrectas", "error");
    }
  };

  return { ...context, handleLogin, rememberMe, setRememberMe, email };
};