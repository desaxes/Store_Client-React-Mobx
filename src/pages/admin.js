import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { CreateBrand } from '../components/modals/createBrand'
import { CreateType } from '../components/modals/createType'
import { CreateDevice } from '../components/modals/createDevice'

export const Admin = () => {
    const [modalBrandShow, setModalBrandShow] = useState(false)
    const [modalTypeShow, setModalTypeShow] = useState(false)
    const [modalDeviceShow, setModalDeviceShow] = useState(false)
    return (
        <div>
            <Container className='d-flex mt-5 flex-column'>
                <Button onClick={() => setModalBrandShow(true)}
                    className='mt-3 p-4' variant='outline-danger'><h2>Add Brand</h2></Button>
                <Button onClick={() => setModalTypeShow(true)}
                    className='mt-3 p-4' variant='outline-danger'><h2>Add Type</h2></Button>
                <Button onClick={() => setModalDeviceShow(true)}
                    className='mt-3 p-4' variant='outline-danger'><h2>Add Device</h2></Button>
                {modalBrandShow && <CreateBrand show={true} onHide={() => setModalBrandShow(false)} />}
                {modalTypeShow && <CreateType show={true} onHide={() => setModalTypeShow(false)} />}
                {modalDeviceShow && <CreateDevice show={true} onHide={() => setModalDeviceShow(false)} />}
            </Container>
        </div>
    )
}