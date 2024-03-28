import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap/esm/';
import { createBrand } from '../../http/deviceAPI';
export const CreateBrand = (props) => {
    const [brand, setBrand] = useState('')
    const add = () => {
        createBrand(brand).then(res=>{
            setBrand('')
            props.onHide()
        })
    }
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
                    <Form.Control placeholder='Enter brand name' onChange={e => setBrand(e.currentTarget.value)} value={brand}>

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={() => { add() }}>Add Brand</Button>
                <Button variant='outline-danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}