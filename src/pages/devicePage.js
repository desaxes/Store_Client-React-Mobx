import React, { useContext, useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import { AppContext } from '..';
import { StyledBox } from '../styledComponents/styled-components';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';
import { addDeviceToBasket, getDeviceById } from '../http/deviceAPI';
export const DevicePage = observer(() => {
    const { id } = useParams()
    const { user } = useContext(AppContext)
    const [device, setDevice] = useState({
        info: []
    })
    const toBasket = () => {
        addDeviceToBasket(user.user.id, device.id)
    }
    useEffect(() => { getDeviceById(id).then(res => setDevice(res.data)) }, [])
    let specs = device.info.map(e => <p>{e.title}:{e.description}</p>)
    return (
        <Container className='mt-4'>
            <Row><h1>{device.name}</h1></Row>
            <Row className='mt-4 mb-4'>
                <Col md={4} className='d-flex justify-content-center'>
                    <img style={{ maxWidth: '400px', height: '400px' }}
                        src={process.env.REACT_APP_API_URL + '/' + device.img}
                    />
                </Col>
                <Col md={2}>
                </Col>
                <Col md={6}>
                    <h2>Specifications</h2>
                    {specs}
                    <StyledBox display='flex' align='center' jstf='space-between'>
                        <h3 style={{ fontWeight: 'bold' }}>{device.price}$</h3>
                        <Button onClick={() => toBasket()} variant='success'><h3>Add to basket</h3></Button>
                    </StyledBox>
                </Col>
            </Row>
        </Container>
    )
})