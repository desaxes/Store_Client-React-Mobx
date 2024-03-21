import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import Dropdown from 'react-bootstrap/Dropdown';

export const TypeBar = observer(() => {
    const { device } = useContext(AppContext)
    return (
        <Dropdown>
            <Dropdown.Toggle style={{fontSize:20}} variant="success" id="dropdown-basic">
                {device.selectedType.name}
            </Dropdown.Toggle>
            <Dropdown.Menu >
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
