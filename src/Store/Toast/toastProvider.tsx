import { useState, ReactNode } from "react";
import { ToastContext, ToastContextType } from "./toastContext";
import Toast from "../../components/ui/toast/toastProps";

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "warning" | "info" } | null>(null);

  const showToast: ToastContextType["showToast"] = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 1800); 
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};