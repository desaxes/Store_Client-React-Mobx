import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap/esm/';
export const CreateType = ({ show, onHide }) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder='Enter type name'>

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={onHide}>Add Type</Button>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}