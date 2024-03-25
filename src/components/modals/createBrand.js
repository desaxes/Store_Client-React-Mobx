import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap/esm/';
export const CreateBrand = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder='Enter brand name'>

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={props.onHide}>Add Brand</Button>
                <Button variant='outline-danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}