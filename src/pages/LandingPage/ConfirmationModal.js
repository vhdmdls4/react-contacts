import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ConfirmationModal({ isOpen, toggle, onDelete }) {
  return (
    <Modal centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
      <ModalBody>Are you sure you want to delete this contact?</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmationModal;
