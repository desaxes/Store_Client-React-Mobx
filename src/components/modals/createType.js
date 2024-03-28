import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap/esm/';
import { createType } from '../../http/deviceAPI';
export const CreateType = ({ show, onHide }) => {
    const [type, setType] = useState('')
    const add = () => {
        createType(type).then(res => {
            setType('')
            onHide()
        })
    }
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
                    <Form.Control onChange={e => setType(e.currentTarget.value)} value={type} placeholder='Enter type name'>

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={() => { add() }}>Add Type</Button>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}