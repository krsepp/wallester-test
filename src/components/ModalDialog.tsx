import React from 'react';
import {Modal, Button} from 'react-bootstrap';

interface IModalDialogProps {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}

const ModalDialog: React.FC<IModalDialogProps> = ({ children, showModal, setShowModal }) => {
   return (
       <Modal show={showModal} onHide={() => setShowModal(false)}>
           <Modal.Header closeButton/>
           <Modal.Body>{children}</Modal.Body>
           <Modal.Footer>
               <Button variant='primary' onClick={() => setShowModal(false)}>
                   Ok
               </Button>
           </Modal.Footer>
       </Modal>
   );
} ;

export default ModalDialog;