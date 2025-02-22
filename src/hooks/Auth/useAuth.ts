import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export const useAuth = () => {
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

    if (storedEmail && storedRememberMe) {
      setEmail(storedEmail);
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  }, []);

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