import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap/esm/';
import { AppContext } from '../..';
export const CreateDevice = (props) => {
    const { device } = useContext(AppContext)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(e => e.number != number))
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
                    Create new Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle variant='outline-success'>
                            Choose Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(e => <Dropdown.Item key={e.id}>{e.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle variant='outline-success'>
                            Choose Brand
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(e => <Dropdown.Item key={e.id}>{e.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-2 mb-2' placeholder='Enter name' />
                    <Form.Control className='mt-2 mb-2' placeholder='Enter price' type='number' />
                    <Form.Control className='mt-2 mb-2' type='file' />
                    <hr />
                    <Button variant='outline-success' onClick={addInfo}>Add Specification</Button>
                    {info.map(e => <Row className='p-2' key={e.number}>
                        <Col md={4}>
                            <Form.Control placeholder='name' />
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder='description' />
                        </Col>
                        <Col md={4}>
                            <Button variant='outline-danger' onClick={() => removeInfo(e.number)}>X</Button>
                        </Col>
                    </Row>)}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={props.onHide}>Add Device</Button>
                <Button variant='outline-danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}