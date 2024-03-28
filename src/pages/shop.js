import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { TypeBar } from './../components/typeBar';
import { BrandBar } from './../components/brandBar';
import { DeviceList } from '../components/deviceList';
import { observer } from 'mobx-react-lite';
import { AppContext } from '..';
import { getBrands, getDevices, getTypes } from '../http/deviceAPI';
import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export const Shop = observer(() => {
    const [search, setSearch] = useSearchParams()
    const [page, setPage] = useState(search.get('page') === null ? 1 : search.get('page'))
    const { device } = useContext(AppContext)
    let pageCount = 0
    useEffect(() => { setSearch({ page: page }) }, [page])
    useEffect(() => {
        getTypes().then(res => device.setTypes(res.data))
    }, [device])
    useEffect(() => {
        getBrands().then(res => device.setBrands(res.data))
    }, [device])
    useEffect(() => {
        getDevices(page).then(res => {
            device.setDevices(res.data.devices)
            pageCount = Math.ceil(res.data.total / device.devices.length)
            console.log(pageCount)
        })
    }, [device, page])
    const changePage = (e) => {
        if (e === 'next') {
            setPage(parseInt(page) + 1)
        }
        else {
            setPage(parseInt(page) - 1)
        }
    }
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <h2 className='mb-4'>Device Types</h2>
                    <TypeBar />
                    <h2 className='mb-4 mt-4'>Device Brands</h2>
                    <BrandBar />
                </Col>
                <Col className='mt-5 d-flex flex-column align-items-center' md={9}>
                    <DeviceList />
                    <Pagination className='mt-4'>
                        <Pagination.Prev onClick={() => changePage("prev")} />
                        <Pagination.Next onClick={() => changePage("next")} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
})