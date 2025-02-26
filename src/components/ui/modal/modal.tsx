import React from "react";
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter} from "../../../styles/Modal/modalComponent";
import Button from "../buttons/button"; 
import { ModalProps } from "../../../Interfaces/modalProps";
import { useModal } from "../../../hooks/Modal/useModal";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type, onConfirm, onCancel }) => {

  const icon = type === "success" ? <FaCheckCircle color="#28a745" size={22} />
             : type === "error" ? <FaTimesCircle color="#dc3545" size={22} />
             : type === "warning" ? <FaExclamationTriangle color="#f4a836" size={22} />
  : null;
  
  const hasTimeout = type !== "question" && type !== "error"; 
  useModal({ isOpen, onClose, type });
  useModal({ isOpen, onClose, type });
  
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent $type={type} $hasTimeout={hasTimeout}>
        <ModalHeader $type={type}>
          {icon}
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
          ) : type !== "success" && type !== "warning" ? ( 
            <Button variant={ type === "error" ? "error" : "tertiary" 
            } onClick={onClose}> Cerrar </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;