
export interface ModalProps {
    isOpen: boolean; 
    title?: string; 
    message?: string; 
    type: "success" | "error" | "warning" | "question"; 
    variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "cancel";
    onClose?: () => void; 
    onConfirm?: () => void; 
    onCancel?: () => void; 
  }