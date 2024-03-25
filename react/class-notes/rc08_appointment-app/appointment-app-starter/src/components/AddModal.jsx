
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal({show, handleClose }) {
 

  return (
    <>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input exam ple"
        disabled b
        readOnly
      />
      <br />
      <Form.Control
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        readOnly
      />
        <Modal.Footer>
          <Button variant="success" type='submit' className='me-2' onClick={handleClose}>
          Save
          </Button>
          <Button variant="danger" type='button' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;