import Button from "../components/ui/buttons/button";
import NotificationModal from "../components/ui/modal/modal";
import ConfirmationModal from "../components/ui/modal/modal";
import { ButtonContainer, ModalPageContainer, ModalTitle } from "../styles/Modal/modalPage";
import { useModalActions } from "../hooks/Modal/useModalActions"; 

const Modals = () => {
  const { showSuccessModal, setShowSuccessModal, showErrorModal, setShowErrorModal, showWarningModal,
          setShowWarningModal, showConfirmationModal, setShowConfirmationModal, handleButtonClick,
        } = useModalActions(); 

  return (
    <ModalPageContainer onClick={handleButtonClick}> 
      <ModalTitle>Modales & Toasts</ModalTitle>
      
      <ButtonContainer> 
        <Button className="modal-success" variant="success">Modal Éxito</Button>
        <Button className="modal-error" variant="tertiary">Modal Error</Button>
        <Button className="modal-warning" variant="warning">Modal Advertencia</Button>
        <Button className="modal-question" variant="info">Modal Pregunta</Button>
      </ButtonContainer>
      
      <ButtonContainer> 
        <Button className="toast-success" variant="success">Toast Éxito</Button>
        <Button className="toast-error" variant="tertiary">Toast Error</Button>
        <Button className="toast-warning" variant="warning">Toast Advertencia</Button>
        <Button className="toast-info" variant="info">Toast Información</Button>
      </ButtonContainer>

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
        title="Advertencia"
        message="Algo salió mal"
      />

      <ConfirmationModal 
        isOpen={showConfirmationModal} 
        onClose={() => setShowConfirmationModal(false)} 
        onConfirm={() => { alert("Acción confirmada"); setShowConfirmationModal(false); }}
        onCancel={() => setShowConfirmationModal(false)}
        type="question"
        title="¿Estás seguro de continuar?"
      />
    </ModalPageContainer>
  );
};

export default Modals;