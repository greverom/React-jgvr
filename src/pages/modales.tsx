import { useState } from "react";
import Button from "../components/ui/buttons/button";
import NotificationModal from "../components/ui/modal/modal";
import ConfirmationModal from "../components/ui/modal/modal";

const Modals = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Modales</h1>
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        <Button variant="success" onClick={() => setShowSuccessModal(true)} style={{ width: "200px" }}>Modal Éxito</Button>
        <Button variant="tertiary" onClick={() => setShowErrorModal(true)} style={{ width: "200px" }}>Modal Error</Button>
        <Button variant="warning" onClick={() => setShowWarningModal(true)} style={{ width: "200px" }}>Modal Advertencia</Button>
        <Button variant="info" onClick={() => setShowConfirmationModal(true)} style={{ width: "200px" }}>Modal Pregunta</Button>
    </div>

      <NotificationModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        type="success"
        title="Éxito"
        message="Operación exitosa"
      />

      <NotificationModal 
        isOpen={showErrorModal} 
        onClose={() => setShowErrorModal(false)} 
        type="error"
        title="Error"
        message="Ha ocurrido un error"
      />

      <NotificationModal 
        isOpen={showWarningModal} 
        onClose={() => setShowWarningModal(false)} 
        type="warning"
        title = "Advertencia"
        message="Algo salió mal"
      />

      <ConfirmationModal 
        isOpen={showConfirmationModal} 
        onClose={() => setShowConfirmationModal(false)} 
        onConfirm={() => alert("Acción confirmada")}
        onCancel={() => setShowConfirmationModal(false)}
        type="question"
        title="¿Estás seguro de continuar?"
      />
    </div>
  );
};

export default Modals;