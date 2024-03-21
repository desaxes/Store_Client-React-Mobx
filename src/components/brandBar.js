import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import ListGroup from 'react-bootstrap/ListGroup';
export const BrandBar = observer(() => {
    const { device } = useContext(AppContext)
    return (
        <ListGroup >
            {device.brands.map(e => <ListGroup.Item
                className='p-2'
                style={{
                    cursor: 'pointer', fontSize: 20,
                    backgroundColor: device.selectedBrand.some(b => b.id === e.id) ? '#495057' : 'white',
                    color:device.selectedBrand.some(b => b.id === e.id) ? 'white' : 'black',
                    transition: '0.s'
                }}
                onClick={() => device.setSelectedBrand(e)}
                key={e.id}>
                {e.name}
            </ListGroup.Item >)
            }
        </ListGroup >
    )
})
