import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import Row from 'react-bootstrap/esm/Row'

import { Device } from './device';
import { StyledBox } from '../styledComponents/styled-components';
export const DeviceList = observer(() => {
    const { device } = useContext(AppContext)
    const devices = device.devices.map(e => <Device
        key={e.id}
        id={e.id}
        img={e.img}
        name={e.name}
        price={e.price}
        type={e.typeId}
        brand={e.brandId} />)
    const Devi = device.selectedType.name != 'All Types' ? devices.filter(e => e.props.type === device.selectedType.id) : devices
    const selectedBrands = device.selectedBrand.map(e => e.id)
    console.log(Devi.filter(e => selectedBrands.some(b => b === e.props.brand)))
    return (
        <StyledBox display='flex' dir='column' align='center'>
            <Row className='d-flex'
                display='grid' dir='column' width='100%'
                jstf='space-between' gap='30px'
            >
                {selectedBrands.length > 0 ? Devi.filter(e => selectedBrands.some(b => b === e.props.brand)) : Devi}
            </Row>
        </StyledBox>

    )
})