import React, { useContext } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import { AppContext } from '..';
import { StyledBox } from '../styledComponents/styled-components';
import Button from 'react-bootstrap/esm/Button';
export const DevicePage = () => {
    const { id } = useParams()
    const { device } = useContext(AppContext)
    let currentDevice = device.devices.find(e => e.id === parseInt(id))
    console.log(currentDevice)
    return (
        <Container className='mt-4'>
            <Row><h1>{currentDevice.name}</h1></Row>
            <Row className='mt-4 mb-4'>
                <Col md={4} className='d-flex justify-content-center'>
                    <img style={{ maxWidth: '400px', height: '400px' }}
                        src={currentDevice.img} />
                </Col>
                <Col md={2}>
                </Col>
                <Col md={6}>
                    <h2>Specifications</h2>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <p>-------------------------------------------------------</p>
                    <StyledBox display='flex' align='center' jstf='space-between'>
                        <h3 style={{ fontWeight: 'bold' }}>{currentDevice.price}$</h3>
                        <Button variant='success'><h3>Add to basket</h3></Button>
                    </StyledBox>
                </Col>
            </Row>
        </Container>
    )
}