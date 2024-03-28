import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap/esm/';
import { AppContext } from '../..';
import { observer } from 'mobx-react-lite';
import { createDevice, getBrands, getDevices, getTypes } from '../../http/deviceAPI';
export const CreateDevice = observer((props) => {
    let { device } = useContext(AppContext)
    let [info, setInfo] = useState([])
    let [name, setName] = useState('')
    let [file, setFile] = useState(null)
    let [brand, setBrand] = useState('')
    let [brandId, setBrandId] = useState('')
    let [type, setType] = useState('')
    let [typeId, setTypeId] = useState('')
    let [price, setPrice] = useState('')
    useEffect(() => {
        getBrands().then(res=>device.setBrands(res.data))
    }, [device])
    useEffect(() => {
        getTypes().then(res=>device.setTypes(res.data))
    }, [device])
    const select = e => {
        setFile(e.target.files[0])
    }
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(e => e.number === number ? { ...e, [key]: value } : e))
    }
    const removeInfo = (number) => {
        setInfo(info.filter(e => e.number != number))
    }
    const addDevice = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('brandId', brandId)
        formData.append('typeId', typeId)
        formData.append('info', JSON.stringify(info))
        formData.append('img', file)
        createDevice(formData).then(res => props.onHide())
    }
    console.log(JSON.parse(JSON.stringify(info)))

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
                            {type === '' ? 'Choose Type' : type}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(e => <Dropdown.Item onClick={() => { setType(e.name); setTypeId(e.id) }} key={e.id}>{e.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle variant='outline-success'>
                            {brand === '' ? 'Choose Brand' : brand}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(e => <Dropdown.Item onClick={() => { setBrand(e.name); setBrandId(e.id) }} key={e.id}>{e.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control value={name} onChange={e => { setName(e.target.value) }} className='mt-2 mb-2' placeholder='Enter name' />
                    <Form.Control value={price} onChange={e => { setPrice(Number(e.target.value)) }} className='mt-2 mb-2' placeholder='Enter price' type='number' />
                    <Form.Control onChange={select} className='mt-2 mb-2' type='file' />
                    <hr />
                    <Button variant='outline-success' onClick={addInfo}>Add Specification</Button>
                    {info.map(i => <Row className='p-2' key={i.number}>
                        <Col md={4}>
                            <Form.Control value={i.title} onChange={e => changeInfo('title', e.target.value, i.number)} placeholder='name' />
                        </Col>
                        <Col md={4}>
                            <Form.Control value={i.description} onChange={e => changeInfo('description', e.target.value, i.number)} placeholder='description' />
                        </Col>
                        <Col md={4}>
                            <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>X</Button>
                        </Col>
                    </Row>)}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={addDevice}>Add Device</Button>
                <Button variant='outline-danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
})