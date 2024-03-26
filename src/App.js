import { useContext, useEffect, useState } from 'react';
import './App.css';
import { AppRouter } from './components/appRouter';
import { NavBar } from './components/nav';
import { Link, StyledLink } from './styledComponents/styled-components';
import { SHOP_ROUTE } from './utils/constants';
import { AppContext } from '.';
import { check } from './http/userAPI';

function App() {
  const { user } = useContext(AppContext)
  const [appInit, setAppInit] = useState(false)
  const checkAuth = async () => {
    try {
      await check()
      user.setIsAuth(true)
      setAppInit(true)
    } catch (e) {
      setAppInit(true)
    }
  }
  useEffect(() => {
  }, [appInit])
  checkAuth()
  console.log(localStorage)
  console.log(user.isAuth)
  if (appInit) {
    return (
      <div>
        <NavBar />
        <AppRouter />
      </div>
    )
  };
}

export default App;
