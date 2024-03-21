import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import { StyledBox } from '../styledComponents/styled-components';
import Row from 'react-bootstrap/esm/Row'
import { Device } from './device';
export const DeviceList = observer(() => {
    const { device } = useContext(AppContext)
    return (
        <Row className='d-flex'
        display='grid' dir='column' width='100%' 
        jstf='space-between' gap='30px'
        >
            {device.devices.map(e=><Device img={e.img} name={e.name} price={e.price}/>)}
        </Row>
    )
})