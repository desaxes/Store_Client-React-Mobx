import { observer } from 'mobx-react-lite'
import { AppContext } from './../index';
import { StyledBox } from '../styledComponents/styled-components';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useContext } from 'react';
export const Device = observer((props) => {
    const { device } = useContext(AppContext)
    return (
        <Col md={4} className='mt-4'  >
            <StyledBox cursor='pointer' 
            padding='30px' display='flex' 
            shadow='0 5px 10px green' br='8px' 
            jstf='space-between' hover='0 5px 15px blue'>
                <img style={{ width: '100px', height:'100px'}} src={props.img}></img>
                <StyledBox display='flex' dir='column' align='end'>
                    <h5>{props.name}</h5>
                    <h3 style={{fontWeight:'bold'}}>{props.price}$</h3>
                </StyledBox>
                <StyledBox display='flex' align='center'>

                </StyledBox>
            </StyledBox>
        </Col>
    )
})