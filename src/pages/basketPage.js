import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap/esm';
import { AppContext } from '..';
import { getBasketById, getDevicesFromBasket } from '../http/deviceAPI';
import { Device } from '../components/device';
import { StyledBox } from '../styledComponents/styled-components';
import { Button } from 'react-bootstrap/esm/';
export const BasketPage = () => {
    const { user } = useContext(AppContext)
    let [devices, setDevices] = useState()
    useEffect(() => {
        getBasketById(user.user.id).then(res => getDevicesFromBasket(res.data).then(res => {
            user.setBasketDevices(res.data)
            setDevices(user.basketDevices.map(e => <Device
                key={e.id}
                id={e.id}
                img={e.img}
                name={e.name}
                price={e.price}
                type={e.typeId}
                brand={e.brandId} />))
        }))
    }, [])
    return (
        <Container>
            <Row className='d-flex justify-content-center mt-4'>
                {devices}
            </Row>
            <Row className='mt-4 mb-4'>
                <Button>ORDER</Button>
            </Row>
        </Container>
    )
}