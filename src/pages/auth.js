import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from '../components/link';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { useLocation } from 'react-router-dom';
export const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location.pathname)
    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 100 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column '>
                    <Form.Control className='mt-3' placeholder='Email'>
                    </Form.Control>
                    <Form.Control className='mt-3' placeholder='Password'>
                    </Form.Control>
                    <Button className='mt-3 ' variant='outline-success'>{isLogin ? 'LogIn' : 'Create Account'}</Button>
                    {isLogin && <Link to={REGISTRATION_ROUTE} fz='18px' color='green' hover='red' className='mt-3 '>Registration</Link>}
                </Form>
            </Card>
        </Container>
    )
}