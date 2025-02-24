import React from "react";
import { ModalOverlay, ModalContent, ModalHeader, ModalBody,
         ModalFooter, 
         } from "../../../styles/styled/modals";
import Button from "../buttons/button"; 
import { ModalProps } from "../../../Interfaces/modalProps";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { useModal } from "../../../hooks/Modal/useModal";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type, onConfirm, onCancel }) => {
  
  const hasTimeout = type !== "question" && type !== "error" && type !== "warning"; 
  useModal({ isOpen, onClose, type });
  useModal({ isOpen, onClose, type });
  
  if (!isOpen) return null;

  const iconMap = {
    success: <FaCheckCircle color="#28a745" size={25} />,  
    error: <FaTimesCircle color="#dc3545" size={25} />,    
    warning: <FaExclamationTriangle color="#f4a836" size={25} />,  
    info: <FaInfoCircle color="#17a2b8" size={25} />,      
  };

  return (
    <ModalOverlay>
      <ModalContent $type={type} $hasTimeout={hasTimeout}>
        <ModalHeader $type={type}>
          {type !== "question" && <span>{iconMap[type]}</span>}
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