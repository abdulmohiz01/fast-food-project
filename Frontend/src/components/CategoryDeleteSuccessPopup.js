import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./categoryDeleteSuccessPopup.css"; // Import your CSS styles for the delete success popup

function CategoryDeleteSuccessPopup({ categoryName, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000); // Close the modal after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="deleteSuccess-modal-style"
      contentClassName="deleteSuccess-modal-content"
    >
      <Modal.Body>
        <p>
          Category: <strong>{categoryName}</strong> deleted successfully.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryDeleteSuccessPopup;
