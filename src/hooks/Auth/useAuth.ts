import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { UseFormSetValue } from "react-hook-form";
import { LoginFormInputs } from "../../Interfaces/authentication";

export const useAuth = (setValue?: UseFormSetValue<LoginFormInputs>) => { 
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }

  const { login } = context; 
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

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

  const handleLogin = (email: string, password: string, rememberMe: boolean) => {
    if (!login) {
      return;
    }
    
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("rememberMe", "true"); 
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("rememberMe"); 
    }
  
    login(email, password);
  };

  return { ...context, handleLogin, rememberMe, setRememberMe, email };
};