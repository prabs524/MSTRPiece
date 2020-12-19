import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/form";

const AddCard = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Your Own Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Genre</Form.Label>
            <Form.Control as="select">
              <option>Anime</option>
              <option>Cartoon</option>
              <option>Realism</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="imgURL" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCard;
