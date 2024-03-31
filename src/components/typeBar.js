import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import Dropdown from 'react-bootstrap/Dropdown';
import { getTypes } from '../http/deviceAPI';

export const TypeBar = observer(() => {
    const { device } = useContext(AppContext)
    return (
        <Dropdown>
            <Dropdown.Toggle style={{ fontSize: 20 }} variant="success" id="dropdown-basic">
                {device.selectedType.name}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item onClick={() => device.setSelectedType({ name: 'All Types', id: 999 })} style={{ cursor: 'pointer', fontSize: 20 }}>All Types</Dropdown.Item>
                {device.types.map(e => <Dropdown.Item
                    style={{ cursor: 'pointer', fontSize: 20 }}
                    variant='success'
                    active={e.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(e)}
                    key={e.id}>
                    {e.name}
                </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
})
