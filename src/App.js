import { useContext, useEffect } from 'react';
import './App.css';
import { AppRouter } from './components/appRouter';
import { NavBar } from './components/nav';
import { AppContext } from '.';
import { check, getBasketId } from './http/userAPI';
import { jwtDecode } from 'jwt-decode';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { user } = useContext(AppContext)
  const { app } = useContext(AppContext)
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
