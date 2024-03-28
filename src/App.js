import { useContext, useEffect, useState } from 'react';
import './App.css';
import { AppRouter } from './components/appRouter';
import { NavBar } from './components/nav';
import { Link, StyledLink } from './styledComponents/styled-components';
import { SHOP_ROUTE } from './utils/constants';
import { AppContext } from '.';
import { check } from './http/userAPI';
import { jwtDecode } from 'jwt-decode';
import { observer } from 'mobx-react-lite';
import { getBrands, getDevices, getTypes } from './http/deviceAPI';

const App = observer(() => {
  const { user } = useContext(AppContext)
  const { app } = useContext(AppContext)
  const { device } = useContext(AppContext)
  const checkAuth = async () => {
    try {
      const { token } = await check()
      localStorage.setItem('token', token)
      user.setIsAuth(true)
      user.setUser(jwtDecode(token))
      app.setInit(true)
    } catch (e) {
      app.setInit(true)
    }
  }
  // useEffect(() => {
  //     getTypes().then(res=>device.setTypes(res.data))
  // }, [device])
  // useEffect(() => {
  //     getBrands().then(res=>device.setBrands(res.data))
  // }, [device])
  // useEffect(() => {
  //     getDevices().then(res=>device.setDevices(res.data))
  // }, [device])
  useEffect(() => {
    checkAuth()
  }, [])
  if (app.init) {
    return (
      <div>
        <NavBar />
        <AppRouter />
      </div>
    )
  };
})

export default App;
