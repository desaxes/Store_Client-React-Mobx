import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from '../components/link';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
export const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const click = async () => {
        if (isLogin) {
            try {
                const res = await login(email, password)
                localStorage.setItem('token', res.data.token)
                navigate('/shop')
            }
            catch (e) {
                setError(e.message)
            }
        }
        else {
            try {
                const res = await registration(email, password)
                localStorage.setItem('token', res.data.token)
                navigate('/shop')
            }
            catch (e) {
                setError(e.message)
            }
        }
    }
    console.log(localStorage)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 100 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column '>
                    <Form.Control style={{ border: error != '' && '1px red solid' }} value={email} onChange={e => {
                        setEmail(e.target.value)
                        setError('')
                    }} className='mt-3' placeholder='Email'>
                    </Form.Control>
                    <Form.Control style={{ border: error != '' && '1px red solid' }} type='password' value={password} onChange={e => {
                        setPassword(e.target.value)
                        setError('')
                    }} className='mt-3' placeholder='Password'>
                    </Form.Control>
                    <Button onClick={() => click()} className='mt-3 ' variant='outline-success'>{isLogin ? 'LogIn' : 'Create Account'}</Button>
                    {isLogin && <Link to={REGISTRATION_ROUTE} fz='18px' color='green' hover='red' className='mt-3 '>Registration</Link>}
                    {error != '' && <h5 style={{ color: 'red' }} className='m-auto mt-2'>{isLogin ? 'Incorrect email or password' : 'User already exits'}</h5>}
                </Form>
            </Card>
        </Container >
    )
}