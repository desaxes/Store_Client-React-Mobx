import './App.css';
import { AppRouter } from './components/appRouter';
import { NavBar } from './components/nav';
import { Link, StyledLink } from './styledComponents/styled-components';
import { SHOP_ROUTE } from './utils/constants';

function App() {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
