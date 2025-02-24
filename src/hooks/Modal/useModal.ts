import { useEffect } from "react";
import { ModalProps } from "../../Interfaces/modalProps"; 

export const useModal = ({ isOpen, onClose, type }: ModalProps) => {
  useEffect(() => {
    if (isOpen && type !== "question" && type !== "error" && type !== "warning" && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [isOpen, onClose, type]);
};