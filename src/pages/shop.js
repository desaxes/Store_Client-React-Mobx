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
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const Shop = observer(() => {
    const limit = 6
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const [page, setPage] = useState(search.get('page') === null ? 1 : search.get('page'))
    const { device } = useContext(AppContext)
    let [pageCount, setPageCount] = useState(0)
    let [switchMethod, setSwitchMethod] = useState(false)
    useEffect(() => {
        getTypes().then(res => device.setTypes(res.data))
    }, [device])
    useEffect(() => {
        getBrands().then(res => device.setBrands(res.data))
    }, [device])
    useEffect(() => {
        if (switchMethod === false) {
            setPage(1)
        }
        setSearch({ page: page })
        let brandId = device.selectedBrand.map(e => e.id).join()
        let typeId = device.selectedType.id === 999 ? '' : device.selectedType.id
        getDevices(page, limit, brandId, typeId).then(res => {
            device.setDevices(res.data.devices)
            setPageCount(Math.ceil(res.data.total / limit))
        })
        setSwitchMethod(false)
    }, [page, device.selectedBrand.length, device.selectedType])
    const changePage = (e) => {
        if (e === 'next') {
            if (+page < pageCount) {
                setSwitchMethod(true)
                setPage(parseInt(page) + 1)
            }
        }
        else if (e === 'prev') {
            if (page > 1) {
                setSwitchMethod(true)
                setPage(parseInt(page) - 1)
            }
        }
    }
    const navPage = (e) => {
        setSwitchMethod(true)
        setPage(+e.target.innerText)
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
                    {device.devices.length > 0 ? <Pagination className='mt-4'>
                        <Pagination.Prev onClick={() => changePage("prev")} />
                        {+page > 1 && <Pagination.Item onClick={e => navPage(e)}>{1}</Pagination.Item>}
                        {+page > 2 && <Pagination.Ellipsis></Pagination.Ellipsis>}
                        <Pagination.Item active>{+page}</Pagination.Item>
                        {+page < pageCount && <Pagination.Item onClick={e => navPage(e)}>{+page + 1}</Pagination.Item>}
                        {+page + 2 < pageCount && <Pagination.Ellipsis></Pagination.Ellipsis>}
                        {+page + 1 < pageCount && <Pagination.Item onClick={e => navPage(e)}>{pageCount}</Pagination.Item>}
                        <Pagination.Next onClick={() => changePage("next")} />
                    </Pagination> : <h2>Devices not found</h2>}
                </Col>
            </Row>
        </Container>
    )
})