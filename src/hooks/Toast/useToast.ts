import { useContext } from "react";
import { ToastContext } from "../../Store/Toast/toastContext"; 

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};