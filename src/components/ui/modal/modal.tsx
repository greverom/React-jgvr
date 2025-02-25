import React from "react";
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter} from "../../../styles/Modal/modalComponent";
import Button from "../buttons/button"; 
import { ModalProps } from "../../../Interfaces/modalProps";
import { useModal } from "../../../hooks/Modal/useModal";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type, onConfirm, onCancel }) => {
  
  const hasTimeout = type !== "question" && type !== "error" && type !== "warning"; 
  useModal({ isOpen, onClose, type });
  useModal({ isOpen, onClose, type });
  
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent $type={type} $hasTimeout={hasTimeout}>
        <ModalHeader $type={type}>
          <h2>{title}</h2>
        </ModalHeader>

        <ModalBody>
          <p>{message}</p>
        </ModalBody>

        <ModalFooter>
          {type === "question" ? (
            <>
              <Button variant="primary" onClick={onConfirm}>Aceptar</Button>
              <Button variant="tertiary" onClick={onCancel || onClose}>Cancelar</Button>
            </>
          ) : (
            <Button variant={ type === "success" ? "success" : type === "error" ? "error" : 
                              type === "warning" ? "warning" :type === "info" ? "info" : "tertiary" 
                            } onClick={onClose}> Cerrar </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;