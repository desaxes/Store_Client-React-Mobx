import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '..'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from './link';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { StyledBox } from '../styledComponents/styled-components';
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
export const NavBar = observer(() => {
    const { user } = useContext(AppContext)
    const { device } = useContext(AppContext)
    const exit = () => {
        localStorage.setItem('token', '')
        user.setIsAuth(false)
        user.setUser({})
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Link fz='22px' to={SHOP_ROUTE}>TechnoStore</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <StyledBox jstf='space-around' display='flex' align='center' padding='20px' gap='30px'>
                            <Link to={SHOP_ROUTE} border='2px green solid' fz='18px' href="#action1">Home</Link>
                            <Link to={BASKET_ROUTE} border='2px green solid' fz='18px' href="#action2">Basket</Link>
                        </StyledBox>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={device.searchBy}
                            onChange={e => device.setSearchBy(e.target.value)}
                        />
                    </Form>
                    <StyledBox padding='20px' margin='0 20px 0 auto'>
                        {user.isAuth ?
                            <StyledBox
                                jstf='center'
                                display='flex'
                                gap='30px'>
                                {user.isAuth && <Row className='align-self-center' style={{ color: 'white', fontWeight: 'bold', fontSize: '22px' }}>{user.user.email.split('@')[0]}</Row>}
                                {user.user.role === 'ADMIN' && <Link to={ADMIN_ROUTE} border='2px green solid' fz='18px'>Admin</Link>}
                                <Button onClick={() => exit()} variant='outline-danger'>Exit</Button>
                            </StyledBox>
                            :
                            <StyledBox jstf='center' display='flex'>
                                <Link to={LOGIN_ROUTE} border='2px green solid' fz='18px'>Authorization</Link>
                            </StyledBox>
                        }
                    </StyledBox>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})
