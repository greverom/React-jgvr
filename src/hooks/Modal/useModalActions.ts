import { useState } from "react";
import { useToast } from "../Toast/useToast";

export const useModalActions = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const { showToast } = useToast();

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.matches(".modal-success")) {
      setShowSuccessModal(true);

    } else if (target.matches(".modal-error")) {
      setShowErrorModal(true);

    } else if (target.matches(".modal-warning")) {
      setShowWarningModal(true);

    } else if (target.matches(".modal-question")) {
      setShowConfirmationModal(true);

    } else if (target.matches(".toast-success")) {
      showToast("Operación exitosa", "success");

    } else if (target.matches(".toast-error")) {
      showToast("Ha ocurrido un error", "error");

    } else if (target.matches(".toast-warning")) {
      showToast("Cuidado con esta acción", "warning");
      
    } else if (target.matches(".toast-info")) {
      showToast("Este es un mensaje informativo", "info");
    }
  };

  return {
    showSuccessModal,
    setShowSuccessModal,
    showErrorModal,
    setShowErrorModal,
    showWarningModal,
    setShowWarningModal,
    showConfirmationModal,
    setShowConfirmationModal,
    handleButtonClick,
  };
};