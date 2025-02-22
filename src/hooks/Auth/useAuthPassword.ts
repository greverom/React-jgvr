import { useState } from "react";

export const useAuthPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return { showPassword, togglePasswordVisibility };
};