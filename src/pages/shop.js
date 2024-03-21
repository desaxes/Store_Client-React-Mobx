import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { TypeBar } from './../components/typeBar';
import { BrandBar } from './../components/brandBar';
import { DeviceList } from '../components/deviceList';

export const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <h2 className='mb-4'>Device Types</h2>
                    <TypeBar/>
                    <h2 className='mb-4 mt-4'>Device Brands</h2>
                    <BrandBar/>
                </Col>
                <Col className='mt-5' md={9}>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}